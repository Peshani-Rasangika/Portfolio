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
                I'm Peshani Rasangika Ranaweera, a final-year Computer Science
                undergraduate at the
                <strong> University of Colombo School of Computing (UCSC)</strong>
                . I am a passionate Full-Stack Developer actively seeking an
                internship opportunity to apply my skills in building
                comprehensive web applications using modern technologies and
                best practices.
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
          {/* <section className="services-section">
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
          </section> */}

          {/* Experience Highlights
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
              </div> 
            </div>
          </section> */}

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
          {/* Extra Curricular Activities Section */}
          <section className="activities-section">
            <h2>Extra Curricular Activities</h2>
            <div className="activity-card">
              <div className="activity-icon">🏆</div>
              <div className="activity-details">
                <h3>
                  Fresher's Inter Faculty Championship 2023- University of
                  Colombo
                </h3>
                <div className="activities-grid">
                  <div className="activity-item">
                    <p>• 2nd Runner Up - Basketball (Women)</p>
                    <img
                      src="/assets/activities/basketball.jpg"
                      alt="Basketball Certificate"
                      className="activity-image"
                    />
                  </div>
                  <div className="activity-item">
                    <p>• 1st Runner Up - Kabaddi (Women)</p>
                    <img
                      src="/assets/activities/kabaddi.jpg"
                      alt="Kabaddi Certificate"
                      className="activity-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="achievements-section">
            <h2>Certifications & Achievements</h2>
            <div className="achievements-grid">
              <article className="achievement-card">
                <h3>HackerRank - 30 Days of Code</h3>
                <p>
                  Issued by HackerRank (Nov 2025).{" "}
                  {/*Validated skills in Java,
                  Algorithms, and Data Structures.*/}
                </p>
              </article>
              <article className="achievement-card">
                <h3>Postman API Fundamentals Student Expert</h3>
                <p>
                  Issued by Postman (Nov 2025).{" "}
                  {/*Covers API Testing, REST APIs,
                  and request handling.*/}
                </p>
              </article>
              <article className="achievement-card">
                <h3>JavaScript Mastery From Basics to Advanced 2025</h3>
                <p>
                  Issued by Udemy (Sep 2025).{" "}
                  {/*Comprehensive training in modern
                  JavaScript development.*/}
                </p>
              </article>
              <article className="achievement-card">
                <h3>Python For Beginners Course In-Depth</h3>
                <p>
                  Issued by Udemy (May 2025).{" "}
                  {/*In-depth course on Python
                  programming language fundamentals.  */}
                </p>
              </article>
              <article className="achievement-card">
                <h3>AWS Educate Introduction to Cloud 101</h3>
                <p>
                  Issued by AWS Training and Certification (Aug 2024).
                  {/*Foundational knowledge in Cloud Computing and AWS services.*/}
                </p>
              </article>
              <article className="achievement-card">
                <h3>
                  Microsoft Learn Student Ambassadors Cloud Skills Challenge
                </h3>
                <p>
                  Issued by Microsoft (Aug 2023).{" "}
                  {/*Web Development 101 covering
                  Git, CSS, and web fundamentals.*/}
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
