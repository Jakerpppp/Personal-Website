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
  
    const projectsData = [
    //Website Projects
    {
        image: 'images/project-website.png',
        title: 'Project Portfolio Website',
        short_description: 'A Website developed in React to showcase my Coding Projects',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            link: 'https://github.com/Jakerpppp/jakerpppp.github.io',
        },
        {
            pic: 'logos/link.png',
            link: 'https://jakerawal.com',
        },
        ],
        tech_images: ['tech/react.svg', 'tech/javascript.png', 'tech/html5.png', 'tech/css3.png'],
        techUsed: 'Repository and Website Live - Made in January 2024',
        children: (
            <>
        <p>
            Hello thereThis project is a showcase of my passion for learning new frameworks and coding
            languages, specifically focusing on my first dive into React and JavaScript. As of
            January 2024, the website serves as a portfolio, displaying information about various
            projects I've completed. It's not just a portfolio, but a reflection of my journey in the
            coding world. A detailed place to store all the information about each of my projects
            throughout the years.
        </p>
        <p> Deployed using Guthub Pages and Custom Domain configuration</p>
        </>
        ),
    },
    {
        image: 'images/hyena.png',
        title: 'Hyena Task Manager - Group Project',
        short_description: 'A Website developed using Python Django as part of a Group Project',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        {
            pic: 'logos/link.png',
            link: 'https://jakerpppp.pythonanywhere.com',
        },
        ],
        tech_images: ['tech/python.png', 'tech/django-python-logo.png', 'tech/html5.png', 'tech/css3.png'],
        techUsed: 'Repository Coming Soon - Made from November to December 2023',
        children: (
        <>
            <p>
            Made in Collaboration with Boonyawat Ariyawatku, Carlos De la Puente, Emre Ozbek, and Raj
            Mohammad. This Project was a group Project using Python Django as the backend. We created
            a Website where users could create accounts and create teams with other members of the
            site, which in turn would let them create tasks and assign these tasks to other team
            mates. The Website included many additional features such as notifications and a
            gamification element to encourage Task Completion for all users. The challenge in this
            Task was working effectively in a Team of People who had never worked together before,
            while maintaining efficient Software Development techniques to produce a successful
            outcome for all involved.
            </p>
        </>
        ),
    },

    //Scala Projects
    {
        image: 'images/scala-image.jpg',
        title: 'Evil Wordle',
        short_description: 'Evil Wordle Functionality Coded in Functional Programming Language Scala',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/scala.png'],
        techUsed: 'Repository Coming Soon - Made in December 2023',
        children: (
        <>
            <p>
            Evil Wordle is similar to normal Wordle, but with extra calculations to figure out the most
            evil word to set as the word after the user has made their first guess. Using Scala, this
            was implemented effectively using immutable Design, the project emphasizes immutability,
            ensuring that data structures and states are handled in a purely functional manner, and I
            applied functional programming concepts, such as pure recursive backtracking, to enhance
            the maintainability of the code.
            </p>
        </>
        ),
    },
    {
        image: 'images/shogun.png',
        title: 'Shogun',
        short_description: 'Shogun Game Functionality Coded in Functional Programming Language Scala',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/scala.png'],
        techUsed: 'Repository Coming Soon - Made in December 2023',
        children: (
        <>
            <p>
            This Scala project brings to life the classic game of Shogun, where strategic moves and
            careful planning are key. The implementation includes determining all possible moves for
            each piece and ensuring the legality of those moves, with special consideration given to
            the king to prevent moves that put it in check or lead to capture.
            </p>
        </>
        ),
    },
    {
        image: 'images/bf.png',
        title: 'Brainf**k Interpreter and Compiler',
        short_description: 'A Compiler and Interpreter for the language Brainf**k developed in Scala',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/scala.png'],
        techUsed: 'Repository Coming Soon - Made in December 2023',
        children: (
        <>
            <p>
            This Scala project provides both an interpreter and a compiler for the Brainf**k programming
            language. Bf is an esoteric programming language known for its minimalistic design,
            consisting of a small set of commands. The interpreter executes bf programs directly. The
            compiler compiles Brainf**k programs into an intermediate representation for execution.
            Scala was the choice for this project because as it is a functional programming language I
            utilised the pattern matching and speed of the immutable recursive functions to compile a
            bf file into a much smaller file. I showed the progress of gradually improving the compile
            process to increase the speed of which bf files can be run. Brainf**k consists of a simple
            set of commands, each represented by a single character. The commands include &gt;, &lt;,
            +, -, [, ], ., and , The language operates on a memory tape with cells, and the commands
            manipulate the tape and its contents.
            </p>
        </>
        ),
    },
    {
        image: 'images/regex.jpg',
        title: 'Brzozowski Regular Expression Pattern Matcher',
        short_description: 'Brzozowski Regular Expression Pattern Matcher developed in Scala!',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/scala.png'],
        techUsed: 'Repository Coming Soon - Made in December 2023',
        children: (
        <>
            <p>
            This Scala project implements a regular expression pattern matcher based on the Brzozowski
            derivative. The implementation covers checking if the regular expression can match an
            empty string, calculating the derivative of a regular expression, simplifying regular
            expressions, and calculating the size of the regular expression tree. It checks if the
            given regular expression can match an empty string. The derivative of a regular expression
            is calculated using the Brzozowski derivative. Regular expressions can be simplified for
            more efficient matching and also The size of the regular expression tree is calculated.
            </p>
        </>
        ),
    },

    //ROS Project
    {
        image: 'images/turtlebot.png',
        title: 'Robotics Project - Patrol Robot with AI',
        short_description: 'A Website developed using ROS and Visual Recognition Artificial Intelligence',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        {
            pic: 'logos/link.png',
            link: 'https://youtu.be/glx2Qib2CeE',
        },
        ],
        tech_images: ['tech/python.png', 'tech/ros.jpg', 'tech/linux.png'],
        techUsed: 'Repository Coming Soon: YouTube Video Live - Made in November 2023',
        children: (
        <>
            <p>
            A project developed in Python using Rospy and the Robotic Operating System (ROS). Features
            include autonomous patrolling between rooms using the turtlebot3 cost mapping A* Heuristic
            Search, Visual Recognition Artificial Intelligence using YOLO (You Only Look Once) to
            detect the presence of humans, animals, and objects in different rooms, and then use
            Text-To-Speech to report this.
            </p>
        </>
        ),
    },

    //C++ Projects
    {
        image: 'images/sudoku.png',
        title: 'Sudoku Number Sets Solver',
        short_description: 'Countdown Solver developed in C++ and with RPN',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/cpp.png'],
        techUsed: 'Repository Coming Soon - Made from October to November 2023',
        children: (
        <>
            <p>
            This C++ project provides a solver for the 9x9 NumberSets puzzle, a challenging variation
            of Sudoku. The solver is designed to efficiently find solutions for 9x9 grids with added
            complexity, making it nearly instantaneous for all examples, including extra difficulty
            boards. Implemented using efficient Backtracking algorithms. Number-Sets is a more
            difficult version of Sudoku, so the challenge was determining how to use Dynamic
            Programming.
            </p>
        </>
        ),
    },
    {
        image: 'images/countdown.png',
        title: 'Countdown Game',
        short_description: 'Sudoku Number Sets Solver developed in C++ and with Dynamic Programming',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'link-to-github-repo',
        },
        ],
        tech_images: ['tech/cpp.png'],
        techUsed: 'Repository Coming Soon - Made from October to November 2023',
        children: (
        <>
            <p>
            This C++ project provides a solver for Countdown problems, inspired by the British TV show.
            The solver uses RPN to determine if it's possible to reach a target number by applying
            basic arithmetic operations (+, -, *, /) to a set of given numbers. Given a set of numbers
            and a target, the solver determines if it's possible to reach the target using the provided
            numbers and basic arithmetic operations. Intermediate results and operands are represented
            and evaluated using RPN. Efficiency was key here, as without a fast algorithm, it could
            take a less advanced code a lot of time to find the solutions, so I set myself the challenge
            of improving the performance of the algorithms used.
            </p>
        </>
        ),
    },
    {
        image: 'images/dynamic.png',
        title: 'String Processing',
        short_description: 'Dynamic Programming used to determine the lowest cost for processing a string, developed in C++',
        logos: [
        {
            pic: 'logos/github-mark-white.png',
            // link: 'Repository Link Coming Soon',
        },
        ],
        tech_images: ['tech/cpp.png'],
        techUsed: 'Repository Coming Soon - Made from October to November 2023',
        children: (
        <>
            <p>
            This C++ project provides a highly efficient String-Constructor capable of processing strings of up to
            50,000 characters in less than 10 seconds. The String-Constructor is designed to recreate a target string
            using the append and clone operations with specified costs. The goal is to find the most cost-effective way
            to reconstruct the target string by strategically choosing between character append and substring cloning.
            The project leverages Dynamic Programming and Backtracking algorithms to efficiently explore and optimize
            the reconstruction process.
            </p>
        </>
        ),
    },

    //Java Projects
    {
        image: 'images/covid-viewer.png',
        title: 'Covid Data Viewer GUI - Group Project',
        short_description: 'Covid-19 Data Viewer Project developed using JavaFX',
        logos: [], // You can add logos if needed
        tech_images: ['tech/java.png', 'tech/javafx.png'],
        techUsed: 'Made in March 2023',
        children: (
        <>
            <p>
            Made in collaboration with Mohaned Abdulmahmood, Emily Lazenby, and Lorenzo Cataldi. This Java project processed
            large data and displayed statistics related to the Covid-19 effect in the London Boroughs. The GUI was developed
            using JavaFX.
            </p>
        </>
        ),
    },
    {
        image: 'images/simulation.png',
        title: 'Predator and Prey Simulation - Pair Programming',
        short_description: 'Java Project inspired by Game of Life Simulation',
        logos: [], // You can add logos if needed
        tech_images: ['tech/java.png'],
        techUsed: 'Made in February 2023',
        children: (
        <>
            <p>
            Made in collaboration with Mohaned Abdulmahmood. This Java Project is inspired by the Game of Life Simulation.
            We extended the simulation to add more relationships and simulations to the original simulation, such as diseases
            and antibiotics, predators and preys. Each simulation (cell) had its own unique simulation and interaction with
            every other type of cell, leading to a dynamic different simulation every single time the program is run.
            </p>
        </>
        ),
    },

    //Python Project
    {
        image: 'images/chess.png',
        title: 'Chess Game using Python Tkinter with Basic AI - For a Client',
        short_description: 'Chess Project with 4 Modes - Play, Computer AI, Analysis, Puzzles',
        logos: [], // You can add logos if needed
        tech_images: ['tech/python.png'],
        techUsed: 'Made in 2022',
        children: (
        <>
            <p>
            Python project of a Chess Game using Tkinter for the GUI. Created for a client with requirements elicitation and
            interviews to adhere to specific requirements. There are 4 different modes: Play, Computer, Analysis, Puzzles.
            Play lets you go against another human player. Computer lets you play against an AI with 3 different
            difficulties, from inexperienced to experienced players. Analysis lets users create their own games and replay old
            games they've saved. They can place any piece anywhere as many times as they like to play their own custom games.
            Finally, Puzzles allow the user to load in a puzzle and have to follow the chess puzzle steps until they get it
            correct.
            </p>
        </>
        ),
    }      

    ];
  
    return (
      <div style={{ marginTop: '100px' }}>
        <h1 className='custom-effect'>Projects</h1>
  
        {projectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    );
  }
  
  export default Projects;
