import {Request, Response} from 'express'; 
const mockdata = require('./mockData');
const express = require('express');
const app = express();
const port = 8000; 

app.get('/users', (req : Request, res : Response) => res.json(mockdata));
app.listen(port , () => {
    console.log('starting server');
});