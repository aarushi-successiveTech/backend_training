const schema = require('../utils/createSchema');
import User from "../models/createModel";
import { Router } from "express";
import bcrypt from 'bcrypt';

const registerUser = Router(); 

registerUser.post('/register', async(req, res) =>{

    const {error, value} = schema.validate(req.body);

    if(error){
        return res.status(400).json({message : 'invalid credentials'});
    }

    try{

        const existing = await User.findOne({email : value.email});
        if(existing){

            return res.status(409).json({message: 'user already exists'});
        };


        const hashPassword = await bcrypt.hash(value.password, 10);
        const newUser = new User({
            name : value.name, 
            email : value.email, 
            password : hashPassword, 
            role : 'user'
        });
        await newUser.save();
        return res.status(401).json({message: 'user registered successfully', 

            user : {
                id : newUser._id,
                name: newUser.name,
                email : newUser.email
            },
        });
    }
    catch(err){

        return res.status(500).json({message : 'server error'});
    }
});

export default registerUser; 