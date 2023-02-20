import axios from "axios";
import {
  GET_ALL_POKEMONS,
  IS_LOADING_ALL_POKEMONS,
  ERROR_ALL_POKEMONS,
  GET_CREATE_POKEMONS_BY,
  ERROR_CREATE_POKEMONS_BY,
  CLEAR_STATE_ERROR_ALL_POKEMONS,
} from "../types";

export const pokemonsAction = () => async (dispatch) => {
  dispatch({
    type: IS_LOADING_ALL_POKEMONS,
  });
  try {
    const URL = process.env.REACT_APP_BASE_URL; // Guardo la URL en una variable de entorno .env
    const response = await axios.get(`${URL}/api/pokemons`);
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

export const createPokemonsByAction = (createBy) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_ALL_POKEMONS,
  });
  try {
    const response = await axios.get(`/api/pokemons?createBy=${createBy}`);
    dispatch({
      type: GET_CREATE_POKEMONS_BY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_CREATE_POKEMONS_BY,
      payload: error.message,
    });
  }
};

export const clearAllPoKemons = () => async (dispatch) => {
  dispatch({
    type: CLEAR_STATE_ERROR_ALL_POKEMONS,
  });
};

// {}

/*
Linea 10:
type: IS_LOADING_ALL_POKEMONS, 
👆🏾 cada vez que se llame la accion, se ejecuta la accion (loading) 
antes de llamar el servicio (get all pokemons). El loading inicia en true
de acuerdo a lo planetado en el pokemonsReducer case IS_LOADING_ALL_POKEMONS


*/
