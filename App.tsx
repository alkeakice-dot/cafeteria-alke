import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import AboutAndLocation from './components/AboutAndLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-coffee-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <AboutAndLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;