import { motion } from 'framer-motion';
import { variant1 } from '../utils/motion';
import { homeData } from '../utils/data';
import Button from './ui/Button';

const Home = () => {
  return (
    <motion.div
      variants={variant1}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: false,
        amount: 0.25,
      }}>
      <div className='p-5 text-center md:text-left flex justify-center md:justify-end items-center min-h-screen h-full max-w-[1440px] w-full mx-auto'>
        <div className='max-w-xl md:max-w-md w-full mx-auto sm:mx-0 grid gap-10'>
          <h1 className='text-teal-200 text-7xl leading-[60px] h1_title'>
            {homeData.title}
          </h1>
          <motion.div className='bg-slate-900/50 md:bg-slate-700/50 border-2 border-slate-700 p-8 rounded-xl'>
            <p className='text-stone-200 text-opacity-60 font-medium tracking-wide'>
              {homeData.text}
            </p>
          </motion.div>

          <Button text='¡Cómpralo ya!' color={'yellow'} />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
