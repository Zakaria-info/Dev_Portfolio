"use client";
import React from 'react';
import { Layout, Server, Database, Smartphone, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    desc: "Building lightning-fast, responsive user interfaces with React and Next.js.",
    icon: <Layout className="text-accent-blue" size={32} />
  },
  {
    title: "Backend Solutions",
    desc: "Robust server-side logic and API design using Node.js and Express.",
    icon: <Server className="text-accent-pink" size={32} />
  },
  {
    title: "Database Management",
    desc: "Designing scalable data schemas and optimizing queries with MongoDB.",
    icon: <Database className="text-accent-blue" size={32} />
  },
  {
    title: "Performance Optimization",
    desc: "Improving Core Web Vitals and ensuring smooth user experiences.",
    icon: <Zap className="text-accent-pink" size={32} />
  },
  {
    title: "Mobile Friendly Design",
    desc: "Crafting layouts that work perfectly across all devices and screen sizes.",
    icon: <Smartphone className="text-accent-blue" size={32} />
  },
  {
    title: "Secure Architecture",
    desc: "Implementing authentication and data protection best practices.",
    icon: <ShieldCheck className="text-accent-pink" size={32} />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Expertise</h3>
        <h2 className="text-4xl md:text-5xl font-bold">What I Do</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-pink mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass p-10 rounded-3xl group hover:border-accent-blue/30 transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 bg-white/5 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-blue/10 transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
