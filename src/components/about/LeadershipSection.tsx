import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'motion/react';

const leaders = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in the industry',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60', // Mujer ejecutiva real
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Technology innovator and product strategist',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60', // Hombre asiático profesional
  },
  {
    name: 'Elena Rodriguez',
    role: 'CFO',
    bio: 'Financial expert driving sustainable growth',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=60', // Mujer latina profesional
  },
];
export const LeadershipSection = () => {
  return (
    <section className="mt-[2rem] xl:mt-[5%]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="mb-12 text-center text-3xl font-bold xl:text-[2vw]">Meet Our Leadership</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 xl:py-[8vh]">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="mb-4 size-24 xl:size-[7vw]">
                    <AvatarImage src={leader.image} className="object-cover" />
                    <AvatarFallback className="xl:text-[1.5vw]">
                      {leader.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold xl:text-[2vw]">{leader.name}</h3>
                  <p className="text-primary mb-2 xl:text-[1.2vw]">{leader.role}</p>
                  <p className="text-gray-600 xl:text-[1vw] dark:text-gray-300">{leader.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
