import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonCreateAction } from "../../actions/PokemonCreateAction";
import { pokemonsAction } from "../../actions/pokemonsAction";
import close from "../../images/close.svg";

import style from "./CreatePokemonModel.module.css";

const CreatePokemonModel = ({ setOpenModal }) => {
  const [errors, setErrors] = useState({});

  let pokemonsExistentes = useSelector((state) => state.pokemons.data);

  const dispatch = useDispatch();
  const options = useSelector((state) => state.pokemonsByTypes.data);

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

  // Manejamos las validaciones
  //const regexNumber = /[^0-9]/g;
  const validate = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = "El nombre del pokemón es necesario";
    }
    // Validando vida
    if (data.vida > 180) {
      errors.vida = "La vida no puede ser mayor a 180";
    }
    // Validando fuerza
    if (data.fuerza > 180) {
      errors.fuerza = "La fuerza no puede ser mayor a 180";
    }
    // Validando defensa
    if (data.defensa > 180) {
      errors.defensa = "La defensa no puede ser mayor a 180";
    }
    // Validando velocidad
    if (data.velocidad > 180) {
      errors.velocidad = "La velocidad no puede ser mayor a 180";
    }
    // Validando altura
    if (data.altura > 300) {
      errors.altura = "La altura no puede ser mayor a 300";
    }
    // Validando peso
    if (data.peso > 300) {
      errors.peso = "El peso no puede ser mayor a 300";
    }

    return errors;
  };

  const validateName = (data) => {
    const pokemon = pokemonsExistentes.filter((e) => e.name === data.name);
    return pokemon;
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
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
    // prevenimos el comportamiento por defecto del submit, para que no e actualice la pagina al dar click en submit
    e.preventDefault();
    if (!errors.name && data.name) {
      const pokemonCreado = validateName(data);
      if (pokemonCreado.length) {
        alert("Debes ecoger otro nombre, el pokemón ya existe");
      } else {
        dispatch(pokemonCreateAction(data));
        dispatch(pokemonsAction());
      }
    }
  };

  return ReactDOM.createPortal(
    <div className={style.backgroundCreatePortalModal}>
      <div className={style.modalWrapper}>
        <form action="POST" className={style.form} onSubmit={(e) => submit(e)}>
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
                <div className={style.question}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    placeholder="pikachu"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    className={errors.name ? style.inputErros : ""}
                  />
                </div>
                {errors.name ? (
                  <p className={style.danger}>{errors.name}</p>
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
                {errors.vida ? (
                  <p className={style.danger}>{errors.vida}</p>
                ) : null}
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
                {errors.fuerza ? (
                  <p className={style.danger}>{errors.fuerza}</p>
                ) : null}
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
                {errors.defensa ? (
                  <p className={style.danger}>{errors.defensa}</p>
                ) : null}
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
                {errors.velocidad ? (
                  <p className={style.danger}>{errors.velocidad}</p>
                ) : null}
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
                {errors.altura ? (
                  <p className={style.danger}>{errors.altura}</p>
                ) : null}
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
                {errors.peso ? (
                  <p className={style.danger}>{errors.peso}</p>
                ) : null}
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
            <input
              type="submit"
              value="Crear"
              className={style.submit}
              disabled={errors.name || !data.name}
            />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default CreatePokemonModel;
