import axios from "axios";
import {
  POST_POKEMON_CREATE,
  IS_LOADING_POKEMON_CREATE,
  ERROR_POKEMON_CREATE,
} from "../types";

export const pokemonCreateAction = (data) => async (dispatch) => {
  dispatch({
    type: IS_LOADING_POKEMON_CREATE,
  });
  try {
    const URL = process.env.REACT_APP_BASE_URL;
    const response = await axios.post(`${URL}/api/pokemons`, {
      name: data.name,
      vida: Number(data.vida),
      fuerza: Number(data.fuerza),
      defensa: Number(data.defensa),
      velocidad: Number(data.velocidad),
      altura: Number(data.altura),
      peso: Number(data.vida),
      tipos: data.tipos,
      ataque: 1,
      imagen: "https://www.linkpicture.com/q/PngItem_958057.png",
    });
    dispatch({
      type: POST_POKEMON_CREATE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR_POKEMON_CREATE,
      payload: error.message,
    });
  }
};
