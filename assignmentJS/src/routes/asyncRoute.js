import { Router } from "express";

asyncRouter = Router(); 

asyncRouter.get('/asyncErr', async(req, res, next) => {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("async error thrown")), 5000)
        });
        res.send('directed to error'); 
    }
    catch{
        next(error);
    }
}); 