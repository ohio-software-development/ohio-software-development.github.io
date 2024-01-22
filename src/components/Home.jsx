import React from "react";
import Navbar from "./NavBar";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <article>
        <h1>Welcome to OUSDC</h1>
        <p>Developing software and having fun!</p>
      </article>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Join the club!</h2>
        <div className="contact-info">
          <p>
            Find us on GitHub:{" "}
            <a href="https://github.com/ohio-software-development">GitHub</a>
          </p>
          <p>
            Join us on GroupMe:{" "}
            <a href="https://web.groupme.com/join_group/90280088/Dn3xfp80">
              GroupMe
            </a>
          </p>
          <p>
            Connect on Discord:{" "}
            <a href="https://discord.gg/fdzP96UC">Discord</a>
          </p>
          <p>Meeting Location: ARC 221</p>
          <p>Meeting Times: Every Monday from 6:00pm-7:00pm</p>
        </div>

        {/* Embedded Google Map */}
        <iframe
          title="OUSDC Meeting Location"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          src="https://www.google.com/maps/embed/v1/place?q=Ohio+University+Academic+Research+Center&key=AIzaSyA_ChWhDLaJM5WCthdzb31r5pq5qfkvw7E"
          allowFullScreen
        ></iframe>

        {/* Embedded Google Street View */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1705943406704!6m8!1m7!1smd5mmTGYMajXY1m6iM0H-g!2m2!1d39.32677817248244!2d-82.10548010423148!3f253.30882!4f0!5f0.7820865974627469"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default HomePage;
