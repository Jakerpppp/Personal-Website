import ClickableLogo from "../ClickableLogo/ClickableLogo.jsx"
import './Footer.css'
import React, { useEffect } from 'react';
import hackedEffect from "./hacked_effect.jsx";


function Footer() {

    useEffect(() => {
        const links = document.querySelectorAll('.custom-effect');
    
        links.forEach(link => {
          hackedEffect(link);
        });
      }, []);


    return(
        <footer className="footer-container">
        <h1 className="footer-effect">Contact Me!</h1>
        <a className='text-style' href="mailto:jake.rawal3@gmail.com">jake.rawal3@gmail.com</a>
        <div>
            <ClickableLogo picture={"logos/github-mark-white.png"} link={"https://github.com/Jakerpppp"} /> 
            <ClickableLogo picture={"logos/LI-In-Bug.png"} link={"https://www.linkedin.com/in/jake-rawal-b67ba2260"} />
        </div>
        </footer>
    )
}

export default Footer