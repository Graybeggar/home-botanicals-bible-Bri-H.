import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>
      <p>© 2025 Home Botanicals Bible</p>
    </footer>
  );
}

export default Footer;
