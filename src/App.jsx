import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;