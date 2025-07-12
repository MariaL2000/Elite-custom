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
      <Button className="group relative translate-y-[-0.2vw] border-2 border-(--chocolate-martini) bg-transparent font-medium text-(--chocolate-martini) shadow-[0_0.1vw_0_0_var(--chocolate-martini)] transition-all duration-300 hover:translate-y-[-0.4vw] hover:scale-[1.02] hover:bg-(--chocolate-martini) hover:text-white hover:shadow-lg xl:rounded-[0.5vw] xl:border-[0.15vw] xl:p-[1vw]">
        {arrow === 'left' && (
          <ArrowLeftIcon className="mr-2 size-4 transition-transform group-hover:translate-x-1 xl:mr-[0.5vw] xl:size-[1vw]" />
        )}
        {text}
        {arrow === 'right' && (
          <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1 xl:ml-[0.5vw] xl:size-[1vw]" />
        )}
      </Button>
    </Link>
  );
};
