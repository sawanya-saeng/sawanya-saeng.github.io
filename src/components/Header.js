import React from "react";

import "../styles/Header.css";
import taluew from "../images/taluewprofile.png";

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="col container">
        <div className="row areaTop">
          <div className="col leftProfile">
            <div className="homeMain">
              <img className="mainpic" src={taluew} alt="author..." />
            </div>
          </div>
          <div className="col rightProfile">
            <h4 className="theport">THE{" "}PORTFOLIO{" "}OF</h4>
            <h1 className="firstName">SAWANYA</h1>
            <h2 className="lastName">SAENGBUAPHUEN</h2>
            <h3 className="descriptionPositon">UX/UI{" "}DESIGNER</h3>
          </div>
        </div>
      </div>
      <div className="fixed-misc">UX/UI design</div>
    </div>
  );
};

export default Header;
