import Navbar from './components/ui/Navbar';
import Home from './components/Home';
import Gameplay from './components/Gameplay';
import Netflix from './components/Netflix';
import Games from './components/Games';
import About from './components/About';
import Experience from './components/Experience';
import Subscribe from './components/Subscribe';
import Footer from './components/ui/Footer';

const App = () => {
  return (
    <>
      <div className='bg-gray-950 scroll-smooth snap-y'>
        <div className='animate-slide relative bg-[url(./assets/images/cyberpunk_background.jpg)] bg-cover bg-fixed bg-center md:bg-center min-h-screen w-full m-0'>
          <Navbar />
          <Home />
          <Gameplay />
          <Netflix />
        </div>

        <div className='animate-slide bg-[url(./assets/images/cyberpunk_2077-hd_wallpapers.jpg)] bg-cover h-full'>
          <div className='max-w-[1440px] w-full mx-auto p-5'>
            <Games />
            <About />
          </div>
          <div className='-mt-48 h-96 w-full bg-gradient-to-b from-transparent to-gray-900'></div>
        </div>
        <div className='relative max-w-[1440px] w-full mx-auto p-5'>
          <Experience />
          <div className='absolute md:static inset-0 w-full h-screen flex items-start justify-start'>
            <div className='h-[300px] w-1/2 -ml-[30%] gradient-01'></div>
          </div>
        </div>

        <div className='relative max-w-[1440px] w-full mx-auto p-5'>
          <Subscribe />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
