"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Contact = () => {
  const { contact } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/5 blur-[150px] rounded-full -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-accent-blue font-semibold tracking-widest uppercase text-sm">Contact</h3>
              <h2 className="text-4xl md:text-6xl font-bold">Get In Touch</h2>
              <p className="text-gray-400 text-lg max-w-md">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-8">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Email Me</p>
                  <p className="text-xl font-medium group-hover:text-accent-blue transition-colors">{contact.email}</p>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-pink group-hover:bg-accent-pink group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Call Me</p>
                  <p className="text-xl font-medium group-hover:text-accent-pink transition-colors">{contact.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-xl font-medium">{contact.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider font-bold ml-1">Follow Me</p>
              <div className="flex gap-4">
                <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                  <Github size={22} />
                </a>
                <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                  <Linkedin size={22} />
                </a>
                <a href={contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                  <Facebook size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden">
            <form className={`space-y-6 transition-opacity duration-300 ${submitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  required
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-accent-blue transition-colors text-white resize-none"
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-to-r from-accent-blue to-accent-pink rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg shadow-accent-blue/20 group disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>

            {/* Success Message Overlay */}
            {submitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-accent-blue/20 text-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-accent-blue hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
