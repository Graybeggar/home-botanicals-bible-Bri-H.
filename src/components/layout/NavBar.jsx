// Import React and necessary hooks
import React, { useState, useEffect } from 'react';
// Import navigation tools from React Router
import { Link, useLocation } from 'react-router-dom';
// Import corresponding CSS for styling
import "../../styles/HamburgerMenu.css";

// NavBar component for site-wide navigation
function NavBar() {
  // State to track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Access current route info to respond to navigation changes
  const location = useLocation();

  // Toggle the mobile menu open/closed
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      {/* Branding and hamburger button */}
      <div className="navbar-header">
        <h1>Home Botanicals Bible</h1>

        {/* Hamburger button for mobile menu toggle */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Navigation links; show/hide based on `menuOpen` state */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/plant-catalog">Plant Catalog</Link>
        <Link to="/my-garden">My Garden</Link>
      </nav>
    </header>
  );
}

// Export the component for use in the app
export default NavBar;