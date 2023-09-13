import React from 'react'

const ProjectCard = ({ project }) => {
    const isTaken = project.sId>0; 
    console.log(isTaken);
    return (
      <div className="dropdown mt-2">
        <button
          className={`btn btn-secondary bg-${isTaken?"dark":"light"} text-${isTaken?"light":"dark"} dropdown-toggle`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <p style={{ width: "50vw" }}>{project.pName}</p>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              {project.pId}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    );
  };

export default ProjectCard
