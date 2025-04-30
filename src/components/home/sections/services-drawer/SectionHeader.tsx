import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <motion.div
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="font-satisfy mb-4 bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl xl:text-[3vw]">
      {title}
    </h2>
    <div className="mx-auto mb-4 h-1 w-24 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500"></div>
    <p className="mx-auto xl:max-w-[25vw] xl:text-[1.2vw]">{description}</p>
  </motion.div>
);
