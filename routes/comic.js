const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route pour obtenir la liste de tous les comics
router.get("/comics", async (req, res) => {
  const { title } = req.query;
  console.log("title ===>", title);
  let search = "";
  const filter = {};

  if (title) {
    filter.title = title;
  }

  for (const key in filter) {
    search = search + `&${key}=${filter[key]}`;
  }

  console.log("search ===>", search);

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=CMPMRZgEhNVtR0Xv${search}`
    );

    console.log(response.data);
    console.log("Salut");
    console.log(typeof response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.json(response.data);
  }
});

// Route pour obtenir la liste des comics pour un personnage donné

router.get("/comics/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=CMPMRZgEhNVtR0Xv`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
