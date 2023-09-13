import React from 'react'
import projectA from '../../dummyProjectAssigned'
import ProjectCard from './projectCard';
const Proff_Dashboard = () => {
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
          {projectA.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
    
          {projectA.length === 0 ? <h1>No projects available</h1> : ""}
        </div>
      );
}

export default Proff_Dashboard
