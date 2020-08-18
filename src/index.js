import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Header";
import Qui from "./Qui";
import Quoi from "./Quoi";
import Ou from "./Ou";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Qui />
    <Quoi />
    <Ou />
  </React.StrictMode>,
  rootElement
);
