import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-link" onClick={closeNav}>
        <img src={logo} alt="PRR" className="nav-logo" />
      </Link>
      <div className="menu-icon" onClick={toggleNav}>
        <div className={isNavOpen ? "hamburger open" : "hamburger"}></div>
      </div>
      <ul className={isNavOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeNav}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
