import { motion } from 'framer-motion';

interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  priority: boolean;
}

export const CarouselSlide = ({ imageUrl, title, priority }: CarouselSlideProps) => {
  return (
    <div className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      {/* Optimización: Reemplazar background-image por img con lazy loading */}
      <img
        src={imageUrl}
        alt=""
        className="absolute h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ contentVisibility: 'auto' }}
      />

      <motion.h1
        className="relative z-10 px-4 text-4xl font-bold text-white drop-shadow-lg md:text-5xl xl:text-[4vw]"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          type: 'spring', // Más eficiente que 'tween'
          stiffness: 300,
          damping: 20,
        }}
        viewport={{ margin: '20% 0px' }} // Trigger anticipado
      >
        {title}
      </motion.h1>
    </div>
  );
};
