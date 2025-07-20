"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSchema = void 0;
const joi = require('joi');
const userSchema = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
const ValidateSchema = (req, res, next) => {
    const { error } = userSchema.validate(req.body); /* the data will appear here as object after validation */
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.ValidateSchema = ValidateSchema;
