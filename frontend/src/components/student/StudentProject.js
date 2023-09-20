import React, { useEffect, useState } from 'react';
import axios from 'axios';
import projects from "../../dummyProj";
import ProjectCard from "./ProjectCard";

function StudentProject() {
  // Use the filter method to filter projects based on the condition

  const [loggedInUserId, setLoggedInUserId] = useState('');

  useEffect(()=>{
    fetchUsers();
},[])

const fetchUsers = () =>{
    axios
    .get('http://localhost:3400/signup', {headers:{
      "x-access-token": localStorage.getItem('token'),
    },
  })
    .then((res) =>{
      if(res.data.stdid){
      setLoggedInUserId(res.data.stdid);
      }
    })
}

  const filteredProjects = projects.filter(
    (project) => project.studentid === loggedInUserId
  );

  return (
    <div>
      {console.log(filteredProjects)}
      {filteredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}

export default StudentProject;
