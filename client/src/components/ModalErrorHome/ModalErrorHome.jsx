import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import x from "../../images/x.svg";
import errorSvg from "../../images/error.svg";

import style from "./ModalErrorHome.module.css";

const ModalErrorHome = ({ error, closeModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  function handleCloseMoDal() {
    dispatch(closeModal());
    if (location.pathname === `/detail/${params.id}`) {
      history.push("/home");
    } else {
      window.location.reload();
    }
  }

  return ReactDOM.createPortal(
    <div className={style.bagModalErrorHome}>
      <div className={style.modalWrapper}>
        <div className={style.containerError}>
          <div className={style.error}>Error</div>
          <div>
            <img
              src={x}
              alt="close"
              className={style.close}
              onClick={() => handleCloseMoDal()}
            />
          </div>
        </div>
        <div className={style.containerTxtError}>
          <img src={errorSvg} alt="error" className={style.erroSvg} />
          <p className={style.txt}>{error}</p>
          <button className={style.ok} onClick={() => handleCloseMoDal()}>
            Aceptar
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ModalErrorHome;
