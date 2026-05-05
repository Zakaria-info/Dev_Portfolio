"use client";
import React from 'react';
import { portfolioData } from '@/data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const iconMap = {
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  };

  return (
    <section id="skills" className="py-24 px-6 bg-dark-navy relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I work with modern tools and technologies to build fast, scalable and efficient web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent-blue/50 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-accent-pink/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-6 text-center">
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={iconMap[skill.title]} 
                    alt={skill.title} 
                    className={`w-12 h-12 ${skill.title === "Tailwind CSS" ? "" : ""}`}
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
