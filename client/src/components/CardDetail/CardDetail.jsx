import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePokemon } from "../../actions/pokemonDetailAction";
import TypeDetail from "../../components/TypeDetail/TypeDetail";
import StatsDetail from "../../components/StatsDetail/StatsDetail";
import back from "../../images/back.svg";
import loading from "../../images/loading.gif";
import trash from "../../images/trash.svg";

import style from "./CardDetail.module.css";

export const CardDetail = (props) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    type,
    Tipos,
    img,
    imagen,
    hp,
    vida,
    attack,
    ataque,
    defense,
    defensa,
    speed,
    velocidad,
    height,
    altura,
    weight,
    peso,
  } = props.pokemonDetail;

  const isLoading = useSelector((state) => state.pokemonDetail.isLoading);

  const getTypeStyle = (type) => {
    let backgroundColor = "";
    let color = "";
    switch (type) {
      case "grass":
        backgroundColor = "#9bcc50";
        color = "#FFF";
        break;
      case "poison":
        backgroundColor = "#b97fc9";
        color = "#FFF";
        break;
      case "fire":
        backgroundColor = "#fd7d24";
        color = "#FFF";
        break;
      case "flying":
        backgroundColor = "#3dc7ef";
        color = "#FFF";
        break;
      case "water":
        backgroundColor = "#4592c4";
        color = "#FFF";
        break;
      case "bug":
        backgroundColor = "#729f3f";
        color = "#FFF";
        break;
      case "normal":
        backgroundColor = "#a4acaf";
        color = "#FFF";
        break;
      case "electric":
        backgroundColor = "#eed535";
        color = "#FFF";
        break;
      case "ground":
        backgroundColor = "#ab9842";
        color = "#FFF";
        break;
      case "fairy":
        backgroundColor = "#fdb9e9";
        color = "#FFF";
        break;
      case "fighting":
        backgroundColor = "#d56723";
        color = "#FFF";
        break;
      case "psychic":
        backgroundColor = "#f366b9";
        color = "#FFF";
        break;
      case "rock":
        backgroundColor = "#a38c21";
        color = "#FFF";
        break;
      case "steel":
        backgroundColor = "#9eb7b8";
        color = "#FFF";
        break;
      case "ghost":
        backgroundColor = "#7b62a3";
        color = "#FFF";
        break;
      case "ice":
        backgroundColor = "#51c4e7";
        color = "#FFF";
        break;
      case "dragon":
        backgroundColor = "#f16e57";
        color = "#FFF";
        break;

      default:
        backgroundColor = "#f4d54c";
        color = "white";

        break;
    }
    return { backgroundColor, color };
  };

  const stylos = getTypeStyle(type);

  function onDeletePokemon(id) {
    if (typeof id === "number") {
      return alert("Solo puedes eliminar los pokemons que hayas creado");
    } else {
      dispatch(deletePokemon(id));
      window.location.href = "/home";
    }
  }

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
              <div className={style.containerBackH1}>
                <Link to="/home">
                  <img src={back} alt="back" />
                </Link>
                <h1 className={style.textCenter}>
                  N.º {id} - {name}
                </h1>
              </div>
              <img
                src={img || imagen}
                className={style.pokemonImageDetail}
                alt={name}
              />
              <TypeDetail Tipos={Tipos} type={type} />
              <div className={style.containerHeightWeight}>
                <p className={style.heightWeight}>Altura: {height || altura}</p>
                <p className={style.heightWeight}>Peso: {weight || peso}</p>
              </div>
            </div>
            <div>
              <div className={style.containerBtonExtra}>
                <img
                  src={trash}
                  alt="trash"
                  className={style.btonExtra}
                  onClick={() => onDeletePokemon(id)}
                />
              </div>
              <StatsDetail
                hp={hp || vida}
                attack={attack || ataque}
                defense={defense || defensa}
                speed={speed || velocidad}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
