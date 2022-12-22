import "./Katalog.scss";
import Header from "./../Header/Header";
import Header2 from "./../Header_mobile/Header2";
import Footer from "../Footer/Footer";
import { katalog } from "../API";
import Dropdown from "./Dropdown/Dropdown";
import I from "../images/bez.png";
import CartBtn from "../Cart_btn/Cart_btn";
import Bez from "./Bez/Bez";
import Kolleksiya from "./Kolleksiya/Kolleksiya";
import { collections } from "./../API";
const Katalog = () => {
  return (
    <div className="katalog">
      <Header2 />
      <Header />
      <CartBtn />
      <div className="body">
        <div className="left">
          <div className="dropdowns">
            {katalog.map((dropdown, id) => {
              return (
                <Dropdown
                  key={dropdown.id}
                  tur={dropdown.tur}
                  modellar={dropdown.modellar}
                />
              );
            })}
          </div>
          <a href="" download={I} >
            Скачать каталог <i className="fa-solid fa-cloud-arrow-down"></i>
          </a>
          <Bez />
        </div>{" "}
        <div className="content">
          {collections.map((kolleksiya) => {
            return (
              <Kolleksiya
                key={kolleksiya.id}
                img={kolleksiya.img}
                h2={kolleksiya.collectionName}
                p={kolleksiya.collectionAbout}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Katalog;
