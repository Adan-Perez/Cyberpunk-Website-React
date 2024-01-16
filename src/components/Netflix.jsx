import { motion } from 'framer-motion';
import { variant1 } from '../utils/motion';
import { netflixData } from '../utils/data';
import { useState, useEffect } from 'react';
import Modal from './ui/Modal';

const images = [netflixData.icon, netflixData.img];

const Netflix = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const dynamicImage = images[currentImageIndex];

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      variants={variant1}
      initial='hidden'
      whileInView='show'
      className='min-h-screen mt-28 bg-gradient-to-t from-gray-900 to-transparent'>
      <div className='p-5 flex justify-center md:justify-end lg:justify-start max-w-[1440px] w-full mx-auto'>
        <div className='text-center md:text-left md:max-w-md w-full py-8'>
          <motion.img
            className='mx-auto md:mx-0 w-1/4 md:w-1/5 lg:w-1/6 mb-5 md:mb-0 md:mr-5 md:float-left rounded-full border-4 border-teal-200 bg-slate-900/50 md:bg-slate-700/50 p-1 md:p-2 md:shadow-lg md:ring-4 md:ring-teal-200 md:ring-opacity-50 md:ring-offset-2 md:ring-offset-slate-900/50 md:ring-offset-opacity-50 md:ring-offset-blur-2 md:ring-offset-spread-2 md:ring-inset-true md:ring-offset-inset-true md:ring-offset-blur-2 md:ring-offset-spread-2'
            variants={variant1(0.5)}
            initial='hidden'
            whileInView='show'
            src={dynamicImage}
            alt='Netflix'
            transition={{ type: 'crossfade', duration: 0.5 }}
          />
          <motion.h1
            className='text-teal-200 font-medium text-4xl mt-7'
            variants={variant1(0.6)}
            initial='hidden'
            whileInView='show'>
            {netflixData.title}
          </motion.h1>
          <motion.p
            className='text-lg my-5 text-white opacity-40'
            variants={variant1(0.7)}
            initial='hidden'
            whileInView='show'>
            {netflixData.text}
          </motion.p>

          <motion.div
            variants={variant1(0.7)}
            initial='hidden'
            whileInView='show'
            className='bg-slate-900/50 md:bg-slate-700/50 border-2 border-slate-700 p-8 rounded-xl cursor-pointer'
            onClick={handleVideoClick}>
            <video
              className='rounded-lg w-full h-full'
              playsInline
              autoPlay
              loop
              muted
              preload='true'
              src={netflixData.video}></video>
          </motion.div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <video
          className='rounded-lg w-full h-full'
          playsInline
          autoPlay
          loop
          muted
          preload='true'
          src={netflixData.video}></video>
      </Modal>
    </motion.div>
  );
};

export default Netflix;
