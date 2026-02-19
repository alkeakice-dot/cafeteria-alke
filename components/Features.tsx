import React from 'react';
import { Truck, Wifi, Coffee, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-gold" />,
      title: "Entrega Rápida",
      description: "Levamos seu café quentinho até você com cuidado e rapidez."
    },
    {
      icon: <Coffee className="w-8 h-8 text-gold" />,
      title: "Grãos Premium",
      description: "Trabalhamos apenas com grãos selecionados e torra fresca."
    },
    {
      icon: <Wifi className="w-8 h-8 text-gold" />,
      title: "Wi-Fi Grátis",
      description: "O ambiente perfeito para trabalhar ou relaxar conectado."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Sempre Fresco",
      description: "Produtos feitos diariamente em nossa cozinha artesanal."
    }
  ];

  return (
    <section className="py-16 bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="mb-4 p-3 bg-coffee-800 rounded-full shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;