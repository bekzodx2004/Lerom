import React from "react";
import Room from "./Room/Room";
import { rooms } from "./../API";
import "./Rooms.scss";

const Rooms = () => {
  return (
    <div className="rooms">
      {rooms.map((room) => {
        return (
          <Room
            key={room.id}
            img={room.img}
            title={room.title}
            price={room.price}
            zakaz={room.zakazov}
            info={room.info}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
