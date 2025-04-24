import { serviceCards } from '@/datas/servicescards';
import { useDrawerKeyboardClose } from '@/hooks/useDrawerKeyboardClose';
import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';
import { ServicesDrawer } from './ServiceDrawer';

export const ServiceCards = () => {
  const visibleCards = serviceCards.slice(0, 4);
  const [isOpen, setIsOpen] = useState(false);

  useDrawerKeyboardClose(isOpen, setIsOpen);

  return (
    <div className="relative w-full bg-gray-950 py-16 text-gray-100 xl:py-[5vh]" id="services">
      {/* Fondo simplificado sin SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[20%] h-[60vh] w-[60vh] rounded-full bg-indigo-900/20 blur-[80px]"></div>
        <div className="absolute -bottom-[15%] -left-[15%] h-[50vh] w-[50vh] rounded-full bg-teal-900/20 blur-[80px]"></div>
      </div>

      <div className="relative z-10 px-4">
        <SectionHeader
          title="Nuestros Servicios"
          description="Descubre cómo podemos transformar tus espacios con nuestros servicios profesionales."
        />

        <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 2xl:gap-[1vw]">
          {visibleCards.map((card, index) => (
            <ServiceCard key={card.title || index} card={card} index={index} />
          ))}
        </div>

        <ServicesDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
