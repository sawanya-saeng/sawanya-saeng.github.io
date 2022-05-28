import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { RenderWorkLeft } from './RenderWorkLeft'
import { RenderWorkRight } from './RenderWorkRight'

import food0 from "../images/food0.png"
import food1 from "../images/food1.png"
import food2 from "../images/food2.png"
import food3 from "../images/food3.png"
import food4 from "../images/food4.png"
import food5 from "../images/food5.png"
import food6 from "../images/food6.png"

import cpe1 from "../images/cpe1.png"
import cpe2 from "../images/cpe2.png"
import cpe3 from "../images/cpe3.png"
import cpe4 from "../images/cpe4.png"
import cpe5 from "../images/cpe5.png"
import cpe6 from "../images/cpe6.png"
import cpe7 from "../images/cpe7.png"
import cpe8 from "../images/cpe8.png"

import shoot1 from "../images/shoot1.png"
import shoot2 from "../images/shoot2.png"
import shoot3 from "../images/shoot3.png"
import shoot4 from "../images/shoot4.png"
import shoot5 from "../images/shoot5.png"
import shoot6 from "../images/shoot6.png"
import shoot7 from "../images/shoot7.png"
import shoot8 from "../images/shoot8.png"
import shoot9 from "../images/shoot9.png"

import space0 from "../images/space0.jpg"

import logo1 from "../images/wed.jpg"
import logo2 from "../images/mw.jpg"
import logo3 from "../images/duck.jpg"
import logo4 from "../images/pig.jpg"
import logo5 from "../images/kaolahm.jpg"
import logo6 from "../images/eniac.jpg"

import port from '../images/porfolio.png'

import package1 from "../images/packmrtom.jpg"
import package2 from "../images/packmilarich.jpg"

import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"

import illus1 from "../images/illus1.jpg"
import illus2 from "../images/illus2.jpg"
import illus3 from "../images/illus3.jpg"
import illus4 from "../images/illus4.jpg"
import illus5 from "../images/illus5.jpg"
import illus6 from "../images/illus6.jpg"

import trip0 from "../images/trip.jpg"
import election0 from "../images/election.jpg"

import fileTripTeeThai from '../files/TripTeeThai.pdf'

const listTrip = [
  {
    id: 0,
    image: trip0
  },
]

const listElection = [
  {
    id: 0,
    image: election0
  },
]

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

const listSpace = [
  {
    id: 1,
    image: space0
  },
]

const listLogo = [
  {
    id: 1,
    image: logo1
  },
  {
    id: 2,
    image: logo2
  },
  {
    id: 3,
    image: logo3
  },
  {
    id: 4,
    image: logo4
  },
  {
    id: 5,
    image: logo5
  },
  {
    id: 6,
    image: logo6
  },
]

const listPackage = [
  {
    id: 1,
    image: package1
  },
  {
    id: 2,
    image: package2
  },
]

const listBanner = [
  {
    id: 1,
    image: banner1
  },
  {
    id: 2,
    image: banner2
  },
]

const listillus = [
  {
    id: 1,
    image: illus1
  },
  {
    id: 2,
    image: illus2
  },
  {
    id: 3,
    image: illus3
  },
  {
    id: 4,
    image: illus4
  },
  {
    id: 5,
    image: illus5
  },
  {
    id: 6,
    image: illus6
  },
]

const listProflio = [
  {
    id: 1,
    image: port
  }
]

function Product() {
    return (
      <div id="works" className="products">
        <div className="textProject">WORKS</div>
        <div className="container">
          <div className="row cardProject">
            <RenderWorkLeft
              list={listTrip}
              headerDetail='UX/UI DESIGN'
              txtNameWork='TripTeeThai App'
              txtWorkDetails='Application for trip planner'
              Figma='https://www.figma.com/file/6kpF1t8sfC917TyUQMgYVD/TripTeeThai'
              PDF='testpdf'
            />
          </div>
          <div className="row cardProjectRight">
            <RenderWorkRight
              list={listElection}
              headerDetail='UX/UI DESIGN'
              txtNameWork='Bangkok Election'
              txtWorkDetails='Bangkok governor election Website'
              Figma='https://www.figma.com/file/8RdXpLkEshiSAQfgKxFnUm/Bangkok-Election?node-id=0%3A1'
              PDF='testpdf'
            />
          </div>
          <div className="row cardProject">
            <RenderWorkLeft
              list={listSpace} 
              headerDetail='UI DESIGN'
              txtNameWork='Space Explorer'
              txtWorkDetails='Application to educate about the solar system'
              Figma='https://www.figma.com/file/MiFI9qjua0AFhFAGkkpYm8/SpaceExplorer'
            />
          </div>
          <div className="row cardProjectRight">
            <RenderWorkRight
              list={listProflio}
              headerDetail='UI DESIGN'
              txtNameWork='Portfolio  Website'
              txtWorkDetails='The Portfolio of Sawanya Saengbuaphun'
              Figma='https://www.figma.com/file/D6qVBBT2T9g6k97PGbH6PI/PORTFOLIO?node-id=2%3A10'
            />
          </div>
          <div className="row cardProject">
            <RenderWorkLeft
              list={listFoodFridge}
              headerDetail='PROJECT'
              txtNameWork='Food Fridge App'
              txtWorkDetails='Application find food menu from your ingredient'
            />
          </div>
          <div className="row cardProjectRight">
            <RenderWorkRight
              list={listCpe}
              headerDetail='PROJECT'
              txtNameWork='CPE  Website'
              txtWorkDetails='The course management system of
              Computer Engineering'
            />
          </div>
          <div className="row cardProject">
            <RenderWorkLeft
              list={listShoot}
              headerDetail='PROJECT'
              txtNameWork='Shooting Simulation'
              txtWorkDetails='Realistic shooting range simulator game'
            />
          </div>
          <div className="row cardProjectRight">
            <RenderWorkRight
              list={listLogo}
              headerDetail='GRAPHIC'
              txtNameWork='Logos'
              txtWorkDetails='Freelance'
            />
          </div>
          <div className="row cardProject">
            <RenderWorkLeft
              list={listPackage}
              headerDetail='GRAPHIC'
              txtNameWork='Packaging'
              txtWorkDetails='Freelance'
            />
          </div>
          <div className="row cardProjectRight">
            <RenderWorkRight
              list={listBanner}
              headerDetail='GRAPHIC'
              txtNameWork='Banners'
              txtWorkDetails='Freelance'
            />
          </div>
          <div className="row cardProject">
            <RenderWorkLeft
              list={listillus}
              headerDetail='GRAPHIC'
              txtNameWork='Illustrations'
              txtWorkDetails='Freelance'
            />
          </div>
        </div>
      </div>
    );
}

export default Product;