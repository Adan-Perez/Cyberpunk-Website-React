import { motion } from 'framer-motion';
import { variant1 } from '../../utils/motion';
import Button from './Button';

const GameCard = ({ delay, img, bg_img, card_title, card_tags, card_text }) => {
  return (
    <motion.div
      className='relative text-center rounded-2xl w-full grow basis shrink-0 bg-gray-900/50 p-5 lg:w-1/3 xl:w-1/4 md:w-1/2'
      variants={variant1(delay)}
      initial='hidden'
      whileInView='show'>
      <img
        src={bg_img}
        className='shadow-lg shadow-gray-900/75 rounded-2xl w-full h-60 object-cover object-center'
        alt={card_title}
      />

      <div className='absolute top-12 mx-auto left-0 right-0'>
        <img
          src={img}
          alt={card_title}
          className='mx-auto w-[150px] h-[150px] object-cover object-center rounded-md shadow-lg shadow-gray-900/75 border-4 border-gray-900/75 hover:scale-110 transform rotate-2 hover:rotate-0
           transition-all duration-300 ease-in-out'
        />
        <p
          className='text-white text-lg font-medium mt-4 mb-2 tracking-wider uppercase'>
          {card_title}
        </p>
      </div>

      <div className='p-2'>
        <p className='text-teal-200 text-lg'>{card_tags}</p>
        <p
          className='text-zinc-200 text-sm font-medium mt-5 mb-4'
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}>
          {card_text}
        </p>
      </div>

      <div className='mx-auto text-center'>
        <Button text='Leer más' color={'yellow'} />
      </div>
    </motion.div>
  );
};

export default GameCard;
