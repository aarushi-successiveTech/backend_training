import { Request, response, Response } from "express";

export const getUser = (req: Request, res: Response) => {

    response.status(200).json({message : 'user data fetched'});
};