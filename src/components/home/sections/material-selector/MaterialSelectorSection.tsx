import { useState, lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { useBrowserDetection } from '@/hooks/useBrowserDetection';
import { useData } from '@/context/DataContext';
import { MaterialPerView } from './MaterialPerView';
import { Material } from '@/datas/material-selector';
import { SeparatorWithColor } from '@/components/SeparatorWithColor';

const LazyImage = lazy(() => import('@/components/ui/LazyImage'));

/* ===========================
   Fallbacks con imágenes válidas
   =========================== */
const FALLBACK_MATERIALS: Material[] = [
  {
    id: 'fallback-1',
    name: 'Quartz White',
    image: 'https://firenzastone.com/wp-content/uploads/2021/12/image-6.png',
    thumbnail: 'https://firenzastone.com/wp-content/uploads/2021/12/image-6.png',
    description: 'Elegant white quartz countertop with natural patterns.',
  },
  {
    id: 'fallback-2',
    name: 'Granite Black',
    image:
      'https://www.formica.com/-/media/project/formica/global/products/swatch-images/03522/03522-swatch.jpg',
    thumbnail:
      'https://www.formica.com/-/media/project/formica/global/products/swatch-images/03522/03522-swatch.jpg',
    description: 'Sleek black granite perfect for modern kitchens.',
  },
  {
    id: 'fallback-3',
    name: 'Marble Grey',
    image:
      'https://images.thdstatic.com/productImages/ae8d1f1e-66a6-42d8-85a2-a9024e9215c5/svn/wilsonart-laminate-sheets-4925k73504896-a0_600.jpg',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtoz_ausUYbgkvjitr0Q_GEpSkmOxxWMkRA&s',
    description: 'Stylish grey marble with subtle veining.',
  },
  {
    id: 'fallback-4',
    name: 'Quartz Beige',
    image:
      'https://images.thdstatic.com/productImages/49e29b8d-9631-4607-8b96-49fe3aab8a15/svn/oro-quartz-etchings-1092-46-hampton-bay-laminate-countertops-srkit161-e1_600.jpg',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV5bgdaIG4VkPoIcIrHjdbrRxUHdYagHyLg&s',
    description: 'Warm beige quartz countertop for a cozy look.',
  },
];

export const MaterialSelectorSection = () => {
  const { materials: apiMaterials, loading } = useData();
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(
    apiMaterials[0] ?? FALLBACK_MATERIALS[0]
  );
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { isIOS, isSafari } = useBrowserDetection();

  const safariStyles: React.CSSProperties =
    isIOS || isSafari
      ? { WebkitBackfaceVisibility: 'hidden', WebkitPerspective: 1000, willChange: 'transform' }
      : {};

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
    if (id.startsWith('main-')) {
      const materialId = id.replace('main-', '');
      const loaded = (apiMaterials.length > 0 ? apiMaterials : FALLBACK_MATERIALS).find(
        m => m.id === materialId
      );
      if (loaded && loaded.id !== selectedMaterial.id) {
        setSelectedMaterial(loaded);
      }
    }
  };

  // Normalizamos materiales, si API falla → fallback
  const materials = useMemo(() => {
    if (apiMaterials.length === 4 && apiMaterials.every(m => m.image && m.image.startsWith('http')))
      return apiMaterials;
    return FALLBACK_MATERIALS;
  }, [apiMaterials]);

  return (
    <section className="relative w-full py-12 md:py-16 xl:py-[8vh]" style={safariStyles}>
      <div className="mx-auto w-full px-6 md:px-6 xl:px-[2vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-2 text-center"
          style={safariStyles}
        >
          <h2 className="text-3xl font-bold md:text-4xl xl:text-[2.5vw]">
            Choose Your Perfect Material
          </h2>
          <SeparatorWithColor />
          <p className="mx-auto max-w-md md:text-lg xl:max-w-[30vw] xl:text-[1.1vw]">
            Select from our premium materials to find the perfect match for your space
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center xl:gap-[3vw]">
          {/* Material list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/4 xl:w-[25vw]"
            style={safariStyles}
          >
            <p className="mb-4 font-medium xl:text-[1.3vw]">Select a material:</p>
            <div className="grid grid-cols-2 gap-4 xl:gap-[1vw]">
              {materials.map(material => {
                const isSelected = material.id === selectedMaterial.id;
                return (
                  <motion.button
                    key={material.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMaterial(material)}
                    className={`group flex flex-col items-center gap-2 rounded-xl p-3 transition-all ${
                      isSelected ? 'bg-(--sirocco) text-slate-100' : 'hover:bg-(--sirocco)/40'
                    }`}
                    style={safariStyles}
                  >
                    <motion.div
                      className={`relative size-20 overflow-hidden rounded-full border-2 md:h-24 md:w-24 xl:size-[10vw] ${
                        isSelected
                          ? 'border-(--chocolate-martini)'
                          : 'border-gray-600 group-hover:border-gray-400'
                      }`}
                    >
                      <Suspense fallback={<Skeleton className="size-full rounded-xl" />}>
                        <LazyImage
                          src={material.image ?? FALLBACK_MATERIALS[0].image}
                          alt={material.name}
                          className="h-full w-full object-cover"
                          onLoad={() => handleImageLoad(`main-${material.id}`)}
                          style={safariStyles}
                        />
                      </Suspense>
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 bg-indigo-400/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    <span className="text-center text-sm font-medium md:text-base xl:text-[1.1vw]">
                      {material.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Preview */}
          <MaterialPerView
            safariStyles={safariStyles}
            selectedMaterial={selectedMaterial}
            handleImageLoad={handleImageLoad}
            loadedImages={loadedImages}
          />
        </div>
      </div>
    </section>
  );
};
