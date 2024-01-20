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
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"github-mark-white.png"}
                img2={"github-mark-white.png"}
                techUsed={'I used all the Tech in the entire world'}
                long_description={
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis " +
                    "praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias " +
                    "excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui " +
                    "officia deserunt mollitia animi, id est laborum et dolorum fuga." +
                    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, " +
                    "cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod " +
                    "maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor " +
                    "repellendus. " +
                    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus " +
                    "saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. " +
                    "Itque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis " +
                    "voluptatibus maiores alias consequatur aut perferendis doloribus asperiores " +
                    "repellat"
                }
                />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}

export default Projects
