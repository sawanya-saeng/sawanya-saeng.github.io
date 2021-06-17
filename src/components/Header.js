import React from "react";
import "../styles/Header.css";

import Typed from "react-typed";
import mainpic from "../images/mainpic.png";

const Header = () => {
  return (
    <div id="home" className="banner">
      <div className="container homeMain">
        <Typed
          className="main-text"
          strings={["TAL UEW"]}
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
      <div className="fixed-misc">Visual Graphic design and UX/UI</div>
    </div>
  );
};

export default Header;
