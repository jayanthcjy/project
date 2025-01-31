import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to services
      const servicesSection = document.getElementById('services');
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/#services');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services', onClick: handleServicesClick },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              TechyAutomate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={link.onClick}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={link.onClick}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-4 py-2 text-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:shadow-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}