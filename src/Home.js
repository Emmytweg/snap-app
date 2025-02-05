import Navbar from "./NavBar"
import styles from './Home.module.css'
import databiz from './client-databiz.svg'
import audio from './client-audiophile.svg'
import meet from './client-meet.svg'
import maker from './client-maker.svg'
import homePic from './image-hero-desktop.png'

const Home = () => (
    <div>
      <Navbar />
      <div className={styles.Home}>
        <div className={styles.firstHome}>
          <h1>Make Remote Work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className={styles.buttonLearn}>Learn More</button>
          <div className={styles.logos}>
            <img src={databiz} alt="Databiz" />
            <img src={audio} alt="Audiophile" />
            <img src={meet} alt="Meet" />
            <img src={maker} alt="Maker" />
          </div>
        </div>
        <div className={styles.secondHome}>
          <img src={homePic} alt="Hero" />
        </div>
      </div>
    </div>
  );
  
export default Home;