import React from "react";
import Typed from "react-typed";

import "../styles/Header.css";
import mainpic from "../images/mainpic.png";

const Header = () => {
  return (
    <div id="home" className="banner">
      <div className="container homeMain">
        <Typed
          className="main-text"
          strings={["TALUEW"]}
          typeSpeed={400}
          backSpeed={400}
          loop
          showCursor
          cursorChar=""
        />
        <img className="mainpic" src={mainpic} alt="author..." />
      </div>
      <div className="scroll">
        <span>Scroll down</span>
      </div>
      <div className="fixed-misc">Graphic and UX/UI design</div>
    </div>
  );
};

export default Header;
