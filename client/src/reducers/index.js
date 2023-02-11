import { combineReducers } from "redux"; // Agrupamos los recucer
import pokemonReducer from "./pokemonsReducer"; // Importamos los reducers
// import pokemonByNameReducer from "./pokemonByNameReducer";
import pokemonByTypeReducer from "./pokemonByTypeReducer";
import pokemonDetailReducer from "./pokemonDetailReducer";
import pokemonCreateReducer from "./pokemonDetailReducer";

export default combineReducers({
  pokemons: pokemonReducer,
  pokemonsByTypes: pokemonByTypeReducer,
  pokemonDetail: pokemonDetailReducer,
  pokemonCreate: pokemonCreateReducer,
});
// {}
