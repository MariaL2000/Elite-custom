import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BASE_URL } from '@/config';
import { services } from '@/datas/servicescards';
import { FloatingButton } from '@/components/buttons/FloatingButton';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};

const serviceImages = [
  'services/service1',
  'services/service2',
  'services/service3',
  'services/service4',
];

const fallbackImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=entropy&auto=format&q=85',
];
const cardColors = [
  {
    gradient:
      '[background-image:linear-gradient(to_right,rgb(--cannoli-cream/0.2),rgb(--cream-tan/0.2))]',
    accent: '[background-color:rgb(--cannoli-cream/0.1)]',
    border: '[border-color:rgb(--cannoli-cream)]',
  },
  {
    gradient: '[background-image:linear-gradient(to_right,rgb(--safari/0.2),rgb(--sirocco/0.2))]',
    accent: '[background-color:rgb(--safari/0.1)]',
    border: '[border-color:rgb(--safari)]',
  },
  {
    gradient:
      '[background-image:linear-gradient(to_right,rgb(--chanterelle/0.2),rgb(--mocha-mousse/0.2))]',
    accent: '[background-color:rgb(--chanterelle/0.1)]',
    border: '[border-color:rgb(--chanterelle)]',
  },
  {
    gradient:
      '[background-image:linear-gradient(to_right,rgb(--baltic-amber/0.2),rgb(--chocolate-martini/0.2))]',
    accent: '[background-color:rgb(--baltic-amber/0.1)]',
    border: '[border-color:rgb(--baltic-amber)]',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mt-18 overflow-hidden bg-(--mocha-mousse)/10 px-4 py-16 backdrop-blur-[10px] transition-all duration-500 md:px-6 md:py-20 xl:px-[2vw] xl:py-[10vh]"
    >
      {/* Elementos decorativos de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/80 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/80 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl xl:max-w-[90vw] 2xl:max-w-[85vw]">
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 text-center text-5xl font-normal tracking-tight xl:mb-[3vw] xl:text-[3.5vw] 2xl:text-[3vw]"
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
                    ease: 'easeOut',
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                whileTap={{ scale: 0.97 }}
                className="perspective-1000 transform-gpu"
              >
                <Card
                  className={`group relative h-full min-h-[420px] overflow-hidden rounded-2xl border bg-white/80 py-0 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] sm:min-h-[450px] md:min-h-[480px] xl:min-h-[500px] xl:rounded-[1.2vw] 2xl:min-h-[460px] ${colorScheme.border} hover:border-opacity-60`}
                >
                  {/* Badge numerado */}
                  <motion.div
                    className={`absolute top-4 right-4 z-20 rounded-xl border border-white/40 bg-(--cannoli-cream) px-3 py-1.5 shadow-sm backdrop-blur-md`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-xs font-bold tracking-wide text-gray-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>

                  <div className="relative h-[60%] w-full overflow-hidden rounded-t-2xl xl:rounded-t-[1.2vw]">
                    <motion.img
                      src={imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading={index < 4 ? 'eager' : 'lazy'}
                      whileHover={{
                        scale: 1.1,
                        filter: 'brightness(1.05) contrast(1.05)',
                      }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      onError={e => {
                        e.currentTarget.src = fallbackImages[index % fallbackImages.length];
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-1.5 w-1.5 rounded-full bg-white/50"
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
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="relative flex h-[40%] flex-col justify-between p-4 xl:p-[1.2vw] 2xl:p-[1vw]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <CardHeader className="mb-1 p-0">
                      <CardTitle
                        className="text-lg leading-tight font-bold text-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900 xl:text-[2vw] 2xl:text-[1.5vw]"
                        style={{
                          fontFamily: 'Satisfy, cursive',
                          color: 'var(--sirocco)',
                        }}
                      >
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 p-0">
                      <motion.p
                        className="line-clamp-3 text-sm leading-relaxed text-gray-600 transition-all duration-300 group-hover:text-gray-700 xl:text-[1.2vw] 2xl:text-[1.2vw]"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.description}
                      </motion.p>
                    </CardContent>
                  </motion.div>

                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent xl:rounded-[1.2vw] group-hover:${colorScheme.border} transition-all duration-700`}
                    whileHover={{
                      boxShadow: [
                        '0 0 15px rgba(0,0,0,0.1)',
                        '0 0 25px rgba(0,0,0,0.15)',
                        '0 0 15px rgba(0,0,0,0.1)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  />

                  {/* Efectos de luz en las esquinas */}
                  <div className="absolute top-4 left-4 h-4 w-4 rounded-full bg-white/20 opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute right-4 bottom-4 h-3 w-3 rounded-full bg-white/15 opacity-0 blur-sm transition-opacity delay-100 duration-700 group-hover:opacity-100" />
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
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
          <FloatingButton to={`${BASE_URL}contact`} color="balticAmber">
            Contact Us
          </FloatingButton>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
          <FloatingButton to={`${BASE_URL}about`} color="chocolateMartini">
            About Us
          </FloatingButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
