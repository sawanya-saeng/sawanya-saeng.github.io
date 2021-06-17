import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Skeleton from "react-loading-skeleton";

import "../styles/Design.css";
import Brand1 from "../Data/dataLogobrand1";
import Brand2 from "../Data/dataLogobrand2";
import Brand3 from "../Data/dataLogobrand3";

const GraphicDesign = () => {
  const [TimeLoad, setTimeLoad] = useState(false);

  const loadding = setTimeout(() => {
    setTimeLoad(true);
    clearTimeout(loadding);
  }, 5000);

    return (
      <div className="graphicdesign">
          <h1 className="txtGraphicDesign">Graphic Design</h1>
          <div className="txtLogoBrand">LOGO & BRANDING</div>
          <div className="GalleryLogo">
            {TimeLoad ? (
              <Gallery photos={Brand1} />
            ) : (
              <Skeleton
                height={500}
                width={800}
                count={2}
                className="skelatonPic"
              />
            )}
            {TimeLoad ? (
              <Gallery photos={Brand2} />
            ) : (
              <Skeleton
                height={500}
                width={800}
                count={2}
                className="skelatonPic"
              />
            )}
            {TimeLoad ? (
              <Gallery photos={Brand3} />
            ) : (
              <Skeleton
                height={500}
                width={800}
                count={2}
                className="skelatonPic"
              />
            )}
          </div>
      </div>
    );
}

export default GraphicDesign;
