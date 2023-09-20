import React, { useState } from 'react';
import Projectcard from './projectCard';

const initialObj = {
  id: 5,
  pId: 3,
  sId: 1,
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
  projectname: 'DLD1'
};

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: ''
  });

  const [obj, setObj] = useState(initialObj);
  const [showProjectCard, setShowProjectCard] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update obj with new values
    setObj({
      ...obj,
      projectname: formData.title,
      description: formData.description
    });
    setShowProjectCard(true);
  };

  return (
    <div>
      
      <div className="container my-3">
        <h2>Add a Project</h2>
        <form className="my-3" onSubmit={handleFormSubmit}>
          {/* Form input fields */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {showProjectCard && <Projectcard key={5} project={obj} />}
      
    </div>
  );
};

export default AddProject;
