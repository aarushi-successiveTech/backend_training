import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {

    res.status(200).json({message : 'user data fetched'});
};
// for validate schema middleware
export const ValidateUser = (req: Request, res: Response) => {
    const {name, email} = req.body; 

    res.status(201).json({
        message : 'user validated successfully', 
        user : {name, email}
    });
}; 
// for validate Form middleware
export const DataForm = (req: Request, res: Response) => {
    const {name, email, password} = req.body ; 

    res.status(201).json({
        message : 'form validated successfully', 
        formData : {name, email, password}
    });
};