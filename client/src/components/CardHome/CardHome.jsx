import React from "react";
import { Link } from "react-router-dom";
import style from "./CardHome.module.css";

const CardHome = (props) => {
  const { id, name, type, imagen } = props.pokemon;

  return (
    <>
      <div className={style.container}>
        <Link className={style.link} to={`/detail/${id}`}>
          <h2>{name}</h2>
          <p>{type}</p>
          <img className={style.imagen} src={imagen} alt={name} />
        </Link>
      </div>
    </>
  );
};

export default CardHome;
