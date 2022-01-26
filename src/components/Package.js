import React from "react";

import "../styles/Banner.css";
import package1 from "../images/packmilarich.jpg";
import package2 from "../images/packmrtom.jpg";

const Package = () => {
    return (
      <div className="banners">
        <div>
          <div className="textBanner">Package</div>
        </div>
        <div className="container GalleryLogo">
          <div className="image-box-wrapper row justify-content-center">
            <div className="banner-image-box">
              <img className="banner-image" src={package2} alt="package2" />
              <div className="overlay" />
            </div>
            <div className="banner-image-box">
              <img className="banner-image" src={package1} alt="package1" />
              <div className="overlay" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Package