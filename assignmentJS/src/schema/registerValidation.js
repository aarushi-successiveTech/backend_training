import joi from 'joi'; 

export const registerValidation = joi.object({
    name : joi.string().required(),
    email : joi.string().required(),
    password : joi.string().required(),
    role : joi.string().required()
}); 