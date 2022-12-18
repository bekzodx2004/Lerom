import React from "react";
import Card from "./Card/Card";
import './Block.scss'
const Block = (props) => {
  return (
    <div className="novosti__block">
      <h3>{props.hero}</h3>
      <div className="novosti__block__cards">
        {props.blok.map((card) => {
          return <Card key={card.id} img={card.img} p={card.p} text_h3={card.h1} />;
        })}
      </div>
      <div className="bottom">
        <h3>{props.bottom}</h3>
        <a href="https://">{props.a} <i className="fa-solid fa-arrow-down"></i></a>
      </div>
    </div>
  );
};

export default Block;
