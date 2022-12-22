import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={props.id}
      className="dropdown"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <h3>
        {props.tur}{" "}
        <i
          className="fa-solid fa-caret-down"
          style={
            !isOpen
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" }
          }
        ></i>
      </h3>

      <div
        className="mahsulotlar"
        style={isOpen ? { display: "block" } : { display: "none" }}
      >
        {props.modellar.map((model, id) => {
          return (
            <Link to="/" key={model.id} className="mahsulot">
              {model.model}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
