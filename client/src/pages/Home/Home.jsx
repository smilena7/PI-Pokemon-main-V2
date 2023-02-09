// Importando react y redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando la accion
import { pokemonsAction } from "../../actions/pokemonsAction";
import { pokemonByTypeAction } from "../../actions/pokemonByTypeAction";
// Importando imagenes
import loading from "../../images/loading.gif";
// Importando componentes
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Paged from "../../components/Paged/Paged";

// Importando los filtrados de utils
import { tipos, ordenado } from "../../utils/filtros";
// Importando estilos
import style from "./Home.module.css";

// {}

const Home = () => {
  const [pokemonType, setPokemonType] = useState("");
  const [orderPokemonBy, setOrderPokemonBy] = useState("");
  const [createPokemonBy, setCreatePokemonBy] = useState("");
  const [page, setPage] = useState(1);
  const [porPage, setPorPage] = useState(12);

  // Dispatch
  const dispatch = useDispatch();

  // Selector
  let pokemons = useSelector((state) => state.pokemons.data);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const pokemonsTypes = useSelector((state) => state.pokemonsByTypes.data);

  // Filtrando los tipos de pokemons
  if (pokemonType) pokemons = tipos(pokemonType, pokemons);
  if (orderPokemonBy) pokemons = ordenado(orderPokemonBy, pokemons);

  useEffect(() => {
    if (pokemons.length === 0 || pokemonsTypes.length === 0) {
      dispatch(pokemonsAction());
      dispatch(pokemonByTypeAction());
    }
  }, [dispatch]);

  /*  if (isLoading) {
    return (
      <>
        <img src={loading} alt="loading..." className={style.loading} />
      </>
    );
  } */
  // Paginado
  const maxPage = pokemons.length / porPage;

  return (
    <div>
      <div>
        <Navbar
          pokemonsTypes={pokemonsTypes}
          setPokemonType={setPokemonType}
          setOrderPokemonBy={setOrderPokemonBy}
          setCreatePokemonBy={setCreatePokemonBy}
          createPokemonBy={createPokemonBy}
        />
      </div>
      <div>
        {isLoading ? (
          <img src={loading} alt="loading..." className={style.loading} />
        ) : (
          <div className={style.containerHome}>
            {pokemons
              ? pokemons
                  .slice((page - 1) * porPage, (page - 1) * porPage + porPage)
                  .map((pokemon) => {
                    return <Card pokemon={pokemon} key={pokemon.id} />;
                  })
              : "holaaa"}
          </div>
        )}
      </div>
      <Paged page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
};

export default Home;
// {}
