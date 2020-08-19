import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./Header";
import Content from "./Content";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Content />
  </React.StrictMode>,
  rootElement
);
