import {Request, Response, NextFunction} from "express";

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const timeStamp = new Date().toLocaleTimeString();
    console.log(`current time ${timeStamp}, ${req.method} and ${req.originalUrl}`);
    next();
}