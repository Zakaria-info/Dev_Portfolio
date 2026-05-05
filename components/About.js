"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white/[0.02] relative overflow-hidden" id="about">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* About Image */}
        <div ref={imageRef} className="order-2 md:order-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
            <img 
              alt="Sajid Yaqub" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugmxfBbdE2XE5udNjV-PSqR54i7ODVhnqcUdVa4OGDkcFvKBcE6yojBlqV2PK6nOeTLNNbPdten7N_vsJje3BdxOfFT8gaJUvZI0DHvGBIHJ-qNIzUspa-6srBFYYReaqiofsflFKWy1ClamnwIYOpBTw9jsKcYTFZvE-PkeFI9-ydzhjxrAeWaNhItthnNJC_yvfvysRp3ukdsypdu4YGkItis6oDHthLMX1YOvfkCdcCEqTrodtcfAhrwKKNQP1wOuWBl1EjlPg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* About Text */}
        <div ref={contentRef} className="order-1 md:order-2 space-y-6">
          <h3 className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Introduction</h3>
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              I am a MERN Stack Web Developer focusing on building production-ready applications. I enjoy designing APIs, creating interactive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
            </p>
            <p>
              Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UI/UX flows, and building applications that feel fast, secure, and intuitive.
            </p>
          </div>
          <div className="pt-6">
            <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full font-bold shadow-xl shadow-accent-pink/20 hover:scale-105 transition-transform group">
              <span>Download Resume</span>
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
