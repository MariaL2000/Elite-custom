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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mt-18 px-4 py-10 transition-colors duration-300 md:px-6 xl:px-[2vw] xl:py-[8vh] dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-6xl xl:max-w-[80vw]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-center text-5xl font-normal xl:mb-[1vw] xl:text-[3vw]"
          style={{
            fontFamily: 'Satisfy, cursive',
            color: 'var(--sirocco)',
          }}
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-[1.5vw]"
        >
          {services.map(service => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full border-gray-200 bg-slate-100/70 shadow-md transition-all duration-300 hover:border-indigo-100 hover:shadow-lg 2xl:rounded-[0.7vw] 2xl:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-900/50">
                <CardHeader className="p-1 xl:p-[1.3vw]">
                  <CardTitle className="text-xl text-gray-800 xl:text-[1.5vw] dark:text-gray-100">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 xl:p-[1.5vw] xl:pt-0">
                  <p className="text-gray-600 xl:text-[1.2vw] dark:text-gray-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-6 xl:mt-[5vh] xl:gap-[1vw]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <FloatingButton to={`${BASE_URL}contact`} color="balticAmber">
          Contact Us
        </FloatingButton>

        <FloatingButton to={`${BASE_URL}about`} color="chocolateMartini">
          About Us
        </FloatingButton>
      </motion.div>
    </section>
  );
}
