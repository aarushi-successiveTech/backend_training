"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataForm = exports.ValidateUser = exports.getUser = void 0;
const getUser = (req, res) => {
    res.status(200).json({ message: 'user data fetched' });
};
exports.getUser = getUser;
// for validate schema middleware
const ValidateUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: 'user validated successfully',
        user: { name, email }
    });
};
exports.ValidateUser = ValidateUser;
// for validate Form middleware
const DataForm = (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({
        message: 'form validated successfully',
        formData: { name, email, password }
    });
};
exports.DataForm = DataForm;
