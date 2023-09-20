import React, { useEffect, useState } from 'react';
import axios from 'axios';
import projectA from "../../dummyProjectAssigned";
import ProjectCard from "./projectCard";
const ProffProject = () => {

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
      if(res.data.profid){
      setLoggedInUserId(res.data.profid);
      }
    })
}

  // const currIdP = 1;
  const filteredProjects = projectA.filter(
    (project) => project.profid === loggedInUserId
  );

  return (
    <div>
      {filteredProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProffProject;
