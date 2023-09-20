import React, { useState } from "react";
import deadliness from "../../dummyDeadline";
import axios from "axios";

const Form = ({ setIsAddingDeadline, setDeadlines, project, deadlines }) => {
  const [formData, setFormData] = useState({
    description: "",
    deadlineDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access form data from the 'formData' state
    const { description, deadlineDate } = formData;
    console.log(description);
    console.log(deadlineDate);

    let newDeadline = {
      studentid: project.studentid,
      proffid: project.proffis,
      marks: null,
      description: description,
      googleDriveLink: "",
      projectname: project.projectname,
      deadlineDate: "2023-09-23T16:23:30.889Z",
      createdAt: Date.now(),
      updatedAt: "2023-09-19T16:27:15.904Z",
      __v: 0,
    };

    let newDeadlines = deadlines;

    newDeadlines.push(newDeadline);

    setDeadlines(newDeadlines);

    try {
      const t = await axios.post("http://127.0.0.1:3400/deadline", {
        sid: project.studentid,
        pid: project.proffid,
        marks: null,
        description: description,
        googleDriveLink: "",
        projectname: project.projectname,
        deadlineDate: "2023-09-23T16:23:30.889Z",
      });
    } catch (err) {
      console.log(err);
    }
    setFormData({
      description: "",
      deadlineDate: "",
    });

    setIsAddingDeadline(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="deadlineDate" className="form-label">
          Deadline
        </label>
        <input
          type="date"
          className="form-control"
          id="deadlineDate"
          name="deadlineDate" // Add 'name' attribute for the input field
          value={formData.deadlineDate}
          onChange={handleInputChange} // Handle input change
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

const ProjectCard = ({ key, project }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [deadlines, setDeadlines] = useState(deadliness);
  const [isAddingDeadline, setIsAddingDeadline] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = () => {
    setIsVisible(false); // Hide the component
  };
  if (!isVisible) {
    return null; // Return null if component is not visible
  }

  const addDeadline = async (project) => {
    setIsAddingDeadline(true);
  };

  return (
    <div className="accordion mt-2" id={`accordionPanelsStayOpenExample`}>
      <div className="accordion-item">
        <h2 className="accordion-header" id={`panelsStayOpen-headingOne`}>
          <button
            className={`accordion-button ${isOpen ? "active" : ""
              } bg-dark text-light`}
            type="button"
            onClick={handleClick}
          >
            {project.projectname}
            <i
              className="fa-solid fa-trash mx-2"
              onClick={handleDeleteClick}
              style={{ float: "right" }}
            ></i>
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
                        {console.log(deadline)}
                        {deadline.googleDriveLink.length > 0 ? (
                          <button
                            style={{ borderRadius: "5px", cursor: "pointer" }}
                          >
                            {/* <a
                            href={`${deadline.googleDriveLink}`}
                            target="_blank"
                            style={{textDecoration: 'none',color:'black' ,fontWeight: 'bold'}}
                          >
                            See Submission
                          </a> */}
                            <a
                              href={
                                deadline.googleDriveLink.startsWith(
                                  "http://"
                                ) ||
                                deadline.googleDriveLink.startsWith("https://")
                                  ? deadline.googleDriveLink
                                  : `http://${deadline.googleDriveLink}`
                              }
                              target="_blank"
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "bold",
                              }}
                            >
                              See Submission
                            </a>
                          </button>
                        ) : (
                          <span>No submission found</span>
                        )}
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
                  {isAddingDeadline ? (
                    <Form
                      setIsAddingDeadline={() => setIsAddingDeadline(false)}
                      setDeadlines={setDeadlines}
                      project={project}
                      deadlines={deadlines}
                    />
                  ) : (
                    ""
                  )}
                  {isAddingDeadline ? (
                    ""
                  ) : (
                    <button
                      type="button"
                      className="add-deadline-button"
                      onClick={() => addDeadline(project)}
                    >
                      Add Deadline
                    </button>
                  )}
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
