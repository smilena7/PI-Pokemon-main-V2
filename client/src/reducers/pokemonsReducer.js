/* eslint-disable import/no-anonymous-default-export */
//{}
import {
  GET_ALL_POKEMONS,
  IS_LOADING_ALL_POKEMONS,
  ERROR_ALL_POKEMONS,
} from "../types";

const initialState = {
  data: [],
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

    default:
      return state;
  }
};

export default pokemonsReducer;
