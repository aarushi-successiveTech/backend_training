import {Request, Response, NextFunction} from 'express'; 
const geoip = require('geoip-lite'); 

const allowedCountries = [
    "IN", 'US'
];

export const GeoLocation = (req: Request, res: Response, next: NextFunction) => {
    const ip = "49.36.77.122";
    const geo = geoip.lookup(ip); 

    if(geo && allowedCountries.includes(geo.country)){
        console.log('Allowed region', geo.country);
        res.status(200).json({
            success : "true", 
            message : "user is from expected region"
        });

    }

    else {
        const error = new Error("Country not allowed");
        (error as any).status = 403; 
        next(error);
    };
}