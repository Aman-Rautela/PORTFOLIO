import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import '../css/Projects.css';
import sassSVG from '../assets/svg/sassLogo.svg';
import Stop from '../assets/sw.png';
import Dice from '../assets/diccc.png';
import AgroMillets from '../assets/agro.png';
import Nike from '../assets/sho.png';
import Recipe from '../assets/rec.png';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
  const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
  const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;

  function updateIndex(newIndex) {
    newIndex < 0
      ? newIndex = 0
      : newIndex >= projects.length 
      ? newIndex = projects.length - 1 
      : newIndex
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Agro-Millets",
      techstack: (
        <>
          {htmlLogo}
          {cssLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
        </>
      ),
      description: (
        <>
          <p>
            This is a mock e-commerce website using front-end features combined
            with <em>backend functionalities with MySql & php</em>.
             Features include a randomly generated list of grocery items to select your desired purchase,
            filtering Vegetables / pulses items on the home or category page by price or rating,
            adding items from your shopping or favorites cart, and a checkout
            page to view your total and mock form to complete purchases.
          </p>
        </>
      ),
      demoUrl: "https://github.com/Aman-Rautela/AGROMillets",
      image: AgroMillets,
    },
    {
      name: "Nike Brand Landing page",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>Landing Page</p>
        </>
      ),
      description: (
        <>
          <p>
            This website makes use of react.js and vite to drop the 
            landing page oof Nike  brand in an interactive way. It has a  
            simple navigation bar at the top.
          </p>
        </>
      ),
      demoUrl: "https://nike22landingpage.netlify.app",
      image: Nike,
    },
    {
      name: "DICE-GAME",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
        </>
      ),
      description: (
        <>
          <p>
            This web application makes use of the react.js and vite to drop 
            a dice game.  The user can roll the dice by clicking on it,<em>have to chooes a number between 1-6 </em> 
            before clicking on dice. When clicked, it will show random number  
            between 1-6. The aim is to get same number as selected.
          </p>
        </>
      ),
      demoUrl: "https://dice22game.netlify.app",
      image: Dice,
    },
    {
      name: "Recipe Finder",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React Context</p>
        </>
      ),
      description: (
        <>
          <p>
            This website works as a recipe finder that allows the 
            user to find the recipe of any food they want of any category. It uses React for UI rendering and Vite for
            user to search for a specific dish from <em>SEARCH BY AREA </em>or <em>CATEGORY </em>.
          </p>
        </>
      ),
      demoUrl: "https://kitchen22point.netlify.app",
      image: Recipe,
    },
    {
      name: "Stop-Watch App",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: <>{netlifyLogo}</>,
      description: (
        <>
          <p>
            This website is a simple showcase of a stopwatch app, built using react.js. 
            It has  two functionalities - start/stop and reset. The timer starts when you click on play,  
            it keeps running until you press pause or reset. When you hit play again, it will continue from where it left off.
          </p>
        </>
      ),
      demoUrl: "https://stopwatch22app.netlify.app",
      image: Stop,
    },
  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className='projectImg'>
                <img src={project.image} />
              </div>
              <div className='projectInfo'>
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className='projectDeps'>
                  {project.dependencies}
                </div>
                <div className='projectDesc'>
                  {project.description}
                </div>
                <a target='_blank' href={project.demoUrl}>Live Demo/Git Repo</a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}>
                <span className={
                  `${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`
                  }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
