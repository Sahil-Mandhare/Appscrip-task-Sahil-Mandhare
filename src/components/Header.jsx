import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="left-section">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className="logo">LOGO</div>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </nav>

      <div className="nav-icons">
        <a className="icon"><img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="Search" /></a>
        <a className="icon"><img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Wishlist" /></a>
        <a className="icon"><img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="Cart" /></a>
        <a className="icon"><img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="User" /></a>
        <div className="language-dropdown">ENG ▼</div>
      </div>
    </header>
  );
}

export default Header;
