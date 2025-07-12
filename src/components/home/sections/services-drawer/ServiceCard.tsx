import { ServiceCardType } from '@/types/services';
import { useState } from 'react';

interface ServiceCardProps {
  card: ServiceCardType;
  index: number;
}

export const ServiceCard = ({ card }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Eliminamos motion para mejor performance en iOS
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-xl border bg-(--mocha-mousse)/70 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl md:p-6 xl:p-[1.5vw] xl:py-[3vw] 2xl:rounded-[0.9vw] ${
        isHovered ? 'scale-[1.03] shadow-xl' : ''
      }`}
      style={{
        minHeight: 'clamp(180px, 20vh, 250px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="flex-1">
          <h3
            className="mb-2 text-xl font-bold text-white transition-colors duration-300 md:mb-3 md:text-2xl xl:text-[1.8vw]"
            style={{
              lineHeight: '1.3',
              color: isHovered ? 'var(--chocolate-martini)/40' : 'var(--chocolate-martini)',
            }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm text-gray-300 transition-colors duration-300 md:text-base xl:text-[1.2vw]"
            style={{
              lineHeight: '1.5',
              color: isHovered ? 'var(--chocolate-martini)/40' : 'var(--chocolate-martini)',
            }}
          >
            {card.description}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 transition-all duration-500"
        style={{
          width: isHovered ? '100%' : '0%',
          background: `linear-gradient(to right, 
      var(--cannoli-cream), 
      var(--safari), 
      var(--cannoli-cream)
    )`,
          boxShadow: `0 0 8px color-mix(in srgb, var(--safari) 40%, transparent)`,
          filter: 'brightness(1.1)',
        }}
      />
    </div>
  );
};
