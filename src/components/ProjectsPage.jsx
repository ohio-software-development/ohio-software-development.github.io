import { useState } from "react";
import Navbar from "./NavBar";
import "../styles/ProjectsPage.css";
import styled from 'styled-components';
import projectsJson from "../data/projects.json";

const { projectsData, springProjects, currentProjectsData, pastProjectsData } = projectsJson;

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

const ProjectsPage = () => {
  const [fallProjectIndex, setFallProjectIndex] = useState(0);
  const [springProjectIndex, setSpringProjectIndex] = useState(0);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [pastProjectIndex, setPastProjectIndex] = useState(0);

  const handleFallNextProject = () => {
    setFallProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const handleSpringNextProject = () => {
    setSpringProjectIndex((prevIndex) => (prevIndex + 1) % springProjects.length);
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
  const springProject = springProjects[springProjectIndex];
  const currentProject = currentProjectsData[currentProjectIndex];
  const pastProject = pastProjectsData[pastProjectIndex];
  

  return (
    <div className="projects-page">
      <Navbar />
      <h2 className="spring">Spring 2024 Highlights</h2>
      <h2>{springProject.title}</h2>
      <img
        className="project_snapshot"
        src={`/assets/${springProject.image}`}
        alt={`${springProject.title}`}
      />
      <p className="description">{springProject.description}</p>
      <p>Contributors: {springProject.contributors}</p>
      <a href={springProject.repo} target="_blank" rel="noopener noreferrer">
        <button className="github-btn">GitHub Repo</button>
      </a>
      <button onClick={handleSpringNextProject}>Next Project</button>

      <br />
      <hr></hr>
      <h2 className="fall">Fall 2023 Highlights</h2>
      <h2>{project.title}</h2>
      <img
        className="project_snapshot"
        src={`/assets/${project.image}`}
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
        src={`/assets/${currentProject.image}`}
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
        src={`/assets/${pastProject.image}`}
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
