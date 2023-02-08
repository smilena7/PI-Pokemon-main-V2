import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//importamos la accion
import { pokemonsAction } from "../../actions/pokemonsAction";
import loading from "../../images/loading.gif";
import style from "./Home.module.css";

const Home = () => {
  //dispatch
  const dispatch = useDispatch();

  //selector
  const pokemons = useSelector((state) => state.pokemons.data);
  const isLoading = useSelector((state) => state.pokemons.isLoading);

  useEffect(() => {
    dispatch(pokemonsAction());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <img src={loading} alt="loading..." className={style.loading} />
      </>
    );
  }

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
// {}
