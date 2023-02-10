import React from "react";
import TypeDetail from "../../components/TypeDetail/TypeDetail";
import StatsDetail from "../../components/StatsDetail/StatsDetail";
import style from "./CardDetail.module.css";

export const CardDetail = (props) => {
  const { id, name, type, img, hp, attack, defense, speed, height, weight } =
    props.pokemonDetail;

  return (
    <div className={style.containerCardDetail}>
      <div className={style.pokemonImageContainer}>
        <div>
          <h1 className={style.textCenter}>
            N.º {id} - {name}
          </h1>
          <img src={img} className={style.pokemonImageDetail} alt={name} />

          <TypeDetail type={type} />

          <div className={style.containerHeightWeight}>
            <p className={style.heightWeight}>Altura: {height}</p>
            <p className={style.heightWeight}>Peso: {weight}</p>
          </div>
        </div>
        <div>
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
