"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MousePointer2, Code2, Globe } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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
              <span className="text-6xl md:text-8xl text-gradient block mt-2">Sajid Yaqub</span>
            </h2>
            <p className="hero-text text-gray-400 text-lg md:text-xl max-w-lg mt-6 leading-relaxed">
              I build scalable full-stack applications using React, Node.js, Express and MongoDB. I love clean code and fast UIs.
            </p>
          </div>

          <div className="hero-text flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-pink rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent-blue/20">
              View Projects
            </button>
            <button className="px-8 py-3 border border-gray-600 rounded-lg font-bold hover:border-accent-blue hover:text-accent-blue transition-all flex items-center gap-2 group">
              Let's Collaborate <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-lg">↗</span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Profile Image with Glow */}
          <div ref={imageRef} className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent-blue/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <img 
              alt="Sajid Yaqub Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugmxfBbdE2XE5udNjV-PSqR54i7ODVhnqcUdVa4OGDkcFvKBcE6yojBlqV2PK6nOeTLNNbPdten7N_vsJje3BdxOfFT8gaJUvZI0DHvGBIHJ-qNIzUspa-6srBFYYReaqiofsflFKWy1ClamnwIYOpBTw9jsKcYTFZvE-PkeFI9-ydzhjxrAeWaNhItthnNJC_yvfvysRp3ukdsypdu4YGkItis6oDHthLMX1YOvfkCdcCEqTrodtcfAhrwKKNQP1wOuWBl1EjlPg" 
            />
          </div>

          {/* Floating Icons */}
          <div className="floating-icon absolute -top-4 right-10 w-14 h-14 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-2xl p-3 flex items-center justify-center shadow-xl z-10">
            <Code2 className="text-accent-blue" size={28} />
          </div>
          <div className="floating-icon absolute top-1/2 -left-10 w-14 h-14 bg-dark-navy/80 backdrop-blur-md border border-accent-pink/40 rounded-2xl p-3 flex items-center justify-center shadow-xl z-10">
            <span className="font-bold text-accent-pink text-lg">JS</span>
          </div>
          <div className="floating-icon absolute bottom-10 right-4 w-14 h-14 bg-dark-navy/80 backdrop-blur-md border border-accent-blue/40 rounded-2xl p-3 flex items-center justify-center shadow-xl z-10">
            <Globe className="text-accent-blue" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
