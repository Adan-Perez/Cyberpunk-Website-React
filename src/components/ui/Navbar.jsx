import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navbarVariants } from '../../utils/motion';
import { navbarData } from '../../utils/data';

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <motion.div
      variants={navbarVariants}
      initial={'hidden'}
      whileInView={'show'}
      className='fixed top-0 left-0 right-0 bg-transparent p-5 max-w-[1440px] w-full mx-auto flex justify-between z-50'>
      <h1 className='font-semibold text-2xl text-white my-3 cursor-pointer'>
        {navbarData.logo}
      </h1>
      <div className='flex gap-5 flex-col-reverse items-end md:flex-row relative'>
        <div
          className={`${
            click
              ? 'w-60 text-center sm:text-left py-32 sm:py-0 sm:w-fit px-5 opacity-100'
              : 'w-0 px-0 opacity-0'
          } overflow-hidden duration-200 sm:duration-1000 bg-white rounded-lg sm:h-14 flex flex-col sm:flex-row p-5 sm:items-center sm:justify-between gap-4 absolute sm:relative top-16 sm:top-auto right-0 sm:right-auto`}>
          {navbarData.links.map(({ url, text }) => (
            <a
              key={url}
              href={url}
              className='text-sm hover:text-teal-400 duration-500'>
              {text}
            </a>
          ))}
        </div>

        <div
          onClick={() => setClick(!click)}
          className={`${
            click ? ' bg-yellow-300' : ' bg-teal-200'
          } w-14 h-14 rounded-xl flex items-center justify-center hover:cursor-pointer duration-500 relative z-10`}>
          <i className={`fa-solid ${click ? 'fa-xmark' : 'fa-bars-staggered'}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
