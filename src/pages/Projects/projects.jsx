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

            {/* Project Website */}
            <Card 
                image={"images/project-website.png"} 
                title={"Project Portfolio Website"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo2pic={"logos/link.png"}
                img1={"tech/react.svg"}
                img2={"tech/javascript.png"}
                img3={"tech/html5.png"}
                im4={"css3.png"}
                techUsed={'Repository Coming Soon - Made in January 2024'}
                long_description={
                    "This project is a showcase of my passion for learning new frameworks and coding languages, specifically focusing on my first dive into React and JavaScript. As of January 2024, the website serves as a portfolio, displaying information about various projects I've completed. It's not just a portfolio, but a reflection of my journey in the coding world. A detailed place to store all the information about each of my projects throughout the years. "
                }
                />

            {/* SEG Small Group Project  */}
            <Card 
                image={"images/hyena.png"} 
                title={"Hyena Task Manager - Group Project"} 
                short_description={"A Website developed using Python Django as part of a Group Project"}
                logo1pic={"logos/github-mark-white.png"}
                logo2pic={"logos/link.png"}
                logo2link={"https://jakerpppp.pythonanywhere.com"}
                img1={"tech/python.png"}
                img2={"tech/django-python-logo.png"}
                techUsed={'Repository Coming Soon - Made from November - Decemeber 2023'}
                long_description={
                    "Made in Collaboration with Boonyawat Ariyawatku, Carlos De la Puente, Emre Ozbek, Raj Mohammad. This Project was a group Project using Python Django as the backend. We created a Website where users could create accounts and create teams with other members of the site, which in turn would let them create tasks and assign these tasks to other team mates. The Website included many additional features such as notifications and a gamification element to encourage Task Completion for all users. The challenge in this Task waas working effectively in a Team of People who had never worked together before, while maintaining efficient Software Development technciques to produce a successful outcome for all involved."
                }/>
            
            {/* Scala Projects */}
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            
            {/* C++ Projects */}
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>

            {/* Ros Project */}
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            
            {/* Java Projects */}
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>
            
            {/* Python A-Level Project */}
            <Card 
                image={"logos/github-mark-white.png"} 
                title={"W"} 
                short_description={"A Website developed in React to showcase my Coding Projects"}
                logo1pic={"logos/github-mark-white.png"}
                logo1link={"https://www.google.com"}
                img1={"logos/github-mark-white.png"}
                img2={"logos/github-mark-white.png"}
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
                }/>

        </div>
        </>
    )
}

export default Projects
