/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POKEMON_BY_NAME,
  IS_LOADING_POKEMON_NAME,
  ERROR_POKEMON_NAME,
  CLEAR_ERROR_POKEMON_NAME,
} from "../types";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

const pokemonByNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_POKEMON_NAME:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_POKEMON_NAME:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case CLEAR_ERROR_POKEMON_NAME:
      return initialState;

    default:
      return state;
  }
};

export default pokemonByNameReducer;
// {}
