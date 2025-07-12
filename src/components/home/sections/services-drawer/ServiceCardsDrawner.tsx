import { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceCards } from '@/datas/servicescards';
import { useDrawerKeyboardClose } from '@/hooks/useDrawerKeyboardClose';
import { SectionHeader } from './SectionHeader';
import { ServiceCard } from './ServiceCard';
import { ServicesDrawer } from './ServiceDrawer';

export const ServiceCardsDrawner = () => {
  const visibleCards = serviceCards.slice(0, 4);
  const [isOpen, setIsOpen] = useState(false);

  useDrawerKeyboardClose(isOpen, setIsOpen);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full py-16 xl:py-[5vh]" id="services">
      <div className="relative z-10 px-4">
        <SectionHeader
          title="Why choose us?"
          description="Discover how we can transform your spaces with our professional services."
        />

        {/* Contenedor animado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 2xl:gap-[1vw]"
        >
          {visibleCards.map((card, index) => (
            <motion.div key={card.title || index} variants={itemVariants} className="h-full">
              <ServiceCard card={card} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Drawer de servicios */}
        <ServicesDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
