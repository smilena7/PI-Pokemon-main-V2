import { combineReducers } from "redux"; // Agrupamos los recucer
import pokemonReducer from "./pokemonsReducer"; // Importamos los reducers
import pokemonByNameReducer from "./pokemonByNameReducer";
import pokemonByTypeReducer from "./pokemonByTypeReducer";
import pokemonDetailReducer from "./pokemonDetailReducer";
import pokemonCreateReducer from "./pokemonCreateReducer";

export default combineReducers({
  pokemons: pokemonReducer,
  pokemonsByTypes: pokemonByTypeReducer,
  pokemonDetail: pokemonDetailReducer,
  pokemonCreate: pokemonCreateReducer,
  pokemonName: pokemonByNameReducer,
});
