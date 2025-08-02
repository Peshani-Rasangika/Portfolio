import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.js";

function Home() {
  return (
    <main className="project-grid">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </main>
  );
}

export default Home;
