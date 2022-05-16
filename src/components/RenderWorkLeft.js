import { Carousel } from "react-responsive-carousel"
import React from "react"
import '../styles/Product.css'

import iconFigma from '../images/icon-figma.png'
import iconPdf from '../images/icon-pdf.png'

export const RenderWorkLeft = ({list, headerDetail, txtNameWork, txtWorkDetails, Figma, PDF}) => {

  return (
  <>
    <div className="col itemProject">
      <div className="areaSlide">
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
    <div className="col detailProject">
      <h3 className="headerDetail">{headerDetail}</h3>
        <h3 className="txtNameWork">{txtNameWork}</h3>
        <h4 className="txtWorkDetails">{txtWorkDetails}</h4>
      <div className="group-btn row">
        {Figma && 
          <a className='linkTag' rel="noreferrer" href={Figma} target="_blank">
            <button className="btn-figma row">
              <img className="icon-figma" src={iconFigma} alt="figma" />
              <div className="text-button">Figma</div>
            </button>
          </a>}
        {PDF && 
          <a rel="noreferrer" href={PDF} target="_blank">
            <button className="btn-pdf row">
              <img className="icon-figma" src={iconPdf} alt="figma" />
              <div className="text-button">PDF</div>
            </button>
          </a>}
      </div>
    </div>
  </>
)}