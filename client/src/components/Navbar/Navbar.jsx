import React from "react";
import { createPokemonsByAction } from "../../actions/pokemonsAction";
import { useDispatch } from "react-redux";
import Search from "../Search/Search";
import style from "./Navbar.module.css";

const Navbar = ({
  pokemonsTypes,
  setPokemonType,
  setOrderPokemonBy,
  setOpenModal,
}) => {
  const dispatch = useDispatch();

  const handleFilterByType = (e) => {
    setPokemonType(e.target.value);
  };

  const handleOrderBy = (e) => {
    setOrderPokemonBy(e.target.value);
  };

  const handleCreateBy = (e) => {
    dispatch(createPokemonsByAction(e.target.value));
  };

  return (
    <div className={style.homeContainer}>
      <div>
        <Search setOpenModal={setOpenModal} />
      </div>
      <div className={style.createBy}>
        {/*  Filtrado por tipos */}
        <select name="" id="" onChange={(e) => handleFilterByType(e)}>
          <option value="">Tipos:</option>
          {pokemonsTypes?.map((type) => (
            <option value={type.name} key={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        {/*  Ordenado por existente o creado por nosotros */}
        <select name="" id="" onChange={(e) => handleCreateBy(e)}>
          <option value="creado">Creado por:</option>
          <option value="API">API</option>
          <option value="HStudent">Henry Student</option>
        </select>

        {/*  Ordenado por asce/desce, alfbtco y ataque */}
        <select name="" id="" onChange={(e) => handleOrderBy(e)}>
          <option value="ordenar">Ordenar por:</option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
          <option value="++fuerza">++Fuerza</option>
          <option value="--fuerza">--Fuerza</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
