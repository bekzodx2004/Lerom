import React from "react";
// import Poster from "../images/k.png";
import "./Video.scss";
const Video = () => {
  return (
    <div className="video">
      <div className="controls">
        <h1>Видеопрезентация «Лером»</h1>
        <button className="play">
          {" "}
          <i className="fa-solid fa-play"></i>
        </button>
        <a href="https://">Читать о компании</a>
      </div>
    </div>
  );
};

export default Video;
