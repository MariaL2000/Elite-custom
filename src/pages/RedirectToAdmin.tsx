import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { URL_Admin } from '@/config';
import { useNavigate } from 'react-router-dom';

const RedirectToAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      window.open(URL_Admin, '_blank', 'nooperer,noreferrer');
      navigate(-1);
    }, 1500);
  }, []);

  return (
    <motion.div
      className="flex h-screen items-center justify-center bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-xl font-medium"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Redirigiendo al panel de administración...
      </motion.div>
    </motion.div>
  );
};

export default RedirectToAdmin;
