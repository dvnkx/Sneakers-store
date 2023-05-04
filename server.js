import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validation.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./Controllers/UserControllers.js";

mongoose
  .connect(
    "mongodb+srv://dvnkx:eazywin32@cluster0.memmfxv.mongodb.net/sneakers_store?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/", (req, res) => {
  res.render("landingPage", {
    title: "Landing Page",
    active: "landing",
  });
});

app.get("/men", (req, res) => {
  res.render("menPage", {
    title: "Landing Page",
    active: "men",
  });
});

app.get("/women", (req, res) => {
  res.render("womenPage", {
    title: "Women Page",
    active: "women",
  });
});

app.get("/kids", (req, res) => {
  res.render("kidsPage", {
    title: "Kids Page",
    active: "kids",
  });
});

app.get("/favorites", (req, res) => {
  res.render("favoritesPage", {
    title: "Favorites Page",
    active: "favorites",
  });
});

const start = async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
};

start();
