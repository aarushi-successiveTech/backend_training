"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customHeader = void 0;
const customHeader = (headerName, headerValue) => {
    return (req, res, next) => {
        res.setHeader(headerName, headerValue);
        next();
    };
};
exports.customHeader = customHeader;
