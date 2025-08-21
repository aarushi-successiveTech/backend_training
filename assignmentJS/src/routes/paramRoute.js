import { Router } from "express";
import { paramMiddleware } from "../middlewares/paramMiddleware.js";
import { paramController } from "../controllers/paramControlle.js";

const paramRouter = Router(); 

paramRouter.get('/paramCheck/:id', paramMiddleware, paramController); 

export default paramRouter; 