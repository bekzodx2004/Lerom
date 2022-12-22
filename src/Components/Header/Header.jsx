import React from "react";
import "./Header.scss";
import I1 from "../images/logo.png";

import Navbar from "./Navbar/Navbar";
import Worktime from "./Worktime/Worktime";
import Tel from "./Tel/Tel";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header1 ">
      <div className="header__top">
        <Worktime />
        <Link to="/">
          <img src={I1} alt="" className=" animate__animated animate__fadeInDown" />
        </Link>
        <Tel />
      </div>

      <div className="header__navbar">
      <Link to="/katalog" className="katalog">Каталог</Link>
        <Navbar />

        <form action="">
          <input type="text" name="" placeholder="Поиск по сайту..." id="" />
          <button>
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
