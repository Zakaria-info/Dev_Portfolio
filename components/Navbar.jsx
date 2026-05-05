"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-navy/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-accent-blue">MERN</span> <span className="text-gray-400">Stack</span> <span className="text-accent-pink">Developer</span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-accent-blue transition-colors">Home</a>
          <a href="#about" className="hover:text-accent-blue transition-colors">About</a>
          <a href="#services" className="hover:text-accent-blue transition-colors">Services</a>
          <a href="#projects" className="hover:text-accent-blue transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent-blue transition-colors">Contact</a>
        </nav>

        <button className="group flex items-center gap-2 px-5 py-2 border border-accent-blue/50 rounded-full text-sm font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300">
          <span>Hire Me</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
