"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
let count = 0;
let startTime = Date.now();
const rateLimiter = (limit, windowTime) => {
    return (req, res, next) => {
        const now = Date.now();
        if (now - startTime > windowTime) {
            count = 0;
            startTime = now;
        }
        if (count < limit) {
            count++;
            next();
        }
        else {
            res.status(429).json({ message: "Too many requests!" });
        }
    };
};
exports.rateLimiter = rateLimiter;
