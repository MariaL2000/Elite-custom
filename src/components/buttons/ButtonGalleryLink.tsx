import { BASE_URL } from '@/config';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface Props {
  section?: string;
  arrow: 'left' | 'right';
  text: string;
}

export const ButtonGalleryLink = ({ section, arrow, text }: Props) => {
  return (
    <Link to={`${BASE_URL}gallery${section ? '/' + section : ''}`}>
      <Button
        variant="outline"
        className="group relative translate-y-[-0.2vw] border-2 border-gray-800 bg-white/10 font-medium text-gray-800 shadow-[0_0.3vw_0_0_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-y-[-0.4vw] hover:scale-[1.02] hover:bg-gray-800 hover:text-white hover:shadow-[0_0.4vw_0_0_rgba(0,0,0,0.2)] xl:rounded-[0.5vw] xl:border-[0.15vw] xl:p-[1vw] xl:text-[1vw] dark:border-gray-200 dark:bg-gray-900/10 dark:text-gray-200 dark:shadow-[0_0.3vw_0_0_rgba(255,255,255,0.1)] dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:hover:shadow-[0_0.4vw_0_0_rgba(255,255,255,0.1)]"
      >
        {/* Efecto de profundidad (opcional) */}
        <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/20 to-transparent dark:from-black/20" />
        {arrow == 'left' && (
          <ArrowLeftIcon className="mr-2 size-4 transition-transform group-hover:translate-x-1 xl:mr-[0.5vw] xl:size-[1vw]" />
        )}
        {text}
        {arrow == 'right' && (
          <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1 xl:ml-[0.5vw] xl:size-[1vw]" />
        )}
      </Button>
    </Link>
  );
};
