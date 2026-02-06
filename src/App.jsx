import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CLI from './components/CLI';
import Banner from './components/Banner';


function App() {
  const [isCLIOpen, setIsCLIOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-violet-500/30">
      <Banner />
      <Navbar toggleCLI={() => setIsCLIOpen(!isCLIOpen)} />
      <Hero />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <CLI isOpen={isCLIOpen} onClose={() => setIsCLIOpen(false)} />
    </div>
  );
}

export default App;
