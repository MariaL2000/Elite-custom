export interface Data {
  title?: string;
  description?: string;
  url: string;
  alt: string;
}

export const urlImages: Data[] = [
  {
    alt: 'kitchen',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    alt: 'kitchen2',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    alt: 'kitchen3',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    alt: 'kitchen4',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    alt: 'kitchen5',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    alt: 'kitchen6',
    url: 'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const imagesDataCarousel: Data[] = urlImages.map((el, index) => ({
  title: 'Quartz',
  description: '  Timeless Elegance, beautiful,modern',
  alt: el.alt + index,
  url: el.url,
}));

export interface CarouselSlide {
  imageUrl: string;
  title: string;
}
export const slides: CarouselSlide[] = [
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1680382578871-32ce66f9ae25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnN8ZW58MHx8MHx8fDA%3D',
    title: 'DESIGN WITH US',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1591924450983-b8f7587ea332?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'ELEVATE YOUR EXPERIENCE',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'YOUR DREAM, OUR VISION',
  },
];
