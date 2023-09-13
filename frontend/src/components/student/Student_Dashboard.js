import React from "react";
import projects from "../../dummyProj";
import ProjectCard from "./ProjectCard";
const Student_Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {projects.map((project) => {
        if (project.sId > 0) {
          return "";
        }
        return <ProjectCard key={project.id} project={project} />;
      })}

      {projects.length === 0 ? <h1>No projects available</h1> : ""}
    </div>
  );
};

export default Student_Dashboard;
