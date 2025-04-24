import { motion } from 'motion/react';

export const BackgroundElements = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/4 h-[40vh] w-[40vh] rounded-full bg-indigo-500/10 blur-[100px]" />
    <div className="absolute right-1/4 bottom-1/4 h-[50vh] w-[50vh] rounded-full bg-teal-500/10 blur-[120px]" />
    <motion.div
      className="absolute top-1/2 left-1/2 h-[30vh] w-[30vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  </div>
);
