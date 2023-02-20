//handleFilterByType

import axios from "axios";
import {
  GET_POKEMON_BY_TYPE_NAME,
  IS_LOADING_POKEMON_TYPE_NAME,
  ERROR_POKEMON_TYPE_NAME,
} from "../types";

export const pokemonTypeNameAction = (type) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_POKEMON_TYPE_NAME,
  });
  try {
    const response = await axios.get(`/api/types-name?name=${type}`);
    dispatch({
      type: GET_POKEMON_BY_TYPE_NAME,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_POKEMON_TYPE_NAME,
      payload: error.message,
    });
  }
};
