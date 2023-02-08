import axios from "axios";
import {
  GET_ALL_POKEMONS,
  IS_LOADING_ALL_POKEMONS,
  ERROR_ALL_POKEMONS,
} from "../types";

//{}
export const pokemonsAction = () => async (dispatch) => {
  dispatch({
    type: IS_LOADING_ALL_POKEMONS,
  });

  //guardar esta variable en un .env

  try {
    const URL = "http://localhost:3001/api/pokemons";
    const response = await axios.get(URL);
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_ALL_POKEMONS,
      payload: error.message,
    });
  }
};
