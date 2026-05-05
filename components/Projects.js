"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Titan",
    desc: "A full-scale MERN marketplace with Stripe integration and real-time tracking.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "DevSocial Network",
    desc: "Social platform for developers to share snippets and collaborate on projects.",
    tech: ["Next.js", "Socket.io", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  },
  {
    title: "AI Prompt Engine",
    desc: "SaaS platform for managing and optimizing AI prompts for large language models.",
    tech: ["React", "OpenAI API", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

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
    <section id="projects" ref={containerRef} className="py-24 px-6 bg-white/[0.02]">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-accent-pink font-semibold tracking-widest uppercase text-sm">Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-pink mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative bg-dark-navy border border-white/10 rounded-3xl overflow-hidden hover:border-accent-blue/30 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-accent-blue transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
