import { CarouselContainer, CarouselWithPlay } from '@/components/home/carousels';

import { galleryItems } from '@/datas/gallery';
import {
  ResizableSection,
  ScrollGallerySection,
  ServiceCards,
  ServicesSection,
  TitlePage,
  VideoScrollSection,
} from '@/components/home/sections';
import { MaterialSelectorSection } from '@/components/home/sections/material-selector/MaterialSelectorSection';

export const HomePage = () => {
  return (
    <div className="w-full">
      <TitlePage />
      <div>
        <CarouselWithPlay />
        <ServicesSection />

        <VideoScrollSection />

        <CarouselContainer
          sliders={4}
          title=" Insipre by our amazingcountertops and see our materials"
        />

        <ResizableSection />
        <ServiceCards />

        <ScrollGallerySection items={galleryItems} />
        <MaterialSelectorSection />
      </div>
    </div>
  );
};
