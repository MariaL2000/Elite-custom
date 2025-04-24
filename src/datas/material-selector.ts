export type Material = {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
  description: string;
};

export const materials: Material[] = [
  {
    id: 'quartz',
    name: 'Quartz',
    thumbnail:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    image:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Engineered stone that combines natural quartz with resin. Extremely durable, non-porous, and available in a wide range of colors and patterns.',
  },
  {
    id: 'granite',
    name: 'Granite',
    thumbnail:
      'https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    image:
      'https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      'Natural stone with unique patterns. Highly durable, heat-resistant, and each slab is one-of-a-kind with distinctive veining and coloration.',
  },
  {
    id: 'marble',
    name: 'Marble',
    thumbnail:
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    image:
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      "Elegant natural stone with distinctive veining. Adds luxury to any space but requires more maintenance as it's more porous and can stain more easily than other options.",
  },
  {
    id: 'porcelain',
    name: 'Porcelain',
    thumbnail:
      'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    image:
      'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description:
      "Modern, durable material that's resistant to scratches, heat, and stains. Available in various finishes including ones that mimic natural stone.",
  },
];
