import {Request, Response, NextFunction} from 'express';

export const validateParams = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params; 

    if(isNaN(Number(id))){
        return res.status(500).json({
            message: 'invalid id'
        });
    };
    
    return res.status(200).json({
        status : 'success',
        message : 'Params are verified'
    });
};