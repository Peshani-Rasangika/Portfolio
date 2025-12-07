import React from "react";
import "./About.css";

function About() {
  return (
    <div className="page-background">
      <div className="page-content">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <div className="profile-section">
              <img
                src="/assets/profilePicture.jpg"
                alt="Peshani Rasangika"
                className="about-profile-img"
              />
            </div>
            <div className="intro-section">
              <h1>About Me</h1>
              <p className="intro-text">
                I'm Peshani Rasangika Ranaweera, a passionate Full-Stack
                Developer currently pursuing my
                <strong> Bachelor of Science in Computer Science</strong> at the
                <strong>
                  {" "}
                  University of Colombo School of Computing (UCSC)
                </strong>
                . I specialize in creating comprehensive web applications that
                solve real-world problems using modern technologies and best
                practices.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="education-section">
            <h2>Education</h2>
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-details">
                <h3>University of Colombo School of Computing (UCSC)</h3>
                <p className="degree">
                  Bachelor of Science in Computer Science
                </p>
                <p className="duration">2023 - 2026 (Expected)</p>
                <p className="description">
                  Pursuing comprehensive education in computer science
                  principles, algorithms, data structures, and modern
                  development methodologies.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="skills-section">
            <h2>Technical Skills</h2>

            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">React Native</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Tailwind CSS</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">Java Spring Boot</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Database Management</h3>
                <div className="skill-tags">
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">SQLite</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">WebSockets</span>
                  <span className="skill-tag">RESTful APIs</span>
                  <span className="skill-tag">Firebase</span>
                  {/* <span className="skill-tag">JWT Authentication</span> */}
                </div>
              </div>
            </div>
          </section>

          {/* What I Do Section */}
          <section className="services-section">
            <h2>What I Do</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Full-Stack Development</h3>
                <p>
                  Building complete web applications from database design to
                  user interface, ensuring seamless integration between frontend
                  and backend systems.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>UI/UX Implementation</h3>
                <p>
                  Creating responsive and intuitive user interfaces that provide
                  excellent user experience across all devices and platforms.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🗄️</div>
                <h3>Database Design</h3>
                <p>
                  Designing efficient database schemas and implementing robust
                  data management solutions for scalable applications.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>API Development</h3>
                <p>
                  Developing RESTful APIs and implementing real-time
                  communication features using modern backend technologies.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Highlights */}
          <section className="experience-section">
            <h2>Experience Highlights</h2>
            <div className="experience-list">
              <div className="experience-item">
                <h3>🚀 5+ Projects Completed</h3>
                <p>
                  Successfully delivered multiple full-stack applications
                  ranging from business automation platforms to social media
                  applications.
                </p>
              </div>
              <div className="experience-item">
                <h3>⚡ Real-time Applications</h3>
                <p>
                  Implemented WebSocket-based chat systems and real-time
                  communication features in web applications.
                </p>
              </div>
              <div className="experience-item">
                <h3>🏢 Business Process Automation</h3>
                <p>
                  Developed comprehensive platforms that automate end-to-end
                  business processes, improving operational efficiency.
                </p>
              </div>
              {/* <div className="experience-item">
                <h3>📱 Cross-Platform Development</h3>
                <p>
                  Experience in both web and mobile application development
                  using React and React Native.
                </p>
              </div> */}
            </div>
          </section>

          {/* Personal Interests */}
          {/* <section className="interests-section">
            <h2>Beyond Coding</h2>
            <p>
              When I'm not coding, I enjoy staying up-to-date with the latest
              technology trends, contributing to open-source projects, and
              exploring new frameworks and libraries. I'm passionate about
              creating solutions that make a positive impact on people's lives
              and businesses.
            </p>
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default About;
