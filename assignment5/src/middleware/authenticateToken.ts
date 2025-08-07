import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
dotenv.config(); 
import {Request, Response, NextFunction} from 'express'; 

const secret = process.env.JWT_SECRET as string; 

export interface AuthRequest extends Request {
    user? : any; 
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction)=>{

    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1]; 

    if(!token){
        return res.status(401).json({message: 'invalid token'}); 
    }

    try{

        const decoded = jwt.verify(token, secret); 
        req.user = decoded; 
        next(); 

    }

    catch(err){
        res.status(401).json({message: 'not authorized'}); 
    }

}; 