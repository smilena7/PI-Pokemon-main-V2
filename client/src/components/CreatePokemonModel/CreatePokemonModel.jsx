import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonCreateAction } from "../../actions/PokemonCreateAction";
import { pokemonsAction } from "../../actions/pokemonsAction";
import close from "../../images/close.svg";

import style from "./CreatePokemonModel.module.css";

const CreatePokemonModel = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.pokemonsByTypes.data);

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
    vida: "",
    fuerza: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
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
  console.log(data, "tipos");

  const submit = async (e) => {
    e.preventDefault();
    dispatch(pokemonCreateAction(data));
    dispatch(pokemonsAction());
  };

  return ReactDOM.createPortal(
    <div className={style.backgroundCreatePortalModal}>
      <div className={style.modalWrapper}>
        <form action="POST" className={style.form} onSubmit={submit}>
          {/* Titulo e img */}
          <div>
            <div className={style.containerTituloCreatePokemonModel}>
              <h1 className={style.tituloCPM}>
                Crea el Pokemón de tu preferencia
              </h1>
              <img
                src={close}
                alt="close"
                className={style.closeCPM}
                onClick={() => setOpenModal(false)}
              />
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
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
                <div className={style.question}>
                  <label>Fuerza:</label>
                  <input
                    type="number"
                    name="fuerza"
                    value={data.fuerza}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
                <div className={style.question}>
                  <label>Defensa:</label>
                  <input
                    type="number"
                    name="defensa"
                    value={data.defensa}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
                <div className={style.question}>
                  <label>Velocidad:</label>
                  <input
                    type="number"
                    name="velocidad"
                    value={data.velocidad}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
                <div className={style.question}>
                  <label>Altura:</label>
                  <input
                    type="number"
                    name="altura"
                    value={data.altura}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
                <div className={style.question}>
                  <label>Peso:</label>
                  <input
                    type="number"
                    name="peso"
                    value={data.peso}
                    onChange={handleInputChange}
                    placeholder="0"
                    className={style.stats}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tipos */}
          <div className={style.containerH1InputsCreatePokemonModel}>
            <h1>Tipos:</h1>
            <div className={style.containerTiposCPM}>
              {options?.map((type) => (
                <div key={type.id} className={style.divInputTipos}>
                  <input
                    type="checkbox"
                    name={type.name}
                    value={type.name}
                    id={type.id}
                    onChange={checkbox}
                  />
                  <label htmlFor={type.name}>{type.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className={style.containButtonFooter}>
            <input type="submit" value="Crear" className={style.submit} />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default CreatePokemonModel;
