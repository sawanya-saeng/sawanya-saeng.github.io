import React from 'react'
import { RenderWorkLeft } from './RenderWorkLeft';
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

const listFoodFridge = [
  {
    id: 0,
    image: food0
  },
  {
    id: 1,
    image: food1
  },
  {
    id: 2,
    image: food2
  },
  {
    id: 3,
    image: food3
  },
  {
    id: 4,
    image: food4
  },
  {
    id: 5,
    image: food5
  },
  {
    id: 6,
    image: food6
  },
]

const listCpe = [
  {
    id: 1,
    image: cpe1,
  },
  {
    id: 2,
    image: cpe2,
  },
  {
    id: 3,
    image: cpe3,
  },
  {
    id: 4,
    image: cpe4,
  },
  {
    id: 5,
    image: cpe5,
  },
  {
    id: 6,
    image: cpe6,
  },
  {
    id: 7,
    image: cpe7,
  },
  {
    id: 8,
    image: cpe8,
  },
]

const listShoot = [
  {
    id: 1,
    image: shoot1,
  },
  {
    id: 2,
    image: shoot2,
  },
  {
    id: 3,
    image: shoot3,
  },
  {
    id: 4,
    image: shoot4,
  },
  {
    id: 5,
    image: shoot5,
  },
  {
    id: 6,
    image: shoot6,
  },
  {
    id: 7,
    image: shoot7,
  },
  {
    id: 8,
    image: shoot8,
  },
  {
    id: 9,
    image: shoot9,
  },
]

function Product() {
    return (
      <div id="works" className="products">
        <div className="textProject">WORKS</div>
        <div className="container">
          <div className="row cardProject">
            <RenderWorkLeft
              list={listFoodFridge} 
              headerDetail='project'
              txtNameWork='Food Fridge App'
              txtWorkDetails='Application find food menu from your ingredient'
            />
          </div>
        </div>
      </div>
    );
}

export default Product;