import { motion } from 'motion/react';
import { AspectRatioImage } from '../ui/AspectRatioImage';

interface Props {
  image?: string;
}

export const CompanyHero = ({ image }: Props) => {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        <div className="flex flex-col items-center gap-2 text-center xl:gap-[1vh]">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-[3vw]">
            Who we are as company
          </h1>
          <p className="text-lg leading-8 text-gray-600 xl:max-w-[40vw] xl:text-[1vw] xl:leading-[2.5vh]">
            Founded in 2010, we've been transforming industries with innovative solutions and a
            customer-first approach.
          </p>
        </div>

        {/* Contenedor con aspect ratio 16:9 */}
        <AspectRatioImage
          src={
            image ??
            'https://images.unsplash.com/photo-1602028644961-dd13cb5d0c72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="Company headquarters"
          className="size-full object-cover"
        />
      </motion.div>
    </section>
  );
};
