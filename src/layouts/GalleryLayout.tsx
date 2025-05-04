import { GalleryProvider } from '@/context/GalleryContext';
import { Outlet } from 'react-router-dom';

const GalleryLayout = () => {
  return (
    <div className="p-4 xl:p-[2vw]">
      <GalleryProvider>
        <Outlet />
      </GalleryProvider>
    </div>
  );
};
export default GalleryLayout;
