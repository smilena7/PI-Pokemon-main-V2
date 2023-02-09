/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POKEMON_BY_TYPE,
  IS_LOADING_POKEMON_TYPE,
  ERROR_POKEMON_TYPE,
} from "../types";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
};

const pokemonByTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_BY_TYPE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_POKEMON_TYPE:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_POKEMON_TYPE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default pokemonByTypeReducer;
// {}
