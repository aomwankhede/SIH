import React, { useState } from "react";
import projects from "../../dummyProj";
import ProjectCard from "./ProjectCard";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Update the project list when input changes
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2 mt-4 mb-2"
          style={{ width: "50vw", border: "2px solid black" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

const Student_Dashboard = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState(""); // Track search term

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Track search term
    const filtered = projects.filter((project) =>
      project.pName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        {filteredProjects.length === 0 ? (
          searchTerm === "" ? (
            <h1>No projects available</h1>
          ) : (
            <h1>No match found</h1>
          )
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </>
  );
};

export default Student_Dashboard;
