// Import the Link component for navigation (though it's not used here currently)
import { Link } from 'react-router-dom';

// Import custom components used on the homepage
import FeaturedPlants from './components/homepage/FeaturedPlants';
import TipOfTheDay from './components/homepage/TipOfTheDay';
import MyGardenPreview from './components/homepage/MyGardenPreview';
import About from './components/homepage/About';

// The HomePage component renders the main landing page of the app
function HomePage() {
  return (
    <div>
      {/* Main content section of the homepage */}
      <main>
        {/* Displays a rotating or random tip for plant care */}
        <TipOfTheDay />

        {/* Shows a selection of featured plants */}
        <FeaturedPlants />

        {/* Gives a small preview of the user's garden */}
        <MyGardenPreview />

        {/* About section describing the app or its mission */}
        <About />
      </main>
    </div>
  );
}

// Export the component so it can be used in routes or other parts of the app
export default HomePage;