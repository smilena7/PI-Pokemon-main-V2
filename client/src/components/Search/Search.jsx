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
    <div className={style.container}>
      <form onSubmit={submit}>
        <div className={style.field}>
          <input
            type="text"
            id="searchterm"
            value={namePokemon}
            onChange={handleInputChange}
            placeholder="Busca tu pokemón favorito..."
          />
          <input className={style.button} type="submit" value="Buscar" />
          <button onClick={handleCleanPokemon}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default Search;

// rafce = shortcut arrow function
