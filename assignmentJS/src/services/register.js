import Registers from "../model/registerModel.js";
import bcrypt from 'bcrypt'; 

export const registerService = async(data) => {
    try{
        const existing = await Registers.findOne({email: data.email}); 
        if(existing){
            return ; 
        }
        const hashPassword = await bcrypt.hash(data.password, 10); 
        const newUser = new Registers({
            name : data.name, 
            email : data.email, 
            password : hashPassword, 
            role : data.role
        }); 

        const registered = await newUser.save(); 
        return registered; 
    }
    catch(error){
        console.log('error registering user');
    }
}; 