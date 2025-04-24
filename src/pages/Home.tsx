import { CarouselContainer, CarouselWithPlay } from '@/components/carousels';

import { imagesDataCarousel } from '@/datas/carousel';

import { galleryItems } from '@/datas/gallery';
import {
  ResizableSection,
  ScrollGallerySection,
  ServiceCards,
  ServicesSection,
  TitlePage,
  VideoScrollSection,
} from '@/components/sections';
import { MaterialSelectorSection } from '@/components/sections/MaterialSelectorSection';

export const Home = () => {
  return (
    <div className="w-full">
      <TitlePage />
      <div className="grid">
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
        {/* <TestimonialsSection /> */}
      </div>
    </div>
  );
};
