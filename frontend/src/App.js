import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Student_Dashboard from "./components/student/Student_Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import StudentProject from "./components/student/StudentProject";
import Proff_Dashboard from "./components/professor/Proff_Dashboard";
import ProffProject from "./components/professor/ProffProject";
import Signup from "./components/login_signup/Register";
import Login from "./components/login_signup/Login"
import axios from "axios";
function App() {
  // const isProffessor = true;

  const [users, setUsers] = useState([]);
  const [loggedInUserRole, setLoggedInUserRole] = useState('');

  useEffect(()=>{
    fetchUsers();
},[])

const fetchUsers = () =>{
    axios
    .get('http://localhost:3400/signup', {headers:{
      "x-access-token": localStorage.getItem('token'),
    },
  })
    // .then((res)=>{
    //     console.log(res.data)
    // })
    .then((res) =>{
      setUsers(res.data.fetch)
      setLoggedInUserRole(res.data.role);
    })
}


  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={loggedInUserRole === 'supervisor' ? <Proff_Dashboard /> : <Student_Dashboard />}
          ></Route>
          <Route
            exact
            path="/y"
            element={loggedInUserRole === 'supervisor' ? <ProffProject /> : <StudentProject />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
