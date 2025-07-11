import { ButtonGalleryLink } from '@/components/buttons/ButtonGalleryLink';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { GallerySkeleton } from '@/components/gallery/GallerySkeleton';
import { useGalleryContext } from '@/context/GalleryContext';
import { motion } from 'framer-motion';

export const GalleryPage = () => {
  const { galleryData, loading, error } = useGalleryContext();

  if (loading) return <GallerySkeleton />;

  if (error)
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

  if (!galleryData || galleryData.length === 0)
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex h-[70vh] items-center justify-center py-10 text-center text-gray-500 xl:text-[2vw]"
      >
        <p>No gallery data available.</p>
      </motion.section>
    );

  return (
    <section className="grid gap-10 xl:gap-[2vw]">
      {galleryData.map(({ category, images }) => (
        <motion.article
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <header className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold capitalize xl:text-[2vw]">{category}</h2>
            <ButtonGalleryLink section={category} arrow="right" text="View more" />
          </header>

          <GalleryGrid images={images.slice(0, 3)} sectionTitle={category} />
        </motion.article>
      ))}
    </section>
  );
};
