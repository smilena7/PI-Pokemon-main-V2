import React from "react";
import style from "./TypeDetail.module.css";

export const getTypeStyle = (type) => {
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
  return { backgroundColor, color: "#FFF", margin: "20px 20px 20px 20px" };
};
const TypeDetail = (props) => {
  const { type, Tipos } = props;
  const tipoDb = Tipos?.map((tipo) => tipo.name);
  console.log("hola", tipoDb);
  return (
    <>
      <div style={{ marginLeft: "120px" }}>
        <p className={style.pokemonListDetail} style={getTypeStyle(type)}>
          {type}
        </p>
      </div>
      <div className={style.containArray}>
        {Tipos?.map((tipo) => (
          <p
            className={style.pokemonListDetailArray}
            style={getTypeStyle(type)}
          >
            {tipo.name}
          </p>
        ))}
      </div>
    </>
  );
};

export default TypeDetail;
