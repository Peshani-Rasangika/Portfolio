import React from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className="nav-logo-link" onClick={closeNav}>
        <img src={logo} alt="PRR" className="nav-logo" />
      </NavLink>
      <div className="menu-icon" onClick={toggleNav}>
        <div className={isNavOpen ? "hamburger open" : "hamburger"}></div>
      </div>
      <ul className={isNavOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            onClick={closeNav}
            class={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeNav}
            class={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeNav}
            class={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
