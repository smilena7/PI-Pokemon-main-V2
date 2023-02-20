//handleFilterByType

import axios from "axios";
import {
  GET_POKEMON_BY_TYPE,
  IS_LOADING_POKEMON_TYPE,
  ERROR_POKEMON_TYPE,
} from "../types";

export const pokemonByTypeAction = (name) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_POKEMON_TYPE,
  });
  try {
    const response = await axios.get(`/api/types`);
    dispatch({
      type: GET_POKEMON_BY_TYPE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_POKEMON_TYPE,
      payload: error.message,
    });
  }
};
