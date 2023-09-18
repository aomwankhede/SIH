import React from "react";
import projects from "../../dummyProj";
import ProjectCard from "./ProjectCard";

function StudentProject() {
  // Use the filter method to filter projects based on the condition
  const filteredProjects = projects.filter((project) => project.studentid === 1);

  return (
    <div>
      {console.log(filteredProjects)}
      {filteredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}

export default StudentProject;
