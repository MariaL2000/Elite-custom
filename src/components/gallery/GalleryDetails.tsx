import { galleryData } from '@/datas/gallery';
import { useParams } from 'react-router-dom';

import { GalleryGrid } from './GalleryGrid';

import { ButtonGalleryLink } from '../buttons/ButtonGalleryLink';
import { GallerySectionNotFound } from '@/pages/GallerySectionNotFound';

export const GalleryDetail = () => {
  const { section } = useParams();
  const currentSection = galleryData.find(s => s.id === section);

  if (!currentSection) {
    return <GallerySectionNotFound />;
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold xl:text-[2vw]">{currentSection.title}</h1>
        <ButtonGalleryLink arrow="left" />
      </div>

      <GalleryGrid images={currentSection.images} sectionTitle={currentSection.title} />
    </div>
  );
};
