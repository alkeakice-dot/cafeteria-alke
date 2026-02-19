export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'food' | 'special';
  image: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}