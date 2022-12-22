import React from "react";
import I2 from "../images/basket.png";
import "./Cart_btn.scss";

const CartBtn = () => {
  return (
    <a href="https://" className="cart">
      <img src={I2} alt="" />
    </a>
  );
};

export default CartBtn;
