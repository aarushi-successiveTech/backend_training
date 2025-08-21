import { Router } from "express";
import { authToken } from "../middlewares/authToken.js";
import { authRole } from "../middlewares/authRole.js";
import { testData } from "../schema/mockData.js";

const authorizedRoute = Router(); 

authorizedRoute.get('/authCheck', authToken, authRole('admin'), (req, res)=> {
    res.status(200).json({message: 'route accessed',testData}); 
}); 

export default authorizedRoute; 