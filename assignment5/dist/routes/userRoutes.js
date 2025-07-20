"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const validationSchema_1 = require("../middleware/validationSchema");
const validateForm_1 = require("../middleware/validateForm");
const validateParams_1 = require("../middleware/validateParams");
const geoLocation_1 = require("../middleware/geoLocation");
const router = express_1.default.Router();
router.get('/user', userController_1.getUser);
router.post('/validateUser', validationSchema_1.ValidateSchema, userController_1.ValidateUser);
router.post('/validateForm', validateForm_1.ValidateForm, userController_1.DataForm);
router.post('/validateForm/:id', validateParams_1.validateParams, userController_1.DataForm);
router.get('/location', geoLocation_1.GeoLocation, (req, res) => {
    res.json({ message: 'you can access this route' });
});
exports.default = router;
