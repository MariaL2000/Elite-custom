import React from 'react';
import { motion } from 'motion/react';
import { Separator } from '@/components/ui/separator';
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
    <footer className="relative overflow-hidden bg-(--safari) px-4 py-12 backdrop-blur-sm md:px-6 md:py-16 xl:py-[4vw] dark:bg-(--mocha-mousse)">
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

            <span
              className="text-2xl font-bold xl:text-[2vw]"
              style={{ color: 'var(--cannoli-cream)' }}
            >
              Elite Custom Countertops
            </span>

          </div>

        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-gray-900 xl:text-[1.5vw] dark:text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 xl:gap-[`vw]">
            {URLS.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 text-gray-600 transition-colors hover:bg-(--cannoli-cream) xl:gap-[0.5vw] xl:text-[1.1vw] dark:text-gray-400 dark:hover:text-teal-300"
                >
                  <ChevronRight className="h-4 w-4 text-teal-600 opacity-0 transition-all group-hover:opacity-100 xl:h-[1vw] xl:w-[1vw] dark:text-teal-500" />
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-gray-900 xl:text-[1.5vw] dark:text-white">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3 xl:gap-[0.7vw]">
            {[
              'Quartz Countertops',
              'Granite Installation',
              'Marble Finishes',
              'Custom Edging',
              'Professional Measurement',
            ].map((service, index) => (
              <motion.li key={index} variants={itemVariants}>
                <div className="flex items-center gap-2 text-gray-600 xl:gap-[0.5vw] xl:text-[1.2vw] dark:text-gray-400">
                  <div className="h-1 w-1 rounded-full bg-teal-600 xl:h-[0.3vw] xl:w-[0.3vw] dark:bg-teal-500"></div>
                  <span>{service}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} className="space-y-4 xl:space-y-[1vw]">
          <h3 className="text-lg font-semibold text-gray-900 xl:text-[1.5vw] dark:text-white">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3 xl:gap-[0.7vw]">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:bg-(--cannoli-cream) xl:gap-[0.7vw] xl:text-[1.1vw] dark:text-gray-400 dark:hover:text-teal-300"
              whileHover={{ x: 5 }}
            >
              <Phone className="h-5 w-5 text-teal-600 xl:h-[1.2vw] xl:w-[1.2vw] dark:text-teal-400" />
              <span>+1 (234) 567-890</span>
            </motion.a>
            <motion.a
              href="mailto:contact@countertoppro.com"
              className="flex items-center gap-3 text-gray-600 transition-colors hover:bg-(--cannoli-cream) xl:gap-[0.7vw] xl:text-[1.1vw] dark:text-gray-400 dark:hover:text-teal-300"
              whileHover={{ x: 5 }}
            >
              <Mail className="h-5 w-5 text-teal-600 xl:h-[1.2vw] xl:w-[1.2vw] dark:text-teal-400" />
              <span>contact@countertoppro.com</span>
            </motion.a>
          </div>

          <div className="pt-4 xl:pt-[1vw]">
            <h4 className="mb-3 text-sm font-medium text-gray-900 xl:mb-[0.7vw] xl:text-[1vw] dark:text-white">
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
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white/50 transition-all hover:border-teal-600/30 hover:bg-teal-600/10 xl:h-[2.5vw] xl:w-[2.5vw] dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-teal-400/30 dark:hover:bg-teal-400/10"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(social.icon, {
                    className:
                      'h-5 w-5 text-gray-600 group-hover:text-teal-600 dark:text-gray-400 dark:group-hover:text-teal-300 xl:h-[1.4vw] xl:w-[1.4vw]',
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
        <Separator className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent xl:h-[0.1vw] dark:via-gray-800" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row xl:mt-[1.5vw] xl:gap-[1vw]">
          <p className="text-sm text-gray-500 xl:text-[0.9vw]">
            &copy; {new Date().getFullYear()} CountertopPro. All rights reserved.
          </p>
          <div className="flex gap-6 xl:gap-[1.5vw]">
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-teal-600 xl:text-[0.9vw] dark:hover:text-teal-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-teal-600 xl:text-[0.9vw] dark:hover:text-teal-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
