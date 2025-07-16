import express, { Router } from 'express';
import { getUser } from '../controllers/userController';

const router = express.Router();

router.get('/user', getUser);

export default router; 
