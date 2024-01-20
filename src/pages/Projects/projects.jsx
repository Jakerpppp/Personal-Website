import './projects.css'
import Card from '../../components/Card/card'
import React, { useEffect } from 'react';
import hackedEffect from '../../components/Footer/hacked_effect';

function Projects() {

    useEffect(() => {
        const links = document.querySelectorAll('.custom-effect');
    
        links.forEach(link => {
          hackedEffect(link);
        });
      }, []);

    return (
        <>
        <div style={{ marginTop: '100px' }}>
        <h1 className='custom-effect'>Projects</h1>
            <Card 
                image={"github-mark-white.png"} 
                title={"Project Showcase Website"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                techUsed={'I used all the Tech in the entire world'}






                />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default Projects
