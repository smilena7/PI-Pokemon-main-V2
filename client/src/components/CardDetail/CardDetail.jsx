import React from "react";
import TypeDetail from "../../components/TypeDetail/TypeDetail";
import StatsDetail from "../../components/StatsDetail/StatsDetail";
import style from "./CardDetail.module.css";
import { useSelector } from "react-redux";
import loading from "../../images/loading.gif";

export const CardDetail = (props) => {
  const { id, name, type, img, hp, attack, defense, speed, height, weight } =
    props.pokemonDetail;

  const isLoading = useSelector((state) => state.pokemonDetail.isLoading);

  const getTypeStyle = (type) => {
    let backgroundColor = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        break;
      case "water":
        backgroundColor = "#4592c4";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        break;
      case "electric":
        backgroundColor = "#eed535";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
        break;
      case "dragon":
        backgroundColor = "#f16e57";
        break;

      default:
        backgroundColor = "#000";
        break;
    }
    return { backgroundColor, color: "#FFF" };
  };

  const stylos = getTypeStyle(type);
  return (
    <>
      {isLoading ? (
        <div className={style.containLoading}>
          <img src={loading} alt="loading..." className={style.loading} />
        </div>
      ) : (
        <div className={style.containerCardDetail} style={stylos}>
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
      )}
    </>
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
