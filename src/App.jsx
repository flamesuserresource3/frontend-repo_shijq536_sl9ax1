import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Performances from './components/Performances';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f0e0d]">
      <Navbar />
      <main>
        <Hero />
        <Performances />
        <Contact />
      </main>
    </div>
  );
};

export default App;
