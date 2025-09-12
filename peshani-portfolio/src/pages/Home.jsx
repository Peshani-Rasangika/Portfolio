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
          width: "100vw",
          height: "100vh",
          color: "white",
          backgroundSize: "cover",
          background: "linear-gradient(135deg, #ffffff 0%, #c4d2ee 100%)",
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
