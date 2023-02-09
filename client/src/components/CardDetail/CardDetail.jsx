import React from "react";
//import getColorByPokemonType from "../../utils/getColorByPokemonType";
import TypeDetail from "../../components/TypeDetail/TypeDetail";
import StatsDetail from "../../components/StatsDetail/StatsDetail";
//import style from "./CardDetail.module.css";
import "./CardDetail.css";

export const CardDetail = (props) => {
  const { id, name, type, img, hp, attack, defense, speed, height, weight } =
    props.pokemonDetail;

  return (
    <div className="containerCardDetail">
      <div className="pokemon-image-container">
        <div>
          <h1 className="text-center">
            N.º {id} {name}
          </h1>
          <img
            src={img}
            className="img-fluid pokemon-image-detail d-block mx-auto"
            alt={name}
          />
          <TypeDetail type={type} />
        </div>
        <div className="pokemon-box-details">
          <StatsDetail
            hp={hp}
            attack={attack}
            defense={defense}
            speed={speed}
          />
        </div>
      </div>
    </div>
  );
};

/*  {/* <div>
      <div className={style.bg}></div>
      <div className={style.contentCardDetail}>
        <div className={style.headerCardDetail}>
          <h2 className={style.nameCardDetail}>{name}</h2>
        </div>
        <div className={style.contentImgCardDetail}>
          <img src={img} className={style.imgCardDetail} alt={name} />
        </div>
      </div>
      <TypeDetail type={type} />
      <StatsDetail hp={hp} attack={attack} defense={defense} speed={speed} />
    </div> } */
