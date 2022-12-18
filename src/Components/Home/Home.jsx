import React from "react";
import "./Home.scss";

import Header from "../Header/Header";
import Carousel from "./../Carousel/Carousel";
import Rooms from "./../Rooms/Rooms";
import Video from "./../Video/Video";
import Novosti from "./../Novosti/Novosti";
import Footer from "./../Footer/Footer";
import Header2 from './../Header_mobile/Header2';

const Home = () => {
  return (
    <div className="home">
      <Header2/>
      <Header />
      <Carousel />
      <Rooms />
      <Video />
      <Novosti />
      <Footer />
    </div>
  );
};

export default Home;
