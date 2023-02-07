import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const URL = "http://localhost:3001/api/pokemons";
  useEffect(() => {
    axios.get(URL).then((res) => setPokemons(res.data));
  }, []);
  return (
    <>
      {pokemons
        ? pokemons.map((pokemon) => {
            return <h1>{pokemon.name}</h1>;
          })
        : "hola"}
      <div>Home</div>
    </>
  );
};

export default Home;
