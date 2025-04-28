import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { BASE_URL } from '@/config';

import useWindowScreen from '@/hooks/useWindowScreen';
import { Logo } from '@/components/Logo';

export const TitlePage = () => {
  const isMac = useWindowScreen();
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
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50 py-30 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <motion.div
        className="short:top-0 absolute top-[5%] overflow-hidden md:h-[50vh] md:w-[50vw] lg:top-0 2xl:top-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeIn' }}
      >
        <Logo className="fill-black md:size-full dark:fill-white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-4 flex flex-col items-center px-4">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center xl:max-w-[35vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="font-philosopher mb-12 text-center text-xl leading-relaxed md:text-2xl xl:text-[1.8vw]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="mb-4 block text-2xl font-semibold text-teal-600 md:text-3xl xl:text-[2vw] dark:text-teal-300">
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
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 px-10 py-6 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-100 hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.7)] hover:shadow-indigo-500/60 xl:py-[1.5vh]"
            >
              <span className="relative z-10 flex items-center gap-2 text-xl xl:text-[1.2vw]">
                <Link to={`${BASE_URL}contact`}>Get a quote</Link>
                <span className="transition-transform duration-100 group-hover:translate-x-1 group-hover:scale-110">
                  →
                </span>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-100 group-hover:opacity-[0.12]"></span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
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
            className="group flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 p-0.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,209,197,0.6)] focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:outline-none xl:size-[3vw] dark:focus-visible:ring-offset-gray-900"
            aria-label="Ir a la sección de servicios"
          >
            <div className="group-hover:bg-opacity-80 flex h-full w-full items-center justify-center rounded-full bg-white transition-all duration-300 dark:bg-gray-900">
              <motion.span
                className="text-2xl text-indigo-600 xl:text-[1.5vw] dark:text-teal-400"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                aria-hidden="true"
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
          className="absolute size-1 rounded-full bg-indigo-500 xl:size-[0.3vw] dark:bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [0, isMac ? particle.yOffset * 10 : particle.yOffset, 0],
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
