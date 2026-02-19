import React from 'react';
import { FACADE_IMAGE_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={FACADE_IMAGE_URL}
          alt="Fachada da Cafeteria"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-coffee-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 backdrop-blur-sm mb-6 text-sm font-bold tracking-widest uppercase animate-fade-in">
          Cafés Especiais &amp; Confeitaria
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-lg">
          Desperte seus sentidos com o <span className="text-gold italic">melhor</span> café.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Experimente grãos selecionados, pães de fermentação natural e um ambiente acolhedor no coração da cidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a 
            href="#menu" 
            className="group bg-gold hover:bg-[#b8962e] text-coffee-900 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            Ver Cardápio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#location" 
            className="group bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-4 px-8 rounded-full transition-all flex items-center justify-center w-full sm:w-auto"
          >
            Visite-nos
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;