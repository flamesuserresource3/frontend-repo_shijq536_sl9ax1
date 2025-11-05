import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#0f0e0d]/70 text-cream border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#C9A227] via-[#8B5E34] to-[#2b2016] ring-1 ring-white/20 shadow-md" />
          <div>
            <p className="text-lg font-semibold text-white tracking-wide">Ishya Culture Troupe</p>
            <p className="text-xs text-white/70 uppercase tracking-[0.2em]">Kigali • Rwanda</p>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#performances" className="text-white/80 hover:text-white transition">Performances</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-[#C9A227] text-[#1a140c] font-medium shadow hover:brightness-110 transition">Book Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
