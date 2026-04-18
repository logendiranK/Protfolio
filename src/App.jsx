import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FullProjects from './components/fullprojects';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<FullProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;