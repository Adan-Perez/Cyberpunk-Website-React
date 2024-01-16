import { gamesData } from '../utils/data';
import GameCard from './ui/GameCard';

const Games = () => {
  return (
    <div className='container mx-auto'>
      <div className='rotate-2'>
        <h1 className='py-9 text-center text-teal-200 text-4xl font-bold uppercase'>
          Más juegos de{' '}
          <span
            className='text-red-600 
            animate-pulse 
            text-5xl
            tracking-wider
            '>
            {' '}
            CD PROJEKT RED
          </span>
        </h1>
      </div>

      <div className='flex flex-wrap justify-center gap-10 md:justify-between'>
        {gamesData.cards.map(
          ({ delay, img, card_title, card_text, card_tags, bg_img }, key) => (
            <GameCard
              key={key}
              delay={delay}
              img={img}
              card_title={card_title}
              card_tags={card_tags}
              card_text={card_text}
              bg_img={bg_img}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Games;
