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
import tristan_avatar from "../assets/tristan.jpeg"

/**
 * TO ADD A MEMBER
 * Copy the previous member entry and add your new information!
 * Many other members use the "role" as a nickname!
 * (Optional) Upload a profile picture in the 'assets' folder and link it above.
 */

// Define user data directly within the file
const memberData = [
  {
    "id": 1,
    "name": "Brendan Smyers",
    "role": "President",
    "github": "https://github.com/b-smyers",
    "avatar": brendan_avatar
  },
  {
    "id": 2,
    "name": "Drew Tumblin",
    "role": "Vice President",
    "github": "https://github.com/tumblinx",
    "avatar": drew_avatar,

  },
  {
    "id": 3,
    "name": "Michael Tan",
    "role": "Treasurer",
    "github": "https://github.com/MonadoBarrage",
    "avatar": monadobarrage_avatar,
  },
  {
    "id": 4,
    "name": "Josh Marusek",
    "role": "Member",
    "github": "https://github.com/sustainmain",
    "avatar": josh_avatar,
  },
  {
    "id": 5,
    "name": "Brady Phelps",
    "role": "Former President / Unc",
    "github": "https://github.com/bp-2",
    "avatar": brady_avatar,
  },
  {
    "id": 6,
    "name": "Eric Jurina",
    "role": "Jack Of All Trades Developer",
    "github": "https://github.com/EJ0258",
    "avatar": eric_avatar,

  },
  {
    "id": 7,
    "name": "Alex Bikowski",
    "role": "Member (**** **** a *****)",
    "github": "https://github.com/AlexBikowski20",
    "avatar": alex_avatar,

  },
  {
    "id": 8,
    "name": "Owen Turnbull",
    "role": "Vegas Insider",
    "github": "https://github.com/SoahLi",
    "avatar": owen_avatar,
  },
  {
    "id": 9,
    "name": "Jude Shreffler",
    "role": "Member",
    "github": "https://github.com/jude-shreffler",
    "avatar": jude_avatar,
  },
  {
    "id": 10,
    "name": "Nathan Fout",
    "role": "Alumni?",
    "github": "https://github.com/Nathan208619",
    "avatar": nathan_avatar,
  },
  {
    "id": 11,
    "name": "Jansen Craft",
    "role": "Faculty Consult",
    "github": "https://github.com/jansen-craft",
    "avatar": jansen_avatar,
  },
  {
    "id": 12,
    "name": "Owen Salyer",
    "role": "Member",
    "github": "https://github.com/osalyer02",
    "avatar": owensal_avatar,
  },
  {
    "id": 13,
    "name": "Virginia Dickens",
    "role": "Member",
    "github": "https://github.com/VP-2",
    "avatar": virginia_avatar,
  },
  {
    "id": 14,
    "name": "Tristan Wellman",
    "role": "Member",
    "github": "https://github.com/TristanWellman",
    "avatar": tristan_avatar,
  },
  {
    "id": 15,
    "name": "blank",
    "role": "Member",
    "github": "blank",
    "avatar": {},
  },
  {
    "id": 16,
    "name": "Nathan Beasley",
    "role": "member",
    "github": "https://github.com/NathanBeas",
    "avatar": {}
  }

  // Add more members as needed
];
const MembersPage = () => {
  return (
    <div>
      <Navbar />
      <div className="full-page">
        <div className="members-page">
          <h1>Members Page</h1>
        </div>

        <div className="member-cards">
          {memberData.map((member) => (
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
