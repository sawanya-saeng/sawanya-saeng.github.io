import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Skeleton from "react-loading-skeleton";

import "../styles/TextEffect.css";
import TextEffectG1 from "../Data/dataTextEffect";

const TextEffect = () => {
  const [TimeLoad, setTimeLoad] = useState(false);

  const loadding = setTimeout(() => {
    setTimeLoad(true);
    clearTimeout(loadding);
  }, 1500);
  
  return (
    <div className="texteffect">
      <div className="txtLogoBrand">Texteffect</div>
      <div className="container GalleryLogo">
        {TimeLoad ? (
          <Gallery photos={TextEffectG1} />
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
};

export default TextEffect;
