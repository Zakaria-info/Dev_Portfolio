"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/data/portfolio';

const Projects = () => {
  const containerRef = useRef(null);
  const { projects } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 bg-dark-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of the real-world projects I've built using the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects && projects.length > 0 ? projects.map((project, index) => (
            <div key={index} className="project-card group relative p-[2px] rounded-[2rem] transition-all duration-500 overflow-hidden">
              {/* Gradient Border Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-transparent to-accent-pink opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-[#0a0b1e] rounded-[2rem] p-6 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 rounded-full text-accent-blue border border-accent-blue/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-8 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group/btn"
                  >
                    <span>GitHub</span>
                    <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 bg-accent-blue rounded-full font-bold flex items-center justify-center gap-2 hover:bg-accent-blue/80 transition-colors group/btn"
                  >
                    <span>Live Demo</span>
                    <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-2 text-center py-20">
              <p className="text-gray-500 italic">No projects found. Check data/portfolio.js</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
