import React from 'react';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './pages/Home/home';
import Footer from '/src/components/Footer/Footer.jsx';
import Projects from './pages/Projects/projects';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="home-content">
          <section id='home-section'>
          <Home />
          </section>
        </div>
      </div>
        <div className="projects-content">
          <section id='projects-section'>
          <Projects />
          </section>
        </div>
      <section id='contact-section'>
      <Footer />
      </section>
    </>
  );
}

export default App;