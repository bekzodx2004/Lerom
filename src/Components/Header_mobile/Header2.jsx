import React from "react";
import { useState } from "react";
import Logo from "../images/logo.png";
import "./Header2.scss";
import Worktime from "./../Header/Worktime/Worktime";
import Navbar from "./../Header/Navbar/Navbar";
import Tel from "./../Header/Tel/Tel";
const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header2">
      <a href="https://">
        <i className={"fa-solid fa-compass"}></i> Наши салоны
      </a>
      <img src={Logo} alt="" />
      <i
        className={!isOpen ? "fa-solid fa-bars" : "fa-solid fa-x"}
        onClick={() => setIsOpen(!isOpen)}
      ></i>
      <div
        className="ochish"
        style={!isOpen ? { display: "none" } : { display: "block" }}
      >
        <Worktime />
        <Navbar />
        <Tel />
      </div>
    </div>
  );
};

export default Header2;
