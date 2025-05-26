import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HamburgerMenu.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);


  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-header">
        <h1>Home Botanicals Bible</h1>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}> 
        <Link to="/">Home</Link>
        <Link to="/plant-catalog">Plant Catalog</Link>
        <Link to="/my-garden">My Garden</Link>
      </nav>
    </header>
  );
}

export default NavBar;