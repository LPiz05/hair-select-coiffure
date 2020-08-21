import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="p-3 bg-dark text-white">
        <div className="float-left">
          <a href="mailto:coiffure@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:0198989898">
            <FontAwesomeIcon icon={faMobileAlt} />
          </a>
        </div>
        <div className="text-right">
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
}
