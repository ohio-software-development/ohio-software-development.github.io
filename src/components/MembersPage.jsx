import Navbar from "./NavBar";
import "../styles/MembersPage.css";
import members from "../data/members.json";
import { useState } from "react";

/**
 * TO ADD A MEMBER
 * Go to 'data/members.json'
 * Copy the previous member entry and add your new information!
 * Many other members use the "role" as a nickname!
 * (Optional) Upload a profile picture in the 'public/assets' folder and link it above.
 */

// Define user data directly within the file

const getAvatarSrc = (avatar) => {
  if (typeof avatar === "string") {
    return `/assets/${avatar}`;
  }
  return `/assets/default.jpg`;
}

const MembersPage = () => {
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
              <img src={getAvatarSrc(member.avatar)} alt={`${member.name}'s avatar`} />
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
