import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          Faithfully Patient
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={isActive('/') ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={isActive('/shop') ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}