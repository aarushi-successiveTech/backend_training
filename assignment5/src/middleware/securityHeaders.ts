import {Request, Response, NextFunction} from 'express'; 
import helmet from 'helmet'; 

export class securityHeader {

    public static headerProtection = (req: Request, res: Response, next: NextFunction) => {
    const middleware = helmet({
        contentSecurityPolicy: {
            directives: {
                scriptSrc: ["'self'"],
                defaultSrc: ["'self'"]
            }
        },
        referrerPolicy: {
            policy: "no-referrer"
        },
        noSniff: true,
        frameguard: {
            action: "sameorigin"
        },
        hsts: {
            maxAge: 12345673456
        },
        hidePoweredBy: true
    }); 

    return middleware(req, res, next); 
};};