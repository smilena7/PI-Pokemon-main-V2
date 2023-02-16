import axios from "axios";
import {
  GET_POKEMON_BY_NAME,
  IS_LOADING_POKEMON_NAME,
  ERROR_POKEMON_NAME,
  CLEAR_ERROR_POKEMON_NAME,
} from "../types";

export const pokemonByNameAction = (name) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_POKEMON_NAME,
  });
  try {
    const URL = process.env.REACT_APP_BASE_URL;
    const response = await axios.get(`${URL}/api/pokemonsName?name=${name}`);
    dispatch({
      type: GET_POKEMON_BY_NAME,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_POKEMON_NAME,
      payload: error.message,
    });
  }
};

export const clearPoKemonName = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR_POKEMON_NAME,
  });
};
