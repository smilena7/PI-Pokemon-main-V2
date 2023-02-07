const axios = require("axios");

const { Pokemon, Tipo, PokemonTipo } = require("../db.js");

// *GET /pokemons*
const getAllPokemons = async function (req, res) {
  try {
    const result = await axios(
      "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
    );
    const pokeApi = result.data;

    // Llamamos a cada uno de los pokemons por url
    let pokemonsArray = [];

    // Pero primero necesitamos extraer la url de cada pokemon
    for await (const pokemon of pokeApi.results) {
      const { data } = await axios(pokemon.url);

      pokemonsArray.push({
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        imagen: data.sprites.other["official-artwork"].front_default,
      });
    }

    const dbData = await Pokemon.findAll();
    const pokeDB = dbData.map((e) => e.dataValues);
    const concatPokemons = pokemonsArray.concat(pokeDB);

    console.log(concatPokemons, "dbData");

    // Inyectar a la base de datos todos los pokemones de la api oficial (pokeApi)
    // Investigar como inyectar un array a la tabla de mi DB

    // leer documentacion de sequelize para mirar como mejorar los tiempos de respuesta.

    console.log(res, "res");
    res.status(200).send(concatPokemons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// *GET /pokemons/{idPokemon}*
const getPokemonID = async function (req, res) {
  const { id } = req.params;

  try {
    if (id.includes("-")) {
      const db = await Pokemon.findByPk(id);
      const pokemonDB = {
        id: db.id,
        name: db.name,
        type: db.tipo,
        imagen: db.imagen,
        vida: db.vida,
        ataque: db.ataque,
        defensa: db.defensa,
        velocidad: db.velocidad,
        altura: db.altura,
        peso: db.peso,
      };
      res.status(200).send(pokemonDB);
    } else {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokeApiID = result.data;
      const pokemonID = {
        id: pokeApiID.id,
        name: pokeApiID.name,
        type: pokeApiID.types[0].type.name,
        img: pokeApiID.sprites.other["official-artwork"].front_default,
        hp: pokeApiID.stats[0].base_stat, // accedemos a la informde la api desde api
        attack: pokeApiID.stats[1].base_stat,
        defense: pokeApiID.stats[2].base_stat,
        speed: pokeApiID.stats[5].base_stat,
        height: pokeApiID.height,
        weight: pokeApiID.weight,
      };
      res.status(200).send(pokemonID);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// *GET /pokemons?name="..."*:
const getPokemonName = async function (req, res) {
  const { name } = req.query;
  try {
    // 1. Buscamos todos los pokemons en la db desde name
    const pokeDB = await Pokemon.findAll({
      where: {
        name,
      },
    });

    // 2. Aqui encontramos el pokemon por nombre desde la db
    const pokeNameDB = pokeDB
      .map((e) => e.dataValues)
      ?.find((e) => e.name === name);

    // 5. Entonces:
    let pokeNameApi = null;

    if (pokeNameDB) {
      return res.status(200).send(pokeNameDB);
    } else {
      // 3. Solicitamos todos los pokemons de la api
      try {
        const resultPokeApi = await axios(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const pokeApi = resultPokeApi.data;
        // 4. Aqui encontramos el pokemon por nombre desde la api
        pokeNameApi = pokeApi;
        return res.status(200).send({
          id: pokeNameApi.id,
          name: pokeNameApi.name,
          type: pokeNameApi.types[0].type.name,
          imagen: pokeNameApi.sprites.other["official-artwork"].front_default,
        });
      } catch (err) {
        res.status(404).send({ message: "No se encontró este Pokemón" });
      }
    } // 5.2 Debe estar en la api si no esta en la db
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// *POST /pokemons*:
const postPokemon = async function (req, res) {
  const {
    name,
    tipos,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  } = req.body;

  try {
    if (
      isNaN(vida) ||
      isNaN(ataque) ||
      isNaN(defensa) ||
      isNaN(velocidad) ||
      isNaN(altura) ||
      isNaN(peso)
    )
      return res.status(400).json("Alguno de los datos no es un número");

    if (!name) return res.status(400).json("Es neceario el nombre");

    const existe = await Pokemon.findOne({ where: { name: name } });
    if (existe) return res.status(400).json("El pokemon ya existe");

    const newPokemon = await Pokemon.create(
      {
        name: name.toLowerCase(), // con este metodo convertimos el name en minuscula
        imagen: imagen,
        vida: Number(vida),
        ataque: Number(ataque),
        defensa: Number(defensa),
        velocidad: Number(velocidad),
        altura: Number(altura),
        peso: Number(peso),
      },
      {
        include: [Tipo],
      }
    );

    // Hacemos la relacion del nuevo pokemon con todos los tipos que llegan en el array
    const pokemonTypes = await Tipo.findAll({
      where: {
        name: tipos,
      },
    });

    await newPokemon.addTipos(pokemonTypes);

    const typeID = await Pokemon.findByPk(newPokemon.id, {
      include: [
        {
          model: Tipo,
          as: "Tipos",
        },
      ],
    });

    res.status(200).send(typeID.dataValues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllPokemons, getPokemonID, getPokemonName, postPokemon };

// {}

/*

- [ ] *GET /pokemons/{idPokemon}*:
  - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

Nota ilustrativa:
hp: pokeApiID.stats[0].base_stat,
Aqui accedemos a la informacion de la api desde api desde
.stats, luego a la posicion .stats[0], y lueho donde esta la info realmente .base_stat. Por eso queda asi.


  UUID genera ids -, entonces:
if (id.includes("-")) {
  deberian buscar en la DB
} else {
  deberia hacerse un llamado por axios desde la api id
}
*/
