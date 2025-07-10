import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BASE_URL } from '@/config';
import { services } from '@/datas/servicescards';
import { FloatingButton } from '@/components/buttons/FloatingButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.9,
    rotateY: -10,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

// Imágenes específicas para cada servicio
const serviceImages = [
  "services/service1",
  "services/service2",
  "services/service3",
  "services/service4",

];

// Imágenes de respaldo desde Unsplash
const fallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85",
  
];

// Colores dinámicos para cada card
const cardColors = [
  { gradient: 'from-blue-500/20 to-cyan-500/20', accent: 'bg-blue-500/10', border: 'border-blue-200' },
  { gradient: 'from-purple-500/20 to-pink-500/20', accent: 'bg-purple-500/10', border: 'border-purple-200' },
  { gradient: 'from-emerald-500/20 to-teal-500/20', accent: 'bg-emerald-500/10', border: 'border-emerald-200' },
  { gradient: 'from-orange-500/20 to-red-500/20', accent: 'bg-orange-500/10', border: 'border-orange-200' },
  { gradient: 'from-indigo-500/20 to-blue-500/20', accent: 'bg-indigo-500/10', border: 'border-indigo-200' },
  { gradient: 'from-rose-500/20 to-pink-500/20', accent: 'bg-rose-500/10', border: 'border-rose-200' },
  { gradient: 'from-amber-500/20 to-yellow-500/20', accent: 'bg-amber-500/10', border: 'border-amber-200' },
  { gradient: 'from-violet-500/20 to-purple-500/20', accent: 'bg-violet-500/10', border: 'border-violet-200' },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mt-18 px-4 py-16 bg-(--cannoli-cream)/20 backdrop-blur-sm transition-all duration-500 md:px-6 md:py-20 xl:px-[2vw] xl:py-[10vh] overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 bg-white/80 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "circular",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/80 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "circular",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl xl:max-w-[90vw] 2xl:max-w-[85vw] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center text-5xl font-normal xl:mb-[3vw] xl:text-[3.5vw] 2xl:text-[3vw] tracking-tight"
          style={{
            fontFamily: 'Satisfy, cursive',
            color: 'var(--sirocco)',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[2vw] 2xl:gap-[1.5vw]"
        >
          {services.map((service, index) => {
            const colorScheme = cardColors[index % cardColors.length];
            const imageUrl = serviceImages[index] || fallbackImages[index % fallbackImages.length];

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 5,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }
                }}
                whileTap={{ scale: 0.97 }}
                className="perspective-1000 transform-gpu"
              >
                <Card className={`group relative h-full min-h-[420px] overflow-hidden bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] sm:min-h-[450px] md:min-h-[480px] xl:min-h-[500px] 2xl:min-h-[460px] rounded-2xl xl:rounded-[1.2vw] border ${colorScheme.border} hover:border-opacity-60`}>

                  {/* Badge numerado */}
                  <motion.div
                    className={`absolute top-4 right-4 z-20 px-3 py-1.5 bg-(--cannoli-cream) backdrop-blur-md rounded-xl border border-white/40 shadow-sm`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-xs font-bold text-gray-700 tracking-wide">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>

                  {/* Imagen - 60% de la card , quitale el padding ese de arriba */}
                  <div className="relative h-[60%]  w-full overflow-hidden rounded-t-2xl xl:rounded-t-[1.2vw]">
                    <motion.img
                      src={imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading={index < 4 ? "eager" : "lazy"}
                      whileHover={{
                        scale: 1.1,
                        filter: "brightness(1.05) contrast(1.05)",
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      onError={(e) => {
                        // Si falla la imagen local, usar la de respaldo
                        e.currentTarget.src = fallbackImages[index % fallbackImages.length];
                      }}
                    />



                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={{
                        x: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Partículas flotantes */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
                          style={{
                            left: `${20 + i * 12}%`,
                            top: `${25 + i * 8}%`,
                          }}
                          animate={{
                            y: [-8, -25, -8],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Contenido - 40% de la card */}
                  <motion.div
                    className="relative h-[40%] p-4 xl:p-[1.2vw] 2xl:p-[1vw] flex flex-col justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >


                    <CardHeader className="p-0 mb-1">
                      <CardTitle
                        className="text-lg font-bold text-gray-800 transition-all duration-300 group-hover:text-gray-900 group-hover:scale-105 xl:text-[2vw] 2xl:text-[1.5vw] leading-tight"
                        style={{
                          fontFamily: 'Satisfy, cursive',
                          color: 'var(--sirocco)',
                        }}
                      >
                        {service.title}
                      </CardTitle>

                    </CardHeader>



                    <CardContent className="p-0 flex-1">
                      <motion.p
                        className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700 xl:text-[1.2vw] 2xl:text-[1.2vw] leading-relaxed line-clamp-3"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                    </CardContent>


                  </motion.div>

                  {/* Borde animado */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl xl:rounded-[1.2vw] border-2 border-transparent group-hover:${colorScheme.border} transition-all duration-700`}
                    whileHover={{
                      boxShadow: [
                        "0 0 15px rgba(0,0,0,0.1)",
                        "0 0 25px rgba(0,0,0,0.15)",
                        "0 0 15px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                  />

                  {/* Efectos de luz en las esquinas */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/15 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Botones de acción */}
      <motion.div
        className="relative z-10 mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8 xl:mt-[6vh] xl:gap-[2vw]"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FloatingButton to={`${BASE_URL}contact`} color="balticAmber">
            Contact Us
          </FloatingButton>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FloatingButton to={`${BASE_URL}about`} color="chocolateMartini">
            About Us
          </FloatingButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

