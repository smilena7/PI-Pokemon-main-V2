import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonCreateAction } from "../../actions/PokemonCreateAction";

import style from "./CreatePokemonModel.module.css";

const CreatePokemonModel = ({ setOpenModal }) => {
  // Manejamos los errores
  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "El nombre del pokemón es necesario";
    }
    return errors;
  };

  // Manejado los estados
  const [data, setData] = useState({
    name: "",
    vida: 0,
    fuerza: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    tipos: [],
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    if (e.target.name !== "name") {
      setData({
        ...data,
        [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value,
      });
    } else {
      setErrors(
        validate({
          ...data,
          [e.target.name]: e.target.value,
        })
      );
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkbox = (e) => {
    if (data.tipos.includes(e.target.value)) {
      data.tipos = data.tipos.filter((id) => id !== e.target.value);
      setData({
        ...data,
        tipos: data.tipos,
      });
    } else {
      setData({
        ...data,
        tipos: [...data.tipos, e.target.value],
      });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
  };

  return ReactDOM.createPortal(
    <div className={style.backgroundCreatePortalModal}>
      <div className={style.modalWrapper}>
        <form action="POST" className={style.form} onSubmit={submit}>
          {/* Titulo y boton */}
          <div>
            <div className={style.containerTituloCreatePokemonModel}>
              <h1 className={style.tituloCPM}>
                Crea el Pokemón de tu preferencia:
              </h1>
              <button
                className={style.btonCPM}
                onClick={() => setOpenModal(false)}
              >
                X
              </button>
            </div>

            {/* labels e inputs */}
            <div className={style.contenerContenedor}>
              <div className={style.containerInputsCreatePokemonModel}>
                <div className={errors.name ? style.danger : style.question}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    placeholder="pikachu"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {errors.name ? (
                  <p className="danger">{errors.username}</p>
                ) : null}
                <div className={style.question}>
                  <label>Vida:</label>
                  <input
                    type="number"
                    name="vida"
                    value={data.vida}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.question}>
                  <label>Fuerza:</label>
                  <input
                    type="number"
                    name="fuerza"
                    value={data.fuerza}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.question}>
                  <label>Defensa:</label>
                  <input
                    type="number"
                    name="defensa"
                    value={data.defensa}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.question}>
                  <label>Velocidad:</label>
                  <input
                    type="number"
                    name="velocidad"
                    value={data.velocidad}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.question}>
                  <label>Altura:</label>
                  <input
                    type="number"
                    name="altura"
                    value={data.altura}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.question}>
                  <label>Peso:</label>
                  <input
                    type="number"
                    name="peso"
                    value={data.peso}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tipos */}
          <div className={style.containerH1InputsCreatePokemonModel}>
            <h1>Tipos:</h1>
            <div className={style.containerTiposCPM}>
              <input
                type="checkbox"
                name="{tipos.name}"
                value="{tipos...}"
                id="{tipos...}"
                onChange={checkbox}
              />
              <input type="submit" value="Crear" className={style.submit} />
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default CreatePokemonModel;
