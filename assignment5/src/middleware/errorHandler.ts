import {Request, Response, NextFunction} from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next:NextFunction) => {

    console.log('error message', err.message);

    res.status(500).json({
        success : false, 
        message : 'Internal server error'
    });

}