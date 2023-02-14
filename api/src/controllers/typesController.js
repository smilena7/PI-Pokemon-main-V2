const axios = require("axios");
const { Tipo } = require("../db.js");

const getAllTypes = async function (req, res) {
  try {
    // 1. Get de los tipos desde la api
    const typesApi = await axios("https://pokeapi.co/api/v2/type");
    const types = typesApi.data.results;

    // 2. Iteramos los tipos de la api para buscar o crear un tipo
    types.forEach((e) => {
      Tipo.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });
    // 3. Buscamos todos los tipos de la db
    const allTypes = await Tipo.findAll();
    res.status(200).send(allTypes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAllTypes;

/**
 - [ ] **GET /types**:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */
