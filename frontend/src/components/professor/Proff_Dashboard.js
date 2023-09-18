import React, { useState } from 'react';
import projectA from '../../dummyProjectAssigned';
import ProjectCard from './projectCard';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Update the project list when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch(searchTerm); // Update the project list when form is submitted
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2 mt-4 mb-2"
          style={{ width: '50vw', border: '2px solid black' }}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

const Proff_Dashboard = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectA);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = projectA.filter((project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          height: '50vh',
        }}
      >
        {filteredProjects.length === 0 ? (
          searchTerm === '' ? (
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

export default Proff_Dashboard;
