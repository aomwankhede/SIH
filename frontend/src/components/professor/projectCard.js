import React, { useState } from "react";
import deadlines from "../../dummyDeadline";

const ProjectCard = ({ key, project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-2" id={`accordionPanelsStayOpenExample`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`panelsStayOpen-headingOne`}>
          <button
            className={`accordion-button ${
              isOpen ? "active" : ""
            } bg-dark text-light`}
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
            transition: "height 1.5s ease-in-out",
          }}
        >
          <div className="accordion-body">
            {window.location.href === "http://localhost:3000/" ? (
              <div>{project.description}</div>
            ) : (
              <div>
                <ol type="i">
                  {deadlines.map((deadline) =>
                    deadline.projectname === project.projectname ? (
                      <li
                        className="mt-1"
                        style={{
                          padding: "2px",
                          border: "2px double #666362",
                          height: "34px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {deadline.description}
                      </li>
                    ) : (
                      ""
                    )
                  )}
                </ol>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px 0",
                  }}
                >
                  <button type="button" className="add-deadline-button">
                    Add Deadline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
