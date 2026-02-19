import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Logo from './Logo';
import { LOGO_IMAGE_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#about' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-coffee-50 flex items-center justify-center border-2 border-coffee-200">
               <Logo useImage src={LOGO_IMAGE_URL} className="h-full w-full" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-wider ${scrolled ? 'text-coffee-900' : 'text-white'}`}>
              Vibe & Aroma
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-gold ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#menu"
              className="bg-coffee-600 hover:bg-coffee-700 text-white px-5 py-2 rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <ShoppingBag size={18} />
              Pedir Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-fade-in-down border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-coffee-600 hover:bg-coffee-50"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center bg-coffee-600 text-white px-3 py-3 rounded-md font-bold"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;