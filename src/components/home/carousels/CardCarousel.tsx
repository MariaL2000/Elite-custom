import { AnimatePresence, motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { SearchIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
  data?: {
    url?: string;
    alt?: string;
    title?: string;
    description?: string;
  };
  index: number;
  isIOS?: boolean;
}

const FALLBACK_IMAGES = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvelClc9ONV4OQ7HtQE2d7wNu1lvriud2Tw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzM0A6_e4_g0zB8vRpNUeF867aOKmFMGTog&s',
  'https://cabinetscity.com/wp-content/uploads/2025/08/Granite-Countertop-Cost_-Complete-2025-Pricing-Guide-Buyer_s-Tips.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnC_63OZQC1m42503vOw7vgtpxTOTWwwAaA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItFpRc_8et5IYvdILhDWoAGQH7rFfVMtjGQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsH1p0w2X1Nw9K6swWrBmkoBooxSULuXdnQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtD3wpHtB5maz5qAZdzDGpClLmpwDGAtJfrQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-DzB562uWrcjK0fOgheJrK2MAHtNhyrdMw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nqstdiPmhijrZRaZr9oqCpqETFUfOMOg3Q&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSQ6wKUFrhdiIg8ouXbrT2Sh_zyRNlCh08A&s',
];

/* ===========================
   Descripciones personalizadas
   =========================== */
const DESCRIPTIONS = [
  'Quartz countertops are durable and low-maintenance, ideal for modern kitchens.',
  'Granite surfaces offer natural beauty and unique patterns for a luxurious feel.',
  'Polished quartz adds elegance while resisting stains and scratches effectively.',
  'Granite countertops maintain their shine and heat resistance over time.',
  'Engineered quartz provides consistent color and design flexibility.',
  'Granite slabs give a timeless aesthetic with natural color variations.',
  'Quartz surfaces are non-porous, making them hygienic for food prep.',
  'Granite offers unmatched hardness and durability for busy kitchens.',
  'Quartz countertops combine modern technology with natural aesthetics.',
  'Granite and quartz together can create stunning contrasts in kitchen design.',
];

const CardCarousel = ({ data, index, isIOS }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const title = data?.title || `Countertop ${index + 1}`;

  // URL segura por card
  const imageSrc = useMemo(() => {
    if (!data?.url || typeof data.url !== 'string' || data.url.trim() === '' || hasError) {
      return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    }
    return data.url;
  }, [data, index, hasError]);

  const description = data?.description || DESCRIPTIONS[index % DESCRIPTIONS.length];
  const alt = data?.alt || title;

  const imageStyles: React.CSSProperties = isIOS
    ? { WebkitTransform: 'translateZ(0)', WebkitBackfaceVisibility: 'hidden' }
    : {};

  return (
    <div className="group relative aspect-[16/9] size-full overflow-hidden">
      {!isImageLoaded && <Skeleton className="absolute inset-0 h-full w-full animate-pulse" />}

      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsImageLoaded(false);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={imageStyles}
        />
      )}

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
              className="mx-auto mb-4 h-0.5 w-16 bg-(--baltic-amber)"
            />

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto max-w-md text-slate-200 xl:text-[.9vw]"
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
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center bg-white/5 shadow-lg backdrop-blur-sm hover:bg-white/60"
          style={imageStyles}
        >
          {!isOpen && <SearchIcon className="size-6 text-slate-950 xl:size-[1.5vw]" />}
        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;
