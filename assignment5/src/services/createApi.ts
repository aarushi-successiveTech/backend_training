const user = require('../utils/createSchema');
import User from '../models/createModel';
import { Router } from 'express';

const userCreator = Router(); 

userCreator.post('/create', async(req, res)=>{

    const {error, value} = user.validate(req.body);

    if(error){
        return res.status(400).json({message: 'invalid data'});
    }

    try{
        const newUser = new User({
            name : value.name , 
            email : value.email, 
            password : value.password
        });
        await newUser.save() ;
        return res.status(201).json({message : 'user created successfully', user: newUser});
    }
    catch(err){

        return res.status(500).json("'server error");
    }
});

export default userCreator; 