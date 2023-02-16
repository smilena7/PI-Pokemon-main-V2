import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import close from "../../images/close.svg";
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
        {error}
        <img
          src={close}
          alt="close"
          className={style.close}
          onClick={() => handleCloseMoDal()}
        />
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ModalErrorHome;
