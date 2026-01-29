import "./Footer.css";
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  
  // Hide footer on login and register pages
  const hideFooterRoutes = ['/login', '/register'];
  
  if (hideFooterRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row footer-top">
          
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-brand">OceanView Hotel</h5>
            <p className="footer-text">
              OceanView Hotel is a premium luxury destination offering elegant
              rooms, world-class hospitality, and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/rooms">Rooms</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Our Services</h6>
            <ul className="footer-links">
              <li>Luxury Rooms</li>
              <li>Spa & Wellness</li>
              <li>Fine Dining</li>
              <li>Conference Hall</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Contact Us</h6>
            <p className="footer-contact">📍 Kolhapur, India</p>
            <p className="footer-contact">📞 +91 98765 43210</p>
            <p className="footer-contact">✉️ support@oceanviewhotel.com</p>

            <div className="social-icons">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} OceanView Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
