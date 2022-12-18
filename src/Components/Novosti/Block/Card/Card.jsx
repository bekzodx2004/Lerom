import React from "react";
import './Card.scss'

const Card = (props) => {
  return (
    <div className="novosti__block__cards__card">
      <img src={props.img} alt="" />
      <div className="text">
        <h3>{props.text_h3}</h3>
        <p>{props.p}</p>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    </div>
  );
};

export default Card;
