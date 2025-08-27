import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.js";

function Home() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/assets/profileBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <main
        className="project-grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
