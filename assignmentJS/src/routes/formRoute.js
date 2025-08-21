import { Router } from "express";
import { formValidation } from "../middlewares/formValidation.js";
import { formController } from "../controllers/formController.js";

const formRouter = Router(); 

formRouter.post('/formValidation', formValidation, formController); 

export default formRouter; 