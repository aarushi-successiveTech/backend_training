import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcrypt'; 
import Registers from '../model/registerModel.js';
import dotenv from 'dotenv'; 
dotenv.config(); 

const secret = process.env.JWT_KEY ;

export const loginService = async(data) => {
    const existing = await Registers.findOne({email : data.email});
    if(!existing){
        return {error: 'user not found'}; 
    }
    const confirmPassword = await bcrypt.compare(data.password, existing.password); 
    if(!confirmPassword){
        return {error: 'invalid password'}; 
    }

    const token = jwt.sign({name: data.name, role: data.role}, secret); 
    return token; 
}