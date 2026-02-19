import React from 'react';

interface LogoProps {
  className?: string;
  useImage?: boolean;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", useImage = false, src }) => {
  if (useImage && src) {
    return (
      <img 
        src={src} 
        alt="Logo da Cafeteria" 
        className={`${className} object-contain`}
      />
    );
  }

  // Fallback Vector Logo (Stylized Coffee Bean/Cup)
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      {/* Abstract Cup Shape */}
      <path 
        d="M20 30 C20 30, 20 70, 50 70 C80 70, 80 30, 80 30" 
        strokeLinecap="round" 
        className="text-coffee-800"
      />
      <line x1="20" y1="30" x2="80" y2="30" className="text-coffee-800" />
      
      {/* Steam / Aroma lines */}
      <path d="M35 15 Q 40 5, 45 15" className="text-coffee-500 opacity-80" />
      <path d="M50 10 Q 55 0, 60 10" className="text-coffee-500 opacity-80" />
      <path d="M65 15 Q 70 5, 75 15" className="text-coffee-500 opacity-80" />

      {/* Handle */}
      <path d="M80 35 C 95 35, 95 55, 80 55" className="text-coffee-800" />
    </svg>
  );
};

export default Logo;