import { CompanyHero } from '@/components/about/CompanyHero';
import { ValuesSection } from '@/components/about/ValuesSection';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-4 py-12 md:px-6 xl:p-[2vw]"
    >
      <CompanyHero />
      <ValuesSection />
      
    </motion.div>
  );
};
