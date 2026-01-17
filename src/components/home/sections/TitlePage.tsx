import useWindowScreen from '@/hooks/useWindowScreen';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const TitlePage = () => {
  const isMac = useWindowScreen();

  // Partículas de colores claros
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.4,
      scale: Math.random() * 1.2 + 0.6,
      duration: Math.random() * 4 + 6,
      yOffset: Math.random() * -120,
      opacityChange: Math.random() * 0.9 + 0.3,
      color:
        Math.random() > 0.7
          ? 'bg-white'
          : Math.random() > 0.4
            ? 'bg-yellow-100'
            : Math.random() > 0.2
              ? 'bg-amber-100'
              : 'bg-orange-100',
    }));
  }, []);

  return (
    <motion.div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255, 248, 220, 0.1) 0%,
            rgba(245, 222, 179, 0.15) 25%,
            rgba(222, 184, 135, 0.1) 50%,
            rgba(210, 180, 140, 0.15) 75%,
            rgba(188, 143, 143, 0.1) 100%
          )
        `,
      }}
    >
      {/* Glassmorphism Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-white/20 via-amber-50/30 to-orange-100/20 backdrop-blur-3xl" />

      {/* Floating Glass Orbs */}
      <motion.div
        className="absolute top-20 left-20 h-30 w-28 rounded-full bg-linear-to-br from-white/30 to-amber-200/20 backdrop-blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute right-16 bottom-32 h-24 w-24 rounded-full bg-linear-to-br from-orange-200/30 to-amber-300/20 backdrop-blur-xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Primera imagen - Logo principal */}
      <motion.div
        className="absolute top-[5%] left-1/2 h-[40vh] w-[90vw] -translate-x-1/2 overflow-hidden sm:top-[8%] sm:h-[42vh] sm:w-[80vw] md:top-[8%] md:h-[48vh] md:w-[50vw] lg:top-[5%] lg:h-[52vh] lg:w-[52vw] xl:top-[8%] xl:h-[48vh] xl:w-[48vw] 2xl:top-[10%] 2xl:h-[45vh] 2xl:w-[45vw]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1))',
        }}
      >
        <img
          src="elite.PNG"
          alt="Elite Custom Countertops Logo"
          className="h-full w-full object-contain object-center"
          onError={e => {
            console.error('Error cargando imagen principal:', e);
          }}
        />
      </motion.div>

      {/* Segunda imagen - Título */}
      <motion.div
        className="absolute top-[48%] left-1/2 h-[25vh] w-[80vw] -translate-x-1/2 overflow-hidden sm:top-[52%] sm:h-[28vh] sm:w-[70vw] md:top-[58%] md:h-[30vh] md:w-[45vw] lg:top-[60%] lg:h-[32vh] lg:w-[45vw] xl:top-[58%] xl:h-[30vh] xl:w-[40vw] 2xl:top-[56%] 2xl:h-[28vh] 2xl:w-[38vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        style={{
          filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.08))',
        }}
      >
        <img
          src="elite2.webp"
          alt="Elite Custom Countertops Title"
          className="h-full w-full object-contain object-center"
          onError={e => {
            console.error('Error cargando imagen título:', e);
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-14 2xl:bottom-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="#services"
          className="group flex size-16 items-center justify-center rounded-full bg-linear-to-r from-amber-400/80 via-orange-400/80 to-yellow-500/80 p-0.5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:outline-none xl:size-[4vw]"
          aria-label="Services"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/90">
            <motion.span
              className="text-3xl text-amber-600 xl:text-[2vw]"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
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

      {/* Partículas de colores claros */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute size-2 rounded-full ${particle.color} xl:size-[0.8vw]`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            scale: particle.scale,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
          }}
          animate={{
            y: [0, isMac ? particle.yOffset * 8 : particle.yOffset, 0],
            opacity: [particle.opacity, particle.opacityChange, particle.opacity],
            scale: [particle.scale, particle.scale * 1.3, particle.scale],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Partículas adicionales con colores claros */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute h-2 w-2 rounded-full bg-linear-to-r from-white to-yellow-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: '0 0 12px rgba(255,255,255,0.6)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};
