import axios from "axios";
import {
  GET_POKEMON_DETAIL,
  IS_LOADING_POKEMON_DETAIL,
  ERROR_POKEMON_DETAIL,
  CLEAR_STATE_DETAIL,
} from "../types";

export const pokemonDetailAction = (id) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_POKEMON_DETAIL,
  });
  try {
    const response = await axios.get(`/api/pokemons/${id}`);
    dispatch({
      type: GET_POKEMON_DETAIL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_POKEMON_DETAIL,
      payload: error.message,
    });
  }
};

export const clearDetailPoKemon = () => async (dispatch) => {
  dispatch({
    type: CLEAR_STATE_DETAIL,
  });
};
