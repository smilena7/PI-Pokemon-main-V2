/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_POKEMONS,
  IS_LOADING_ALL_POKEMONS,
  ERROR_ALL_POKEMONS,
  GET_CREATE_POKEMONS_BY,
  ERROR_CREATE_POKEMONS_BY,
  GET_POKEMON_BY_NAME,
  CLEAR_STATE_ERROR_ALL_POKEMONS,
} from "../types";

const initialState = {
  data: [], // = que decir pokemons
  isLoading: false,
  error: "",
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_ALL_POKEMONS:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_ALL_POKEMONS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_CREATE_POKEMONS_BY:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };
    case ERROR_CREATE_POKEMONS_BY:
      return {
        ...state,

        isLoading: false,
        error: action.payload,
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
        error: "",
      };

    case CLEAR_STATE_ERROR_ALL_POKEMONS:
      return initialState;

    default:
      return state;
  }
};

export default pokemonsReducer;
// {}
