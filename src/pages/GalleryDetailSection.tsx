import { GalleryDetailsSkeleton } from '@/components/gallery/GalleryDetailsSkeleton';
import { useGalleryContext } from '@/context/GalleryContext';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { GallerySectionNotFound } from './GallerySectionNotFound';
import { ButtonGalleryLink } from '@/components/buttons/ButtonGalleryLink';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export const GallerySectionPage = () => {
  const { section } = useParams();
  const { galleryData, loading, error } = useGalleryContext();
  if (loading) {
    return <GalleryDetailsSkeleton />;
  }
  const data = galleryData?.find(e => e.category == section);

  if (!data) return <GallerySectionNotFound />;

  if (error) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex h-[70vh] items-center justify-center py-10 text-center text-red-500 xl:text-[2vw]"
      >
        <p>Failed to load gallery. Please try again later.</p>
      </motion.section>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 capitalize xl:text-[2.5vw]">
          {section}
        </h1>
        <ButtonGalleryLink arrow="left" text="Back to gallery" />
      </div>

      <GalleryGrid images={data.images} sectionTitle={section} />
    </div>
  );
};
