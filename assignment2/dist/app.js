"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockdata = require('./mockData');
const express = require('express');
const app = express();
const port = 8000;
app.get('/users', (req, res) => res.json(mockdata));
app.listen(port, () => {
    console.log('starting server');
});
