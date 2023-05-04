import { body } from "express-validator";

export const registerValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password length must be minimum 8 symbols").isLength({
    min: 8,
  }),
  body("fullName", "Password length must be minimum 2 symbols").isLength({
    min: 2,
  }),
  body("avatarUrl", "Wrong url reference").optional().isURL(),
];
