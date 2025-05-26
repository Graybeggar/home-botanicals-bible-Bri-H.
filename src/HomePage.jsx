import { Link } from 'react-router-dom';
import FeaturedPlants from './components/homepage/FeaturedPlants';
import TipOfTheDay from './components/homepage/TipOfTheDay';
import MyGardenPreview from './components/homepage/MyGardenPreview';
import About from "./components/homepage/About";

function HomePage() {
  return (
    <div>
      <main>
        <TipOfTheDay />
        <FeaturedPlants />
        <MyGardenPreview />
        <About />
      </main>
    </div>
  );
}

export default HomePage;