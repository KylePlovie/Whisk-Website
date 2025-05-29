import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import HeroImage from './assets/HeroImage1.jpg';
import StephanieImage from './assets/stephanie.jpg'; 
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="logo">Dream and a Whisk</div>
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#order">Order</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>
      {/* Fullscreen Mobile Nav */}
      {menuOpen && (
        <div className="full-nav">
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
            <li><a href="#order" onClick={() => setMenuOpen(false)}>Order</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <img src={HeroImage} alt="Bakery entrance" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">PRESENTATION IS EVERYTHING</h1>
          <p className="hero-subtitle">Welcome to Dream and a Whisk</p>
        </div>
      </div>
      {/* Story Section */}
      <div className="story-section">
        <div className="story-grid">
          <img src={StephanieImage} alt="Stephanie baking" className="story-image" />
          <div className="story-text-block">
            <h1 className="story-heading">Our Story</h1>
            <p className="story-tagline">From our home oven to your heart.</p>
            <p className="story-text">
              After more than a decade of creating show-stopping cakes from home, beloved local baker Stephanie Mendola opened the doors to her long-awaited storefront. <strong>Dream and a Whisk</strong>, a boutique bakery specializing in custom cakes, elegant treats, and gourmet desserts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

