const axios = require("axios");

const { Pokemon } = require("../db.js");

// **GET /pokemons**
const getAllPokemons = async function (req, res) {
  try {
    const result = await axios(
      "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
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

    // Inyectar a la base de datos todos los pokemones de la api oficial (pokeApi)
    // Investigar como inyectar un array a la tabla de mi DB

    res.status(200).send(pokemonsArray);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// **GET /pokemons/{idPokemon}**
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
      console.log(pokemonID, "hola");
      res.status(200).send(pokemonID);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// **GET /pokemons?name="..."**:
const getPokemonName = async function (req, res) {
  const { name } = req.query;
  try {
    // 1. Buscamos todos los pokemons en la db desde name
    const pokeDB = await Pokemon.findAll({
      where: {
        name,
      },
    });

    console.log("hola");

    // 2. Aqui encontramos el pokemon por nombre desde la db
    const pokeNameDB = pokeDB
      .map((e) => e.dataValues)
      .find((e) => e.name === name);

    // 3. Solicitamos todos los pokemons de la api
    const resultPokeApi = await axios(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const pokeApi = resultPokeApi.data;
    // 4. Aqui encontramos el pokemon por nombre desde la api
    const pokeNameApi = pokeApi;

    // 5. Entonces:
    if (!pokeNameDB && !pokeNameApi)
      return res.status(400).json("No se encontró este Pokemón"); // 5.1 Error si se encuetra en la db NI en la api
    if (!pokeNameDB) return res.status(200).send(pokeNameApi); // 5.2 Debe estar en la api si no esta en la db
    if (!pokeNameApi) return res.status(200).send(pokeNameDB); // 5.3 Debe estar en la db si no esta en la api
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
- Si no existe ningún pokemon mostrar un mensaje adecuado */

// **POST /pokemons**:
const postPokemon = async function (req, res) {
  const { name, tipo, imagen, vida, ataque, defensa, velocidad, altura, peso } =
    req.body;

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

    const newPokemon = await Pokemon.create({
      name: name.toLowerCase(), // con este metodo convertimos el name en minuscula
      tipo: tipo,
      imagen: imagen,
      vida: Number(vida),
      ataque: Number(ataque),
      defensa: Number(defensa),
      velocidad: Number(velocidad),
      altura: Number(altura),
      peso: Number(peso),
    });

    // Inyectar a la base de datos el pokemon creado donde estan los demas pokemones

    // hacemos la relacion de las bases de datos (pokemon y tipo)

    res.status(200).send("Pokemón creado exitosamente");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos. */

module.exports = { getAllPokemons, getPokemonID, getPokemonName, postPokemon };

// {}

/*

- [ ] **GET /pokemons/{idPokemon}**:
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
