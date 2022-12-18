import React from "react";
import "./Footer.scss";
import { footer3, links, stat1 } from "./../API";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <p>© ООО "Мебельная компания "Лером" 2021 </p>
        <img src={require("../images/logo.png")} alt="" />
        <div>
          {" "}
          <p>Сайт разработан -</p>
          <img src={require("../images/esv_digital.png")} alt="" />
        </div>
      </div>

      <div className="footer__links">
        {links.map((links) => {
          return (
            <div className="footer__links__link" key={links.id}>
              <h3>{links.h}</h3>
              <a href={links.url1}>{links.l1}</a>
              <a href={links.url2}>{links.l2}</a>
              <a href={links.url3}>{links.l3}</a>
            </div>
          );
        })}

        <div className="lll">
          {footer3.map((a) => {
            return (
              <a key={a.id} href={a.url} target="true">
                {a.text}
              </a>
            );
          })}
        </div>

        <div className="stat1">
          <i className="fa-solid fa-arrow-left"></i>
          <div>
            {stat1.map((count) => {
              return <h3 key={count.id}>{count.count}</h3>;
            })}
          </div>
        </div>

        <div className="stat2">
          <div>
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <div>
            <h4>
              2337
              <i className="fa-solid fa-eye"></i>
            </h4>
            <h4>
              448
              <i className="fa-solid fa-right-to-bracket"></i>
            </h4>
            <h4>
              413
              <i className="fa-solid fa-person"></i>
            </h4>
          </div>
        </div>
      </div>

      <p className="footer__bottom">
        Все права защищены. Любое копирование и использование материалов сайта
        разрешено только с письменного согласия правообладателя. Не является
        публичной офертой.
      </p>
    </div>
  );
};

export default Footer;
