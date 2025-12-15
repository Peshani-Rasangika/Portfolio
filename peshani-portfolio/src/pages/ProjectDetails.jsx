import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "24px",
          padding: "8px 20px",
          fontSize: "1em",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f5f5f5",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
      <h1>{project.title}</h1>
      {project.projectType && (
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#e0f7fa",
            color: "#006064",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "0.9em",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          {project.projectType}
        </span>
      )}
      <br />
      {(project.githubLink ||
        project.frontendGithubLink ||
        project.backendGithubLink) && (
        <div style={{ margin: "16px 0" }}>
          <h3>GitHub Repositories:</h3>
          {project.frontendGithubLink && (
            <div>
              <a
                href={project.frontendGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Repository
              </a>
            </div>
          )}
          {project.backendGithubLink && (
            <div>
              <a
                href={project.backendGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Repository
              </a>
            </div>
          )}
          {!project.frontendGithubLink &&
            !project.backendGithubLink &&
            project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
        </div>
      )}
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "70%",
          marginBottom: "20px",
          display: "block",
          margin: "0 auto",
        }}
      />
      <p>{project.description}</p>

      {/* Technologies Section */}
      {project.technologies && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Technologies Used:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#0f6178ff",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "16px",
                  fontSize: "0.9em",
                  fontWeight: "bold",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <h2 style={{ marginTop: "3%" }}>My Contribution</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {project.details?.map((item, idx) =>
          item.type === "image" ? (
            <img
              key={idx}
              src={item.src}
              alt={`${project.title} screenshot ${idx + 1}`}
              style={{ width: "70%", display: "block", margin: "0 auto" }}
            />
          ) : item.type === "video" ? (
            <video
              key={idx}
              controls
              style={{
                width: "25%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : item.bold ? (
            <p
              key={idx}
              style={{
                fontSize: "1.3em",
                textDecoration: "underline",
                padding: "10px",
              }}
            >
              <strong>{item.content}</strong>
            </p>
          ) : (
            <p key={idx} style={{ fontSize: "1.1em", padding: "0 20px" }}>
              {item.content}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
