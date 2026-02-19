import { MenuItem } from './types';

// Image Links (converted to direct links)
export const FACADE_IMAGE_URL = "https://lh3.googleusercontent.com/d/1Q3YWoqlkMuBVKbTl9Nuy-KgCom75WIC-";
export const LOGO_IMAGE_URL = "https://lh3.googleusercontent.com/d/1k7mxeLjHyZZqTmDzERvYpLCu_aQQz0Ht";

// Contact Info
export const WHATSAPP_NUMBER = "5511945089248";
export const ADDRESS_PLACEHOLDER = "Rua das Flores, 123 - Jardins, São Paulo - SP";
export const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Cafeteria+Placeholder";

// Menu Data
export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Intenso',
    description: 'Um shot de pura energia com grãos selecionados 100% Arábica.',
    price: 6.90,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    name: 'Cappuccino Cremoso',
    description: 'Espresso, leite vaporizado e uma camada generosa de espuma com cacau.',
    price: 12.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Iced Latte Caramelo',
    description: 'Bebida gelada refrescante com toque doce de caramelo artesanal.',
    price: 16.00,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    name: 'Croissant Amanteigado',
    description: 'Receita francesa clássica, crocante por fora e macio por dentro.',
    price: 10.90,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '5',
    name: 'Pão de Queijo Mineiro',
    description: 'Porção com 6 unidades, feitos com queijo da Serra da Canastra.',
    price: 14.00,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '6',
    name: 'Torta de Limão',
    description: 'Base crocante de biscoito, creme de limão siciliano e merengue.',
    price: 18.90,
    category: 'special',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];