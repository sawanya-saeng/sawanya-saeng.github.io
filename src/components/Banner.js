import React from "react";

import "../styles/Banner.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";

const Banner = () => {
    return (
      <div className="banners">
        <div>
          <div className="textBanner">Banner</div>
        </div>
        <div className="container GalleryLogo">
          <div className="image-box-wrapper row justify-content-center">
            <div className="banner-image-box">
              <img className="banner-image" src={banner1} alt="Banner1" />
              <div className="overlay" />
            </div>
            <div className="banner-image-box">
              <img className="banner-image" src={banner2} alt="Banner2" />
              <div className="overlay" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner