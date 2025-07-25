const joi = require('joi');
import {Request, Response, NextFunction} from "express"; 
import { ObjectSchema } from "joi";
import { IUserForm } from "../interfaces/IuserForm";

export class SchemaValidation {
  private userSchema: ObjectSchema<IUserForm> = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  ValidateSchema = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.userSchema.validate(
      req.body
    ); /* the data will appear here as object after validation */

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    next();
  };
}
