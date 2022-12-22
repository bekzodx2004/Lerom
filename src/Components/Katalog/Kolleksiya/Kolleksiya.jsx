import React from "react";
import "./Kolleksiya.scss";
import { Link } from 'react-router-dom';

const Kolleksiya = (props) => {
  return (
    <div className="kolleksiya animate__animated animate__fadeIn animate__slower animate__delay-2s">
      <img src={props.img} alt="" />
      <div>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <Link to='' className="button" onClick={props.id}>
          Смотреть варианты композиций{" "}
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
};

export default Kolleksiya;
