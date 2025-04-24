export const testimonials = [
  {
    id: 1,
    name: 'Marnie Lotter',
    role: 'Web Developer',
    content:
      'The craftsmanship exceeded my expectations. The attention to detail and quality materials made all the difference in my kitchen renovation.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Interior Designer',
    content:
      'Working with this team was seamless. They understood my vision and delivered precision-cut countertops that perfectly complemented the design.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content:
      'From consultation to installation, the service was impeccable. My quartz countertops have transformed the entire look of my home.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
  },
];

export type Testimonial = (typeof testimonials)[0];
