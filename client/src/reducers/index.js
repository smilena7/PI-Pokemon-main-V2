import { combineReducers } from "redux"; // Agrupamos los recucer
import pokemonReducer from "./pokemonsReducer"; // Importamos los reducers
// import pokemonByNameReducer from "./pokemonByNameReducer";
import pokemonByTypeReducer from "./pokemonByTypeReducer";

export default combineReducers({
  pokemons: pokemonReducer,
  pokemonsByTypes: pokemonByTypeReducer,
});
// {}
