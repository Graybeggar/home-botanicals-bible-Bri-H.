import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlantCatalog from './components/plant-catalog-page/PlantCatalogPage';
import MyGardenPage from './components/my-garden-page/MyGardenPage';
import NavBar from './components/layout/NavBar';
import Resources from './components/layout/Resources';
import Contact from "./components/layout/Contact";
import Privacy from "./components/layout/Privacy";
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant-catalog" element={<PlantCatalog />} />
        <Route path="/my-garden" element={<MyGardenPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />  
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;