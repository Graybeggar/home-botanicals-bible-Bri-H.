// Import Link for client-side navigation with React Router
import { Link } from "react-router-dom";

// Functional component to render the site footer
function Footer() {
  return (
    <footer>
      {/* Navigation section with inline styling for layout */}
      <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {/* Internal navigation links */}
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>

      {/* Copyright notice */}
      <p>© 2025 Home Botanicals Bible</p>
    </footer>
  );
}

// Export the component for reuse
export default Footer;
