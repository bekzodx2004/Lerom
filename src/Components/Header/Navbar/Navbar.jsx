import React from "react";
import { ul } from "../../API";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <ul className="ul animate__animated animate__fadeIn animate__slower">
      {ul.map((li) => {
        return (
          <li key={li.id}>
            <a href={li.path}>{li.text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
