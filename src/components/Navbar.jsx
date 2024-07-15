import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useIntersectionObserver from "../util/useIntersectionObserver";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [changeNavbar, setChangeNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  useIntersectionObserver(setActiveSection);

  return (
    <nav className={`navbar ${changeNavbar ? "scrolledNav" : ""}`}>
      <div className="navbar-container container">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
        <div className="nav-links">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : {}}
          >
            About Us
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : {}}
          >
            Services
          </a>
          <a href="#work" className={activeSection === "work" ? "active" : {}}>
            Work
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : {}}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
