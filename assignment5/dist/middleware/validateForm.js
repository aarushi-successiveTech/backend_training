"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateForm = void 0;
const joi = require('joi');
const formSchema = joi.object({
    name: joi.string().alphanum().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
});
const ValidateForm = (req, res, next) => {
    const { error } = formSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: 'user data invalid'
        });
    }
    ;
    next();
};
exports.ValidateForm = ValidateForm;
