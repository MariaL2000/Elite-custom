import { motion } from 'motion/react';

interface CarouselSlideProps {
  imageUrl: string;
  title: string;
}

export const CarouselSlide = ({ imageUrl, title }: CarouselSlideProps) => {
  return (
    <div
      className="grid h-[80vh] place-content-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <motion.h1
        className="px-4 text-center text-4xl font-bold text-white drop-shadow-lg md:text-5xl xl:text-[4vw]"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h1>
    </div>
  );
};
