import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import "./MembersPage.css";
import brady_avatar from "../assets/brady_avatar.jpeg";
import jude_avatar from "../assets/jude_avatar.jpeg";
import nathan_avatar from "../assets/nathan_avatar.jpeg";
import alex_avatar from "../assets/alex_avatar.jpeg";
import owen_avatar from "../assets/owen.png";
import drew_avatar from "../assets/drew_avatar.jpg";
import eric_avatar from "../assets/eric.jpeg";
import jansen_avatar from "../assets/jansen.jpg";
import monadobarrage_avatar from "../assets/MonadoBarrage.jpeg";
import owensal_avatar from "../assets/owens.jpg";
import josh_avatar from "../assets/josh.jpeg";
import brendan_avatar from "../assets/Brendan-Smyers.jpg";
import virginia_avatar from "../assets/virginia.png";

/**
 * TO ADD A MEMBER
 * Please add your information to the membersRowData, and make sure to not have more than 4 users in a row.
 * IF row is full, fill out next row.
 * IF next row does not exist, follow the format below to add a new one!
 */



// Define user data directly within the file
const membersRowOneData = [
  {
    "id": 1,
    "name": "Brady Phelps",
    "role": "President / Unc",
    "github": "https://github.com/bp-2",
    "avatar": brady_avatar,
  },
  {
    "id": 2,
    "name": "Brendan Smyers",
    "role": "Vice President",
    "github": "https://github.com/b-smyers",
    "avatar": brendan_avatar
  },
  {
    "id": 3,
    "name": "Drew Tumblin",
    "role": "Secretary",
    "github": "https://github.com/tumblinx",
    "avatar": drew_avatar,

  },
  {
    "id": 4,
    "name": "MonadoBarrage",
    "role": "Treasurer",
    "github": "https://github.com/MonadoBarrage",
    "avatar": monadobarrage_avatar,
  }
  // Add more members as needed
];

const membersRowTwoData = [
  {
    "id": 1,
    "name": "Josh Marusek",
    "role": "Member",
    "github": "https://github.com/sustainmain",
    "avatar": josh_avatar,
  },
  {
    "id": 2,
    "name": "Eric Jurina",
    "role": "Jack Of All Trades Developer",
    "github": "https://github.com/EJ0258",
    "avatar": eric_avatar,

  },
  {
    "id": 3,
    "name": "Alex Bikowski",
    "role": "Member (**** **** a *****)",
    "github": "https://github.com/AlexBikowski20",
    "avatar": alex_avatar,

  },
  {
    "id": 4,
    "name": "Owen Turnbull",
    "role": "Vegas Insider",
    "github": "https://github.com/SoahLi",
    "avatar": owen_avatar,
  },
  // Add more members as needed
];

const membersRowThreeData = [
  {
    "id":1,
    "name": "Jude Shreffler",
    "role": "Member",
    "github": "https://github.com/jude-shreffler",
    "avatar": jude_avatar,
  },
  {
    "id": 2,
    "name": "Nathan Fout",
    "role": "Alumni?",
    "github": "https://github.com/Nathan208619",
    "avatar": nathan_avatar,
  },
  {
    "id": 3,
    "name": "Jansen Craft",
    "role": "Faculty Consult",
    "github": "https://github.com/jansen-craft",
    "avatar": jansen_avatar,
  },
  {
    "id": 4,
    "name": "Owen Salyer",
    "role": "Member",
    "github": "https://github.com/osalyer02",
    "avatar": owensal_avatar,
  },
  // Add more members as needed
];
const membersRowFourData = [
  {
    "id":1,
    "name": "Virginia Dickens",
    "role": "Member",
    "github": "https://github.com/VP-2",
    "avatar": virginia_avatar,
  },
  {
    "id":1,
    "name": "blank",
    "role": "Member",
    "github": "blank",
    "avatar": {},
  }

  // Add more members as needed
];
const MembersPage = () => {
  const [members, setMembers] = useState(membersRowOneData);
  const [membersTwo, setMembersTwo] = useState(membersRowTwoData);
  const [membersThree, setMembersThree] = useState(membersRowThreeData)


  return (
    <div>
      <Navbar />
      <div className="full-page">
        <div className="members-page">
          <h1>Members Page</h1>
        </div>

        <div className="member-cards">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.avatar} alt={`${member.name}'s avatar`} />
              <div>
                <h3 className="member-card-header">{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="member-cards">
          {membersTwo.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.avatar} alt={`${member.name}'s avatar`} />
              <div>
                <h3 className="member-card-header">{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub 
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="member-cards">
          {membersThree.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.avatar} alt={`${member.name}'s avatar`} />
              <div>
                <h3 className="member-card-header">{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub 
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="member-cards">
          {membersRowFourData.map((member) => (
            <div key={member.id} className="member-card">
              <img src={member.avatar} alt={`${member.name}'s avatar`} />
              <div>
                <h3 className="member-card-header">{member.name}</h3>
                <p>{member.role}</p>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
