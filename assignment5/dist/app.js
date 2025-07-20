"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mockdata = require("./utils/mockData");
const authenticate_1 = require("./middleware/authenticate");
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
const customMiddleware_1 = require("./middleware/customMiddleware");
const rateLimiter_1 = require("./controllers/rateLimiter");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const express = require("express");
const app = express();
app.use(express.json());
app.use((0, rateLimiter_1.rateLimiter)(5, 6000));
app.use(loggerMiddleware_1.loggerMiddleware);
app.use((0, customMiddleware_1.customHeader)("created-by", "Aarushi"));
app.use(userRoutes_1.default);
app.get("/", (req, res) => {
    res.json(mockdata);
});
app.get("/user", (req, res) => {
    res.json({ message: "log sent successfully" });
});
app.post("/api/data", loggerMiddleware_1.loggerMiddleware, authenticate_1.authenticateJwt, (req, res) => {
    const receivedData = req.body;
    console.log("Received data:", mockdata);
    res
        .status(200)
        .json({ message: "Data received successfully", data: mockdata });
});
app.get('/limiter', (req, res) => {
    res.json({ message: 'request sent successfully!' });
});
exports.default = app;
