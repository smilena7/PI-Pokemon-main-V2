import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = (type) => {
  console.log(type, "type");
  return POKEMON_TYPE_COLORS[type?.toLowerCase()];
};
export default getColorByPokemonType;
