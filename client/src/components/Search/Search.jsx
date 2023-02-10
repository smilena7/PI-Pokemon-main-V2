import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonByNameAction } from "../../actions/pokemonByNameAction";
import { pokemonsAction } from "../../actions/pokemonsAction";

import style from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState("");

  const handleInputChange = (e) => {
    setNamePokemon(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(pokemonByNameAction(namePokemon));
    setNamePokemon("");
  };

  const handleCleanPokemon = (e) => {
    dispatch(pokemonsAction());
  };

  return (
    <div className={style.containerSearch}>
      <form onSubmit={submit}>
        <div className={style.formContainer}>
          <div>
            <input
              className={style.searchName}
              type="text"
              id="searchterm"
              value={namePokemon}
              onChange={handleInputChange}
              placeholder="Escribe tu pokemón favorito..."
            />
          </div>
          <div className={style.containerButtons}>
            <button className={style.searchBtn} onClick={submit} value="Buscar">
              Buscar
            </button>
            <button className={style.searchBtn} onClick={handleCleanPokemon}>
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;

// rafce = shortcut arrow function
