import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const CompanyProcess = () => {
  const steps = [
    {
      title: 'Initial Consultation',
      description: 'We analyze your needs in a free meeting to understand your objectives',
      icon: <CheckCircle className="text-primary xl:size-[2vw]" />,
    },
    {
      title: 'Custom Development',
      description: 'We create tailored solutions specifically adapted to your business',
      icon: <CheckCircle className="text-primary xl:size-[2vw]" />,
    },
    {
      title: 'Implementation and Support',
      description: 'We launch the project and provide ongoing support to ensure long-term success',
      icon: <CheckCircle className="text-primary xl:size-[2vw]" />,
    },
  ];

  return (
    <section className="w-full">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-3xl xl:text-[2vw]">Our 3-Step Process</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-lg xl:max-w-[25vw] xl:text-[1.2vw]">
            Proven methodology that guarantees exceptional results for your project
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-rows-3 md:gap-8 xl:gap-[3vw]">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
              }}
              transition={{
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              className="relative rounded-xl bg-white p-6 xl:p-[1.5vw]"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, box-shadow',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0"
                whileHover={{
                  opacity: 0.1,
                  boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="bg-primary/10 flex size-12 items-center justify-center rounded-full xl:size-[3vw]"
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-xl font-semibold xl:text-[1.5vw]">Step {index + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold xl:text-[1.3vw]">{step.title}</h3>
                <p className="text-muted-foreground xl:text-[1vw]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
