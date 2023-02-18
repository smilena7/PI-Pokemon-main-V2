// Importando react y redux
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando la accion
import { pokemonsAction } from "../../actions/pokemonsAction";
import { pokemonByTypeAction } from "../../actions/pokemonByTypeAction";
import { clearDetailPoKemon } from "../../actions/pokemonDetailAction";
//import { clearCreatePoKemon } from "../../actions/PokemonCreateAction";
import { clearAllPoKemons } from "../../actions/pokemonsAction";
import { clearPoKemonName } from "../../actions/pokemonByNameAction";

// Importando imagenes
import loading from "../../images/loading.gif";
import pikachu from "../../images/pikachu.png";

// Importando componentes
import Navbar from "../../components/Navbar/Navbar";
import CardHome from "../../components/CardHome/CardHome";
import Paged from "../../components/Paged/Paged";
import CreatePokemonModel from "../../components/CreatePokemonModel/CreatePokemonModel";
import ModalErrorHome from "../../components/ModalErrorHome/ModalErrorHome";
// Importando los filtrados de utils
import { tipos, ordenado } from "../../utils/filtros";
// Importando estilos
import style from "./Home.module.css";
import { pokemonTypeNameAction } from "../../actions/pokemonTypeNameAction";

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
  const isLoadingName = useSelector((state) => state.pokemonName.isLoading);
  const isLoadingPokemonTypeName = useSelector(
    (state) => state.pokemonTypeName.isLoading
  );
  const pokemonsTypes = useSelector((state) => state.pokemonsByTypes.data);
  const pokemonDetail = useSelector((state) => state.pokemonDetail.data);
  const pokemonCreate = useSelector((state) => state.pokemonCreate.data);
  const pokemonsError = useSelector((state) => state.pokemons.error);
  const pokemonNameError = useSelector((state) => state.pokemonName.error);
  const pokemonTypeName = useSelector((state) => state.pokemonTypeName.data);

  // Filtrando los tipos de pokemons (el filtro lo realizo en utils)
  if (pokemonType) pokemons = tipos(pokemonType, pokemons);
  if (orderPokemonBy) pokemons = ordenado(orderPokemonBy, pokemons);
  if (pokemonType) pokemons = tipos(pokemonType, pokemonTypeName);

  //if (pokemonType) pokemons = tipos(pokemonType, pokemons);

  useEffect(() => {
    if (pokemons?.length === 0 || pokemonsTypes.length === 0) {
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
    if (pokemonType) {
      //dispatch del nuevo action y se le pasa el parametro (e.target.value)
      dispatch(pokemonTypeNameAction(pokemonType));
    }
  }, [dispatch, pokemonCreate, pokemonDetail, pokemonType]);

  // Paginado
  const maxPage = pokemons?.length / porPage;

  return (
    <div>
      <div>
        <Navbar
          pokemonsTypes={pokemonsTypes}
          setPokemonType={setPokemonType}
          setOrderPokemonBy={setOrderPokemonBy}
          setCreatePokemonBy={setCreatePokemonBy}
          createPokemonBy={createPokemonBy}
          clearPoKemonName={clearPoKemonName}
          setOpenModal={setOpenModal}
        />
      </div>
      <div>
        {isLoading || isLoadingName || isLoadingPokemonTypeName ? (
          <div className={style.containLoading}>
            <img src={loading} alt="loading..." className={style.loading} />
          </div>
        ) : pokemonNameError ? (
          <div className={style.containPikachu}>
            <img className={style.pikachu} src={pikachu} alt="pikachu" />
            <div className={style.txtErrorName}>{pokemonNameError}</div>
          </div>
        ) : (
          <div className={style.containerHome}>
            {pokemons
              ? pokemons
                  .slice((page - 1) * porPage, (page - 1) * porPage + porPage)
                  .map((pokemon) => {
                    return <CardHome pokemon={pokemon} key={pokemon.id} />;
                  })
              : ""}
          </div>
        )}
      </div>
      <div>
        <Paged page={page} setPage={setPage} maxPage={maxPage} />
      </div>
      {openModal && <CreatePokemonModel setOpenModal={setOpenModal} />}

      {/* Manejo del error en el front */}
      {pokemonsError && (
        <ModalErrorHome error={pokemonsError} closeModal={clearAllPoKemons} />
      )}
    </div>
  );
};

export default Home;
// {}
