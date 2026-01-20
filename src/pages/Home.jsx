import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Experience Luxury & Comfort</h1>
          <p className="lead mt-3">
            Book premium rooms with world-class hospitality
          </p>
          <Link to="/rooms" className="btn btn-light btn-lg mt-4 px-5">
            Explore Rooms
          </Link>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold">Welcome to Our Hotel</h2>
              <p className="text-muted mt-3">
                We provide luxurious rooms, modern amenities, and exceptional
                service to make your stay unforgettable. Whether you are here
                for business or leisure, we ensure comfort at every step.
              </p>
              <Link to="/about" className="btn btn-primary mt-3">
                Learn More
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="Hotel"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose Us</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100">
                <h4 className="fw-bold">Luxury Rooms</h4>
                <p className="text-muted">
                  Spacious rooms with premium interiors and comfort.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100">
                <h4 className="fw-bold">24/7 Services</h4>
                <p className="text-muted">
                  Round-the-clock room service and customer support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card p-4 shadow-sm h-100">
                <h4 className="fw-bold">Prime Location</h4>
                <p className="text-muted">
                  Located near major attractions and transport hubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS CTA */}
      <section className="cta-section text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Book Your Stay?</h2>
          <p className="mt-2">
            Choose from a variety of rooms designed for every need.
          </p>
          <Link to="/rooms" className="btn btn-outline-light btn-lg mt-3 px-5">
            Book Now
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Services</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="service-box text-center p-4 shadow-sm">
                <h5 className="fw-bold">Free Wi-Fi</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-box text-center p-4 shadow-sm">
                <h5 className="fw-bold">Restaurant</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-box text-center p-4 shadow-sm">
                <h5 className="fw-bold">Swimming Pool</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div className="service-box text-center p-4 shadow-sm">
                <h5 className="fw-bold">Spa & Wellness</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Need Help With Booking?</h2>
          <p className="text-muted mt-2">
            Our team is here to assist you anytime.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-3">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
