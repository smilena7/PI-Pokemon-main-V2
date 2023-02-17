// Agrupando los recucer
import { combineReducers } from "redux";
// Importando los reducers
import pokemonReducer from "./pokemonsReducer";
import pokemonByNameReducer from "./pokemonByNameReducer";
import pokemonByTypeReducer from "./pokemonByTypeReducer";
import pokemonDetailReducer from "./pokemonDetailReducer";
import pokemonCreateReducer from "./pokemonCreateReducer";
import pokemonTypeNameReducer from "./pokemonTypeNameReducer";

export default combineReducers({
  pokemons: pokemonReducer,
  pokemonsByTypes: pokemonByTypeReducer,
  pokemonDetail: pokemonDetailReducer,
  pokemonCreate: pokemonCreateReducer,
  pokemonName: pokemonByNameReducer,
  pokemonTypeName: pokemonTypeNameReducer,
});
