"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`current time ${timeStamp}, ${req.method} and ${req.originalUrl}`);
    next();
};
exports.loggerMiddleware = loggerMiddleware;
