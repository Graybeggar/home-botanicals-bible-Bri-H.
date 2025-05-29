import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PlantCatalog from './components/plant-catalog-page/PlantCatalogPage';
import MyGardenPage from './components/my-garden-page/MyGardenPage';
import NavBar from './components/layout/NavBar';
import Resources from './components/layout/Resources';
import Contact from "./components/layout/Contact";
import Privacy from "./components/layout/Privacy";
import Footer from './components/layout/Footer';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';

function App() {
  useEffect(() => {
    function createFallingLeaf(e) {
      const leaf = document.createElement('div');
      leaf.className = 'falling-leaf';
      leaf.textContent = '🍃';

      // Position leaf at mouse click (using fixed to align with CSS)
      leaf.style.left = `${e.clientX}px`;
      leaf.style.top = `${e.clientY}px`;

      document.body.appendChild(leaf);

      // Remove leaf after animation (2s)
      setTimeout(() => {
        leaf.remove();
      }, 2000);
    }

    // Add global click listener
    document.addEventListener('click', createFallingLeaf);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', createFallingLeaf);
    };
  }, []);

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