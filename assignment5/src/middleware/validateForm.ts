import {Request, Response, NextFunction} from 'express';
import { IUserForm } from '../interfaces/IuserForm';
const joi = require("joi");
import { ObjectSchema } from "joi";

export class FormValidator {
  private formSchema: ObjectSchema<IUserForm> = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  public ValidateForm = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.formSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: "user data invalid",
      });
    }

    next();
  };
}