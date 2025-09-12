import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="highlight">Peshani Rasangika Ranaweera</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            I create comprehensive web applications that solve real-world
            problems. From business automation platforms to social media
            applications, I bring ideas to life with modern technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              Browse My Projects
            </Link>
            <Link to="/about" className="btn-secondary">
              About Me
            </Link>
          </div>

          {/* Tech Stack Preview */}
          <div className="tech-preview">
            <p>I work with:</p>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Profile Image or Animation */}
        <div className="hero-image">
          <div className="profile-placeholder">
            <img
              src="/assets/profilePicture.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
        <div className="social-media-links">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/peshani-ranaweera-68074a363"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-2.16-1.76-2.16-1.42 0-1.74 1.02-1.74 2.16V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.1 1.16 3.1 4.54z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/Peshani-Rasangika"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
