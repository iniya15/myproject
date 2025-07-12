import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <Stars />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
