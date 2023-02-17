/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POKEMON_BY_TYPE_NAME,
  IS_LOADING_POKEMON_TYPE_NAME,
  ERROR_POKEMON_TYPE_NAME,
} from "../types";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const pokemonTypeNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_BY_TYPE_NAME:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_POKEMON_TYPE_NAME:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_POKEMON_TYPE_NAME:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default pokemonTypeNameReducer;
// {}
