import React from 'react';
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home";
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Qualification from './Components/qualification/Qualification';
import Contact from './Components/contact/Contact';
import Project from './Components/projects/Project';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div>
      <Header />


      <main className='main'>
        <Home />

        <About />

        <Skills />

        <Qualification />

        <Project />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
