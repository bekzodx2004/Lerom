import React from "react";
import "./Tel.scss";

const Tel = () => {
  return (
    <div className="tel  animate__animated animate__fadeInRight animate__delay-1s">
      <h4>
        Отдел продаж: <i className="fa-solid fa-phone"></i> 8 (495) 664-54-57{" "}
        <br />8 (929) 928-86-35
      </h4>
      <h4>
        Звонки по Росии: <i className="fa-solid fa-phone"></i> 8-800-000-00-00{" "}
        <br />
        <font>Бесплатно</font>
      </h4>
    </div>
  );
};

export default Tel;
