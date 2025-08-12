import { registerValidation } from "../schema/registerValidation.js"

export const registerMiddleware = (req, res, next) => {
  const { error } = registerValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ message: "invalid data entered" });
  }

  next();
}; 