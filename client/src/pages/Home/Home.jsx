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
import CardHome from "../../components/CardHome/CardHome";
import Paged from "../../components/Paged/Paged";

// Importando los filtrados de utils
import { tipos, ordenado } from "../../utils/filtros";
// Importando estilos
import style from "./Home.module.css";
import CreatePokemonModel from "../../components/CreatePokemonModel/CreatePokemonModel";
import { clearDetailPoKemon } from "../../actions/pokemonDetailAction";
import { clearCreatePoKemon } from "../../actions/PokemonCreateAction";

// {}

const Home = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Estados
  const [pokemonType, setPokemonType] = useState("");
  const [orderPokemonBy, setOrderPokemonBy] = useState("");
  const [createPokemonBy, setCreatePokemonBy] = useState("");
  const [page, setPage] = useState(1);
  const [porPage, setPorPage] = useState(12);
  const [openModal, setOpenModal] = useState(false);

  // Selector
  let pokemons = useSelector((state) => state.pokemons.data);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const pokemonsTypes = useSelector((state) => state.pokemonsByTypes.data);
  const pokemonDetail = useSelector((state) => state.pokemonDetail.data);
  const pokemonCreate = useSelector((state) => state.pokemonCreate.data);

  // Filtrando los tipos de pokemons
  if (pokemonType) pokemons = tipos(pokemonType, pokemons);
  if (orderPokemonBy) pokemons = ordenado(orderPokemonBy, pokemons);

  useEffect(() => {
    if (pokemons.length === 0 || pokemonsTypes.length === 0) {
      dispatch(pokemonsAction());
      dispatch(pokemonByTypeAction());
    }
    if (pokemonDetail.id) {
      dispatch(clearDetailPoKemon());
    }
    if (pokemonCreate.id) {
      //dispatch(clearCreatePoKemon());
      setOpenModal(false);
    }
  }, [dispatch, pokemonCreate, pokemonDetail]);

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
          setOpenModal={setOpenModal}
        />
      </div>
      <div>
        {isLoading ? (
          <div className={style.containLoading}>
            <img src={loading} alt="loading..." className={style.loading} />
          </div>
        ) : (
          <div className={style.containerHome}>
            {pokemons
              ? pokemons
                  .slice((page - 1) * porPage, (page - 1) * porPage + porPage)
                  .map((pokemon) => {
                    return <CardHome pokemon={pokemon} key={pokemon.id} />;
                  })
              : "holaaa"}
          </div>
        )}
      </div>
      <div>
        <Paged page={page} setPage={setPage} maxPage={maxPage} />
      </div>
      {openModal && <CreatePokemonModel setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Home;
// {}
