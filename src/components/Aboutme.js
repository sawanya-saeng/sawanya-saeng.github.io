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
              <p className="txtAboutme">about me</p>
              <div className="textBox">
                My name is Sawanya Saengbuaphuen.  My nickname is Taluew. 
                I graduated from Kasetsart University Sriracha Campus  with
                a  bachelor's  degree  in  Computer Engineering and  Informatics.  
                I am seeking a position as UX/UI designer. I want to develop in my UX/UI 
                design skills. I have no work experience, but I believe 
                in myself and confident in my skills that I have knowledge and ability to do this 
                job and that I will do well.   I'm passionate that's always wanting to grow,  learn and try.   I love this work and I work exceptionally hard with who I work with.
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
