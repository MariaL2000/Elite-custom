import { Button } from '@/components/ui/button';
import { BASE_URL } from '@/config';
import { useData } from '@/context/DataContext';
import { cn } from '@/lib/utils';

import { Link } from 'react-router-dom';

export const ButtonGetQuote = () => {
  const { colors } = useData();

  return (
    <Button
      variant="default"
      size="lg"
      style={{ background: colors.primary ?? '' }}
      className={cn(
        !colors.primary && 'bg-(--chocolate-martini)',

        'group focus:ring-opacity-50 relative overflow-hidden px-10 py-6 font-medium text-white shadow-lg transition-all duration-100 hover:shadow-[0_0_15px_-3px_rgba(30,58,138,0.5)] focus:ring-2 focus:ring-blue-500 focus:outline-none xl:rounded-[0.3vw] xl:py-[3vh] dark:hover:shadow-[0_0_15px_-3px_rgba(30,64,175,0.5)]'
      )}
    >
      <span className="relative z-10 flex items-center gap-2 text-xl xl:text-[1.2vw]">
        <Link to={`${BASE_URL}contact`} className="focus:outline-none">
          Get a quote
        </Link>
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-100 group-hover:translate-x-1 group-hover:scale-110"
        >
          →
        </span>
      </span>
      {/* Overlay optimizado para Safari */}
      <span
        className="absolute inset-0 bg-white opacity-0 transition-opacity duration-100 group-hover:opacity-[0.12] dark:bg-gray-100"
        style={{
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)',
        }}
      ></span>
    </Button>
  );
};
