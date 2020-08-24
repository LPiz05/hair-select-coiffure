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
import Map from "./Map";
import places from "./places.json";

export default function Content() {
  return (
    <React.Fragment>
      <div className="container row col-md-12 col-sm-12">
        <Element name="who" className="element col-md-6">
          <div className="p-2">
            <h1>Qui</h1>
            <p className="border border-primary rounded p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <img
              src={salon}
              alt="Logo"
              className="rounded mx-auto d-block col-md-12"
            />
          </div>
        </Element>
        <Element name="what" className="element col-md-6">
          <div className="p-2">
            <h1>Quoi</h1>
            <p className="border border-primary rounded p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <AliceCarousel autoPlay autoPlayInterval="3000">
              <img src={image1} className="sliderimg" alt="" />
              <img src={image2} className="sliderimg" alt="" />
              <img src={image3} className="sliderimg" alt="" />
              <img src={image4} className="sliderimg" alt="" />
            </AliceCarousel>
          </div>
        </Element>
      </div>
      <Element name="where" className="element">
        <div className="p-2">
          <h1>Où</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <Map
              center={{ lat: 48.8553603, lng: 2.3460132 }} //centrer la carte sur où on veut montrer
              zoom={13} //zoom sur la carte
              places={places} //les différentes places que l'on veut afficher
            />
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
}
