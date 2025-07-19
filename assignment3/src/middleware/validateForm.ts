import {Request, Response, NextFunction} from 'express';
const joi = require('joi');

const formSchema = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
});

export const ValidateForm = (req: Request, res: Response, next: NextFunction) => {
    const {error} = formSchema.validate(req.body); 

    if(error){
        return res.status(400).json({
            message : 'user data invalid'
        });
    };

    next(); 
}