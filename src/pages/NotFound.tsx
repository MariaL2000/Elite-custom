import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BASE_URL } from '@/config';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(BASE_URL, { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Variantes para las animaciones
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const numberVariants = {
    hidden: { y: '-5vw', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 px-[5vw] py-[10vh] text-center text-white">
      {/* Contenedor del SVG */}
      <div className="mb-[5vh] w-full max-w-[90vw]">
        <motion.svg
          viewBox="0 0 300 200"
          initial="hidden"
          animate="visible"
          variants={svgVariants}
          className="h-[30vh] w-full max-w-[80vw] md:h-[40vh] xl:h-[50vh]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Número 4 izquierdo */}
          <motion.text
            x="60"
            y="120"
            fontSize="100"
            fontWeight="bold"
            fill="none"
            stroke="#FF5E5B"
            strokeWidth="2"
            variants={numberVariants}
          >
            4
          </motion.text>

          {/* Círculo del 0 */}
          <motion.circle
            cx="150"
            cy="100"
            r="40"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="2"
            variants={pathVariants}
            animate="pulse"
            custom={pulseVariants}
          />

          {/* Número 4 derecho */}
          <motion.text
            x="220"
            y="120"
            fontSize="100"
            fontWeight="bold"
            fill="none"
            stroke="#FF5E5B"
            strokeWidth="2"
            variants={numberVariants}
          >
            4
          </motion.text>

          {/* Líneas decorativas */}
          <motion.path
            d="M 40 150 C 100 180, 200 180, 260 150"
            fill="none"
            stroke="#FFE66D"
            strokeWidth="2"
            variants={pathVariants}
          />

          <motion.path
            d="M 40 160 C 100 130, 200 130, 260 160"
            fill="none"
            stroke="#FFE66D"
            strokeWidth="2"
            variants={pathVariants}
          />

          {/* Círculos decorativos */}
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + i * 50}
              cy={50}
              r={3 + Math.random() * 3}
              fill="#4ECDC4"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: Math.random() * 2,
                },
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Contenido de texto */}
      <motion.h1
        className="mb-[2vh] bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl xl:text-[3.5vw]"
        initial={{ opacity: 0, y: '2vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Página no encontrada
      </motion.h1>

      <motion.p
        className="mb-[3vh] text-lg text-gray-300 md:text-xl xl:text-[1.5vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Lo sentimos, la página que buscas se ha perdido en el ciberespacio.
      </motion.p>

      <motion.p
        className="mb-[4vh] text-gray-400 md:text-lg xl:text-[1.2vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Serás redirigido a la página principal en unos segundos...
      </motion.p>

      {/* Botón */}
      <motion.button
        onClick={() => navigate(BASE_URL)}
        className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-[3vw] py-[1.5vh] text-white shadow-lg transition-all hover:from-purple-700 hover:to-blue-700 xl:px-[2vw] xl:py-[1vh]"
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 15px rgba(123, 104, 238, 0.6)',
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: '2vh' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span className="text-sm md:text-base xl:text-[1.2vw]">Volver al inicio</span>
      </motion.button>
    </div>
  );
};
