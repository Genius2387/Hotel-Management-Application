import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light mt-auto">
      <div className="container py-5">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">OceanView Hotel</h5>
            <p className="text-muted small">
              LuxeStay is a premium hotel booking platform offering luxury rooms,
              world-class services, and a seamless booking experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>Home</li>
              <li>Rooms</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Our Services</h6>
            <ul className="list-unstyled footer-links">
              <li>Luxury Rooms</li>
              <li>Spa & Wellness</li>
              <li>Restaurant</li>
              <li>Conference Hall</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small text-muted mb-1">📍 Kolhapur, India</p>
            <p className="small text-muted mb-1">📞 +91 98765 43210</p>
            <p className="small text-muted">✉️ support@luxestay.com</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} OceanView Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
