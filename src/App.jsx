import React from 'react';
import Navbar from './components/Navbar/navbar';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
      <header> <Navbar /></header>
        <Footer/>
    </div>
    </>
  );
}

export default App;