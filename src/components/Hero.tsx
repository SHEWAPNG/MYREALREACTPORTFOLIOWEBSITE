
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-mint/30 to-transparent -z-10 rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-softBlue/20 to-transparent -z-10 rounded-tr-[100px]" />
      
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-primary-foreground font-medium mb-4 animate-slide-in">UI/UX Designer & Frontend Developer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm Oyeladun — I build clean, responsive, and engaging web experiences.
          </h1>
          <p className="text-lg text-darkText/80 mb-8 max-w-2xl">
            I combine design thinking with technical expertise to create beautiful, functional, and user-centered digital products that help businesses achieve their goals.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-primary">
              See My Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
