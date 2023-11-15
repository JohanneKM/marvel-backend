const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const characterRoutes = require("./routes/character");
app.use(characterRoutes);
const comicRoutes = require("./routes/comic");
app.use(comicRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome on my project" });
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "This route doesn't exist" });
});

app.listen(3000, () => {
  console.log("Server started");
});
