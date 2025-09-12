import React from "react";
import "./About.css";

function About() {
  return (
    <div className="page-background">
      <div className="page-content">
        <h2
          style={{ color: "#2980b9", fontSize: "2.5rem", marginBottom: "2rem" }}
        >
          About Me
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#2c3e50" }}>
          This is where you can write a detailed description about yourself,
          your skills, and your passions.
        </p>
      </div>
    </div>
  );
}

export default About;
