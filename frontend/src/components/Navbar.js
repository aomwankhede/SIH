import React from "react";
import { Link , useNavigate} from "react-router-dom";
function Navbar() {

  const isUserSignedin = !!localStorage.getItem('token')
  const navigate = useNavigate();

  const handleSignout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid" style={{ color: "white" }}>
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          PGD
        </Link>
        <button
          style={{ color: "white" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "white" }}
              >
                AllProjects
              </Link>
            </li>
            {isUserSignedin ? (
              <>
               <li className="nav-item">
               <Link
                 className="nav-link active"
                 aria-current="page"
                 to="/y"
                 style={{ color: "white" }}
               >
                 YourProject
               </Link>
             </li>
             </>
            ):(
              <></>
            )}
           
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/about"
                style={{ color: "white" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/contact"
                style={{ color: "white" }}
              >
                Contact
              </Link>
            </li>
            
            { isUserSignedin ? (
                <>
                <button  onClick={handleSignout}>Signout</button>
                </>
              ):(
                <>
                <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
                style={{ color: "white" }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/login"
                style={{ color: "white" }}
              >
                Login
              </Link>
            </li>
                </>
              )

              }
              
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
