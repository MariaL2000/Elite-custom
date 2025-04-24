// ServicesSection.tsx
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { services } from '../../datas/servicescards';
import { BASE_URL } from '@/config';

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
    <section id="services" className="bg-gray-50 px-4 py-16 md:px-6 xl:px-[2vw] xl:py-[8vh]">
      <div className="container mx-auto max-w-6xl xl:max-w-[80vw]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl xl:mb-[3vh] xl:text-[2.5vw]"
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
              <Card className="h-full border border-gray-200 bg-white transition-all duration-300 hover:border-indigo-100 hover:shadow-md">
                <CardHeader className="p-6 xl:p-[1.5vw]">
                  <CardTitle className="text-xl text-gray-800 xl:text-[1.5vw]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 xl:p-[1.5vw] xl:pt-0">
                  <p className="text-gray-600 xl:text-[0.9vw]">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 xl:mt-[5vh] xl:gap-[1vw]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link to={`${BASE_URL}contact`}>
          <Button
            variant="outline"
            className="border-2 border-indigo-600 bg-transparent px-6 py-2 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white xl:px-[1.5vw] xl:py-[0.7vw] xl:text-[0.9vw]"
          >
            Contact Us
          </Button>
        </Link>
        <Link to={`${BASE_URL}about`}>
          <Button
            variant="outline"
            className="border-2 border-teal-600 bg-transparent px-6 py-2 text-teal-600 transition-all duration-300 hover:bg-teal-600 hover:text-white xl:px-[1.5vw] xl:py-[0.7vw] xl:text-[0.9vw]"
          >
            About Us
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
