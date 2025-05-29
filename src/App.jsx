import { useState } from 'react'
import HeroImage from './assets/HeroImage1.jpg';
import StephanieImage from './assets/stephanie.jpg'; // optional image for story
import './App.css'

function App() {
  return (
    <div>
	<link rel="icon" type="image/png" href="/vite.svg" />
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">Dream and a Whisk</div>
          <nav role="navigation" aria-label="Main navigation">
            <ul className="nav-links">
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#news">Menu</a></li>
              <li><a href="#contact">Order</a></li>
              <li><a href="#about">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hero-section">
        <img src={HeroImage} alt="Bakery entrance" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">PRESENTATION IS EVERYTHING</h1>
          <p className="hero-subtitle">Welcome to Dream and a Whisk</p>
        </div>
      </div>

      <div className="story-section">
        <div className="story-grid">
          <img src={StephanieImage} alt="Stephanie baking" className="story-image" />
          <div className="story-text-block">
            <h1 className="story-heading">Our Story</h1>
            <p className="story-tagline">From our home oven to your heart.</p>
            <p className="story-text">
              After more than a decade of creating show-stopping cakes from home, beloved local baker Stephanie Mendola opened the doors to her long-awaited storefront. <strong>Dream and a Whisk</strong>, a boutique bakery specializing in custom cakes, elegant treats, and gourmet desserts.
            </p>
            {/* <button className="cta-button">Meet the Team</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

