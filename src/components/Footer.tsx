
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Oyeladun</h3>
            <p className="text-sm text-darkText/80 max-w-xs">
              UI/UX Designer & Frontend Developer building clean, responsive, and engaging web experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-primary-foreground transition-colors">About</Link>
              <Link to="/projects" className="text-sm hover:text-primary-foreground transition-colors">Projects</Link>
              <Link to="/contact" className="text-sm hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="mailto:hello@oyeladun.com" className="hover:text-primary-foreground transition-colors">abisolaoloyede849@gmail.com</a>
              <a href="https://www.linkedin.com/in/oloyede-oyeladun-adesewa-9a8033328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
              <a href="hhttps://github.com/SHEWAPNG" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-darkText/10 text-center text-sm text-darkText/60">
          <p>&copy; {currentYear} Oyeladun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
