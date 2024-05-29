import './styles/home.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import homeImg from './assets/home-image.png';

const Home = () => {
  const [changingText] = useTypewriter({
    words: [
      'Frontend Developer',
      'Full Stack Developer',
      'MERN Stack Developer',
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <section className="home-section">
      <div className="home-text">
        <p>
          Hi There! <span id="wave"> 👋🏻</span>
        </p>
        <p>
          I'm <span id="home-name">Ahmed Khan</span>
        </p>
        <p id="home-moving-text">
          <span>{changingText}</span> <Cursor />
        </p>
      </div>
      <img src={homeImg} className="home-image" />
    </section>
  );
};

export default Home;
