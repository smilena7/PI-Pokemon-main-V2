//{}
import { combineReducers } from "redux";

// importamos los reducers
import pokemonReducer from "./pokemonsReducer";

export default combineReducers({
  pokemons: pokemonReducer,
});
