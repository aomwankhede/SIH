import React from "react";
import projectA from "../../dummyProjectAssigned";
import ProjectCard from "./projectCard";
const ProffProject = () => {
  const currIdP = 1;
  const filteredProjects = projectA.filter(
    (project) => project.profid === currIdP
  );

  return (
    <div>
      {filteredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProffProject;
