import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const secret = process.env.JWT_KEY; 

export const authToken = async(req, res, next) => {
    const authHeader = req.headers.authorization; 

    if(!authHeader){
        return res.status(401).json({
            message: 'unauthorized user'
        }); 
    }; 
    const token = authHeader.split(' ')[1]; 

    const decoded = jwt.verify(token, secret);
    req.user = decoded; 
    next(); 
}; 