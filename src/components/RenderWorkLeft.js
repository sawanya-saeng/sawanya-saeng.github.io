import { Carousel } from "react-responsive-carousel"
import React from "react"
import '../styles/Product.css'

export const RenderWorkLeft = ({list, link, headerDetail, txtNameWork, txtWorkDetails}) => (
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
      {link ? <>
        <a rel="noreferrer" href={link} target="_blank">
          <h3 className="txtNameWork">{txtNameWork}</h3>
          <h4 className="txtWorkDetails">{txtWorkDetails}</h4>
        </a>
        </> : <>
          <h3 className="txtNameWork">{txtNameWork}</h3>
          <h4 className="txtWorkDetails">{txtWorkDetails}</h4>
        </>
      }
    </div>
  </>
)