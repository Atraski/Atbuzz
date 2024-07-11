import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);

  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStyleLink = (hash) => {
    return location.hash === hash ? { color: "#ff288b" } : {};
  };

  return (
    <nav className={`navbar ${changeNavbar ? "scrolledNav" : ""}`}>
      <div className="navbar-container container">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
        <div className="nav-links">
          {/* <NavLink to="/">Home</NavLink> */}
          <a href="#about" style={getStyleLink("#about")}>
            About Us
          </a>
          <a href="#services" style={getStyleLink("#services")}>
            Services
          </a>
          <a href="#work" style={getStyleLink("#work")}>
            Work
          </a>
          <a href="#contact" style={getStyleLink("#contact")}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
