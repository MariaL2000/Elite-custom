import { Button } from '@/components/ui/button';
import { BASE_URL } from '@/config';
import { useData } from '@/context/DataContext';
import { cn, getColorsForBtn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export const ButtonGetQuote = () => {
  const { colors } = useData();
  const colorsBtn = getColorsForBtn(colors);
  return (
    <Button
      size="default"
      className={cn(
        colorsBtn,
        'group focus:ring-opacity-50 relative overflow-hidden px-10 py-6 font-medium text-white shadow-lg transition-all duration-100 hover:shadow-[0_0_15px_-3px_rgba(30,58,138,0.5)] focus:ring-2 focus:ring-blue-500 focus:outline-none xl:rounded-[0.3vw] xl:py-[1vw]'
      )}
      asChild
    >
      <Link to={`${BASE_URL}contact`} className="focus:outline-none">
        Get a quote
        <ArrowRight className="size-4 xl:size-[1vw]" />
      </Link>
    </Button>
  );
};
