import joi from 'joi'; 

export const formSchema = joi.object({
    name : joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
}); 