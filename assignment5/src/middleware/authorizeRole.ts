import { Request, Response, NextFunction } from "express"

export interface AuthRequest extends Request {
    user?: any; 
}

export const authorizeRole = (...allowedRoles: string[]) =>{

    return (req: AuthRequest, res: Response, next: NextFunction) => {

        const userRole = req.user?.role; 


        if(!userRole || !allowedRoles.includes(userRole)){
            res.status(403).json({message: 'access denied'});
        }

        next(); 
    }
}; 