"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code2, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const { profile, contact } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Image reveal
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
      });

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="home">
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute top-80 left-0 w-80 h-80 bg-accent-pink/5 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div ref={textRef}>
            <h2 className="hero-text text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-6xl md:text-8xl text-gradient block mt-2">{profile.name}</span>
            </h2>
            <p className="hero-text text-gray-400 text-lg md:text-xl max-w-lg mt-6 leading-relaxed">
              {profile.description}
            </p>
          </div>

          <div className="hero-text flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-pink rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent-blue/20"
            >
              View Projects
            </button>
            <a 
              href={`mailto:${contact.email}`}
              className="px-8 py-3 border border-gray-600 rounded-lg font-bold hover:border-accent-blue hover:text-accent-blue transition-all flex items-center gap-2 group"
            >
              Hire Me <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-lg">↗</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Profile Image with Glow */}
          <div ref={imageRef} className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent-blue/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <img 
              alt={profile.name} 
              className="w-full h-full object-cover object-top" 
              src={profile.image} 
            />
          </div>

          {/* Orbiting Icons - Positioned precisely around the circle border */}
          {/* Top */}
          <div className="floating-icon absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-8 h-8 md:w-10 md:h-10 invert" alt="Next.js" />
          </div>
          
          {/* Top Right */}
          <div className="floating-icon absolute top-[10%] right-[5%] md:right-[10%] w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="React" />
          </div>

          {/* Bottom Right */}
          <div className="floating-icon absolute bottom-[10%] right-[5%] md:right-[10%] w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="MongoDB" />
          </div>

          {/* Bottom */}
          <div className="floating-icon absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-pink/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Git" />
          </div>

          {/* Bottom Left */}
          <div className="floating-icon absolute bottom-[10%] left-[5%] md:left-[10%] w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="CSS3" />
          </div>

          {/* Top Left */}
          <div className="floating-icon absolute top-[10%] left-[5%] md:left-[10%] w-12 h-12 md:w-16 md:h-16 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-full p-2 md:p-3 flex items-center justify-center shadow-xl z-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="HTML5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
