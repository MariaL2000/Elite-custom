import { CarouselContainer, CarouselWithPlay } from '@/components/home/carousels';

import { imagesDataCarousel } from '@/datas/carousel';

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
import { VideoIntroGate } from '@/components/home/VideoIntroGate';

export const HomePage = () => {
  return (
    <div className="w-full">
      <VideoIntroGate />
      <TitlePage />
      <div>
        <CarouselWithPlay />
        <ServicesSection />

        <VideoScrollSection />

        <CarouselContainer
          data={imagesDataCarousel}
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
