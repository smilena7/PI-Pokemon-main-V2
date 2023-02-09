import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonDetailAction } from "../../actions/pokemonDetailAction";
import { CardDetail } from "../../components/CardDetail/CardDetail";

import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail.data);

  const { id } = useParams();
  const [pokeDetail, setPokeDetail] = useState({});

  useEffect(() => {
    dispatch(pokemonDetailAction(id));
  }, [dispatch, id]);

  return (
    <div className={style.containerDetail}>
      <CardDetail pokemonDetail={pokemonDetail} />
    </div>
  );
};

export default Detail;
