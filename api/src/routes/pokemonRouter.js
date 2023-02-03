const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonID,
  getPokemonName,
  postPokemon,
} = require("../controllers/pokemonController.js");

const router = Router();

router.get("/pokemons", getAllPokemons);
router.get("/pokemons/:id", getPokemonID);
router.get("/pokemonsName", getPokemonName);
router.post("/pokemons", postPokemon);

module.exports = router;
// {}
