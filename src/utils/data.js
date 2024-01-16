import netflix_icon from '../assets/icons/netflix_icon.png';
import edgerunners_img from '../assets/images/edgerunners_netflix.jpg';
import cyberpunk_video from '../assets/videos/cyberpunk_2077.mp4';
import edgerunners_video from '../assets/videos/edgerunners.mp4';
import experience_img from '../assets/images/experience.jpg';
import the_witcher_3 from '../assets/images/the-witcher-3.jpg';
import the_witcher_3_bg from '../assets/images/the-witcher-3-bg.jpg';
import cyberpunk_dlc from '../assets/images/cyberpunk-dlc.jpg';
import cyberpunk_dlc_bg from '../assets/images/cyberpunk-dlc-bg.jpg';
import gwent from '../assets/images/gwent.jpg';
import gwent_bg from '../assets/images/gwent-bg.jpg';

export const homeData = {
  title: 'Sé un Cyberpunk',
  text: `Sumérgete en el universo de Cyberpunk: desde la historia original de Cyberpunk 2077 y su fascinante expansión de suspense y espionaje, Phantom Liberty, al premiado anime Cyberpunk: Edgerunners. Hay infinidad de historias por descubrir en la letal megalópolis de Night City.`,
};

export const gameplayData = {
  title: 'The Gameplay',
  card_title: 'Cyberpunk 2077',
  card_text: `Juega como V, un mercenario en busca de un implante único que permite alcanzar la inmortalidad. Personaliza las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para definir tu propio camino por las peligrosas calles de Night City. Juega como un forajido o hazte un nombre entre la élite de la ciudad, en este mundo donde tus decisiones dan forma a la historia y al mundo que te rodea.`,
  video: cyberpunk_video,
};
export const netflixData = {
  icon: netflix_icon,
  title: 'Ahora en Netflix',
  text: `Cyberpunk: Edgerunners es una historia de acción y aventuras ambientada en Night City, una megalópolis obsesionada con el poder, el glamour y la modificación corporal. Protagonizada por un grupo de mercenarios callejeros que buscan cambiar el futuro, y cuyas vidas se entrelazan con el de los personajes de Cyberpunk 2077.`,
  img: edgerunners_img,
  video: edgerunners_video,
};

export const gamesData = {
  title: 'Más juegos de CD PROJEKT RED',
  cards: [
    {
      img: the_witcher_3,
      bg_img: the_witcher_3_bg,
      card_title: 'The Witcher 3: Wild Hunt',
      card_tags: 'Adventure, RPG',
      card_text:
        'Sigue la historia de Geralt de Rivia, un cazador de monstruos profesional, en su búsqueda.',
      delay: 0.4,
    },
    {
      img: cyberpunk_dlc,
      bg_img: cyberpunk_dlc_bg,
      card_title: 'Phantom Liberty',
      card_tags: 'RPG, Action, Cyberpunk',
      card_text:
        'DLC de Cyberpunk 2077. En esta expansión, V se verá envuelto en una red de intrigas y tendrá que enfrentarse a un nuevo y misterioso enemigo.',
      delay: 0.8,
    },
    {
      img: gwent,
      bg_img: gwent_bg,
      card_title: 'Gwent - The Witcher Card Game',
      card_tags: 'Strategy, Card Game',
      card_text:
        'Gwent es un juego de cartas de elecciones y consecuencias, ambientado en el universo de The Witcher.',
      delay: 1.2,
    },
  ],
};
export const aboutData = {
  title: '¿Qué es Cyberpunk?',
  text: `Cyberpunk es un subgénero de la ciencia ficción, conocido por su enfoque en "la alta tecnología y la baja vida". Su nombre deriva de la combinación de cibernética y punk. El cyberpunk se centra en la sociedad distópica futurista, en la que la tecnología avanzada se combina con un grado de desigualdad social. El cyberpunk se asocia a menudo con el género de la ciencia ficción postcyberpunk, que se caracteriza por una visión más optimista del impacto de la tecnología en la sociedad humana.`,
};

export const experienceData = {
  title: 'Una experiencia única',
  text: `¿Quieres saber más sobre el mundo de Cyberpunk? ¿O tal vez estás buscando un nuevo fondo de pantalla para tu escritorio? ¡Aquí encontrarás todo lo que necesitas!`,
  img: experience_img,
};

export const subscribeData = {
  title: '¿Estás listo para unirte?',
  text: `Suscríbete para recibir actualizaciones sobre nuevos juegos y ofertas especiales`,
};
export const footerData = {
  title: 'Cyberpunk',
  text: `Vuélcate en el universo de Cyberpunk: desde la historia original de Cyberpunk 2077 y su fascinante expansión de suspense y espionaje, Phantom Liberty, al premiado anime Cyberpunk: Edgerunners. Hay infinidad de historias por descubrir en la letal megalópolis de Night City.`,
  contact: {
    subtitle: 'Contacto',
    others: [
      'Wall Street 123',
      'New York, NY 12345',
      'cyberpunk@contact.com',
      'Tel: 123-456-7890',
    ],
  },
  quickMenu: {
    subtitle: 'Menu rápido',
    others: ['Home', 'Gameplay', 'Netflix', 'More Games'],
  },
  socials: {
    subtitle: 'Socials',
    others: ['Facebook', 'Instagram', 'Twitter', 'Youtube'],
  },
};

export const navbarData = {
  logo: 'Cyberpunk',
  links: [
    {
      url: '#home',
      text: 'Home',
    },
    {
      url: '#gameplay',
      text: 'Gameplay',
    },
    {
      url: '#netflix',
      text: 'Netflix',
    },
    {
      url: '#games',
      text: 'More Games',
    },
  ],
};
