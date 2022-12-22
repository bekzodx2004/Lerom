import React from "react";
import { useState } from "react";
import Logo from "../images/logo.png";
import "./Header2.scss";
import Worktime from "./../Header/Worktime/Worktime";
import Navbar from "./../Header/Navbar/Navbar";
import Tel from "./../Header/Tel/Tel";
import { Link } from "react-router-dom";
const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header2  animate__animated animate__fadeInDown">
      <a href="https://">
        <i className={"fa-solid fa-compass"}></i> Наши салоны
      </a>
      <Link to='/'>
        <img src={Logo} alt="" />
      </Link>
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
