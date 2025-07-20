import { Application, Request, Response } from "express";
const mockdata = require("./utils/mockData");
import { authenticateJwt } from "./middleware/authenticate";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { customHeader } from "./middleware/customMiddleware";
import { rateLimiter } from "./controllers/rateLimiter";
import userRoutes from './routes/userRoutes';
import { NextFunction } from "express";

const express = require("express");
const app: Application = express();

app.use(express.json());
app.use(rateLimiter(5, 6000));
app.use(loggerMiddleware);
app.use(customHeader("created-by", "Aarushi"));
app.use(userRoutes); 

app.get("/", (req: Request, res: Response) => {
  res.json(mockdata);
});

app.get("/user", (req: Request, res: Response) => {
  res.json({ message: "log sent successfully" });
});

app.post(
  "/api/data",
  loggerMiddleware,
  authenticateJwt,
  (req: Request, res: Response) => {
    const receivedData = req.body;
    console.log("Received data:", mockdata);

    res
      .status(200)
      .json({ message: "Data received successfully", data: mockdata });
  }
);

app.get('/limiter', (req: Request, res: Response)=> {
    res.json({message : 'request sent successfully!'});
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent){
    return next(err);
  }
  const status = err.status || 500; 
  res.status(status).json({
    success : false, 
    message : err.message || 'something went wrong'
  });
});

export default app;
