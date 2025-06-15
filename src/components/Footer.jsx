import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Subscribe Section */}
      <div className="footer-subscribe">
        <div className="subscribe-text">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
        </div>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Main Footer Sections */}
      <div className="footer-columns">
        <div className="footer-column">
          <h5>metta muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>CONTACT US</h5>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <br />
          <h5>CURRENCY</h5>
          <p>USD 🇺🇸</p>
          <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>

        <div className="footer-column">
          <h5>FOLLOW US</h5>
          <div className="social-icons">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      alt="Instagram"
      height="24"
    />
  </a>
  <a href="https://www.linkedin.com/in/sahil-mandhare-500a4b232/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      alt="LinkedIn"
      height="24"
    />
  </a>
</div>

          <br />
          <h5>metta muse ACCEPTS</h5>
          <div className="payment-icons">          
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>
        </div>
      </div>

      <p className="footer-bottom">Copyright © 2025 mettamuse. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
