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
          <Home />
        </div>
      </div>
        <div className="projects-content">
          <Projects />
        </div>
      <Footer />
    </>
  );
}

export default App;