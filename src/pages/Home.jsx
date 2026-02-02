import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import modelImg from '../assets/models/male_thighsup_front.JPG';
import blackBack from '../assets/products/black_shirt_back.png';
import whiteBack from '../assets/products/white_shirt_back.png';
import closingLeft from '../assets/models/male_thighsupshot_lookingdown.JPG';
import closingRight from '../assets/models/male_and_female_models.jpg';
import './Home.css';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`home ${loaded ? 'home--loaded' : ''}`}>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <img src={modelImg} alt="Faithfully Patient model" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-label">Est. 2025</div>
          <h1 className="hero-title">
            <span>Faithfully</span>
            <span>Patient</span>
          </h1>
          <p className="hero-subtitle">Move in silence. Let success make the noise.</p>
          <Link to="/shop" className="hero-cta">
            Shop the Drop
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="statement">
        <div className="statement-inner">
          <div className="statement-tag">The Vision</div>
          <h2 className="statement-text">
            Time waits for no one&mdash;but those who stay faithful and patient{' '}
            <em>always</em> eat.
          </h2>
          <p className="statement-body">
            Faithfully Patient is more than a brand. It&rsquo;s a mindset. Born from the
            belief that real ones don&rsquo;t chase clout&mdash;they build in silence and
            let the results speak. Every piece is a reminder: your time is coming. Stay
            down until you come up.
          </p>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="featured">
        <div className="featured-inner">
          <div className="featured-header">
            <div className="featured-tag">Vol. 01</div>
            <h2 className="featured-title">The First Drop</h2>
          </div>

          <div className="featured-grid">
            <Link to="/product/fp-tee-black" className="featured-item">
              <div className="featured-img">
                <img src={blackBack} alt="Black tee back graphic" />
              </div>
              <div className="featured-item-info">
                <span className="featured-item-name">FP Tee — Black</span>
                <span className="featured-item-price">$50</span>
              </div>
            </Link>

            <Link to="/product/fp-tee-white" className="featured-item">
              <div className="featured-img featured-img--light">
                <img src={whiteBack} alt="White tee back graphic" />
              </div>
              <div className="featured-item-info">
                <span className="featured-item-name">FP Tee — White</span>
                <span className="featured-item-price">$50</span>
              </div>
            </Link>
          </div>

          <div className="featured-cta-wrap">
            <Link to="/shop" className="featured-cta">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="closing">
        <div className="closing-img closing-img--left">
          <img src={closingLeft} alt="Model wearing Faithfully Patient" />
        </div>
        <div className="closing-inner">
          <h2 className="closing-text">Your time is coming.</h2>
          <Link to="/shop" className="closing-cta">
            Shop Now
          </Link>
        </div>
        <div className="closing-img closing-img--right">
          <img src={closingRight} alt="Models wearing Faithfully Patient" />
        </div>
      </section>
    </div>
  );
}