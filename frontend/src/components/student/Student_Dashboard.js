import React from "react";
import projects from "../../dummyProj";
import ProjectCard from "./ProjectCard";

const SearchBox = ()=>{
  return(
    <div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 mt-4 mb-2" style={{width:'50vw',border:'2px solid black'}} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  )
}

const Student_Dashboard = () => {
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
      {projects.map((project) => {
        if (project.sId > 0) {
          return "";
        }
        return <ProjectCard key={project.id} project={project} />;
      })}

      {projects.length === 0 ? <h1>No projects available</h1> : ""}
    </div>
    </>
  );
};

export default Student_Dashboard;
