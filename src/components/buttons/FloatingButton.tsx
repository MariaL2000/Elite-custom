import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
interface Props {
  to: string;
  color: 'indigo' | 'teal';
  children: React.ReactNode;
}
// Componente reutilizable para los botones flotantes
export const FloatingButton = ({ to, color, children }: Props) => {
  const colorClasses = {
    indigo: {
      border: 'border-indigo-600',
      text: 'text-indigo-600',
      hoverBg: 'hover:bg-indigo-600',
      shadow: 'shadow-indigo-500/40',
    },
    teal: {
      border: 'border-teal-600',
      text: 'text-teal-600',
      hoverBg: 'hover:bg-teal-600',
      shadow: 'shadow-teal-500/40',
    },
  };

  return (
    <Link to={to}>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-2, 0, -2],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={{
          y: -4,
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Button
          variant="outline"
          className={`border-2 ${colorClasses[color].border} bg-transparent px-6 py-2 ${colorClasses[color].text} shadow-lg ${colorClasses[color].shadow} transition-all duration-300 ${colorClasses[color].hoverBg} hover:text-white hover:shadow-xl ${colorClasses[color].shadow} xl:px-[1.5vw] xl:py-[0.7vw] xl:text-[0.9vw]`}
        >
          {children}
        </Button>
      </motion.div>
    </Link>
  );
};
