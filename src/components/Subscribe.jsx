import { subscribeData } from '../utils/data';

const Subscribe = () => {
  return (
    <div className='text-center mx-auto my-20'>
      <h1 className='text-teal-200 font-medium text-3xl mb-2'>
        {subscribeData.title}
      </h1>
      <p className='text-zinc-400 mb-2'>{subscribeData.text}</p>
      <input
        type='text'
        placeholder='your email address'
        className='my-4 w-full max-w-3xl text-center placeholder:capitalize py-4 px-10 rounded-full bg-transparent border-2 border-zinc-400 hover:bg-teal-200/30 duration-200 outline-teal-500 text-white'
      />
      <br />
      <div className='button w-fit mx-auto my-4 text-white hover:text-black duration-200'>
        <span className='button_lg'>
          <span className='button_sl'></span>
          <span className='button_text'>¡Vamos a ello!</span>
        </span>
      </div>
    </div>
  );
};

export default Subscribe;
