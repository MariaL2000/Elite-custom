import { ServiceCardType } from '@/types/services';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ServiceCardProps {
  card: ServiceCardType;
  index: number;
}

export const ServiceCard = ({ card, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 md:p-6 xl:p-[1.5vw]"
      style={{
        minHeight: 'clamp(180px, 20vh, 250px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-0 right-0 size-16 rounded-bl-full bg-gradient-to-br from-indigo-500/20 to-teal-500/20 transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3 md:size-20 xl:size-[6vw] xl:group-hover:translate-x-4 xl:group-hover:-translate-y-4"
        style={{
          transform: 'translateX(20px) translateY(-20px)',
        }}
      ></div>
      <div className="items-cen flex">
        <div className="flex-1">
          <h3
            className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-teal-300 md:mb-3 md:text-2xl xl:text-[1.5vw]"
            style={{
              lineHeight: '1.3',
            }}
          >
            {card.title}
          </h3>
          <p
            className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white md:text-base xl:text-[1vw]"
            style={{
              lineHeight: '1.5',
            }}
          >
            {card.description}
          </p>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500"
        initial={{ width: '0%' }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};
