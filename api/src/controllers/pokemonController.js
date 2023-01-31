const axios = require("axios");

// {}

const getPokemon = async function (req, res) {
  try {
    const result = await axios(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const pokeApi = result.data;

    //llamamos a cada uno de los pokemons por url
    let pokemonsArray = [];

    //pero primero necesitamos extraer la url de cada pokemon
    for await (const pokemon of pokeApi.results) {
      const { data } = await axios(pokemon.url);

      pokemonsArray.push({
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        imagen: data.sprites.other["official-artwork"].front_default,
      });
    }
    res.status(200).json(pokemonsArray);
  } catch (error) {
    res.status(500).end("Not found character", error);
  }
};

module.exports = getPokemon;
