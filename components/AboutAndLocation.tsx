import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { ADDRESS_PLACEHOLDER, WHATSAPP_NUMBER } from '../constants';

const AboutAndLocation: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-6">Sobre Nós</h2>
            <div className="prose text-gray-700 mb-8">
              <p className="mb-4">
                No coração da cidade, nossa cafeteria nasceu do amor pela arte de fazer café. 
                Mais do que apenas uma bebida, acreditamos que cada xícara conta uma história.
              </p>
              <p>
                Nossos baristas são apaixonados por extrair o melhor de cada grão, 
                e nossa cozinha prepara delícias frescas todos os dias. Seja para um 
                café rápido antes do trabalho ou uma tarde relaxante com amigos, 
                este é o seu lugar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-coffee-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Endereço</h4>
                  <p className="text-gray-600">{ADDRESS_PLACEHOLDER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-coffee-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Seg - Sex: 07:00 - 19:00</p>
                  <p className="text-gray-600">Sáb - Dom: 08:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-coffee-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Contato</h4>
                  <p className="text-gray-600">WhatsApp: (11) 94508-9248</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="lg:w-1/2 w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative group">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_PLACEHOLDER)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
              title="Localização da Cafeteria"
            >
            </iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAndLocation;