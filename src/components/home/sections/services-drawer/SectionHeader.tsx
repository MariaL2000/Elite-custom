import { SeparatorWithColor } from '@/components/SeparatorWithColor';
import { motion } from 'framer-motion';

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
    <h2 className="mb-4 bg-clip-text text-3xl font-bold md:text-4xl xl:text-[3vw]">{title}</h2>
    <SeparatorWithColor />
    <p className="mx-auto xl:max-w-[25vw] xl:text-[1.2vw]">{description}</p>
  </motion.div>
);
