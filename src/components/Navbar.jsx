import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/New Logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        <div className="navbar-text">
          <p>Prepare at least 50% faster than the crowd 🚀</p>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>

          <Link to="/exam" className="nav-btn" onClick={() => setMenuOpen(false)}>Exams</Link>
          <Link to="/mentor" className="nav-btn" onClick={() => setMenuOpen(false)}>Mentor</Link>
          <Link to="/motivation" className="nav-btn" onClick={() => setMenuOpen(false)}>Motivation</Link>
          <Link to="/notification" className="nav-btn notification-link" onClick={() => setMenuOpen(false)}>
  Notifications
  <img
    src="/New BG.png"
    alt="Notification Icon"
    className="notification-icon"
  />
</Link>
          <Link to="/contact" className="nav-btn" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      <div className="sale-banner">
        <div className="scroll-text">
          Time is running — your preparation should be too! 🚀 &nbsp; Join us now &nbsp;
        </div>
      </div>
    </>
  );
}

export default Navbar;
