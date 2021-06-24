import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Skeleton from "react-loading-skeleton";

import "../styles/Banner.css";
import BannerG1 from "../Data/dataBanner";

const Banner = () => {
  const [TimeLoad, setTimeLoad] = useState(false);

  const loadding = setTimeout(() => {
    setTimeLoad(true);
    clearTimeout(loadding);
  }, 1500);

    return (
      <div className="banners">
        <div className="txtLogoBrand">
          <div className="teLOBR">Banner</div>
        </div>
        <div className="container GalleryLogo">
          {TimeLoad ? (
            <Gallery photos={BannerG1} />
          ) : (
            <Skeleton
              height={500}
              width={700}
              count={2}
              className="skelatonPic"
            />
          )}
        </div>
      </div>
    );
}

export default Banner