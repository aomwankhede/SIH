import React, { useState } from "react";

const ProjectCard = ({key,project}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-2"  id={`accordionPanelsStayOpenExample`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`panelsStayOpen-headingOne`}>
          <button
            className={`accordion-button ${isOpen ? "active" : ""} bg-dark text-light`}
            type="button"
            onClick={handleClick}
            >
            {project.projectname}
          </button>
        </h2>
        <div
          className={`accordion-collapse ${isOpen ? "show" : "collapse"}`}
          aria-labelledby="panelsStayOpen-headingOne"
          style={{
            transition: "height 1.5s ease-in-out"
          }}
        >
          <div className="accordion-body">
            <div>{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
