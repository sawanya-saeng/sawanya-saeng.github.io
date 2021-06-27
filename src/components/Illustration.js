import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Skeleton from "react-loading-skeleton";

import "../styles/Illustrantion.css";
import illustrantionG1 from "../Data/dataIllustration1";
import illustrantionG2 from "../Data/dataIllustration2";
import illustrantionG3 from "../Data/dataIllustration3";


const Illustrantion = () => {
  const [TimeLoad, setTimeLoad] = useState(false);

  const loadding = setTimeout(() => {
    setTimeLoad(true);
    clearTimeout(loadding);
  }, 1500);
  
  return (
    <div className="illustrantion">
      <div className="txtLogoBrand">
        <div className="teLOBR">ILLUSTRATION</div>
      </div>
      <div className="container GalleryLogo">
        {TimeLoad ? (
          <Gallery photos={illustrantionG1} />
        ) : (
          <Skeleton
            height={500}
            width={700}
            count={2}
            className="skelatonPic"
          />
        )}
        {TimeLoad ? (
          <Gallery photos={illustrantionG2} />
        ) : (
          <Skeleton
            height={500}
            width={700}
            count={2}
            className="skelatonPic"
          />
        )}
        {TimeLoad ? (
          <Gallery photos={illustrantionG3} />
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
};

export default Illustrantion;