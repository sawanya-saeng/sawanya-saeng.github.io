import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "../styles/Project.css";

const ItemProject = ({
  ProjectName,
  ProjectDetails,
  Tool1,
  Tool2,
  Tool3,
  Tool4,
  PicItem,
}) => {
  return (
    <div className="container areaProject">
      <div className="carouselBox">
        <AliceCarousel
          className="CarouselPic"
          autoWidth
          infinite
          // autoPlay
          // autoPlayStrategy="none"
          // autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          items={PicItem}
        />
      </div>
      <div className="row flexRow">
        <div className="col detailLeft">
          <h3 className="txtNameWork">{ProjectName}</h3>
          <h4 className="txtWorkDetails">{ProjectDetails}</h4>
        </div>
        <div className="col-2 detailMiddle">
          {Tool1 ? <div className="boxToolM">{Tool1}</div> : null}
          {Tool2 ? <div className="boxToolM">{Tool2}</div> : null}
        </div>
        <div className="col-2 detailRight">
          {Tool3 ? <div className="boxToolR">{Tool3}</div> : null}
          {Tool4 ? <div className="boxToolR">{Tool4}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ItemProject;