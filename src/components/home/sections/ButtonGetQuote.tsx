import { Button } from '@/components/ui/button';
import { BASE_URL } from '@/config';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useId } from 'react';

export const ButtonGetQuote = () => {
  const { colors } = useData();
  const id = useId();
  const dynamicClass = `btn-dynamic-${id}`;

  const backgroundColor = colors.primary ?? 'var(--chocolate-martini)';

  return (
    <>
      <style>
        {`
          .${dynamicClass} {
            background: ${backgroundColor};
          }
          
        `}
      </style>

      <Button
        size="default"
        className={cn(
          dynamicClass,
          'group focus:ring-opacity-50 relative overflow-hidden px-10 py-6 font-medium text-white shadow-lg transition-all duration-100 hover:opacity-90 hover:shadow-[0_0_15px_-3px_rgba(30,58,138,0.5)] xl:rounded-[0.3vw] xl:py-[1vw]'
        )}
        asChild
      >
        <Link to={`${BASE_URL}contact`} className="focus:outline-none">
          Get a quote
          <ArrowRight className="size-4 xl:size-[1vw]" />
        </Link>
      </Button>
    </>
  );
};
