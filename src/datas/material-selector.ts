export type Material = {
  id: string;
  name: string;
  description: string;
  image?: string;
  thumbnail?: string;
};

export const materialsInfo: Material[] = [
  {
    id: 'quartz',
    name: 'Quartz',

    description:
      'Engineered stone that combines natural quartz with resin. Extremely durable, non-porous, and available in a wide range of colors and patterns.',
  },
  {
    id: 'granite',
    name: 'Granite',

    description:
      'Natural stone with unique patterns. Highly durable, heat-resistant, and each slab is one-of-a-kind with distinctive veining and coloration.',
  },
  {
    id: 'marble',
    name: 'Marble',

    description:
      "Elegant natural stone with distinctive veining. Adds luxury to any space but requires more maintenance as it's more porous and can stain more easily than other options.",
  },
  {
    id: 'quartzite',
    name: 'Quartzite',

    description:
      "Modern, durable material that's resistant to scratches, heat, and stains. Available in various finishes including ones that mimic natural stone.",
  },
];
