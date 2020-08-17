import React from "react";
import "./styles.css";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="topnav">
          <li><img src={logo} alt="Logo" /></li>
          <li><a href="#">Qui ?</a></li>
          <li><a href="#">Quoi ?</a></li>
          <li><a href="#">Où ?</a></li>
        </ul>
      </nav>
    </header>
  );
}
