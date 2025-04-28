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
      className={`group shadow-l relative overflow-hidden rounded-xl border border-gray-800 bg-slate-900/70 p-4 backdrop-blur-sm transition-all duration-300 md:p-6 xl:p-[1.5vw] dark:bg-gray-900 ${
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
            className="mb-2 text-xl font-bold text-white transition-colors duration-300 md:mb-3 md:text-2xl xl:text-[1.5vw]"
            style={{
              lineHeight: '1.3',
              color: isHovered ? '#5eead4' : 'white', // teal-300
            }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm text-gray-300 transition-colors duration-300 md:text-base xl:text-[1vw]"
            style={{
              lineHeight: '1.5',
              color: isHovered ? 'white' : '#d1d5db', // gray-300
            }}
          >
            {card.description}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 transition-all duration-500"
        style={{
          width: isHovered ? '100%' : '0%',
        }}
      />
    </div>
  );
};
