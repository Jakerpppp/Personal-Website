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
                image={"images/scala-image.jpg"} 
                title={"Evil Wordle"} 
                short_description={"Evil Wordle Functionality Coded in Functional Programming Language Scala"}
                logo1pic={"logos/github-mark-white.png"}
                img1={"tech/scala.png"}
                techUsed={'Repository Coming Soon - Made in December 2023'}
                long_description={
                    "Evil Wordle is similar to normal Wordle, but with extra calculations to figure out the most evil word to set as the word after the user has made their first guess. Using Scala, this was implemented effectively using mmutable Design, the project emphasizes immutability, ensuring that data structures and states are handled in a purely functional manner, and I applied functional programming concepts, such as pure recursive backtracking, to enhance the maintainability of the code."
                }/>
            <Card 
                image={"images/shogun.png"} 
                title={"Shogun"} 
                short_description={"Shogun Game Functionality Coded in Functional Programming Language Scala"}
                logo1pic={"logos/github-mark-white.png"}
                img1={"tech/scala.png"}
                techUsed={'Repository Coming Soon - Made in December 2023'}
                long_description={
                    "This Scala project brings to life the classic game of Shogun, where strategic moves and careful planning are key. The implementation includes determining all possible moves for each piece and ensuring the legality of those moves, with special consideration given to the king to prevent moves that put it in check or lead to capture."
                }/>
            <Card 
                image={"images/bf.png"} 
                title={"Brainf**k Interpreter and Compiler"} 
                short_description={"A Compiler and Interpreter for the language Brainf**k developed in Scala"}
                logo1pic={"logos/github-mark-white.png"}
                img1={"tech/scala.png"}
                techUsed={'Repository Coming Soon - Made in December 2023'}
                long_description={
                    "This Scala project provides both an interpreter and a compiler for the Brainf**k programming language. Bf is an esoteric programming language known for its minimalistic design, consisting of a small set of commands. The interpreter executes bf programs directly. The compiler compiles Brainf**k programs into an intermediate representation for execution. Scala was the choice for this project because as it is a functional programming language I utilised the pattern matching and speed of the immutable recursive functions to compile a bf file into a much smaller file. I showed the progress of gradually improving the compile process to increase the speed of which bf files can be run. Brainfuck consists of a simple set of commands, each represented by a single character. The commands include >, <, +, -, [, ], ., and , The language operates on a memory tape with cells, and the commands manipulate the tape and its contents. "
                }/>
            <Card 
                image={"images/regex.jpg"} 
                title={"Brzozowski Regular Expression Pattern Matcher"} 
                short_description={"Brzozowski Regular Expression Pattern Matcher developed in Scala!"}
                logo1pic={"logos/github-mark-white.png"}
                img1={"tech/scala.png"}
                techUsed={'Repository Coming Soon - Made in December 2023'}
                long_description={
                    "This Scala project implements a regular expression pattern matcher based on the Brzozowski derivative. The implementation covers checking if the regular expression can match an empty string, calculating the derivative of a regular expression, simplifying regular expressions, and calculating the size of the regular expression tree. It checks if the given regular expression can match an empty string. he derivative of a regular expression is calculated using the Brzozowski derivative. Regular expressions can be simplified for more efficient matching and also The size of the regular expression tree is calculated."
                }/>
            
            {/* C++ Projects */}
            <Card 
                image={"images/sudoku.png"} 
                title={"Sudoku Number Sets Solver"} 
                short_description={"Sudoku Number Sets Solver developed in C++ and with Dynamic Programming"}
                logo1pic={"logos/github-mark-white.png"}
                img1={"tech/cpp.png"}
                techUsed={'Repository Coming Soon - Made from November - Decemeber 2023'}
                long_description={
                    "This C++ project provides a solver for the 9x9 NumberSets puzzle, a challenging variation of Sudoku and . The solver is designed to efficiently find solutions for 9x9 grids with added complexity, making it nearly instantaneous for all examples including extra difficulty boards. Implmented using efficient Backtracking algorithms. Number-Sets is a more difficult version of Suduko, so the challenge was determining how to use Dynamic Programming "
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
