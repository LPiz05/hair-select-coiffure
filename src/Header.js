import React from "react";
import { Link } from "react-scroll";
import "./styles.css";
import logo from "./img/logo.jpg";

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <ul className="topnav">
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <Link
              activeClass="active"
              className="who"
              to="who"
              spy={true}
              smooth={true}
              duration={500}
            >
              Qui ?
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="what"
              to="what"
              spy={true}
              smooth={true}
              duration={500}
            >
              Quoi ?
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="where"
              to="where"
              spy={true}
              smooth={true}
              duration={500}
            >
              Où ?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
