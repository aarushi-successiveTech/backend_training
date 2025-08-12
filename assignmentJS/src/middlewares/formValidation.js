import { formSchema } from "../schema/formSchema.js"

export const formValidation = (req, res, next) => {
    const {error, value} = formSchema.validate(req.body); 
    if(error){
        return res.status(400).json({message: 'invalid data'});
    }

    req.body = value; 
    next(); 
}