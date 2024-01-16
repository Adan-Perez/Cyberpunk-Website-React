import { motion } from 'framer-motion';
import { variant2 } from '../utils/motion';
import Button from './ui/Button';
import { aboutData } from '../utils/data';

const About = () => {
  return (
    <motion.div
      variants={variant2}
      initial='hidden'
      whileInView='show'
      className='max-w-xl md:max-w-md w-full mx-auto md:mx-0 mt-36 text-center md:text-left'>
      <h1 className='text-teal-200 text-6xl font-medium leading-[60px] mb-4 md:mb-8 h1_title'>
        {aboutData.title}
      </h1>
      <div className='bg-slate-900/50 md:bg-slate-700/50 border-2 border-slate-700 rounded-xl p-2 my-4'>
        <p className='text-zinc-200 text-sm my-6'>{aboutData.text}</p>
        <Button text='Leer más' color={'cyan'}/>
      </div>
    </motion.div>
  );
};

export default About;
