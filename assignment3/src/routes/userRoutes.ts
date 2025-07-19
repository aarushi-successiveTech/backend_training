import express, { Router } from 'express';
import { getUser, ValidateUser, DataForm } from '../controllers/userController';
import { ValidateSchema } from '../middleware/validationSchema';
import { ValidateForm } from '../middleware/validateForm';
import { validateParams } from '../middleware/validateParams';
import { GeoLocation } from '../middleware/geoLocation';
import { checkDynamic } from '../middleware/validationRules';

const router = express.Router();

router.get('/user', getUser);

router.post('/validateUser', ValidateSchema, ValidateUser); 

router.post('/validateForm', ValidateForm, DataForm); 

router.post('/validateForm/:id', validateParams, DataForm); 

router.get("/location", GeoLocation, (req, res) => {
  res.json({ message: "you can access this route" });
});

router.post("/teacher", checkDynamic, (req, res) => {
  res.status(200).send("successful log in teacher");
});

export default router; 
