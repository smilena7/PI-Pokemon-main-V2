import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearDetailPoKemon,
  pokemonDetailAction,
} from "../../actions/pokemonDetailAction";
import { CardDetail } from "../../components/CardDetail/CardDetail";
import ModalErrorHome from "../../components/ModalErrorHome/ModalErrorHome";

import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail.data);
  const pokemonDetailError = useSelector((state) => state.pokemonDetail.error);

  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState({});

  useEffect(() => {
    let hasValue = Object.entries(pokemonDetail).length === 0;
    if (hasValue) return dispatch(pokemonDetailAction(id));
  }, [dispatch, id]);

  return (
    <div className={style.containerDetail}>
      <CardDetail pokemonDetail={pokemonDetail} />
      {/* Manejo del error en el front */}
      {pokemonDetailError && (
        <ModalErrorHome
          error={pokemonDetailError}
          closeModal={clearDetailPoKemon}
        />
      )}
    </div>
  );
};

export default Detail;
