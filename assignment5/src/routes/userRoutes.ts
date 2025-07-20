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
