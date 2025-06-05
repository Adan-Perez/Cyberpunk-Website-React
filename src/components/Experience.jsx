import { motion } from 'framer-motion';
import { variant1, variant2 } from '../utils/motion';
import { experienceData } from '../utils/data';

const Experience = () => {
  return (
    <div className='z-10 md:sticky top-10 my-10 flex gap-10 gap-y-20 items-center justify-evenly md:justify-between flex-wrap-reverse md:flex-nowrap'>
      <motion.div
        variants={variant1(0.5)}
        initial='hidden'
        whileInView='show'
        className='md:flex-1 relative overflow-hidden'>
        <img
          className='animate-pulse max-w-3xl w-full rounded-md border-2 border-teal-200 shadow-lg'
          src={experienceData.img}
          alt={experienceData.title}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-teal-200 to-transparent mix-blend-multiply'></div>
      </motion.div>
      <motion.div
        variants={variant2(0.7)}
        initial='hidden'
        whileInView='show'
        className='flex-1 max-w-xl md:max-w-md w-full mx-auto md:mx-0 md:mt-36 text-center md:text-left px-4'>
        <div className='p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-md shadow-lg'>
          <h1 className='text-teal-200 text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-4 tracking-wide leading-tight h1_title break-words'>
            {experienceData.title}
          </h1>
          <p className='text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-6'>
            {experienceData.text}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
