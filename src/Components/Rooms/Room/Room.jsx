import React from "react";
import './Room.scss'

const Room = (props) => {
  return (
    <div className="room">
      <img src={props.img} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
        <h3>Товары под заказ в наличии: {props.zakaz} шт</h3>
        <h4>Цены от: {props.price} p</h4>
      <a href="https://">  <i className="fa-solid fa-arrow-left"></i></a>
      </div>
    </div>
  );
};

export default Room;
