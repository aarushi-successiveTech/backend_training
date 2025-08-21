import {Router} from 'express';
import { registerMiddleware } from '../middlewares/registerMiddleware.js';
import { registerController } from '../controllers/registerController.js';

const registerRouter = Router(); 
registerRouter.post('/register', registerMiddleware, registerController);

export default registerRouter; 