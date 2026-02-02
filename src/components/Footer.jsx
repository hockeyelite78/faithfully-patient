import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Faithfully Patient</h3>
          <p className="footer-tagline">Move in silence. Let success make the noise.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="/shop">All Products</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <a href="mailto:contact@faithfullypatient.com">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Faithfully Patient. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}