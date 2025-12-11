import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ image, title, description, id, projectType }) {
  const maxDescriptionLength = 100;
  const displayDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + "..."
      : description;
  return (
    <div className="project-card">
      <Link
        to={`/project/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={image}
          alt={`${title} screenshot`}
          className="project-image"
        />
        <div className="project-info">
          <span className="project-type">{projectType}</span>
          <h3>{title}</h3>
          <p>{displayDescription}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
