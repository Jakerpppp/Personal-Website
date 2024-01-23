import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

function Navbar() {

  return (
    <div className="physicalNavbar">
      <div className="Navbar">
        <div className="navLinks">
          <Link to="home-section" smooth={true} duration={500} className="hoverEffect home-link">
            HOME
          </Link>
          <Link to="projects-section" smooth={true} duration={500} className="hoverEffect project-link">
            PROJECTS
          </Link>
          <Link to="contact-section" smooth={true} duration={500} className="hoverEffect contact-link">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
