import React from "react";
import { Link } from "react-scroll";
import "./header.css";
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from "react-bootstrap";
import {logo} from "./img/elina.jpg";

export default function Header() {
  return (
    <Navbar className="setShadow" fixed="top" bg="light" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#header">Hair Select Coiffure</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#association">Qui?</Nav.Link>
                            <Nav.Link href="#application">Où?</Nav.Link>
                            <Nav.Link href="#contact">Quoi?</Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </div>
            </Navbar>
  );
}

// {/* <ul className="topnav">
// <li>
//   <p> Hair Select coiffure </p>
// </li>
// <li>
//   <Link
//     activeClass="active"
//     className="who"
//     to="who"
//     spy={true}
//     smooth={true}
//     duration={500}
//   >
//     Qui ?
//   </Link>
// </li>
// <li>
//   <Link
//     activeClass="active"
//     className="what"
//     to="what"
//     spy={true}
//     smooth={true}
//     duration={500}
//   >
//     Quoi ?
//   </Link>
// </li>
// <li>
//   <Link
//     activeClass="active"
//     className="where"
//     to="where"
//     spy={true}
//     smooth={true}
//     duration={500}
//   >
//     Où ?
//   </Link>
// </li>
// </ul> */}