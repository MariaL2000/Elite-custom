import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { BASE_URL } from '@/config';

export const TitlePage = () => {
  // Pre-compute random values for particles
  const particles = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 5 + 5,
      yOffset: Math.random() * -100,
      opacityChange: Math.random() * 0.8 + 0.2,
    }));
  }, []);

  return (
    <motion.div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-950 py-30 text-white" // Changed to text-white
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-[40vh] w-[40vh] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[50vh] w-[50vh] rounded-full bg-teal-500/10 blur-[120px]" />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[30vh] w-[30vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 px-4">
        <motion.div
          className="mb-6 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-satisfy text-center text-6xl font-bold md:text-7xl lg:text-8xl xl:text-[5.5vw]" // Increased sizes
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Elite Custom Countertops
          </motion.h1>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center xl:max-w-[35vw]" // Slightly wider
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="font-philosopher mb-12 text-center text-xl leading-relaxed md:text-2xl xl:text-[1.8vw]" // Increased sizes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="mb-4 block text-2xl font-semibold text-teal-300 md:text-3xl xl:text-[2vw]">
              Redefining home renovations
            </span>
            Experience top-notch craftsmanship with our comprehensive services.
          </motion.p>

          <motion.div
            className="relative mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 px-10 py-6 font-medium text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,209,197,0.5)] xl:py-[1.5vh]"
            >
              <span className="relative z-10 flex items-center gap-2 text-xl xl:text-[1.2vw]">
                {' '}
                {/* Increased size */}
                <Link to={`${BASE_URL}contact`}>Get a quote</Link>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-22 xl:-bottom-[10vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="#services"
            className="group flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 p-0.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,209,197,0.6)] xl:size-[3vw]"
          >
            <div className="group-hover:bg-opacity-80 flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition-all duration-300">
              <motion.span
                className="text-2xl"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                ↓
              </motion.span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [0, particle.yOffset, 0],
            opacity: [particle.opacity, particle.opacityChange, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </motion.div>
  );
};
