/* eslint-disable import/no-anonymous-default-export */
import {
  POST_POKEMON_CREATE,
  IS_LOADING_POKEMON_CREATE,
  ERROR_POKEMON_CREATE,
  CLEAR_STATE_CREATE,
} from "../types";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

const pokemonCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_POKEMON_CREATE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_POKEMON_CREATE:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_POKEMON_CREATE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case CLEAR_STATE_CREATE:
      return initialState;

    default:
      return state;
  }
};

export default pokemonCreateReducer;
