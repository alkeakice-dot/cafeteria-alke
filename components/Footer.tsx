import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                <Logo className="h-8 w-8" />
            </div>
            <span className="font-serif text-2xl font-bold">Vibe & Aroma</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Café Vibe & Aroma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;