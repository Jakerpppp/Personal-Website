import './navbar.css'
import hackedEffect from './hacked_effect';
import React, { useEffect } from 'react';


function Navbar() {


    useEffect(() => {
        const links = document.querySelectorAll('.hoverEffect');
    
        links.forEach(link => {
          hackedEffect(link);
        });
      }, []);

    return (
      <div className="physicalNavbar">
        <div className="Navbar">
          <div className="navLinks d-flex justify-content-center">
            <a href="#" className="hoverEffect home-link">HOME</a>
            <a href="#" className="hoverEffect project-link">PROJECTS</a>
            <a href="#" className="hoverEffect contact-link">CONTACT</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
