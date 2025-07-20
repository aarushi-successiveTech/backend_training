"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = void 0;
const validateParams = (req, res, next) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(500).json({
            message: 'invalid id'
        });
    }
    ;
    return res.status(200).json({
        status: 'success',
        message: 'Params are verified'
    });
};
exports.validateParams = validateParams;
