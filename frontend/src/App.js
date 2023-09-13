import "./App.css";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Student_Dashboard from "./components/student/Student_Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import StudentProject from "./components/student/StudentProject";
function App() {
  return (
      <Router>
        <Navbar/>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Student_Dashboard />}></Route>
            <Route exact path="/y" element={<StudentProject />}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
