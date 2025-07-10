import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
interface Props {
  to: string;
  color: 'balticAmber' | 'chocolateMartini';
  children: React.ReactNode;
}
// Componente reutilizable para los botones flotantes
export const FloatingButton = ({ to, color, children }: Props) => {
  const colorClasses = {
    balticAmber: {
      border: 'border-(--baltic-amber)',
      text: 'text-(--baltic-amber)',
      hoverBg: 'hover:bg-(--baltic-amber)',
      shadow: 'shadow-(--baltic-amber)/40',
    },
    chocolateMartini: {
      border: 'border-(--chocolate-martini)',
      text: 'text-(--chocolate-martini)',
      hoverBg: 'hover:bg-(--chocolate-martini)',
      shadow: 'shadow-(--chocolate-martini)40',
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
          className={`border-2 ${colorClasses[color].border} bg-transparent px-6 py-2 ${colorClasses[color].text} shadow-lg ${colorClasses[color].shadow} transition-all duration-300 ${colorClasses[color].hoverBg} hover:text-white hover:shadow-xl ${colorClasses[color].shadow} xl:px-[1.5vw] xl:py-[1vw] xl:text-[0.9vw]`}
        >
          {children}
        </Button>
      </motion.div>
    </Link>
  );
};
