import { footerData } from '../../utils/data';
import githubIcon from '../../assets/icons/github_icon.png';

const Footer = () => {
  return (
    <div className='py-10'>
      <div className='w-full h-px bg-white'></div>
      <div className='py-10 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-10'>
        <div className='md:flex-1 w-full mx-auto text-center md:text-left'>
          <h1 className='text-2xl text-teal-200 font-semibold mb-2'>
            {footerData.title}
          </h1>
          <p className='text-zinc-400 text-sm'>{footerData.text}</p>
        </div>
        <div className='md:flex-1 w-full mx-auto text-center md:text-left'>
          <h1 className='text-2xl text-zinc-400 font-semibold mb-2'>
            {footerData.contact.subtitle}
          </h1>
          {footerData.contact.others.map((element, index) => (
            <p className='text-zinc-400 text-sm' key={index}>
              {element}
            </p>
          ))}
        </div>
        <div className='md:flex-1 w-full mx-auto text-center md:text-left'>
          <h1 className='text-2xl text-zinc-400 font-semibold mb-2'>
            {footerData.quickMenu.subtitle}
          </h1>
          {footerData.quickMenu.others.map((element, index) => (
            <p
              className='text-zinc-400 text-sm hover:text-teal-200 mb-1 cursor-pointer underline duration-200'
              key={index}>
              {element}
            </p>
          ))}
        </div>
        <div className='md:flex-1 w-full mx-auto text-center md:text-left'>
          <h1 className='text-2xl text-zinc-400 font-semibold mb-2'>
            {footerData.socials.subtitle}
          </h1>
          {footerData.socials.others.map((element, index) => (
            <p
              className='text-zinc-400 text-sm hover:text-teal-200 mb-1 cursor-pointer underline duration-200'
              key={index}>
              {element}
            </p>
          ))}
        </div>
      </div>

      <div className='text-sm text-center md:text-left text-zinc-400'>
        Developed with ❤️ by{' '}
        <a
          href='https://github.com/Adan-Perez'
          className='text-teal-200 hover:text-white duration-200 underline'>
          Adan Perez
        </a>
      </div>

      <div className='text-center mt-4'>
        <a
          href='https://github.com/Adan-Perez/CYBERPUNK-WEBSITE-REACT'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center'>
          <img
            src={githubIcon}
            alt='GitHub Repository'
            className='w-8 h-8 mr-2 rounded-full'
          />
          <span className='text-zinc-400'>GitHub Repository</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
