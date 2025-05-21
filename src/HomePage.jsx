import React from 'react';
import NavBar from './components/layout/NavBar';
import SearchFilterBar from './components/homepage/SearchFilterBar';
import FeaturedPlants from './components/homepage/FeaturedPlants';
import TipOfTheDay from './components/homepage/TipOfTheDay';
import MyGardenPreview from './components/homepage/MyGardenPreview';
import CareTopics from './components/homepage/CareTopics';
import Footer from './components/layout/Footer';

function HomePage() {
  return (
    <div>
      <NavBar />
      <main>
        <SearchFilterBar />
        <FeaturedPlants />
        <TipOfTheDay />
        <MyGardenPreview />
        <CareTopics />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;