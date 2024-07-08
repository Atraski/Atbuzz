import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: "#a10202" } : {})}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? { color: "#a10202" } : {})}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? { color: "#a10202" } : {})}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            style={({ isActive }) => (isActive ? { color: "#a10202" } : {})}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
