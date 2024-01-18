import React from 'react';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './pages/Home/home';
import Footer from '/src/components/Footer/Footer.jsx';

function App() {
  
  return (
    <>
    <Navbar />
      <div class='container'>
        <Home />
      </div>
        <Footer/>
    </>
  );
}

export default App;