import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

import ItemProject from "./ItemProject"
import "../styles/Project.css"
import GallaryCpe from "../Data/dataCPE"
import GallaryFoodApp from "../Data/dataFoodApp"
import GallaryShoot from "../Data/dataShoot"

const Project = () => {

   const [TimeLoad, setTimeLoad] = useState(false);

   const loadding = setTimeout(() => {
     setTimeLoad(true);
     clearTimeout(loadding);
   }, 1500);
  

  return (
    <div id="project" className="project">
      <div className="container">
        <h1 className="txtProject">Project</h1>
        <div className="container BoxFirst">
          {TimeLoad ? (
            <ItemProject
              ProjectName="Food Fridge App"
              ProjectDetails="Application find food menu from your ingredient"
              Tool1="UX  Design"
              Tool2="Flutter"
              Tool3="UI  Design"
              Tool4="Firebase"
              PicItem={GallaryFoodApp}
            />
          ) : (
            <Skeleton
              height={500}
              width={600}
              count={2}
              className="skelatonPic"
            />
          )}
        </div>
        <div className="container BoxTwo">
          {TimeLoad ? (
            <ItemProject
              ProjectName="CPE  Website"
              ProjectDetails="The course management system of Computer Engineering"
              Tool4="UI  Design"
              PicItem={GallaryCpe}
            />
          ) : (
            <Skeleton
              height={500}
              width={600}
              count={2}
              className="skelatonPic"
            />
          )}
        </div>
        <div className="container BoxTwo">
          {TimeLoad ? (
            <ItemProject
              ProjectName="Shooting Trap Simulation"
              ProjectDetails="Realistic shooting range simulator game"
              Tool4="Java"
              PicItem={GallaryShoot}
            />
          ) : (
            <Skeleton
              height={500}
              width={600}
              count={2}
              className="skelatonPic"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
