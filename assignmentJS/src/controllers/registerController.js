import { registerService } from "../services/register.js"

export const registerController = async(req, res) => {
    try{
        const newUser = await registerService(req.body); 
        return res.status(200).json({message: 'user registered', user : newUser}); 
    }
    catch(error){
        return res.status(400).json({message: 'registeration unsuccessful'});
    }
}; 