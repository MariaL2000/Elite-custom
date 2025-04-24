export interface VideoSlide {
  id: string;
  title: string;
  buttonText: string;
  videoSrc: string;
  posterSrc: string;
}

export const slides: VideoSlide[] = [
  {
    id: 'craftsmanship',
    title: 'Craftsmanship in Detail',
    buttonText: 'Watch the Process',
    videoSrc: '/videos/elite.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1597962261938-8714a29fa42c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'design',
    title: 'Design Excellence',
    buttonText: 'See Our Vision',
    videoSrc: '/videos/elite.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1597962261938-8714a29fa42c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'installation',
    title: 'Perfect Installation',
    buttonText: 'Watch Installation',
    videoSrc: '/videos/elite.mp4',
    posterSrc:
      'https://images.unsplash.com/photo-1597962261938-8714a29fa42c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
