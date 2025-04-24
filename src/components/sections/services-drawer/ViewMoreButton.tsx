import { Button } from '@/components/ui/button';

export const ViewMoreButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    className="group relative overflow-hidden rounded-full border-0 bg-gradient-to-r from-indigo-500 via-teal-500 to-indigo-500 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,209,197,0.5)] md:px-8 md:py-3 md:text-base xl:px-[1.5vw] xl:py-[0.8vw] xl:text-[1vw]"
    onClick={onClick}
  >
    <span className="relative z-10 flex items-center gap-2">
      <span>Ver más servicios</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 md:h-5 md:w-5 xl:h-[1.1vw] xl:w-[1.1vw]"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 via-teal-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
  </Button>
);
