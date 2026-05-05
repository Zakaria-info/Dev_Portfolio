"use client";
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Services I Provide</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services && services.map((service, index) => {
          const Icon = LucideIcons[service.iconName] || LucideIcons.HelpCircle;
          return (
            <div key={index} className="group relative p-[1px] rounded-2xl transition-all duration-500">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-transparent to-accent-pink opacity-30 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative bg-[#0a0b1e] p-8 rounded-2xl h-full flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform duration-500">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
