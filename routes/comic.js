const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=CMPMRZgEhNVtR0Xv"
    );

    console.log(response.data);
    console.log("Salut");

    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.json(response.data);
  }
});

module.exports = router;
