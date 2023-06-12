import express from "express";
import multer from "multer";
import cors from "cors";

import mongoose from "mongoose";

import "dotenv/config.js";

import {
  registerValidation,
  loginValidation,
  createCardValidation,
  updateUserValidation,
  createDeliveryAddressValidation,
} from "./validations.js";

import { handleValidationErrors, checkAuth } from "./utils/index.js";

import { UserController, CardController } from "./controllers/index.js";

mongoose
  .connect(process.env.MONGO_URI.toString())
  .catch((err) => console.log(err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.patch(
  "/user/update:id",
  checkAuth,
  handleValidationErrors,
  updateUserValidation,
  UserController.updateMe
);
app.post(
  "/user/address:id",
  checkAuth,
  handleValidationErrors,
  createDeliveryAddressValidation,
  UserController.addAddress
);
app.patch(
  "/user/password:id",
  checkAuth,
  handleValidationErrors,
  UserController.updatePassword
);

app.get("/cards", CardController.getAll);
app.get("/cards/:id", CardController.getOne);
app.post(
  "/cards",
  checkAuth,
  createCardValidation,
  handleValidationErrors,
  CardController.create
);
app.delete("/cards:id", checkAuth, CardController.remove);
app.patch(
  "/cards:id",
  checkAuth,
  handleValidationErrors,
  CardController.update
);

app.get("/favorites:id", checkAuth, UserController.getAllFavorites);
app.put("/favorites:id", checkAuth, UserController.addToFavorites);

app.get("/basket:id", checkAuth, UserController.getBasket);
app.put("/basket:id", checkAuth, UserController.addToBasket);

app.patch("/basket:id", checkAuth, UserController.cleanUpBasket);

app.get("/orders:id", checkAuth, UserController.getOrders);

const start = async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
};

start();
