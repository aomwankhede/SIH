import React from 'react'
import projectA from '../../dummyProjectAssigned'
import ProjectCard from './projectCard';

const SearchBox = ()=>{
  return(
    <div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 mt-4 mb-2" style={{width:'50vw',border:'2px solid black'}} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Searchh</button>
    </form>
    </div>
  )
}

const Proff_Dashboard = () => {
    return (
      <>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <SearchBox/>
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
          {projectA.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
    
          {projectA.length === 0 ? <h1>No projects available</h1> : ""}
        </div>
        </>
      );
}

export default Proff_Dashboard
