import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importamos la accion
import { pokemonsAction } from "../../actions/pokemonsAction";
import { pokemonByTypeAction } from "../../actions/pokemonByTypeAction";
import loading from "../../images/loading.gif";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

// {}

const Home = () => {
  const [pokemonType, setPokemonType] = useState("");
  const [filterByType, setFilterByType] = useState([]);

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const pokemons = useSelector((state) => state.pokemons.data);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const pokemonsTypes = useSelector((state) => state.pokemonsByTypes.data);

  useEffect(() => {
    if (pokemons.length === 0 || pokemonsTypes.length === 0) {
      dispatch(pokemonsAction());
      dispatch(pokemonByTypeAction());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <img src={loading} alt="loading..." className={style.loading} />
      </>
    );
  }

  return (
    <div>
      <div>
        <Navbar pokemonsTypes={pokemonsTypes} setPokemonType={setPokemonType} />
      </div>
      <div className={style.containerHome}>
        {pokemons
          ? pokemons.map((pokemon) => {
              return <Card pokemon={pokemon} key={pokemon.id} />;
            })
          : "holaaa"}
      </div>
    </div>
  );
};

export default Home;
// {}
