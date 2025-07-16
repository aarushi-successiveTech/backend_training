"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const express_1 = require("express");
const getUser = (req, res) => {
    express_1.response.status(200).json({ message: 'user data fetched' });
};
exports.getUser = getUser;
