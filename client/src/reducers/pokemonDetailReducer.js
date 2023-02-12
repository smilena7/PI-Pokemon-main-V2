/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POKEMON_DETAIL,
  IS_LOADING_POKEMON_DETAIL,
  ERROR_POKEMON_DETAIL,
  CLEAR_STATE_DETAIL,
} from "../types";

const initialState = {
  data: {},
  isLoading: false,
  error: "",
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
      };

    case IS_LOADING_POKEMON_DETAIL:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR_POKEMON_DETAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CLEAR_STATE_DETAIL:
      return initialState;

    default:
      return state;
  }
};

export default pokemonDetailReducer;
// {}
