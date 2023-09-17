import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student_Dashboard from "./components/student/Student_Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import StudentProject from "./components/student/StudentProject";
import Proff_Dashboard from "./components/professor/Proff_Dashboard";
import ProffProject from "./components/professor/ProffProject";
function App() {
  const isProffessor = false;
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isProffessor ? <Proff_Dashboard /> : <Student_Dashboard />}
          ></Route>
          <Route
            exact
            path="/y"
            element={isProffessor ? <ProffProject /> : <StudentProject />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
