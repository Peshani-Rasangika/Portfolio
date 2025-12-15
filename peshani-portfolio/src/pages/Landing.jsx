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
            Final-year Computer Science undergraduate at UCSC actively seeking a
            Full-Stack Developer internship. I specialize in building
            user-centric web applications using modern technologies like React,
            Node.js, and cloud services.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More About Me
            </Link>
            <a
              href="/assets/Peshani_Ranaweera_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary"
              download="Peshani_Ranaweera_CV.pdf"
            >
              Download CV
            </a>
          </div>

          {/* Quick Highlights */}
          <div className="quick-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎓</span>
              <span>UCSC Computer Science Undergraduate</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💼</span>
              <span>5+ Projects Delivered</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚡</span>
              <span>Passionate About Full-Stack Development</span>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="profile-placeholder">
            <img
              src="/assets/profilePicture.jpg"
              alt="Peshani Rasangika"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-preview">
          <div className="project-preview-card">
            <img
              src="/assets/simpex-solar/landingPage.png"
              alt="Simpex Solar"
            />
            <h3>Simpex Solar</h3>
            <p>Business automation platform with CRM integration</p>
          </div>
          <div className="project-preview-card">
            <img src="/assets/connectHub/landingPage.png" alt="ConnectHub" />
            <h3>ConnectHub</h3>
            <p>MERN stack social media platform</p>
          </div>
          <div className="project-preview-card">
            <img src="/assets/goodDevs/landingPage.png" alt="GoodDevs" />
            <h3>GoodDevs</h3>
            <p>Developer-nonprofit connection platform</p>
          </div>
        </div>
        <div className="projects-cta">
          <Link to="/projects" className="btn-outline">
            See All Projects →
          </Link>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="tech-showcase">
        <h2>Technologies I Work With</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-icons">
              <span className="tech-item">React</span>
              <span className="tech-item">TypeScript</span>
              <span className="tech-item">Tailwind</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-icons">
              <span className="tech-item">Node.js</span>
              <span className="tech-item">FastAPI</span>
              <span className="tech-item">Spring Boot</span>
            </div>
          </div>
          <div className="tech-category">
            <h3>Database</h3>
            <div className="tech-icons">
              <span className="tech-item">PostgreSQL</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">MySQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Build Something Amazing Together</h2>
          <p>
            Ready to bring your ideas to life? I'm always open to discussing new
            opportunities and innovative projects.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a
              href="mailto:peshaniranaweera@gmail.com"
              className="btn-secondary"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
        <div className="social-media-links">
          <h3>Connect with me</h3>
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              href="https://www.hackerrank.com/profile/prros2001"
              target="_blank"
              rel="noopener noreferrer"
              title="HackerRank"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="Hackerrank--Streamline-Simple-Icons"
                height="40"
                width="40"
              >
                <desc>
                  Hackerrank Streamline Icon: https://streamlinehq.com
                </desc>
                <title>HackerRank</title>
                {/* Added background rectangle */}
                <rect x="2" y="2" width="20" height="20" fill="currentColor" />
                <path
                  d="M9.95 8.002h1.805c0.061 0 0.111 0.05 0.111 0.111v7.767c0 0.061 -0.05 0.111 -0.11 0.111H9.95c-0.061 0 -0.111 -0.05 -0.111 -0.11v-2.87H7.894v2.87c0 0.06 -0.05 0.11 -0.11 0.11H5.976a0.11 0.11 0 0 1 -0.11 -0.11V8.112c0 -0.06 0.05 -0.11 0.11 -0.11h1.806c0.061 0 0.11 0.05 0.11 0.11v2.869H9.84v-2.87c0 -0.06 0.05 -0.11 0.11 -0.11zm2.999 0h5.778c0.061 0 0.111 0.05 0.111 0.11v7.767a0.11 0.11 0 0 1 -0.11 0.112h-5.78a0.11 0.11 0 0 1 -0.11 -0.11v-7.77c0 -0.06 0.05 -0.11 0.11 -0.11z"
                  fill="rgba(174,214,242)" /* Changed fill to white */
                ></path>
              </svg>
            </a>
            <a
              href="https://medium.com/@prranaweeraos2001"
              target="_blank"
              rel="noopener noreferrer"
              title="Medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                viewBox="0 0 512 512"
                width="35"
                height="35"
              >
                <g /*fill-rule="nonzero"*/>
                  <path d="M89.825 0h332.35C471.776 0 512 40.224 512 89.825v332.35c0 49.6-40.224 89.825-89.825 89.825H89.825C40.225 512 0 471.775 0 422.175V89.825C0 40.224 40.225 0 89.825 0z" />
                  <path
                    style={{ fill: "rgba(174,214,242)" }}
                    d="M512 352.368v46.5c-2.92.282-5.92.426-9 .426-54.97 0-85.917-45.786-87.252-103.078-.039-2.215-.024-4.416.025-6.602.03-1.363.084-2.722.153-4.076.034-.724.068-1.404.123-2.161.054-.759.108-1.517.173-2.275 1.979-25.296 10.122-47.805 23.562-64.46 8.349-10.339 18.383-18.216 29.761-23.484 9.994-5.031 24.04-7.809 35.49-7.809h.495a97.2 97.2 0 016.47.216v12.793c-2.275-.623-4.71-.958-7.3-1.001-23.157.478-36.957 28.216-38.676 66.647H512v10.831h-47.014l-.015.01c-2.12 37.445 18.375 69.09 47.029 77.523zm-93.943-230.055l.404-.089v-3.126h-82.454l-76.562 179.944-76.561-179.944H94.03v3.126l.398.089c15.05 3.397 22.692 8.463 22.692 26.733v213.89c0 18.27-7.671 23.336-22.721 26.733l-.399.089v3.136h60.285v-3.126l-.399-.089c-15.05-3.397-22.691-8.463-22.691-26.733V161.453l98.351 231.441h5.579l101.216-237.896v213.23c-1.289 14.431-8.861 18.886-22.489 21.963l-.404.094v3.101h105.013v-3.101l-.404-.094c-13.642-3.077-21.396-7.532-22.686-21.963l-.069-219.182h.069c0-18.27 7.641-23.336 22.686-26.733z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
