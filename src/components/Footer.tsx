import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { URLS } from '@/config';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative overflow-hidden bg-(--safari)/90 px-4 py-12 backdrop-blur-sm md:px-6 md:py-16 xl:py-[4vw] dark:bg-(--mocha-mousse)">
      {/* Fondo decorativo */}
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-r from-indigo-500/20 to-teal-500/20 blur-2xl xl:-top-[5vw] xl:-right-[5vw] xl:h-[10vw] xl:w-[10vw] xl:blur-[2vw] dark:from-indigo-500/20 dark:to-teal-500/20"></div>
      <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500/10 to-teal-500/10 blur-lg xl:-bottom-[3vw] xl:-left-[3vw] xl:h-[8vw] xl:w-[8vw] xl:blur-[1.5vw] dark:from-indigo-500/10 dark:to-teal-500/10"></div>

      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:max-w-[90vw] xl:gap-[3vw]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <div className="flex items-center gap-2 xl:gap-[0.5vw]">
            <img
              src="elite2.webp"
              alt="Elite Custom Countertops Logo"
              className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-32 xl:h-[6vw] 2xl:h-36"
            />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-white xl:text-[1.5vw]">Quick Links</h3>
          <ul className="flex flex-col gap-3 xl:gap-[1vw]">
            {URLS.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 rounded-md px-2 py-1 text-gray-300 transition-all duration-300 hover:bg-(--cannoli-cream) hover:text-(--chocolate-martini) xl:gap-[0.5vw] xl:text-[1.1vw]"
                >
                  <ChevronRight className="h-4 w-4 text-(--chocolate-martini) opacity-0 transition-all group-hover:opacity-100 xl:h-[1vw] xl:w-[1vw]" />
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-white xl:text-[1.5vw]">Our Services</h3>
          <ul className="flex flex-col gap-3 xl:gap-[0.7vw]">
            {[
              'Quartz Countertops',
              'Granite Installation',
              'Marble Finishes',
              'Custom Edging',
              'Professional Measurement',
            ].map((service, index) => (
              <motion.li key={index} variants={itemVariants}>
                <div className="flex items-center gap-2 text-gray-300 xl:gap-[0.5vw] xl:text-[1.2vw]">
                  <div className="h-1 w-1 rounded-full bg-(--baltic-amber) xl:h-[0.3vw] xl:w-[0.3vw]"></div>
                  <span>{service}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-white xl:text-[1.5vw]">Contact Us</h3>
          <div className="flex flex-col gap-3 xl:gap-[0.7vw]">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-3 rounded-md px-2 py-1 text-gray-300 transition-colors duration-300 hover:bg-(--cannoli-cream) hover:text-(--chocolate-martini) xl:gap-[0.7vw] xl:text-[1.1vw]"
              whileHover={{ x: 5 }}
            >
              <Phone className="text-white-600 h-5 w-5 xl:h-[1.2vw] xl:w-[1.2vw]" />
              <span>+1 (234) 567-890</span>
            </motion.a>
            <motion.a
              href="mailto:contact@countertoppro.com"
              className="flex items-center gap-3 rounded-md px-2 py-1 text-gray-300 transition-colors duration-300 hover:bg-(--cannoli-cream) hover:text-(--chocolate-martini) xl:gap-[0.7vw] xl:text-[1.1vw]"
              whileHover={{ x: 5 }}
            >
              <Mail className="text-white-600 h-5 w-5 xl:h-[1.2vw] xl:w-[1.2vw]" />
              <span>contact@countertoppro.com</span>
            </motion.a>
          </div>

          <div className="pt-4 xl:pt-[1vw]">
            <h4 className="mb-3 text-sm font-medium text-white xl:mb-[0.7vw] xl:text-[1vw]">
              Follow Us
            </h4>
            <div className="flex gap-3 xl:gap-[0.8vw]">
              {[
                { icon: <Facebook />, href: '#' },
                { icon: <Instagram />, href: '#' },
                { icon: <Twitter />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/50 shadow-sm transition-all duration-300 hover:bg-(--cannoli-cream) xl:h-[2.5vw] xl:w-[2.5vw]"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(social.icon, {
                    className:
                      'h-5 w-5 text-black-300 group-hover:text-white-600 xl:h-[1.4vw] xl:w-[1.4vw]',
                  })}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="mx-auto mt-12 max-w-7xl xl:mt-[4vw] xl:max-w-[90vw]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row xl:mt-[1.5vw] xl:gap-[1vw]">
          <p className="text-sm text-white xl:text-[0.9vw]">
            &copy; {new Date().getFullYear()} CountertopPro. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
