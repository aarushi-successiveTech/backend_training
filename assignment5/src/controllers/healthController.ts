import {Request, Response} from 'express';

export class HealthControls {
  public healthCheck = (req: Request, res: Response): void => {
    res.status(200).json({
      message: "health check all good!",
    });
  };
}