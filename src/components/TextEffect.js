import React from "react";

import "../styles/TextEffect.css";
import TextEffectG1 from "../images/text1.jpg";
import TextEffectG2 from "../images/text2.jpg";

const TextEffect = () => {  
  return (
    <div className="texteffect">
      <div className="borderLogoBrand">
        <div className="textEFF">Text effect</div>
      </div>
      <div className="container GalleryLogo">
        <div className="image-box-wrapper row justify-content-center">
          <div className="textEffect-image-box">
            <img
              className="textEffect-image"
              src={TextEffectG1}
              alt="effect1"
            />
            <div className="overlay" />
          </div>
          <div className="textEffect-image-box">
            <img
              className="textEffect-image"
              src={TextEffectG2}
              alt="effect2"
            />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEffect;
