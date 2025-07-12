import { CompanyHero } from '@/components/about/CompanyHero';
import { ValuesSection } from '@/components/about/ValuesSection';
import { useData } from '@/context/DataContext';

import { motion } from 'framer-motion';

export const AboutPage = () => {
  const { main_carousel } = useData();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-4 py-12 md:px-6 xl:p-[2vw]"
    >
      <CompanyHero image={main_carousel[0]} />
      <ValuesSection image={main_carousel[1]} />
    </motion.div>
  );
};
