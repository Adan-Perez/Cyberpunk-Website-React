import { motion } from 'framer-motion';
import { variant2 } from '../utils/motion';
import { gameplayData } from '../utils/data';
import Button from './ui/Button';

const Gameplay = () => {
  return (
    <div className='min-h-screen p-5 lg:sticky top-28 flex justify-center md:justify-end max-w-[1440px] w-full mx-auto'>
      <div className='md:max-w-md w-full'>
        <motion.h1
          variants={variant2(0.5)}
          initial='hidden'
          whileInView='show'
          className='text-teal-200 font-medium text-4xl my-5'>
          {gameplayData.title}
        </motion.h1>
        <motion.div
          variants={variant2(0.7)}
          initial='hidden'
          whileInView='show'
          className='bg-slate-900/50 md:bg-slate-700/50 border-2 border-slate-700 p-8 rounded-xl'>
          <video
            className='rounded-lg'
            playsInline
            autoPlay
            loop
            muted
            preload='true'
            src={gameplayData.video}></video>
          <h1 className='text-4xl text-white font-semibold mt-6'>
            {gameplayData.card_title}
          </h1>
          <p className='text-lg my-5 text-white opacity-40'>
            {gameplayData.card_text}
          </p>
          <Button text='¡Ya disponible!' color={'cyan'} />
        </motion.div>
      </div>
    </div>
  );
};

export default Gameplay;
