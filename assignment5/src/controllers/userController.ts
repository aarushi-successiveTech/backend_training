import { Request, Response } from "express";

export class UserController {


  public getUser = (req: Request, res: Response): void => {
    res.status(200).json({ message: "user data fetched" });
  };


  // for validate schema middleware
  public ValidateUser = (req: Request, res: Response): void => {
    const { name, email } = req.body;

    res.status(201).json({
      message: "user validated successfully",
      user: { name, email },
    });
  };



  // for validate Form middleware
  public DataForm = (req: Request, res: Response): void => {
    const { name, email, password } = req.body;

    res.status(201).json({
      message: "form validated successfully",
      formData: { name, email, password },
    });
  };
}
