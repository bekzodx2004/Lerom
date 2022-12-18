import React from "react";
import "./Item.scss";
const Item = () => {
  return (
    <div className="item">
      <h1>Производим мебель с 1997 года</h1>
      <h4>
        Мы готовы принять и передать ваш заказ на мебель региональному
        представительству.{" "}
      </h4>
      <p>
        Для этого пришлите ваши пожелания и контактную информацию нам на почту
        zakaz@lerom.ru
      </p>

      <div>
        <div>
          <i className="fa-solid fa-expand"></i>
          <div>
            {" "}
            <h3>100 000 <font>м2</font></h3>
            <p>Производственная площадь.</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-user"></i>
          <div>
            <h3>1 100 <font>чел</font></h3>
            <p>Рабочий коллектив.</p>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-star"></i>
          <div>
            {" "}
            <h3>Официально</h3>
            <p>Мы находимся в национальном реестре промышленных предприятий.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
