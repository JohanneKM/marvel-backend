const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  // pour pouvoir chercher un personnage selon son nom
  const { name, skip } = req.query;

  console.log("name ===>", name);
  console.log("skip ===>", skip);

  let search = "";
  const filter = {};

  if (name) {
    filter.name = name;
  }

  if (skip) {
    filter.skip = skip;
  }

  console.log(filter);

  for (const key in filter) {
    search = search + `&${key}=${filter[key]}`;
    console.log("search ===>", search);
  }
  try {
    // console.log(req.query);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=CMPMRZgEhNVtR0Xv${search}`
    );

    console.log(response.data);
    console.log("search ===>", search);

    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
});

module.exports = router;
