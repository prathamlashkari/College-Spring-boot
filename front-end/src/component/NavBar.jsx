import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">LegalConnect</div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lawyers">Lawyers</Link>
        </li>
        <li>
          <Link to="/acts">Acts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
