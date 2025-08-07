const schema = require('../utils/createSchema');
import User from "../models/createModel";
import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.JWT_SECRET as string; 
const loginUser = Router(); 

loginUser.post('/login', async(req, res) => {

    const {error, value} = schema.validate(req.body);

    if(error){
        return res.status(400).json({message: 'invalid data'});
    }

    try{
        const existing = await User.findOne({email: value.email});
        if(existing){
            const passwordMatch = await bcrypt.compare(value.password, existing.password);

            if(!passwordMatch){
                return res.status(401).json({message : 'invalid password'});
            }
            const token = jwt.sign(
                {userId: existing._id, email : existing.email, role: existing.role},
                secret,
                // {expiresIn : '1h'}
            );

            return res.status(201).json({message : 'user login successful', token})
        }
    }
    catch(error){

        return res.status(500).json({message: 'server error'});
    }
});

export default loginUser;