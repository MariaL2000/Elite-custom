import { motion } from 'motion/react';
import { AspectRatioImage } from '../ui/AspectRatioImage';

interface Props {
  image?: string;
}

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries to deliver cutting-edge solutions',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'Honest and transparent in all our dealings',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'Quality is at the core of everything we do',
    icon: '⭐',
  },
];

export const ValuesSection = ({ image }: Props) => {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <AspectRatioImage
          src={
            image ??
            'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="Company headquarters"
          className="size-full object-cover"
        />

        <div className="xl:pl-[4vw]">
          <h2 className="mb-8 text-3xl font-bold xl:text-[1vw]">Our Core Values</h2>
          <div className="space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4"
              >
                <span className="text-3xl xl:text-[1vw]">{value.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold xl:text-[2vw]">{value.title}</h3>
                  <p className="text-gray-600 xl:text-[1vw]">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
