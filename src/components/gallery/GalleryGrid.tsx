import { motion } from 'motion/react';

import { ImageWithErrorHandling } from '../ui/ImageWithErrorHandling';

interface Props {
  images: string[];
  sectionTitle: string | undefined;
}
export const GalleryGrid = ({ images, sectionTitle }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-[1vw]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg xl:rounded-[1vw]"
        >
          <ImageWithErrorHandling image={image} alt={`${sectionTitle} ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};
