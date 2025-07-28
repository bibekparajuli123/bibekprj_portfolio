import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">BP</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="gray-text hover:text-primary transition-colors duration-300 font-medium"
            >
              Connect
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;