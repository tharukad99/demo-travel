import React, { useState } from 'react';
import { Menu, X, Leaf, Heart, Map, Shield, Phone, Mail, MapPin, MessageCircle, Star, Quote, ChevronRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <Leaf size={28} />
          Wild Ceylon UK
        </a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experiences" onClick={() => setIsOpen(false)}>Sri Lanka Wildlife</a>
          <a href="#trips" onClick={() => setIsOpen(false)}>Trips</a>
          <a href="#why-us" onClick={() => setIsOpen(false)}>Why Choose Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Plan Your Trip</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Discover Sri Lanka, The Wild Ceylon Way</h1>
        <p className="hero-subtitle">
          Tailor-made Sri Lanka holidays, ethical safaris, cultural journeys, and beach escapes designed for UK travellers.
        </p>
        <div className="hero-buttons">
          <a href="#trips" className="btn btn-primary">Explore Trips</a>
          <a href="#contact" className="btn btn-white">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop" alt="Elephants in Sri Lanka" />
        </div>
        <div className="about-text">
          <h2 className="section-title">Authentic Sri Lankan Experiences, Tailored for the UK</h2>
          <p>
            At Wild Ceylon UK, we bridge the gap between discerning UK travellers and the untouched beauty of Sri Lanka. We believe that travel should be both luxurious and responsible.
          </p>
          <p>
            Our roots are deep in Sri Lanka, allowing us to provide you with exclusive access to ethical wildlife safaris, pristine beaches, and rich cultural heritage. We are committed to wildlife protection, supporting local communities, and ensuring that every journey you take leaves a positive impact on the island.
          </p>
          <a href="#experiences" className="btn btn-outline" style={{marginTop: '1rem'}}>Discover Our Approach</a>
        </div>
      </div>
    </section>
  );
};

const Experiences = () => {
  const exps = [
    { title: "Ethical Wildlife Safaris", desc: "Experience leopards, elephants and more in their natural habitat without disturbing their peace.", img: "https://images.unsplash.com/photo-1544385561-5817c4194492?q=80&w=600&auto=format&fit=crop" },
    { title: "Cultural Heritage Tours", desc: "Explore ancient cities, sacred temples, and UNESCO World Heritage sites with expert local guides.", img: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=600&auto=format&fit=crop" },
    { title: "Beach Holidays", desc: "Relax on palm-fringed, golden sandy beaches along Sri Lanka's spectacular coastline.", img: "https://images.unsplash.com/photo-1546708973-c339543602f1?q=80&w=600&auto=format&fit=crop" },
    { title: "Honeymoon Packages", desc: "Romantic escapes blending luxury, privacy, and unforgettable sunsets over the Indian Ocean.", img: "https://images.unsplash.com/photo-1582239463990-2ffae7cdeaf6?q=80&w=600&auto=format&fit=crop" },
    { title: "Family Adventures", desc: "Safe, engaging, and fun-filled itineraries designed to create lasting memories for all ages.", img: "https://images.unsplash.com/photo-1579546252902-8618a8b132ad?q=80&w=600&auto=format&fit=crop" },
    { title: "Custom Sri Lanka Itineraries", desc: "Bespoke travel plans crafted entirely around your personal preferences and travel style.", img: "https://images.unsplash.com/photo-1625807986221-3fc75c040685?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="experiences" className="section experiences">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Featured Experiences</h2>
          <p className="section-subtitle">Curated journeys that highlight the absolute best of what Sri Lanka has to offer, designed with the UK traveller in mind.</p>
        </div>
        <div className="cards-grid">
          {exps.map((exp, idx) => (
            <div className="card" key={idx}>
              <div className="card-img-container">
                <img src={exp.img} alt={exp.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{exp.title}</h3>
                <p className="card-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EthicalTravel = () => {
  const ethics = [
    { icon: <Leaf size={40} />, title: "Ethical Safaris Only", desc: "We maintain strict distance rules and never crowd wildlife." },
    { icon: <Shield size={40} />, title: "No Plastic Policy", desc: "We strictly say no to single-use plastics and polyethene on our tours." },
    { icon: <Heart size={40} />, title: "Community Support", desc: "We ensure your travel spend directly benefits local Sri Lankan families." },
    { icon: <Map size={40} />, title: "Respect Nature", desc: "We strictly follow leave-no-trace principles across all our itineraries." }
  ];

  return (
    <section className="section ethical">
      <div className="container">
        <h2 className="section-title">Our Commitment to the Wild</h2>
        <p className="section-subtitle" style={{margin: '0 auto'}}>We believe in preserving the beauty of Sri Lanka for generations to come. Responsible tourism is at the core of everything we do.</p>
        <div className="ethical-grid">
          {ethics.map((item, idx) => (
            <div className="ethical-item" key={idx}>
              <div className="ethical-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularTrips = () => {
  const trips = [
    { title: "7-Day Sri Lanka Highlights", duration: "7 Days / 6 Nights", desc: "A perfect introduction to Sri Lanka's cultural triangle, tea country, and southern coast.", img: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=600&auto=format&fit=crop" },
    { title: "10-Day Wildlife & Culture Tour", duration: "10 Days / 9 Nights", desc: "Deep dive into Yala and Wilpattu national parks combined with ancient heritage sites.", img: "https://images.unsplash.com/photo-1544252656-749e7557aeb5?q=80&w=600&auto=format&fit=crop" },
    { title: "14-Day Luxury Sri Lanka Escape", duration: "14 Days / 13 Nights", desc: "The ultimate premium journey staying in boutique luxury lodges across the island.", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=600&auto=format&fit=crop" },
    { title: "Custom Private Tour", duration: "Flexible Duration", desc: "Work with our UK specialists to design a completely bespoke itinerary just for you.", img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="trips" className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Popular Sri Lanka Trips</h2>
          <p className="section-subtitle">Our most loved itineraries, meticulously crafted to provide a seamless and unforgettable holiday.</p>
        </div>
        <div className="cards-grid">
          {trips.map((trip, idx) => (
            <div className="card" key={idx}>
              <div className="card-img-container">
                <img src={trip.img} alt={trip.title} className="card-img" />
              </div>
              <div className="card-content">
                <div style={{color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem'}}>{trip.duration}</div>
                <h3 className="card-title">{trip.title}</h3>
                <p className="card-desc">{trip.desc}</p>
                <a href="#contact" className="btn btn-outline" style={{width: '100%', textAlign: 'center'}}>Enquire Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "UK-Based Support", desc: "Speak directly to our UK team for seamless planning and peace of mind before you travel." },
    { title: "Local Sri Lankan Expertise", desc: "Our ground team in Sri Lanka ensures authentic, off-the-beaten-path experiences." },
    { title: "Tailor-Made Itineraries", desc: "No two trips are the same. We design your holiday entirely around your desires." },
    { title: "Ethical & Responsible", desc: "Travel with a clear conscience knowing your trip supports conservation and communities." },
    { title: "Trusted Guides & Drivers", desc: "Travel safely with our experienced, English-speaking local chauffeurs and wildlife guides." }
  ];

  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Choose Wild Ceylon UK</h2>
          <p className="section-subtitle">We bring together the best of British customer service and authentic Sri Lankan hospitality.</p>
        </div>
        <div className="why-grid">
          {reasons.map((reason, idx) => (
            <div className="why-item" key={idx}>
              <div className="why-icon">
                <ChevronRight size={24} />
              </div>
              <div className="why-text">
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah & James T.", location: "London, UK", text: "Wild Ceylon organised the perfect honeymoon. The leopard safari in Yala was breathtaking, and the ethical approach made it even more special." },
    { name: "The Harrison Family", location: "Manchester, UK", text: "From the UK booking process to the friendly driver in Sri Lanka, everything was seamless. The kids loved the elephant encounters!" },
    { name: "David M.", location: "Edinburgh, UK", text: "A truly premium experience. The boutique hotels were stunning and the cultural knowledge of our guide was outstanding. Highly recommended." }
  ];

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">What Our UK Travellers Say</h2>
        </div>
        <div className="testimonial-grid" style={{marginTop: '3rem'}}>
          {reviews.map((review, idx) => (
            <div className="testimonial-card" key={idx}>
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">{review.name}</div>
              <div className="testimonial-location">{review.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! Our UK team will be in touch shortly.");
    e.target.reset();
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h3>Start Planning Your Journey</h3>
          <p style={{marginBottom: '2rem', color: 'rgba(255,255,255,0.8)'}}>
            Ready to explore Sri Lanka? Get in touch with our UK-based travel specialists to start crafting your bespoke itinerary.
          </p>
          
          <div className="info-item">
            <Phone size={24} />
            <span>+44 20 7123 4567</span>
          </div>
          <div className="info-item">
            <Mail size={24} />
            <span>hello@wildceylon.co.uk</span>
          </div>
          <div className="info-item">
            <MapPin size={24} />
            <span>15 Luxury Travel Lane, London, W1K 2XX, United Kingdom</span>
          </div>
          
          <a href="https://wa.me/447123456789" className="whatsapp-btn" target="_blank" rel="noreferrer">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
        
        <div>
          <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary-color)'}}>Enquire Now</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-control" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="+44 7123 456 789" />
            </div>
            <div className="form-group">
              <label>Estimated Travel Date</label>
              <input type="month" className="form-control" />
            </div>
            <div className="form-group">
              <label>Your Message / Requirements</label>
              <textarea className="form-control" required placeholder="Tell us about your dream trip to Sri Lanka..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <a href="#" className="logo" style={{color: 'var(--bg-white)'}}>
            <Leaf size={28} />
            Wild Ceylon UK
          </a>
          <p>
            Premium, tailor-made Sri Lanka holidays designed for the discerning UK traveller. Ethical safaris, cultural journeys, and luxury escapes.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#trips">Popular Trips</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Travel Advice</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.7)'}}><FaFacebook size={24} /></a>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.7)'}}><FaTwitter size={24} /></a>
            <a href="#" style={{color: 'rgba(255, 255, 255, 0.7)'}}><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Wild Ceylon UK. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <EthicalTravel />
      <PopularTrips />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
