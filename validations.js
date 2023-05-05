import { body } from "express-validator";

export const loginValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password length must be minimum 8 symbols").isLength({
    min: 8,
  }),
];

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

export const createCardValidation = [
  body("brand", "Wrong brand name").isString(),
  body("model", "Wrong model name").isString(),
  body("cost", "Wrong cost format").isNumeric(),
  body("color", "Wrong color name").isString(),
  body("materials", "Wrong materials name").isString(),
  body("imageUrl", "Wrong url reference").isString(),
  body("sex", "Wrong sex")
    .isString()
    .contains("men" || "women" || "unisex"),
  body("forKids").isBoolean(),
];
