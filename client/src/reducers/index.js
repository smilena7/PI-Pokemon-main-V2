import { combineReducers } from "redux"; // Agrupamos los recucer
import pokemonReducer from "./pokemonsReducer"; // Importamos los reducers

export default combineReducers({
  pokemons: pokemonReducer,
});
// {}
