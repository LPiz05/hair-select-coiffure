import React from "react";
import "./styles.css";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="topnav">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <a href="#qui">Qui ?</a>
          </li>
          <li>
            <a href="#quoi">Quoi ?</a>
          </li>
          <li>
            <a href="#ou">Où ?</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
