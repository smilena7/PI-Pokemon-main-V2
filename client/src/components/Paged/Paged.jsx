import React, { useState } from "react";
import style from "./Paged.module.css";

const Paged = ({ pokemons }) => {
  const [page, setPage] = useState(0);

  const paged = () => {
    if (pokemons.length) return pokemons.slice(page, page + 9);
    if (pokemons.info) return pokemons;
    return [];
  };

  const array = paged();

  const nextPokePage = () => {
    if (pokemons.length > page + 9) {
      setPage(page + 9);
    }
  };

  const previusPokePage = () => {
    if (page > 0) {
      setPage(page - 9);
    }
  };
  return (
    <div className={style.containerPaged}>
      <div className={style.botones}>
        <button onClick={previusPokePage} className={style.pages}>
          &laquo; Anterior
        </button>
        <button onClick={nextPokePage} className={style.pages}>
          Siguiente &raquo;
        </button>
      </div>
    </div>
  );
};

export default Paged;
