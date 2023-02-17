const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js");

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

const getTypeName = async function (req, res) {
  try {
    const typesNameApi = await axios(
      "https://pokeapi.co/api/v2/type/" + req.query.name
    );
    const types = typesNameApi.data.pokemon;

    const typesName = await Pokemon.findAll({
      include: [
        {
          where: {
            name: req.query.name,
          },
          model: Tipo,
          as: "Tipos",
          attributes: ["name"],
        },
      ],
    });

    const list = [...typesName];

    for await (const item of types.slice(0, 40)) {
      const { data } = await axios(item.pokemon.url);

      list.push({
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        imagen: data.sprites.other["official-artwork"].front_default,
        fuerza: data.stats[1].base_stat,
      });
    }

    res.status(200).send(list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.getAllTypes = getAllTypes;
module.exports.getTypeName = getTypeName;

/**
 - [ ] **GET /types**:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
 */
