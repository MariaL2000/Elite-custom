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
    <div className="relative w-full py-16 xl:py-[5vh]" id="services">
      <div className="relative z-10 px-4">
        <SectionHeader
          title="Why choose us?"
          description="Discover how we can transform your spaces with our professional services."
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
