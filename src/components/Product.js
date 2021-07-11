import React from 'react'
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Product.css"
import food0 from "../images/food0.png";
import food1 from "../images/food1.png";
import food2 from "../images/food2.png";
import food3 from "../images/food3.png";
import food4 from "../images/food4.png";
import food5 from "../images/food5.png";
import food6 from "../images/food6.png";

import cpe1 from "../images/cpe1.png";
import cpe2 from "../images/cpe2.png";
import cpe3 from "../images/cpe3.png";
import cpe4 from "../images/cpe4.png";
import cpe5 from "../images/cpe5.png";
import cpe6 from "../images/cpe6.png";
import cpe7 from "../images/cpe7.png";
import cpe8 from "../images/cpe8.png";

import shoot1 from "../images/shoot1.png";
import shoot2 from "../images/shoot2.png";
import shoot3 from "../images/shoot3.png";
import shoot4 from "../images/shoot4.png";
import shoot5 from "../images/shoot5.png";
import shoot6 from "../images/shoot6.png";
import shoot7 from "../images/shoot7.png";
import shoot8 from "../images/shoot8.png";
import shoot9 from "../images/shoot9.png";

function Product() {
    return (
      <div id="works" className="products">
        <div className="textProject">Project</div>
        <div className="container">
          <>
            <div className="itemProject">
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
              >
                <div>
                  <img src={food0} alt="food0" />
                </div>
                <div>
                  <img src={food1} alt="food1" />
                </div>
                <div>
                  <img src={food2} alt="food2" />
                </div>
                <div>
                  <img src={food3} alt="food3" />
                </div>
                <div>
                  <img src={food4} alt="food4" />
                </div>
                <div>
                  <img src={food5} alt="food5" />
                </div>
                <div>
                  <img src={food6} alt="food6" />
                </div>
              </Carousel>
            </div>
            <div className="detailProject">
              <div className="row flexDetail">
                <div className="col detailLeft">
                  <h3 className="txtNameWork">Food Fridge App</h3>
                  <h4 className="txtWorkDetails">
                    Application find food menu from your ingredient
                  </h4>
                </div>
                <div className="col-1.5 detailMiddle">
                  <div className="boxToolM">UX Design</div>
                  <div className="boxToolM">Flutter</div>
                </div>
                <div className="col-1.5 detailRight">
                  <div className="boxToolM">UI Design</div>
                  <div className="boxToolM">Firebase</div>
                </div>
              </div>
            </div>
          </>
          <>
            <div className="itemProject">
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
              >
                <div>
                  <img src={cpe1} alt="cpe1" />
                </div>
                <div>
                  <img src={cpe2} alt="cpe2" />
                </div>
                <div>
                  <img src={cpe3} alt="cpe3" />
                </div>
                <div>
                  <img src={cpe4} alt="cpe4" />
                </div>
                <div>
                  <img src={cpe5} alt="cpe5" />
                </div>
                <div>
                  <img src={cpe6} alt="cpe6" />
                </div>
                <div>
                  <img src={cpe7} alt="cpe7" />
                </div>
                <div>
                  <img src={cpe8} alt="cpe8" />
                </div>
              </Carousel>
            </div>
            <div className="detailProject">
              <div className="row flexDetail">
                <div className="col detailLeft">
                  <h3 className="txtNameWork">CPE Website</h3>
                  <h4 className="txtWorkDetails">
                    The course management system of Computer Engineering
                  </h4>
                </div>
                <div className="col-1.5 detailMiddle">
                  {/* <div className="boxToolM"></div> */}
                  {/* <div className="boxToolM"></div> */}
                </div>
                <div className="col-1.5 detailRight">
                  <div className="boxToolM">UI Design</div>
                  {/* <div className="boxToolM"> </div> */}
                </div>
              </div>
            </div>
          </>
          <>
            <div className="itemProject">
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
              >
                <div>
                  <img src={shoot1} alt="shoot1" />
                </div>
                <div>
                  <img src={shoot2} alt="shoot2" />
                </div>
                <div>
                  <img src={shoot3} alt="shoot3" />
                </div>
                <div>
                  <img src={shoot4} alt="shoot4" />
                </div>
                <div>
                  <img src={shoot5} alt="shoot5" />
                </div>
                <div>
                  <img src={shoot6} alt="shoot6" />
                </div>
                <div>
                  <img src={shoot7} alt="shoot7" />
                </div>
                <div>
                  <img src={shoot8} alt="shoot8" />
                </div>
                <div>
                  <img src={shoot9} alt="shoot9" />
                </div>
              </Carousel>
            </div>
            <div className="detailProject">
              <div className="row flexDetail">
                <div className="col detailLeft">
                  <h3 className="txtNameWork">Shooting Trap Simulation</h3>
                  <h4 className="txtWorkDetails">
                    Realistic shooting range simulator game
                  </h4>
                </div>
                <div className="col-1.5 detailMiddle">
                  {/* <div className="boxToolM">JAVA</div> */}
                  {/* <div className="boxToolM">JAVA</div> */}
                </div>
                <div className="col-1.5 detailRight">
                  <div className="boxToolM">Java</div>
                  {/* <div className="boxToolM">JAVA</div> */}
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    );
}

export default Product;