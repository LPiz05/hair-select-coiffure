import React from "react";
import "./styles.css";
import coiffure from "./img/coiffure.png";

export default function App() {
  return (
    <div className="App">
      <h1>Hair Select Coiffure</h1>
      <img src={coiffure} alt="Logo" />
    </div>
  );
}
