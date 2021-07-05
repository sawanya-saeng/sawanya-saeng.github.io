import React from "react";

import "../styles/Design.css";
import design1 from "../images/wed.jpg";
import design2 from "../images/mw.jpg";
import design3 from "../images/duck.jpg";
import design4 from "../images/pig.jpg";
import design5 from "../images/kaolahm.jpg";
import design6 from "../images/eniac.jpg";


const GraphicDesign = () => {
  return (
    <div className="graphicdesign">
      <div className="boxBlack2" />
      <h1 className="txtGraphicDesign">Graphic Design</h1>
      <div>
        <div className="textLOGOBRANDING">logo & branding</div>
      </div>
      <div className="container GalleryLogo">
        <div className="image-box-wrapper row justify-content-center">
          <div className="design-image-box">
            <img className="design-image" src={design1} alt="Design1" />
            <div className="overlay" />
          </div>
          <div className="design-image-box">
            <img className="design-image" src={design2} alt="Design2" />
            <div className="overlay" />
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="design-image-box">
            <img className="design-image" src={design3} alt="Design3" />
            <div className="overlay" />
          </div>
          <div className="design-image-box">
            <img className="design-image" src={design4} alt="Design4" />
            <div className="overlay" />
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="design-image-box">
            <img className="design-image " src={design5} alt="Design5" />
            <div className="overlay" />
          </div>
          <div className="design-image-box">
            <img className="design-image" src={design6} alt="Design6" />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicDesign;
