import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../images/logoTL.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <Link smooth={true} to="home" className="navbar-brand" href="#">
        <img src={Logo} className="logo" alt="logo..." />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              smooth={true}
              to="about"
              offset={-90}
              className="nav-link"
              href="#"
            >
              About <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="skills"
              offset={-90}
              className="nav-link"
              href="#"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="works"
              offset={-90}
              className="nav-link"
              href="#"
            >
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="contact"
              offset={-90}
              className="nav-link"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
