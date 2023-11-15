const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    console.log(req.query);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=CMPMRZgEhNVtR0Xv&limit=${req.query.limit}`
    );

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
});

module.exports = router;
