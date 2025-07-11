import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { BASE_URL } from '@/config';

export const GallerySectionNotFound = () => {
  const navigate = useNavigate();
  const { section } = useParams(); // Obtener el parámetro de la URL

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`${BASE_URL}gallery`, { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex size-full flex-col items-center justify-center text-center text-white">
      <motion.div
        className="w-full max-w-[90vw]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Ilustración personalizada */}
        <motion.div variants={itemVariants}>
          <motion.svg
            viewBox="0 0 300 200"
            className="h-[20vh] w-full md:h-[40vh] xl:h-[50vh]"
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
          >
            {/* Icono de galería (cuadrícula) */}
            <motion.rect
              x="50"
              y="50"
              width="60"
              height="60"
              stroke="#4ECDC4"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.rect
              x="120"
              y="50"
              width="60"
              height="60"
              stroke="#FF5E5B"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.rect
              x="190"
              y="50"
              width="60"
              height="60"
              stroke="#FFE66D"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Símbolo de advertencia */}
            <motion.path
              d="M150 30 L180 90 L120 90 Z"
              fill="none"
              stroke="#FF5E5B"
              strokeWidth="3"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.path
              d="M150 60 L150 70"
              stroke="#FF5E5B"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            <motion.circle
              cx="150"
              cy="80"
              r="2"
              fill="#FF5E5B"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            />
          </motion.svg>
        </motion.div>

        {/* Mensaje principal */}
        <motion.h1
          className="mb-[2vh] bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl xl:text-[3.5vw]"
          variants={itemVariants}
        >
          Sección no encontrada
        </motion.h1>

        {/* Mensaje específico */}
        <motion.p
          className="mb-[3vh] text-lg text-gray-800 md:text-xl xl:text-[1.5vw] dark:text-gray-300"
          variants={itemVariants}
        >
          {section
            ? `La sección "${section}" no existe en nuestra galería.`
            : 'No se especificó ninguna sección de galería.'}
        </motion.p>

        <motion.p
          className="mb-[4vh] text-gray-500 md:text-lg xl:text-[1.2vw] dark:text-gray-400"
          variants={itemVariants}
        >
          Redirigiendo a la galería principal...
        </motion.p>

        {/* Botón de acción */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={() => navigate(`${BASE_URL}gallery`)}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-[3vw] py-[1.5vh] text-white shadow-lg xl:px-[2vw] xl:py-[1vh]"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 15px rgba(123, 104, 238, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm md:text-base xl:text-[1.2vw]">Ver galería completa</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
