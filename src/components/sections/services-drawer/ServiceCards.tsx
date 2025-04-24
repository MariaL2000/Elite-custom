import { serviceCards } from '@/datas/servicescards';
import { useDrawerKeyboardClose } from '@/hooks/useDrawerKeyboardClose';
import { useState } from 'react';
import { BackgroundElements } from './BackgroundElement';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';
import { ServicesDrawer } from './ServiceDrawer';

export const ServiceCards = () => {
  const visibleCards = serviceCards.slice(0, 4);
  const [isOpen, setIsOpen] = useState(false);

  useDrawerKeyboardClose(isOpen, setIsOpen);

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-950 py-16 text-gray-100 xl:py-[5vh]"
      id="services"
    >
      <BackgroundElements />

      <div className="relative z-10 w-full px-4">
        <SectionHeader
          title="Nuestros Servicios"
          description="Descubre cómo podemos transformar tus espacios con nuestros servicios profesionales."
        />

        <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 2xl:gap-[1vw]">
          {visibleCards.map((card, index) => (
            <ServiceCard key={index} card={card} index={index} />
          ))}
        </div>

        <ServicesDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
