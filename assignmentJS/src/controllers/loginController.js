import { loginService } from "../services/loginService.js"

export const loginController = async(req, res) => {

    try{
        const token = await loginService(req.body);
        console.log(token); 
        return res.status(200).json({message: 'user logged in successfully', token});
    }
    catch(error){
        return res.status(400).json({message: 'unsuccessful login'});
    }
}; 