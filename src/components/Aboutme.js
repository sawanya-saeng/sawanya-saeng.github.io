import React from "react";
import Fade from "react-reveal/Fade";

import "../styles/Aboutme.css";

const Aboutme = () => {
  return (
    <div id="about" className="aboutme">
      <div className="container">
        <div className="col boxAbout">
          <Fade right>
            <div className="text-left about-details">
              <p className="txtAboutme">Hi !</p>
              <div className="textBox">
                My name is Sawanya Saengbuaphuen. My nickname is TALUEW <br />
                I interested in UX/UI design and Graphic design.
                <br />
                <br />I can use my creativity to help others shape their vision
                and <br /> to see my work being used.
                <br />
                <br />
                Every time when I design works that there are always something
                <br />
                new to learn, something to get better at. I love the challenge.
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="marLeftipad">
              <div className="boxUnderline">
                <p className="textEdu">Education</p>
              </div>
              <div className="container">
                <div className="row boxRow">
                  <div className="col-sm-4 box1">
                    <li className="txtYears">2016 - 2020</li>
                  </div>
                  <div className="col-sm-8 box2">
                    <div className="text-left txtUnivercity">
                      Kasetsart University Sriracha Campus
                    </div>
                    <div className="text-left txtMajor">
                      Bachelor of Engineering (B.Eng.), Computer Engineering and
                      Informatics
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row boxRow">
                  <div className="col-sm-4 box1">
                    <li className="txtYears">2014 - 2016</li>
                  </div>
                  <div className="col-sm-8 box2">
                    <div className="text-left txtUnivercity">
                      Saint Paul Convent School
                    </div>
                    <div className="text-left txtMajor">
                      Mathematics & Science Program
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
