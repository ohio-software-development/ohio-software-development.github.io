import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import "./MembersPage.css";
import brady_avatar from "../assets/brady_avatar.jpeg";
import jude_avatar from "../assets/jude_avatar.jpeg";
import nathan_avatar from "../assets/nathan_avatar.jpeg";
import alex_avatar from "../assets/alex_avatar.jpeg";
import owen_avatar from "../assets/owen.png";

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
    "role": "President",
    "github": "https://github.com/bp-2",
    "avatar": brady_avatar,
  },
  {
    "id": 2,
    "name": "Jude Shreffler",
    "role": "Vice President",
    "github": "https://github.com/jude-shreffler",
    "avatar": jude_avatar,

  },
  {
    "id": 3,
    "name": "Nathan Fout",
    "role": "Member?",
    "github": "https://github.com/Nathan208619",
    "avatar": nathan_avatar,

  },
  {
    "id": 4,
    "name": "Alex Bikowski",
    "role": "Treasurer (hung like a horse)",
    "github": "https://github.com/AlexBikowski20",
    "avatar": alex_avatar,
  }
  // Add more members as needed
];

const membersRowTwoData = [
  {
    "id": 1,
    "name": "Your Name",
    "role": "Role",
    "github": "https://github.com/the_hub",
    "avatar": "avatar goes here",
  },
  {
    "id": 2,
    "name": "Your Name",
    "role": "Role",
    "github": "https://github.com/the_hub",
    "avatar": "avatar goes here",

  },
  {
    "id": 3,
    "name": "Your Name",
    "role": "Role",
    "github": "https://github.com/the_hub",
    "avatar": "avatar goes here",

  },
  {
    "id": 4,
    "name": "MonadoBarrage",
    "role": "Member",
    "github": "https://github.com/MonadoBarrage",
    "avatar": "avatar goes here",

  },
  {
    "id": 5,
    "name": "Owen Turnbull",
    "role": "Member",
    "github": "https://github.com/SoahLi",
    "avatar": owen_avatar,
  },
  // Add more members as needed
];

const MembersPage = () => {
  const [members, setMembers] = useState(membersRowOneData);
  const [membersTwo, setMembersTwo] = useState(membersRowTwoData);


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
                  GitHub Profile
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
                  GitHub Profile
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
