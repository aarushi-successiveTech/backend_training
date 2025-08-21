import {Router} from 'express'; 
import { loginService } from '../services/loginService.js';

const loginRoute = Router(); 

loginRoute.post('/login', loginService); 

export default loginRoute; 