import { cn } from '@/lib/utils';
import { ServiceCardType } from '@/types/services';
import { motion } from 'framer-motion';

interface DrawerServiceCardProps {
  card: ServiceCardType;
  index: number;
  className?: string;
}

export const DrawerServiceCard = ({ card, index, className }: DrawerServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{
      scale: 1.02,
      boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.2), 0 5px 5px -5px rgba(0, 0, 0, 0.1)',
    }}
    className={cn(
      'group relative overflow-hidden rounded-xl border border-(--mocha-mousse) bg-(--mocha-mousse) p-3 text-gray-100 shadow-lg backdrop-blur-sm transition-all duration-300 md:p-4 lg:p-3 xl:p-[1vw]',
      className || ''
    )}
    style={{
      minHeight: 'clamp(100px, 12vh, 150px)', // Altura más compacta
    }}
  >
    <div className="flex items-start gap-2 md:gap-3">
      <div className="flex-1">
        <h3 className="mb-1 text-base font-bold text-white transition-colors duration-300 group-hover:text-(--baltic-amber) md:text-lg lg:text-base xl:text-[1.1vw]">
          {card.title}
        </h3>
        <p className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-white md:text-sm lg:text-xs xl:text-[0.7vw]">
          {card.description}
        </p>
      </div>
    </div>

    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500"
      initial={{ width: '0%' }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);
