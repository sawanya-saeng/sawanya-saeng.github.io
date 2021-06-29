import React from "react";

import "../styles/Illustrantion.css";
import illustrantionG1 from "../images/illus1.jpg";
import illustrantionG2 from "../images/illus2.jpg";
import illustrantionG3 from "../images/illus3.jpg";
import illustrantionG4 from "../images/illus4.jpg";
import illustrantionG5 from "../images/illus5.jpg";
import illustrantionG6 from "../images/illus6.jpg";


const Illustrantion = () => {
  return (
    <div className="illustrantion">
      <div className="borderLogoBrand">
        <div className="textillustrantion">ILLUSTRATION</div>
      </div>
      <div className="container GalleryLogo">
        <div className="image-box-wrapper row justify-content-center">
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG1} alt="illu1" />
            <div className="overlay" />
          </div>
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG2} alt="illu2" />
            <div className="overlay" />
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG3} alt="illu3" />
            <div className="overlay" />
          </div>
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG4} alt="illu4" />
            <div className="overlay" />
          </div>
        </div>
        <div className="image-box-wrapper row justify-content-center">
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG5} alt="illu5" />
            <div className="overlay" />
          </div>
          <div className="illustrantion-image-box">
            <img className="illustrantion-image" src={illustrantionG6} alt="illu6" />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustrantion;
