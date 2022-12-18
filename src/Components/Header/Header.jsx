import React from "react";
import "./Header.scss";
import I1 from "../images/logo.png";

import Navbar from "./Navbar/Navbar";
import Worktime from "./Worktime/Worktime";
import Tel from './Tel/Tel';

const Header = () => {
  return (
    <div className="header1">
      <div className="header__top">
        <Worktime/>
        <img src={I1} alt="" />
        <Tel/>
      </div>

      <div className="header__navbar">
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
