import React from "react"
import "../styles/Skills.css"

import mixSkills from '../images/mix-skills.png'
// import Photoshop from "../images/Photoshop.png"
// import illustrator from "../images/illustrator.png"
// import Animate from "../images/Animate.png"
// import XD from "../images/XD.png"
// import InDesign from "../images/InDesign.png"
// import Figma from "../images/figma.png"
// import Html from '../images/html5.png'
// import Css from '../images/css3.png'
// import Javascript from '../images/javascript.png'
// import Python from '../images/python.png'

// const skills = [
//   {
//     id: '1',
//     pic: Photoshop,
//     description1: 'Adobe',
//     description2: 'Photoshop',
//   },
//   {
//     id: '2',
//     pic: illustrator,
//     description1: 'Adobe ',
//     description2: 'Illustrator',
//   },
//   {
//     id: '3',
//     pic: Animate,
//     description1: 'Adobe',
//     description2: 'Animate',
//   },
//   {
//     id: '4',
//     pic: XD,
//     description1: 'Adobe',
//     description2: 'XD',
//   },
//   {
//     id: '5',
//     pic: InDesign,
//     description1: 'Adobe',
//     description2: 'InDesign',
//   },
//   {
//     id: '6',
//     pic: Figma,
//     description1: 'Figma',
//   },
//   {
//     id: '7',
//     pic: Html,
//     description1: 'HTML5',
//   },
//   {
//     id: '8',
//     pic: Css,
//     description1: 'CSS3',
//   },
//   {
//     id: '9',
//     pic: Javascript,
//     description1: 'Javascript',
//   },
//   {
//     id: '10',
//     pic: Python,
//     description1: 'Python',
//   },
// ]

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="container justify-content-center">
        <p className="txtSkill">Skills</p>
        <img  className="picSkill" src={mixSkills} alt={mixSkills} />
      </div>
    </div>
  )
}
export default Skills;
