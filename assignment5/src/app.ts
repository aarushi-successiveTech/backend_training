import { Application, Request, Response } from "express";
const mockdata = require("./utils/mockData");
import { Authentication } from "./middleware/authenticate";
import { Logger } from "./middleware/loggerMiddleware";
import { CustomMiddleware } from "./middleware/customMiddleware";
import { rateLimiter } from "./controllers/rateLimiter";
import userRoutes from './routes/userRoutes';
import { NextFunction } from "express";
import userCreator from "./services/createApi";

const express = require("express");
const app: Application = express();
const auth = new Authentication();
const custom = new CustomMiddleware();
const logs = new Logger();   

app.use(express.json());
app.use(rateLimiter(5, 6000));
app.use(logs.loggerMiddleware);
app.use(custom.customHeader("created-by", "Aarushi"));
app.use(userRoutes); 
app.use('/', userCreator);     // 8000/create pr chaleg


app.get("/", (req: Request, res: Response) => {
  res.json(mockdata);
});

app.get("/user", (req: Request, res: Response) => {
  res.json({ message: "log sent successfully" });
});

app.post(
  "/api/data",
  logs.loggerMiddleware,
  auth.authenticateJwt,
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
