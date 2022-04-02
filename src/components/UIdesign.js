import React from "react";

import "../styles/Uidesign.css";
import ui1 from "../images/ui1.jpeg";
import ui2 from "../images/ui2.jpeg";

const Uidesign = () => {
  return (
    <div className="ui">
      <h1 className="txtUiDesign">Ui Design</h1>
      <div className="container GalleryLogo">
        <div className="image-box-wrapper row justify-content-center">
          <div 
            className="ui-image-box" 
            onClick={() => window.open("https://www.figma.com/file/DknVq7mqaoK0VbkDDQCtuH/UI_Design?node-id=0%3A1", "_blank")}>
            <img className="ui-image" src={ui1} alt="ui1" />
            <div className="overlay" />
          </div>
          <div 
            className="ui-image-box">
            <img className="ui-image" src={ui2} alt="ui2" />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uidesign