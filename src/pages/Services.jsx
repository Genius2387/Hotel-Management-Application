function Services() {
  const servicesData = [
    { 
      id: 1, 
      title: 'Room Service', 
      description: '24/7 in-room dining with gourmet cuisine delivered to your doorstep',
      icon: '🍽️',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      id: 2, 
      title: 'Spa & Wellness', 
      description: 'Premium spa treatments and wellness programs for complete relaxation',
      icon: '💆',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      id: 3, 
      title: 'Fitness Center', 
      description: 'Modern gym with state-of-the-art equipment and personal trainers',
      icon: '💪',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      id: 4, 
      title: 'Swimming Pool', 
      description: 'Luxurious indoor heated pool and stunning outdoor infinity pool',
      icon: '🏊',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    { 
      id: 5, 
      title: 'Fine Dining', 
      description: 'Award-winning restaurants serving international and local cuisine',
      icon: '🍷',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    { 
      id: 6, 
      title: 'Conference Rooms', 
      description: 'Professional meeting spaces with advanced technology and catering',
      icon: '💼',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    { 
      id: 7, 
      title: 'Concierge Service', 
      description: 'Personalized assistance for tours, reservations, and recommendations',
      icon: '🎯',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    { 
      id: 8, 
      title: 'Valet Parking', 
      description: 'Complimentary valet parking and 24-hour vehicle security',
      icon: '🚗',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    { 
      id: 9, 
      title: 'Airport Transfer', 
      description: 'Luxury airport shuttle service available on request',
      icon: '✈️',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }
  ];

  const premiumFeatures = [
    { icon: '🌟', text: 'Premium Amenities' },
    { icon: '⚡', text: 'Fast WiFi' },
    { icon: '🔒', text: 'Secure Environment' },
    { icon: '🎁', text: 'Special Packages' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Our Premium Services</h2>
          <p className="text-muted fs-5 mb-4">
            Experience world-class amenities designed for your comfort and convenience
          </p>
          <div className="row justify-content-center g-3 mb-4">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="bg-white rounded-3 p-3 shadow-sm">
                  <span className="fs-3 d-block mb-2">{feature.icon}</span>
                  <small className="text-muted fw-semibold">{feature.text}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mb-5">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm service-card">
                <div className="card-body p-4">
                  <div 
                    className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center rounded-circle text-white"
                    style={{
                      background: service.color,
                      width: '70px',
                      height: '70px'
                    }}
                  >
                    <span className="fs-2">{service.icon}</span>
                  </div>
                  <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                  <p className="card-text text-muted mb-3">{service.description}</p>
                  <a href="#" className="text-decoration-none fw-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <div className="row mt-5">
          <div className="col-12">
            <div 
              className="rounded-4 p-5 text-white text-center position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            >
              <h3 className="h2 mb-3">Additional Services Available</h3>
              <p className="fs-5 mb-4 opacity-90">
                Laundry Service • Babysitting • Pet Care • Car Rental • Tour Packages • Event Planning
              </p>
              <button className="btn btn-light btn-lg px-5 py-3 fw-semibold">
                Request Custom Service
              </button>
            </div>
          </div>
        </div>

        {/* Service Hours Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white rounded-4 p-5 shadow-sm">
              <h3 className="h4 text-center mb-4">Service Hours</h3>
              <div className="row text-center">
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="h6 text-primary mb-2">Room Service</h4>
                    <p className="text-muted small mb-0">24/7 Available</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="h6 text-primary mb-2">Restaurant</h4>
                    <p className="text-muted small mb-0">6:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="h6 text-primary mb-2">Fitness Center</h4>
                    <p className="text-muted small mb-0">5:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 mb-3">
                  <div className="p-3">
                    <h4 className="h6 text-primary mb-2">Spa & Wellness</h4>
                    <p className="text-muted small mb-0">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .service-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }
        
        .icon-wrapper {
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .service-card a {
          color: #667eea;
          transition: all 0.3s ease;
        }
        
        .service-card:hover a {
          color: #764ba2;
          padding-left: 5px;
        }
      `}</style>
    </section>
  );
}

export default Services;