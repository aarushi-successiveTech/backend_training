import express from 'express'; 
import { customMiddleware } from './middlewares/customMiddleware.js';
import { rateLimiter } from './middlewares/rateLimiter.js';
import formRouter from './routes/formRoute.js';
import paramRouter from './routes/paramRoute.js';
import { connectDB } from './config/db.js';
import registerRouter from './routes/registerRoute.js';
import loginRoute from './routes/loginRoute.js';
import authorizedRoute from './routes/authorizedRoute.js';

const PORT = 3000;
const app = express(); 
app.use(express.json());

//custom middlewares
// app.use(customMiddleware); 
// app.use(rateLimiter); 

//routes
app.use('/', formRouter);
app.use('/', paramRouter);  
app.use('/', registerRouter); 
app.use('/', loginRoute); 
app.use('/', authorizedRoute); 

//global error-handler
app.use((err, req, res, next)=>{
    const message = err.message || 'something went wrong'; 
    const status = err.status || 500 ;

    res.status(status).json({
        success : false, 
        message : message
    }); 
}); 

//port 
connectDB(); 
app.listen(PORT, ()=> {
    console.log(`running at http://localhost:${PORT}`);
}); 