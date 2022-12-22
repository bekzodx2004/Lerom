import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Carousel.scss";
import Item from "./Item/Item";

const Carousel = () => {
  const [items] = useState([<Item />, <Item />, <Item />]);

  return (
    <div className="carousel">
      <AliceCarousel
        items={items}
        autoPlay={true}
        autoWidth={true}
        animationDuration={1000}
        autoPlayInterval={3000}
        infinite={true}
        mouseTracking={true}
      />
    
    </div>
  );
};

export default Carousel;
