import './styles/home.scss';
import homeImg from './assets/home-image.png';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-text">
        <p>
          Hi There! <span id="wave">👋🏻</span>
        </p>
        <p>
          I'm <span id="home-name">Ahmed Khan</span>
        </p>
        <p id="home-moving-text">Frontend Developer</p>
      </div>
      <img src={homeImg} className="home-image" />
    </section>
  );
};

export default Home;
