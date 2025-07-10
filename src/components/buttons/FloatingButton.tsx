import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface Props {
  to: string;
  color: 'balticAmber' | 'chocolateMartini';
  children: React.ReactNode;
}

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
      shadow: 'shadow-(--chocolate-martini)/40',
    },
  };

  return (
    <Button
      variant="default"
      className={cn(
        'w-[8rem] border-2 bg-transparent shadow-xl hover:text-white hover:shadow-lg 2xl:hover:shadow-xl',
        colorClasses[color].hoverBg,
        colorClasses[color].border,
        colorClasses[color].shadow,
        colorClasses[color].text
      )}
      asChild
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
};
