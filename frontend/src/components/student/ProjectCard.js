import React, { useState } from "react";
import deadlines from "../../dummyDeadline";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" id={`accordionPanelsStayOpenExample`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`panelsStayOpen-headingOne`}>
          <button
            className={`accordion-button ${isOpen ? "active" : ""} bg-dark text-white`}
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
            transition: "height 0.5s ease-in-out",
          }}
        >
          <div className="accordion-body">
            {window.location.href === "http://localhost:3000/" ? (
              <div>{project.description}</div>
            ) : (
              <ol type="i">
                {deadlines
                  .filter((deadline) => deadline.projectname === project.projectname)
                  .map((filteredDeadline) => (
                    <li className="mt-1" style={{ border: "2px double #666362", height: "34px" }}>
                      <span style={{ position: "absolute" }}>{filteredDeadline.description}</span>
                      <input type="text" placeholder="Enter link" style={{ position: "relative", marginLeft: "71%" }} />
                      <button type="button" className="submit-button">
                        Submit
                      </button>
                    </li>
                  ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
