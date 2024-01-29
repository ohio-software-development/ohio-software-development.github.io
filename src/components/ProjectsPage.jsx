import React, { useState } from "react";
import Navbar from "./NavBar";
import "./ProjectsPage.css";
import colortheory from "../assets/CTF.png";
import bobcatCoin from "../assets/bobcat_coin.jpeg";
import plexServer from "../assets/plex_server.png";
import clubRebrand from "../assets/club_rebrand.png";
import garduino from "../assets/garduino.png";
import tic80 from "../assets/tic80.png";
import fitness from "../assets/fitness.png";
import calculator from "../assets/calculator.png";
import oucare from "../assets/oucare.png";
import googleTUI from "../assets/googleTui.png";
import socialTUI from "../assets/socialTui.png";
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledListItem = styled.li`
  width: 48%; /* Adjust the width as needed */
  margin-bottom: 8px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #007bff; /* Adjust the color as needed */
`;
const projectsData = [
  {
    id: 1,
    title: "Mobile Jewelry App",
    description:
      "This project was done in collaboration with ColorTheoryVintage, a small business out of Columbus Ohio, to make a jewelry resale platform for small businesses. The developers used ReactNative and Firebase. Capabilities include texting system, uploading products, and more.",
    image: colortheory,
    contributors: "SoahLi & BP-2",
    repo: "https://github.com/ohio-software-development/Color-Theory-Vintage",
  },
  {
    id: 2,
    title: "BobcatCoin Foundations",
    description:
      "This project evaluated methods and capabilities for implementing a digital cryptocurrency system into the club economy. This system can be used for things like club voting, awards, and more.",
    image: bobcatCoin,
    contributors: "EJ0258",
    repo: "https://github.com/ohio-software-development/BobcatCoin",
  },
  {
    id: 3,
    title: "Plex Server",
    description:
      "Launched club Plex server on old Macbook for the weekly club movies. This system contains movies, music, literature, and more. Club members were granted authenticated access to the server.",
    image: plexServer, // Add the image file name or URL
    contributors: "GLYurek3",
    repo: "http://10.233.76.90:8096/",
  },
  {
    id: 4,
    title: "Club Website Model",
    description:
      "This project revamped the club website. The site had new functionality which utilized the GitHub API to dynamically showcase progress on each of the clubs members and repos. This was done using Angular.",
    image: clubRebrand, // Add the image file name or URL
    contributors: "KalebDemaline",
    repo: "https://github.com/ohio-software-development/ClubWebsite",
  },
  {
    id: 5,
    title: "Launching Garduino",
    description:
      "Purchased necessary materials and began work on construction of an automated gardening system using an Arduino board.",
    image: garduino, // Add the image file name or URL
    contributors: "jude-shreffler",
    repo: "https://github.com/ohio-software-development/garduino",
  },

  // Add more projects as needed
];

const currentProjectsData = [
  {
    id: 1,
    title: "TIC-80",
    description:
      "TIC-80 is a tiny computer where you write programs in Lua and use the built in game editor to make fun 8-bit games.",
    image: tic80,
    contributors: "",
    repo: "https://github.com/ohio-software-development/tic-80-template",
  },
  {
    id: 2,
    title: "Fitness WatchOS",
    description:
      "In this project you will gamify fitness by writing a WatchOS application in Swift.",
    image: fitness,
    contributors: "",
    repo: "https://github.com/ohio-software-development/Fitness-Watch-App",
  },
  {
    id: 3,
    title: "Grade Calculator",
    description:
      "This project includes the development of a tool used for calculating needed and expected grades. Potential users include professors and students.",
    image: calculator, // Add the image file name or URL
    contributors: "",
    repo: "https://github.com/ohio-software-development",
  },
  {
    id: 4,
    title: "Garduino",
    description:
      "With preliminary work completed for the Garduino, the project is now looking for students who are interested in joining the group. You will be using an Arduino to automate gardening systems.",
    image: garduino, // Add the image file name or URL
    contributors: "jude-shreffler",
    repo: "https://github.com/ohio-software-development/garduino",
  },

  // Add more projects as needed
];

const pastProjectsData = [
  {
    id: 1,
    title: "OUCare",
    description:
      "OUCare was a project submitted for a Hackathon that centered around healthcare accessibility on college campuses. The project went through several iterations, using React and Vew for front-end. It also used a Twilio text bot client, OpenStreetMaps API, Google Maps API, and more.",
    image: oucare,
    contributors: "BP-2, jude-shreffler, and GLYurek3",
    repo: "https://github.com/ohio-software-development/OUCare",
  },
  {
    id: 2,
    title: "Social Media TUI",
    description:
      "This project created an interface for a social media run through the terminal. This was created using Rust.",
    image: socialTUI,
    contributors: "BP-2 and jude-shreffler",
    repo: "https://github.com/ohio-software-development/Fitness-Watch-App",
  },
  {
    id: 3,
    title: "GSuite TUI",
    description:
      "This project used Rust and Python to create a terminal user interface for the Google suite. This allowed users to utilize the google suite from their terminal. This included reading and writing emails, checking calendars, and more.",
    image: googleTUI, // Add the image file name or URL
    contributors: "BP-2, MonadoBarrage, Alex Bikowski, and PrestonRembis",
    repo: "https://github.com/ohio-software-development",
  },

  // Add more projects as needed
];

const ProjectsPage = () => {
  const [fallProjectIndex, setFallProjectIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [pastProjectIndex, setPastProjectIndex] = useState(0);

  const handleFallNextProject = () => {
    setFallProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const handleCurrentNextProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex + 1) % currentProjectsData.length
    );
  };
  const handlePastProject = () => {
    setPastProjectIndex(
      (prevIndex) => (prevIndex + 1) % pastProjectsData.length
    );
  };

  const project = projectsData[fallProjectIndex];
  const currentProject = currentProjectsData[currentProjectIndex];
  const pastProject = pastProjectsData[pastProjectIndex];
  

  return (
    <div className="projects-page">
      <Navbar />
      <h2 className="fall">Fall 2023 Highlights</h2>
      <h2>{project.title}</h2>
      <img
        className="project_snapshot"
        src={project.image}
        alt={`${project.title}`}
      />
      <p className="description">{project.description}</p>
      <p>Contributors: {project.contributors}</p>
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
        <button className="github-btn">GitHub Repo</button>
      </a>
      <button onClick={handleFallNextProject}>Next Project</button>

      <br />
      <hr></hr>
      <h2 className="current">Current Projects</h2>
      <h2>{currentProject.title}</h2>
      <img
        className="project_snapshot"
        src={currentProject.image}
        alt={`${currentProject.title}`}
      />
      <p className="description">{currentProject.description}</p>
      <p>Contributors: {currentProject.contributors}</p>
      <a href={currentProject.repo} target="_blank" rel="noopener noreferrer">
        <button className="github-btn">GitHub Repo</button>
      </a>
      <button onClick={handleCurrentNextProject}>Next Project</button>

      <br />
      <h2>Ongoing Open Source Projects</h2>
    <p>Open projects are welcoming any and all contributions, so please stop by, check them out, and make some contributions!</p>
    <StyledList>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/ohio-software-development.github.io">This website!</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/2DPlatformer_Unity/tree/582ccf1aaac51ed17d75efdf830a138a47ab3c75">2D Unity Platformer</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/3DBrowser_Unity/tree/13b1e2998fc7a25bbb2f15fcdaedf0630ca41d8c">3D Unity Browser</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/AR-Kinect/tree/6bfe178ad185d3a78176ba5f95d9bd83e9603319">Xbox 360 Kinect AR App</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Bobcat-Language/tree/38398fc603b360874f626263b8a5d3445d22761e">The Bobcat Programming Language</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/BobcatCoin/tree/17bd7f0be2faeb69e9bff996f286d3a4d43b94d1">Bobcat Coin</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Checkers/tree/43e965d007fc2366b179a508fdbb98b4e40cc3f9">Checkers</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Fitness-Watch-App/tree/5da42f02c0be33bdb2bc4036ac91b244a8b211df">Fitness Watch App</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Login-Menu-Web/tree/6b8537086cffaaa3c510685169c77133afa0c694">Web Login Menu</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Minecraft-Ohio-Mod/tree/c5983f629af92b8562bbeccc49819fe70f1dc5e5">Ohio Minecraft Mod</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Price_Tracker/tree/3b075d38382e4f4f58fce1e316b4b3434f36a8a2">Price tracker</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/Stock_App/tree/965731930c81ebdebee75dd803963330ba90c237">Stock Tracking App</StyledLink></StyledListItem>
      <StyledListItem><StyledLink href="https://github.com/ohio-software-development/VR-OUSDC-Lounge/tree/fddf313b9cffb6a6fc7c956fc73caf527db33969">VR OUSDC Lounge</StyledLink></StyledListItem>
    </StyledList>
    
      <hr></hr>
      <h2 className="past">Past Projects</h2>
      <h2>{pastProject.title}</h2>
      <img
        className="project_snapshot"
        src={pastProject.image}
        alt={`${pastProject.title}`}
      />
      <p className="description">{pastProject.description}</p>
      <p>Contributors: {pastProject.contributors}</p>
      <a href={pastProject.repo} target="_blank" rel="noopener noreferrer">
        <button className="github-btn">GitHub Repo</button>
      </a>
      <button onClick={handlePastProject}>Next Project</button>
      <hr></hr>

    </div>
  );
};

export default ProjectsPage;
