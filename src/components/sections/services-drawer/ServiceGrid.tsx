import { motion } from 'motion/react';
import { DrawerServiceCard } from './DrawerServiceCard';
import { ServiceCardType } from '@/types/services';

export const ServicesGrid = ({ cards }: { cards: ServiceCardType[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="grid w-full grid-cols-1 gap-4 bg-transparent p-4 sm:gap-5 md:grid-cols-2 md:gap-6 md:px-6 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-[1.2vw] xl:p-[1vw]"
    style={{
      maxHeight: 'calc(100vh - 240px)', // Ajuste para pantallas pequeñas
      overflowY: 'auto',
    }}
  >
    {cards.map((card, index) => (
      <DrawerServiceCard
        key={index}
        card={card}
        index={index}
        className="min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[10vw]" // Alturas mínimas ajustadas
      />
    ))}
  </motion.div>
);
