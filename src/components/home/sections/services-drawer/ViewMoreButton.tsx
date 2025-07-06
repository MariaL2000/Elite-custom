import { Button } from '@/components/ui/button';

export const ViewMoreButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick}>
    Ver más servicios
    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 via-teal-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
  </Button>
);
