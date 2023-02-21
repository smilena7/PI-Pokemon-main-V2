const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonID,
  getPokemonName,
  postPokemon,
  deletePokemonID,
} = require("../controllers/pokemonsController.js");
const router = Router();

router.get("/pokemons", getAllPokemons);
router.get("/pokemons/:id", getPokemonID);
router.get("/pokemonsName", getPokemonName);
router.post("/pokemons", postPokemon);
router.delete("/pokemons/:id", deletePokemonID);

module.exports = router;
// {}
