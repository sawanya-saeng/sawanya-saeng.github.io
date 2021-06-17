import React from 'react'

import ItemProject from "./ItemProject"
import "../styles/Project.css"
import GallaryCpe from "../Data/dataCPE"
import GallaryFoodApp from "../Data/dataFoodApp"
import GallaryShoot from "../Data/dataShoot"

const Project = () => {
  return (
    <div id="project" className="project">
      <h1 className="txtProject">Project</h1>
      <div className="Box">
        <ItemProject
          ProjectName="Food Fridge App"
          ProjectDetails="Application find food menu from your ingredient"
          Tool1="UX  Design"
          Tool2="Flutter"
          Tool3="UI  Design"
          Tool4="Firebase"
          PicItem={GallaryFoodApp}
        />
      </div>
      <div className="Box">
        <ItemProject
          ProjectName="CPE  Website"
          ProjectDetails="The course management system of Computer Engineering"
          Tool4="UI  Design"
          PicItem={GallaryCpe}
        />
      </div>
      <div className="Box">
        <ItemProject
          ProjectName="Shooting Trap Simulation"
          ProjectDetails="Realistic shooting range simulator game"
          Tool4="Java"
          PicItem={GallaryShoot}
        />
      </div>
    </div>
  );
};

export default Project;
