/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POKEMON_DETAIL,
  IS_LOADING_POKEMON_DETAIL,
  ERROR_POKEMON_DETAIL,
  CLEAR_STATE_DETAIL,
  DELETE_MY_POKEMON,
} from "../types";

const initialState = {
  data: {},
  pokemonDelete: {},
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

    case DELETE_MY_POKEMON:
      return {
        ...state,
        pokemonDelete: action.payload.id,
      };

    default:
      return state;
  }
};

export default pokemonDetailReducer;
// {}
