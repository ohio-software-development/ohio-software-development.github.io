import React, { useState } from 'react';
import Navbar from './NavBar';
import './ProjectsPage.css';
import colortheory from "../assets/color_theory.png";
import bobcatCoin from "../assets/bobcat_coin.jpeg";
import plexServer from "../assets/plex_server.png";
import clubRebrand from "../assets/club_rebrand.png";
import garduino from "../assets/garduino.png";
import tic80 from "../assets/tic80.png";
import fitness from "../assets/fitness.png";
import calculator from "../assets/calculator.png";

const projectsData = [
  {
    id: 1,
    title: 'Mobile Jewelry App',
    description: 'This project was done in collaboration with ColorTheoryVintage, a small business out of Columbus Ohio, to make a jewelry resale platform for small businesses. The developers used ReactNative for the front-end and Firebase for the backend. Capabilities include fully functional texting system, image capturing and uploading to the server, user profile customization, user account authentication, and browsing products.',
    image: colortheory, 
    contributors:"SoahLi & BP-2",
    repo: "https://github.com/ohio-software-development/Color-Theory-Vintage",
  },
  {
    id: 2,
    title: 'BobcatCoin Foundations',
    description: 'This project evaluated methods and capabilities for implementing a digital cryptocurrency system into the club economy. This system can be used for things like club voting, awards, and more.',
    image: bobcatCoin, 
    contributors:"EJ0258",
    repo: "https://github.com/ohio-software-development/BobcatCoin",
  },
  {
    id: 3,
    title: 'Plex Server',
    description: 'Launched club Plex server on old Macbook for the weekly club movies. This system contains movies, music, literature, and more. Club members were granted authenticated access to the server.',
    image: plexServer, // Add the image file name or URL
    contributors: "GLYurek3",
    repo: "http://10.233.76.90:8096/",
  },
  {
    id: 4,
    title: 'Club Website Model',
    description: 'This project revamped the club website. The site had new functionality which utilized the GitHub API to dynamically showcase progress on each of the clubs members and repos. This was done using Angular.',
    image: clubRebrand, // Add the image file name or URL
    contributors: "KalebDemaline",
    repo: "https://github.com/ohio-software-development/ClubWebsite",
  },
  {
    id: 5,
    title: 'Launching Garduino',
    description: 'Purchased necessary materials and began work on construction of an automated gardening system using an Arduino board.',
    image: garduino, // Add the image file name or URL
    contributors: "jude-shreffler",
    repo: "https://github.com/ohio-software-development/garduino",
  },

  // Add more projects as needed
];

const currentProjectsData = [
  {
    id: 1,
    title: 'TIC-80',
    description: 'TIC-80 is a tiny computer where you write programs in Lua and use the built in game editor to make fun 8-bit games.',
    image: tic80, 
    contributors:"",
    repo: "https://github.com/ohio-software-development/tic-80-template",
  },
  {
    id: 2,
    title: 'Fitness WatchOS',
    description: 'In this project you will gamify fitness by writing a WatchOS application in Swift.',
    image: fitness, 
    contributors:"",
    repo: "https://github.com/ohio-software-development/Fitness-Watch-App",
  },
  {
    id: 3,
    title: 'Grade Calculator',
    description: 'This project includes the development of a tool used for calculating needed and expected grades. Potential users include professors and students.',
    image: calculator, // Add the image file name or URL
    contributors: "",
    repo: "https://github.com/ohio-software-development",
  },
  {
    id: 4,
    title: 'Garduino',
    description: 'With preliminary work completed for the Garduino, the project is now looking for students who are interested in joining the group. You will be using an Arduino to automate gardening systems.',
    image: garduino, // Add the image file name or URL
    contributors: "jude-shreffler",
    repo: "https://github.com/ohio-software-development/garduino",
  },

  // Add more projects as needed
];

const ProjectsPage = () => {
  const [fallProjectIndex, setFallProjectIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);


  const handleFallNextProject = () => {
    setFallProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const handleCurrentNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % currentProjectsData.length);
  };

  const project = projectsData[fallProjectIndex];
  const currentProject = currentProjectsData[currentProjectIndex];


  return (
    <div className="projects-page">
      <Navbar />
      <h2 className='fall'>Fall 2023 Highlights</h2>
      <h2>{project.title}</h2>
      <img className='project_snapshot' src={project.image} alt={`${project.title}`} />
      <p className='description'>{project.description}</p>
      <p>Contributors: {project.contributors}</p>
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
          <button className="github-btn">GitHub Repo</button>
        </a>
      <button onClick={handleFallNextProject}>Next Project</button>

      <br/>
      <h2 className='current'>Current Projects</h2>
      <h2>{currentProject.title}</h2>
      <img className='project_snapshot' src={currentProject.image} alt={`${currentProject.title}`} />
      <p className='description'>{currentProject.description}</p>
      <p>Contributors: {currentProject.contributors}</p>
      <a href={currentProject.repo} target="_blank" rel="noopener noreferrer">
          <button className="github-btn">GitHub Repo</button>
        </a>
      <button onClick={handleCurrentNextProject}>Next Project</button>

      <h2 className='past'>Past Projects</h2>

    </div>
  );
};

export default ProjectsPage;
