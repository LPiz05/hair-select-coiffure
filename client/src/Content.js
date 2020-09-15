import React from "react";
import { Element } from "react-scroll";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./styles.css";
import salon from "./img/salon.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import image_maps from "./img/maps.png"
import LoremIpsum from "./Loremipsum";

export default function Content() {
  return (
    <React.Fragment>
      <div className="container row col-md-12 col-sm-12">
        <Element name="who" className="element col-md-12">
          <div className="p-2">
            <h1>Qui</h1>
            <p className="border border-primary rounded p-2 col-md-6 float-left">
              <LoremIpsum />
            </p>
            <img
              src={salon}
              alt="Logo"
              className="rounded mx-auto d-block col-md-6 float-right"
            />
          </div>
        </Element>
      </div>

      <div className="container row col-md-12 col-sm-12">
        <Element name="what" className="element col-md-12">
          <div className="p-2">
            <h1>Quoi</h1>
            <p className="border border-primary rounded p-2">
              <LoremIpsum />
            </p>
            <AliceCarousel autoPlayInterval="3000">
              <img src={image1} className="sliderimg" alt="" />
              <img src={image2} className="sliderimg" alt="" />
              <img src={image3} className="sliderimg" alt="" />
              <img src={image4} className="sliderimg" alt="" />
            </AliceCarousel>
          </div>
        </Element>
      </div>

      <div className="container row col-md-12 col-sm-12">

        <Element name="where"  className="element col-md-12">
          <div className="p-2" >
            <h1>Où</h1>
            <p className="border border-primary rounded p-2 col-md-6 float-left">
              <LoremIpsum />
            </p>
            <div className="rounded mx-auto d-block col-md-6 float-right">
              <a href="https://www.google.com/maps/place/Avenue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+94420+Le+Plessis-Tr%C3%A9vise/@48.8097452,2.5727334,17.25z/data=!4m5!3m4!1s0x47e60ef9b6f7519f:0xc51b562cb91cbbfc!8m2!3d48.8079608!4d2.5785944">
                <img 
                  src={image_maps} 
                  alt="Emplacement hair select coiffure"
                   />
              </a>
            </div>
          </div>
        </Element>
      </div>
     
     
    </React.Fragment>
  );
}
