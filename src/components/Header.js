import React from "react";

import "../styles/Header.css";
import taluew from "../images/taluewprofile.png";

const Header = () => {
  return (
    <div id="home" className="banner">
      <div className="col container">
          <div class="row areaTop">
            <div class="col leftProfile">
              <div className="homeMain">
                <img className="mainpic" src={taluew} alt="author..." />
              </div>
            </div>
            <div class="col rightProfile">
              <h4 className="theport">THE{" "}PORTFOLIO{" "}OF</h4>
              <h1 className="firstName">SAWANYA</h1>
              <h2 className="lastName">SAENGBUAPHUEN</h2>
              <h3 className="descriptionPositon">UX/UI{" "}DESIGNER</h3>
            </div>
        </div>
      </div>
      <div className="scroll">
        <span>Scroll down</span>
      </div>
      <div className="fixed-misc">UX/UI design</div>
    </div>
  );
};

export default Header;
