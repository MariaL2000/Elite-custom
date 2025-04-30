import { motion } from 'motion/react';

import { galleryData } from '@/datas/gallery';

import { GalleryGrid } from './GalleryGrid';
import { ButtonGalleryLink } from '../buttons/ButtonGalleryLink';

// Componente LazyImage con carga diferida

export const GallerySection = () => {
  return (
    <section className="grid gap-10 xl:gap-[2vw]">
      {galleryData.map(section => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold xl:text-[2vw]">{section.title}</h2>
            <ButtonGalleryLink section={section.id} arrow="right" text="View more" />
          </div>

          <GalleryGrid images={section.images.slice(0, 3)} sectionTitle={section.title} />
        </motion.div>
      ))}
    </section>
  );
};
