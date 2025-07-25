import {Request, Response, NextFunction} from "express";

export class Logger {

    public loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {

    const timeStamp = new Date().toLocaleTimeString();
    console.log(`current time ${timeStamp}, ${req.method} and ${req.originalUrl}`);
    next();
}
}
