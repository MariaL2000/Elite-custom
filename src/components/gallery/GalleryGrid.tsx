import { motion } from 'motion/react';
import { ImageWithErrorHandling } from '../ui/ImageWithErrorHandling';
import { RoomImage } from '@/types/gallery.type';

interface Props {
  images: RoomImage[];
  sectionTitle: string | undefined;
}

export const GalleryGrid = ({ images, sectionTitle }: Props) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[1.5%]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full break-inside-avoid overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl xl:rounded-[1vw]"
        >
          {/* Overlay opcional */}
          <div className="absolute inset-0 z-10 bg-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
          <ImageWithErrorHandling
            image={image.image}
            alt={`${sectionTitle} ${index + 1}`}
            className="aspect-[4/3] w-full rounded-2xl object-cover xl:rounded-[1vw]"
          />
        </motion.div>
      ))}
    </div>
  );
};
