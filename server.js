const express = require("express");
const { MongoClient } = require("mongodb");
let db;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const allSneakers = await db.collection("sneakers").find().toArray();
  res.render("landingPage", {
    allSneakers,
    title: "Landing Page",
    active: "landing",
  });
});

app.get("/men", async (req, res) => {
  res.render("menPage", {
    title: "Landing Page",
    active: "men",
  });
});

app.get("/women", async (req, res) => {
  res.render("womenPage", {
    title: "Women Page",
    active: "women",
  });
});

app.get("/kids", async (req, res) => {
  res.render("kidsPage", {
    title: "Kids Page",
    active: "kids",
  });
});

app.get("/favorites", async (req, res) => {
  res.render("favoritesPage", {
    title: "Favorites Page",
    active: "favorites",
  });
});

app.get("/api/sneakers", async (req, res) => {
  const allSneakers = await db.collection("sneakers").find().toArray();
  res.json(allSneakers);
});

const start = async () => {
  const client = new MongoClient(
    "mongodb://root:root@localhost:27017/sneakers_store_db?&authSource=admin"
  );
  await client.connect();
  db = client.db();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
};

start();
