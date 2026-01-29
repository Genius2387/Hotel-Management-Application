import { Award, Users, MapPin, Heart } from 'lucide-react';

function About() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">About Grand Hotel</h2>
          <p className="text-muted fs-5">Where Luxury Meets Comfort</p>
        </div>
        
        {/* Main Content */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-light rounded-4 p-5 shadow-sm">
              <h3 className="h2 mb-4 text-primary">Our Story</h3>
              <p className="lead text-muted mb-4">
                Established in 1995, Grand Hotel has been providing exceptional hospitality for over 25 years. 
                Our commitment to excellence and attention to detail ensures every guest experiences the perfect 
                blend of luxury and comfort.
              </p>
              <p className="text-muted mb-4">
                Located in the heart of the city, we offer easy access to major attractions while providing 
                a peaceful retreat from the bustling urban life. Our dedicated team of hospitality professionals 
                works tirelessly to ensure your stay is memorable, comfortable, and exceeds all expectations.
              </p>
              <p className="text-muted">
                From our elegantly appointed rooms to our world-class amenities, every detail has been carefully 
                curated to provide you with an unforgettable experience. We pride ourselves on creating a warm, 
                welcoming atmosphere that makes you feel at home while enjoying the finest in modern luxury.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="row g-4 text-center mb-5">
          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded-3 text-white h-100 shadow-lg" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              <h4 className="display-4 fw-bold mb-2">250+</h4>
              <p className="mb-0 fs-5">Luxury Rooms</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded-3 text-white h-100 shadow-lg" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            }}>
              <h4 className="display-4 fw-bold mb-2">25+</h4>
              <p className="mb-0 fs-5">Years Experience</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded-3 text-white h-100 shadow-lg" style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            }}>
              <h4 className="display-4 fw-bold mb-2">50K+</h4>
              <p className="mb-0 fs-5">Happy Guests</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="p-4 rounded-3 text-white h-100 shadow-lg" style={{
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
            }}>
              <h4 className="display-4 fw-bold mb-2">4.8★</h4>
              <p className="mb-0 fs-5">Guest Rating</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="row g-4 mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="h2 fw-bold">Our Core Values</h3>
            <p className="text-muted">The principles that guide everything we do</p>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4 h-100 border rounded-3 hover-shadow transition">
              <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 p-3">
                <Award className="text-primary" size={40} />
              </div>
              <h4 className="h5 mb-3">Excellence</h4>
              <p className="text-muted small mb-0">
                We strive for excellence in every service we provide, ensuring the highest standards of quality.
              </p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4 h-100 border rounded-3 hover-shadow transition">
              <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 p-3">
                <Users className="text-success" size={40} />
              </div>
              <h4 className="h5 mb-3">Hospitality</h4>
              <p className="text-muted small mb-0">
                Our guests are at the heart of everything we do, and we treat everyone like family.
              </p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4 h-100 border rounded-3 hover-shadow transition">
              <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 p-3">
                <MapPin className="text-info" size={40} />
              </div>
              <h4 className="h5 mb-3">Location</h4>
              <p className="text-muted small mb-0">
                Perfectly situated in the city center, offering convenience and accessibility to all attractions.
              </p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="text-center p-4 h-100 border rounded-3 hover-shadow transition">
              <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 p-3">
                <Heart className="text-danger" size={40} />
              </div>
              <h4 className="h5 mb-3">Comfort</h4>
              <p className="text-muted small mb-0">
                Every detail is designed to ensure your comfort and create a relaxing home away from home.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center p-5 rounded-4 position-relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              <h3 className="h2 text-white mb-4">Our Mission</h3>
              <p className="text-white fs-5 mb-0 opacity-90">
                To provide an exceptional hospitality experience that exceeds expectations, creates lasting memories, 
                and makes every guest feel valued and cared for. We are committed to sustainable practices, 
                community engagement, and continuous improvement in all aspects of our service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-5px);
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}

export default About;