import { DataSecondCarousel } from '@/types/data.type';
import { SearchIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  data: DataSecondCarousel;
  isIOS?: boolean;
}

const CardCarousel = ({ data, isIOS }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const { alt, url, description, title } = data;

  const imageStyles: React.CSSProperties = isIOS
    ? {
        WebkitTransform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
      }
    : {};

  return (
    <div className="group relative aspect-[16/9] size-full overflow-hidden">
      {!isImageLoaded && <Skeleton className="absolute inset-0 h-full w-full animate-pulse" />}

      <img
        src={url}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={imageStyles}
        loading="lazy"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={imageStyles}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="absolute inset-0 z-20 grid cursor-pointer place-content-center bg-gradient-to-br from-(--mocha-mousse)/95 to-(--chocolate-martini)/95 p-6 text-center backdrop-blur-sm"
            style={imageStyles}
          >
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 text-2xl font-bold tracking-wide text-white xl:text-[1.5vw]"
            >
              {title}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto mb-4 h-0.5 w-16 bg-(--baltic-amber) xl:h-[0.2vh] xl:w-[4vw]"
            />
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-md mx-auto max-w-md leading-relaxed text-slate-200 xl:text-[.9vw]"
            >
              {description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute right-3 bottom-3 z-10 cursor-pointer">
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          layout
          initial={false}
          animate={{
            width: isOpen ? 'calc(100% - 16px)' : 'clamp(3rem,4vw,3vw)',
            height: isOpen ? 'calc(100% - 16px)' : 'clamp(3rem,4vw,3vw)',
            borderRadius: isOpen ? '8px' : '50%',
            position: isOpen ? 'absolute' : 'relative',
            top: isOpen ? '8px' : 'auto',
            right: isOpen ? '8px' : 'auto',
            bottom: isOpen ? '8px' : 'auto',
            left: isOpen ? '8px' : 'auto',
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="flex origin-bottom-right items-center justify-center bg-white/5 shadow-lg backdrop-blur-sm hover:bg-white/60"
          whileHover={{ scale: isOpen ? 1 : 1.05 }}
          style={imageStyles}
        >
          {!isOpen && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SearchIcon className="size-6 text-slate-950 xl:size-[1.5vw]" />
            </motion.span>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;
