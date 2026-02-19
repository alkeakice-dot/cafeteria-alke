import React, { useState } from 'react';
import { MENU_ITEMS, WHATSAPP_NUMBER } from '../constants';
import { MenuItem } from '../types';
import { ShoppingCart } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'food' | 'special'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleOrder = (item: MenuItem) => {
    const message = `Olá! Gostaria de fazer um pedido do item: *${item.name}* (R$ ${item.price.toFixed(2)}).`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-4">Nosso Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma seleção cuidadosa de sabores para acompanhar seu dia. Peça online e receba em casa ou retire na loja.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'coffee', label: 'Cafés' },
            { id: 'food', label: 'Salgados' },
            { id: 'special', label: 'Doces' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2 rounded-full transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-coffee-600 text-white border-coffee-600 shadow-md'
                  : 'bg-white text-coffee-600 border-coffee-200 hover:bg-coffee-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-3 py-1 font-bold text-coffee-800 shadow-sm">
                  R$ {item.price.toFixed(2)}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-coffee-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{item.description}</p>
                
                <button
                  onClick={() => handleOrder(item)}
                  className="w-full bg-coffee-100 hover:bg-coffee-200 text-coffee-800 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-coffee-600 group-hover:text-white"
                >
                  <ShoppingCart size={18} />
                  Pedir no WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;