import React from "react";
import "./Novosti.scss";
import Block from "./Block/Block";
import { novosti } from "../API";
const Novosti = () => {
  return (
    <div className="novosti">
      {novosti.map((block) => {
        return (
          <Block
            key={block.id}
            hero={block.header}
            blok={block.blok}
            a={block.a}
            bottom={block.bottom}
          />
        );
      })}
    </div>
  );
};

export default Novosti;
