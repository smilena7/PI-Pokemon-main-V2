import React, { useState } from "react";
import style from "./Paged.module.css";

const Paged = ({ page, setPage, maxPage }) => {
  const [input, setInput] = useState(1);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setPage(parseInt(e.target.value));
      if (
        // en caso dado de que el numero sea menor a 1 o mayor al amximo o no sea un numero, entonces:
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maxPage) ||
        isNaN(parseInt(e.target.value))
      ) {
        setInput(1);
        setPage(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const previousPage = () => {
    setPage(page - 1);
    setInput(input - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
    setInput(input + 1);
  };

  return (
    <div className={style.containerPaged}>
      <button
        disabled={page === 1 || page < 1}
        onClick={previousPage}
        className={style.pages}
      >
        &laquo; Anterior
      </button>
      <input
        onKeyDown={(e) => onKeyDown(e)}
        onChange={(e) => onChange(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p>de {Math.ceil(maxPage)}</p>
      <button
        disabled={page === Math.ceil(maxPage) || page > Math.ceil(maxPage)}
        onClick={nextPage}
        className={style.pages}
      >
        Siguiente &raquo;
      </button>
    </div>
  );
};

export default Paged;
