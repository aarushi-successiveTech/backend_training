import express, { Router } from 'express';
import { UserController } from '../controllers/userController';
import { SchemaValidation } from '../middleware/validationSchema';
import { FormValidator } from '../middleware/validateForm';
import { ParamValidation } from '../middleware/validateParams';
import { GeoMiddleware } from '../middleware/geoLocation';
import { DynamicMiddleware } from '../middleware/validationRules';
import { HealthControls } from '../controllers/healthController';

const router = express.Router();
const geo = new GeoMiddleware();
const form = new FormValidator();
const params = new ParamValidation();
const dynamic = new DynamicMiddleware();
const schema = new SchemaValidation();
const userControls = new UserController(); 
const check = new HealthControls();

router.get('/user', userControls.getUser);

router.post('/validateUser', schema.ValidateSchema, userControls.ValidateUser); 

router.post('/validateForm', form.ValidateForm, userControls.DataForm); 

router.post('/validateForm/:id', params.validateParams, userControls.DataForm); 

router.get("/location", geo.GeoLocation, (req, res) => {
  res.json({ message: "you can access this route" });
});

router.get('/health', check.healthCheck, (req, res) => {
  res.json({message : "health check successful"});
});

router.post("/teacher", dynamic.checkDynamic, (req, res) => {
  res.status(200).send("successful log in teacher");
});

router.get('/bad-request', (req, res, next) => {
  const name = req.query.name; 
  if(!name){
    const err = new Error('Name is required');
    (err as any).status = 400;
    return next(err);
  }
  res.send('ok'); 
}); 

router.get('/unauthorized', (req, res, next) => {
  const auth = req.headers.authorization; 
  if(!auth){
    const err = new Error('user not authorized');
    (err as any).status = 401;
    return next(err);
  }
  res.send('you have the access');
});

router.get("/asyncError", async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Async Error encountered")), 1000);
    });
    res.send("dircted to error");
  } catch (err) {
    next(err);
  }
});

router.post('/validateError', (req, res, next) => {
  const {name , age} = req.body;
  if(!name || !age){
    const err = new Error('required data missing');
    (err as any).status = 400;
    return next(err); 
  }

  res.status(200).json({
    success: 'true', 
    message : 'data entered successfully'
  });
});

export default router; 
