const { Router } = require("express");
const getPokemon = require("../controllers/pokemonController.js");

const router = Router();

router.get("/", getPokemon);

module.exports = router;
// {}
