import { Carousel } from "react-responsive-carousel"
import React from "react"
import '../styles/ProductRight.css'

export const RenderWorkRight = ({list, link, headerDetail, txtNameWork, txtWorkDetails}) => (
  <>
    <div className="col detailProjectRight">
      <h3 className="headerDetailR">{headerDetail}</h3>
      {!link ? 
        <>
        <a rel="noreferrer" href={link} target="_blank">
          <h3 className="txtNameWorkR">{txtNameWork}</h3>
          <h4 className="txtWorkDetailsR">{txtWorkDetails}</h4>
        </a>
        </> : <>
          <h3 className="txtNameWorkR">{txtNameWork}</h3>
          <h4 className="txtWorkDetailsR">{txtWorkDetails}</h4>
        </>}
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