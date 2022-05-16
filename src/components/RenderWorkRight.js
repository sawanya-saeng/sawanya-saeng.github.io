import { Carousel } from "react-responsive-carousel"
import React from "react"
import '../styles/ProductRight.css'

import iconFigma from '../images/icon-figma.png'
import iconPdf from '../images/icon-pdf.png'

export const RenderWorkRight = ({list, headerDetail, txtNameWork, txtWorkDetails, Figma, PDF}) => (
  <>
    <div className="col detailProjectRight">
      <h3 className="headerDetailR">{headerDetail}</h3>
        <h3 className="txtNameWorkR">{txtNameWork}</h3>
        <h4 className="txtWorkDetailsR">{txtWorkDetails}</h4>
        <div className="group-btn-right row">
        {Figma && 
          <a rel="noreferrer" href={Figma} target="_blank">
            <button className="btn-figma-right row">
              <img className="icon-figma" src={iconFigma} alt="figma" />
              <div className="text-button-right">Figma</div>
            </button>
          </a>}
        {PDF && 
          <a rel="noreferrer" href={PDF} target="_blank">
            <button className="btn-pdf-right row">
            <img className="icon-figma" src={iconPdf} alt="pdf" />
              <div className="text-button-right">PDF</div>
            </button>
          </a>}
      </div>
    </div>
    <div className="col itemProjectRight">
      <div className="areaSlideR">
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          {list.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt={item.image} />
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  </>
)