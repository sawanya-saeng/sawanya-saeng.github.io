import React from "react";
import "../styles/Skills.css";

import Photoshop from "../images/Photoshop.png";
import illustrator from "../images/illustrator.png";
import XD from "../images/XD.png";
import Animate from "../images/Animate.png";
import PremierePro from "../images/PremierePro.png";
import InDesign from "../images/InDesign.png";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <div className="col container">
          <div class="row rowSkills">
            <div class="col boxAbility">
              <div className="textSkills">Abilities</div>
              <ul className="listAbility">
                <li>User Interface</li>
                <li>Web & App Design</li>
                <li>Graphic Design</li>
                <li>Logo & Branding</li>
                <li>Infographic</li>
                <li>Illustrations</li>
                <li>Video Editing</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            <div class="col boxSKills">
              <div className="textSkills">Software Skills</div>
              <div className="row rowItem">
                <div className="col itemSkills">
                  <img
                    className="picAdobe"
                    src={Photoshop}
                    alt="Photoshop..."
                  />
                  <div className="nameApp">Adobe Photoshop</div>
                </div>
                <div className="col itemSkills">
                  <img
                    className="picAdobe"
                    src={illustrator}
                    alt="illustrator..."
                  />
                  <div className="nameApp">Adobe illustrator</div>
                </div>
              </div>
              <div className="row rowItem">
                <div className="col itemSkills">
                  <img className="picAdobe" src={XD} alt="XD..." />
                  <div className="nameApp">Adobe XD</div>
                </div>
                <div className="col itemSkills">
                  <img className="picAdobe" src={Animate} alt="Animate..." />
                  <div className="nameApp">Adobe Animate</div>
                </div>
              </div>
              <div className="row rowItem">
                <div className="col itemSkills">
                  <img
                    className="picAdobe"
                    src={PremierePro}
                    alt="PremierePro..."
                  />
                  <div className="nameApp">Adobe Premiere Pro</div>
                </div>
                <div className="col itemSkills">
                  <img className="picAdobe" src={InDesign} alt="InDesign..." />
                  <div className="nameApp">Adobe InDesign</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
