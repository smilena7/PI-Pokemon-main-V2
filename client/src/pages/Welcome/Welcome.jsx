import React from "react";
import logo from "../../images/pokemon-logo.png";
import ash from "../../images/pikachu-ash.png";
import style from "./Welcome.module.css";
import { Link } from "react-router-dom";

// rafce = shortcut arrow function

const Welcome = () => {
  return (
    <div>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <div>
          <Link to="/home">
            <button className={style.myButton}>Home</button>
          </Link>
        </div>
        <img src={ash} alt="Pikachu & Ash" className={style.ash} />
      </div>
    </div>
  );
};

export default Welcome;
