
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="/New Logo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>

        <div className="navbar-text">
          <p>Prepare at least 50% faster than the crowd 🚀</p>
        </div>

        <div className="nav-buttons">
          <Link to="/exam" className="nav-btn">Exams</Link>
          <Link to="/syllabus" className="nav-btn">Syllabus</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
          
        </div>
      </nav>
      <div className="sale-banner">
        <div className="scroll-text">
          Time is running out, so is your preparation. Enroll now 🚀
        </div>
      </div>
    </>
  );
}

export default Navbar;
