import express from "express";
import multer from "multer";
import cors from "cors";

import mongoose from "mongoose";

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
  .connect(
    "mongodb+srv://dvnkx:eazywin32@cluster0.memmfxv.mongodb.net/sneakers_store?retryWrites=true&w=majority"
  )
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
app.patch(
  "/user/update:id",
  checkAuth,
  handleValidationErrors,
  updateUserValidation,
  UserController.updateMe
);
app.patch(
  "/user/password:id",
  checkAuth,
  handleValidationErrors,
  UserController.updatePassword
);
app.post(
  "/user/address:id",
  checkAuth,
  handleValidationErrors,
  createDeliveryAddressValidation,
  UserController.addAddress
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/ulpoads/${req.file.originalname}`,
  });
});

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

const start = async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
};

start();
