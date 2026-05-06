"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { portfolioData } from '@/data/portfolio';

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const containerRef = useRef(null);
  const { projects } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each project card individually as it enters the viewport
      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
            // markers: true, // Uncomment for debugging
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index % 2 * 0.1, // Slight stagger for side-by-side cards
          ease: "power2.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 bg-dark-navy min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of the real-world projects I've built using the MERN stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 max-w-6xl mx-auto">
          {projects && projects.length > 0 ? projects.map((project, index) => (
            <div key={index} className="project-card group relative p-[1px] rounded-[2.5rem] transition-all duration-500">
              {/* Gradient Border Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-transparent to-accent-pink opacity-20 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
              
              <div className="relative bg-[#0a0b1e] rounded-[2.5rem] p-6 md:p-8 h-full flex flex-col border border-white/5">
                <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] mb-8 border border-white/5 bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] md:text-[11px] uppercase tracking-widest font-black px-4 py-1.5 bg-accent-blue/5 rounded-full text-accent-blue border border-accent-blue/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-10 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-accent-blue/20 to-accent-pink/20 hover:from-accent-blue hover:to-accent-pink rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-500 group/btn border border-white/10 hover:border-transparent"
                  >
                    <span>GitHub</span>
                    <span className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 bg-accent-blue/80 hover:bg-accent-blue rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-500 group/btn shadow-lg shadow-accent-blue/10"
                  >
                    <span>Live Demo</span>
                    <span className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
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
