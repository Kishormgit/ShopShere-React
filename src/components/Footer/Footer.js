import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        

        <div className="footer-section">

          <h2 className="footer-logo">
            ShopSphere
          </h2>

          <p>
            Your trusted destination for quality
            products, secure payments and fast
            delivery.
          </p>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaTwitter />

            <FaLinkedinIn />

          </div>

        </div>

       

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>

        </div>


        <div className="footer-section">

          <h3>Customer Service</h3>

          <ul>

            <li>Help Center</li>

            <li>Track Order</li>

            <li>Returns</li>

            <li>FAQs</li>

          </ul>

        </div>

        

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📧 support@shopsphere.com</p>

          <p>📞 +91 889150639</p>

          <p>📍 Kannur, Kerala</p>

        </div>

      </div>

      {/* NEWSLETTER */}

      <div className="newsletter">

        <h3>
          Subscribe To Our Newsletter
        </h3>

        <p>
          Get updates about new arrivals and offers.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

       <div className="footer-bottom">

        <p>
          © 2026 ShopSphere. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;