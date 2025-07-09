import useWindowScreen from '@/hooks/useWindowScreen';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { ButtonGetQuote } from './ButtonGetQuote';

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
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-(--safari)/30 py-30 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <motion.div
  className="absolute left-1/2 -translate-x-1/2 overflow-hidden
    top-[8%] w-[90vw] h-[40vh]
    sm:top-[10%] sm:w-[85vw] sm:h-[42vh]
    md:top-[4%] md:w-[50vw] md:h-[50vh]
    lg:top-0 lg:w-[50vw] lg:h-[50vh]
    short:top-0 short:h-[35vh]"
  style={{
    mask: `
      linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)
    `,
    WebkitMask: `
      linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)
    `,
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in'
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: 'easeIn' }}
>
  <img
    src="logo1.jpg"
    alt="Elite Custom Countertops Logo"
    className="w-full h-full object-cover object-center"
  />
</motion.div>




      {/* Content */}
      <div className="relative z-4 flex flex-col items-center px-4 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center xl:max-w-[35vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="mb-7 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span
              className="mb-2 mt-3 block font-satisfy text-5xl font-bold sm:text-5xl md:text-7xl lg:text-8xl xl:text-[5vw] 2xl:text-[7rem] leading-tight tracking-wide transform transition-all duration-300 hover:scale-105"
              style={{
                color: 'var(--sirocco)',
                textShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
                letterSpacing: '0.025em',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            >
              Elite Custom Countertops
            </span>

          </motion.p>


          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ButtonGetQuote />
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
          className="absolute size-1 rounded-full bg-white xl:size-[1.1vw] dark:bg-white"
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
