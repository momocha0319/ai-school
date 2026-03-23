'use client';

import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">
          <span className="logo-mark">AI</span>
          <span className="logo-text">Literacy School</span>
        </a>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>スクールについて</a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>カリキュラム</a>
          <a href="#contact" className="nav-cta btn btn-amber" onClick={() => setMenuOpen(false)}>
            資料を請求する
          </a>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
