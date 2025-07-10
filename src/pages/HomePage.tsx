import { CarouselContainer, CarouselWithPlay } from '@/components/home/carousels';

import {
  ResizableSection,
  ScrollGallerySection,
  ServiceCardsDrawner,
  ServicesSection,
  TitlePage,
  VideoScrollSection,
} from '@/components/home/sections';
import { MaterialSelectorSection } from '@/components/home/sections/material-selector/MaterialSelectorSection';

export const HomePage = () => {
  return (
    <div className="w-full">
      <TitlePage />
      <div className="grid gap-8 xl:gap-[5vw]">
        <CarouselWithPlay />
        <ServicesSection />

        <VideoScrollSection />

        <CarouselContainer
          sliders={4}
          title=" Insipre by our amazingcountertops and see our materials"
        />

        <ResizableSection />
        <ServiceCardsDrawner />

        <ScrollGallerySection />
        <MaterialSelectorSection />
      </div>
    </div>
  );
};
