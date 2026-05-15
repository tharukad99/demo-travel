import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, X, Leaf, Heart, Map, Shield, Phone, Mail, MapPin, MessageCircle, Star, Quote, ChevronRight, CheckCircle, PlusCircle, Utensils, Bed, Minus, Plus, Car, Users, AlertTriangle, ShieldAlert, Info } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';
import EssentialTripInfo from './EssentialTripInfo';
import ElephasTripPage from './ElephasTripPage';
import SlenderLorisTripPage from './SlenderLorisTripPage';
import KingfisherTripPage from './KingfisherTripPage';
import AllInOneSriLankaTripPage from './AllInOneSriLankaTripPage';
import ExploreJaffnaTripPage from './ExploreJaffnaTripPage';
import PepperTalkTripPage from './PepperTalkTripPage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Leaf size={28} />
          Ceylon Trailfinders
        </Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/our-story" onClick={() => setIsOpen(false)}>Our story</NavLink>
          <NavLink to="/wildlife" onClick={() => setIsOpen(false)}>Sri Lanka Wildlife</NavLink>
          <NavLink to="/trips" onClick={() => setIsOpen(false)}>Our trips</NavLink>
          <NavLink to="/why-us" onClick={() => setIsOpen(false)}>Why Choose Us</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Get in touch</NavLink>
          <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Plan your Trip</Link>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [sunPosition, setSunPosition] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationTime, setSimulationTime] = useState(720); // 12:00 PM

  useEffect(() => {
    const updateTimeAndSun = () => {
      let hour, minutes, totalMinutes;

      if (isSimulating) {
        hour = Math.floor(simulationTime / 60);
        minutes = simulationTime % 60;
        totalMinutes = simulationTime;
      } else {
        const now = new Date();
        hour = now.getHours();
        minutes = now.getMinutes();
        totalMinutes = hour * 60 + minutes;
      }

      // Set time of day for background
      if (hour >= 5 && hour < 9) setTimeOfDay('sunrise');
      else if (hour >= 9 && hour < 16) setTimeOfDay('day');
      else if (hour >= 16 && hour < 19) setTimeOfDay('sunset');
      else setTimeOfDay('night');

      // Calculate sun/moon percentage across the sky arc
      let percentage = 0;
      if (hour >= 5 && hour < 19) {
        // Day time (Sun): 5 AM to 7 PM (14 hours)
        percentage = ((totalMinutes - 5 * 60) / (14 * 60)) * 100;
      } else {
        // Night time (Moon): 7 PM to 5 AM (10 hours)
        let nightMinutes = totalMinutes;
        if (hour >= 19) nightMinutes = totalMinutes - 19 * 60;
        else nightMinutes = totalMinutes + 5 * 60; // past midnight
        percentage = (nightMinutes / (10 * 60)) * 100;
      }
      setSunPosition(Math.max(0, Math.min(100, percentage)));
    };

    updateTimeAndSun();

    if (!isSimulating) {
      const timer = setInterval(updateTimeAndSun, 60000); // update every minute
      return () => clearInterval(timer);
    }
  }, [isSimulating, simulationTime]);

  const formatTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 || 12;
    return `${displayH}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  return (
    <section id="home" className="hero">
      <div className={`hero-bg hero-${timeOfDay}`}></div>

      {/* Sun/Moon Indicator Arc */}
      <div className="celestial-arc-container">
        <div
          className={`celestial-body ${timeOfDay === 'night' ? 'moon' : 'sun'}`}
          style={{
            left: `${sunPosition}%`,
            bottom: `${Math.sin((sunPosition / 100) * Math.PI) * 100}%`
          }}
        ></div>
      </div>


      <div className="clouds-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
        <div className="cloud" style={{ top: '15%', width: '300px', height: '100px', borderRadius: '50px', filter: 'blur(20px)', animation: 'moveCloud 60s linear infinite' }}></div>
        <div className="cloud" style={{ top: '35%', width: '450px', height: '150px', borderRadius: '75px', filter: 'blur(30px)', animation: 'moveCloud 90s linear infinite 15s', background: 'rgba(255,255,255,0.25)' }}></div>
        <div className="cloud" style={{ top: '10%', width: '250px', height: '80px', borderRadius: '40px', filter: 'blur(15px)', animation: 'moveCloudReverse 50s linear infinite' }}></div>
        <div className="cloud" style={{ top: '25%', width: '350px', height: '120px', borderRadius: '60px', filter: 'blur(25px)', animation: 'moveCloudReverse 75s linear infinite 5s', background: 'rgba(255,255,255,0.2)' }}></div>
      </div>

      {/* Time Simulator Panel */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.7)', padding: '15px', borderRadius: '8px', zIndex: 1000, color: 'white', display: 'flex', flexDirection: 'column', gap: '10px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Time Simulator</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', cursor: 'pointer' }}>
            <input type="checkbox" checked={isSimulating} onChange={(e) => setIsSimulating(e.target.checked)} />
            Enable
          </label>
        </div>
        {isSimulating && (
          <>
            <input
              type="range"
              min="0"
              max="1439"
              value={simulationTime}
              onChange={(e) => setSimulationTime(parseInt(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
            <div style={{ textAlign: 'center', fontSize: '1.2rem', fontFamily: 'monospace' }}>
              {formatTime(simulationTime)}
            </div>
            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
              Phase: {timeOfDay.toUpperCase()}
            </div>
          </>
        )}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Ceylon Trailfinders</h1>
        <p className="hero-subtitle">
          Explore the real wild with care. We do Ethical Safaries only. Say NO to plastic & polyethene. We grow with the community.
        </p>
        <div className="hero-buttons">
          <Link to="/trips" className="btn btn-primary">Our Trips</Link>
          <Link to="/our-story" className="btn btn-white">Our Story</Link>
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
          <img src={`${import.meta.env.BASE_URL}wildlife/DSC_9501-1024x876.jpg`} alt="Leopard in Sri Lanka" />
        </div>
        <div className="about-text">
          <h2 className="section-title">Our Story</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Experience the Eco tourism in Srilanka with us</h3>
          <p>
            We are a Destination Management Company operates in Srilanka & we are specialized in wild life expeditions.
          </p>
          <p>
            <strong>Vision</strong> – To become the number 01 wildlife DMC in Srilanka.<br />
            <strong>Mission</strong> – Maintain the eco tourism concepts through out the business operation.
          </p>
          <Link to="/wildlife" className="btn btn-outline" style={{ marginTop: '1rem' }}>Discover Our Approach</Link>
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
    { icon: <Shield size={40} />, title: "No Animal Cruelty", desc: "We don't promote animal cruelty & fencing animals, therefore the company don't promote visiting the Zoo. We don't promote feeding wild animals and hunting wild animals." },
    { icon: <Map size={40} />, title: "Let them be wild", desc: "When we do the safari we always make sure that travelers & jeeps would not disturb animal's natural habitat. we have given special instructions to our trekkers to comply with park rules & regulations. we are very sensitive on conservation the wild life for the future generation." },
    { icon: <Leaf size={40} />, title: "Reusable water bottles", desc: "Plastics & polyethene already become a threat to the wild life in the world. our concept is to mitigate the usage of plastics when you visit the country. we give our clients a reusable water bottle to use and purified water tank in the van." },
    { icon: <Heart size={40} />, title: "Eco friendly tote bags", desc: "We give our clients hand made tote bags made by natural ingredients to conserve the environment by reducing the usage of plastic bags. you can use our tote bag as a shopping bag when you go to a shopping center." },
    { icon: <Star size={40} />, title: "Local suppliers", desc: "Community development is a part of eco tourism concept & we believe that we can make a positive impact on community development through travelling. As Ceylon Trailfinders we use local base accommodation to give you the local touch & use local restaurants to give you the authentic srilankan taste." },
    { icon: <Quote size={40} />, title: "Local Guides & Trekkers", desc: "We contribute to increase the local employment rate specially in rural areas. there are youngsters who are engaging in tourism activities in nearby national parks, Ceylon Trailfinders wants to give them an opportunity to grow with the company while using their local knowledge to give our clients an authentic experience." }
  ];

  return (
    <section className="section ethical">
      <div className="container">
        <h2 className="section-title">Ethical Safari & Eco Friendly</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>Grow with the community. Maintain the eco tourism concepts through out the business operation.</p>
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
    { title: "Panthera", duration: "13 nights 14 days", desc: "The ultimate wildlife experience focusing on the majestic Sri Lankan Leopard in our premium national parks.", img: `${import.meta.env.BASE_URL}wildlife/DSC6525-1024x1019.jpg`, path: "/trips/panthera" },
    { title: "Elephas", duration: "08 nights 09 days", desc: "An incredible journey celebrating the Sri Lankan Elephant, exploring Udawalawe, Minneriya, and wild habitats.", img: `${import.meta.env.BASE_URL}wildlife/Elephant-1024x682.jpg`, path: "/trips/elephas" },
    { title: "Slender loris", duration: "07 nights 08 days", desc: "A specialized wildlife adventure focused on spotting the elusive and fascinating nocturnal Slender Loris.", img: `${import.meta.env.BASE_URL}wildlife/red-slender-loris.jpg`, path: "/trips/slender-loris" },
    { title: "Kingfisher", duration: "06 nights 07 days", desc: "A perfect tour for bird watchers and nature lovers, exploring Sri Lanka's rich avian biodiversity.", img: `${import.meta.env.BASE_URL}wildlife/common-kingfisher-1024x649.jpg`, path: "/trips/kingfisher" },
    { title: "All in one Srilanka", duration: "13 nights 14 days", desc: "A comprehensive journey covering wildlife safaris, cultural heritage, beautiful beaches, and scenic highlands.", img: `${import.meta.env.BASE_URL}wildlife/All-in-one-srilanka.jpg`, path: "/trips/all-in-one-srilanka" },
    { title: "Explore Jaffna - The culture tour", duration: "10 nights 11 days", desc: "Dive deep into the rich, untold cultural heritage of Northern Sri Lanka and the beautiful peninsula of Jaffna.", img: `${import.meta.env.BASE_URL}wildlife/Explore-jaffna.jpg`, path: "/trips/explore-jaffna" },
    { title: "Pepper talk - The foodie tour", duration: "09 nights 10 days", desc: "A culinary adventure tasting authentic Sri Lankan spices, local delicacies, and traditional cooking experiences.", img: `${import.meta.env.BASE_URL}wildlife/Peper-talk-the-foodie-tour.jpg`, path: "/trips/pepper-talk" },
    { title: "Customize your trip", duration: "Tell us your idea", desc: "Create your very own bespoke Sri Lankan adventure. Let us know your ideas and we will craft the perfect itinerary.", img: `${import.meta.env.BASE_URL}wildlife/local-guides.jpg`, path: "/contact" }
  ];

  return (
    <section id="trips" className="section" style={{ backgroundColor: 'white', color: 'var(--text-main)' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'var(--primary-color)' }}>Our Trips</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light)' }}>Perfectly designed safari tour packages in Srilanka, Bird watching tours, Leopard safari, Elephant safari, Tailor made wildlife tours.</p>
        </div>
        <div className="cards-grid">
          {trips.map((trip, idx) => (
            <div className="card" key={idx} style={{ background: 'var(--primary-color)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
              <div className="card-img-container">
                <img src={trip.img} alt={trip.title} className="card-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              </div>
              <div className="card-content" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>{trip.duration}</div>
                  <h3 className="card-title" style={{ color: 'white', marginBottom: '0.5rem' }}>{trip.title}</h3>
                  <p className="card-desc" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>{trip.desc}</p>
                </div>
                <Link to={trip.path || "/contact"} className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: 'transparent', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', borderRadius: '4px', padding: '0.6rem', transition: 'all 0.3s ease' }}>Find out more</Link>
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
    { title: "Ethical Safari Concepts", desc: "We strictly practice ethical safari concepts, adhere to all wildlife rules, and do not promote animal cruelty." },
    { title: "Trained Drivers & Guides", desc: "Comprehensive & refresher trainings for safari drivers. We use qualified local tourist guides and trekkers." },
    { title: "Zero Plastic Policy", desc: "Zero plastic policy to conserve the wildlife and natural environment of Sri Lanka." },
    { title: "Fair Pay & Support Locals", desc: "We make sure partners and freelancers are paid well. No child labour. Hotels we use belong to locals to promote SMEs." },
    { title: "Empowering Communities", desc: "We support women empowering and community projects by using their services and products." }
  ];

  return (
    <section id="why-us" className="section why-us" style={{ backgroundColor: 'white', color: 'var(--text-main)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'var(--primary-color)' }}>Why You Chose Us</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light)' }}>Welcome to Ceylon Trailfinders. We are an Eco tourism company.</p>
        </div>
        <div className="why-grid" style={{ marginTop: '3rem' }}>
          {reasons.map((reason, idx) => (
            <div className="why-item" key={idx} style={{ background: 'var(--primary-color)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              <div className="why-icon" style={{ color: 'var(--accent-gold)', background: 'rgba(0,0,0,0.2)', borderRadius: '50%', padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronRight size={24} />
              </div>
              <div className="why-text" style={{ marginLeft: '1rem' }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '0.25rem', fontSize: '1.2rem' }}>{reason.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', lineHeight: '1.5' }}>{reason.desc}</p>
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
    { name: "Sarah & James T.", location: "London, UK", text: "Ceylon Trailfinders organised the perfect honeymoon. The leopard safari in Yala was breathtaking, and the ethical approach made it even more special." },
    { name: "The Harrison Family", location: "Manchester, UK", text: "From the UK booking process to the friendly driver in Sri Lanka, everything was seamless. The kids loved the elephant encounters!" },
    { name: "David M.", location: "Edinburgh, UK", text: "A truly premium experience. The boutique hotels were stunning and the cultural knowledge of our guide was outstanding. Highly recommended." }
  ];

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">What Our UK Travellers Say</h2>
        </div>
        <div className="testimonial-grid" style={{ marginTop: '3rem' }}>
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
          <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
            Ready to explore Sri Lanka? Get in touch with our UK-based travel specialists to start crafting your bespoke itinerary.
          </p>

          <div className="info-item">
            <Phone size={24} />
            <span>+9471 225 2137</span>
          </div>
          <div className="info-item">
            <Mail size={24} />
            <span>info@wildceylonlk.com</span>
          </div>
          <div className="info-item">
            <Mail size={24} />
            <span>wildceylontravels@gmail.com</span>
          </div>

          <a href="https://wa.me/+94712252137" className="whatsapp-btn" target="_blank" rel="noreferrer">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Find out more</h3>
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
          <a href="#" className="logo" style={{ color: 'var(--bg-white)' }}>
            <Leaf size={28} />
            Ceylon Trailfinders
          </a>
          <p>
            Premium, tailor-made Sri Lanka holidays designed for the discerning UK traveller. Ethical safaris, cultural journeys, and luxury escapes.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/wildlife">Sri Lanka Wildlife</Link></li>
            <li><Link to="/trips">Our Trips</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Travel Advice</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><FaFacebook size={24} /></a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><FaTwitter size={24} /></a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Ceylon Trailfinders. All rights reserved.</p>
      </div>
    </footer>
  );
};

const WildlifeInfo = () => {
  return (
    <section className="section" style={{
      position: 'relative',
      backgroundImage: 'url("https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=1600&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      padding: '6rem 0'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(10, 20, 10, 0.85)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'white', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.5rem' }}>Wildlife in Sri Lanka</h2>
        </div>

        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          fontSize: '1.1rem',
          lineHeight: '1.8'
        }}>
          {/* Intro Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>
              Srilanka is an island covered by the Indian ocean and very closely located to the Indian peninsula. Size of this island is around 65,625 sqkm2 and India is 62 times bigger than Srilanka. Around 30% of the land mass covered by different types of forests and vegetation which offer a residence for different types of fauna.
            </p>
            <p style={{ fontSize: '1.15rem' }}>
              Animals in the forests are an important part of the bio-diversity. Forest reserves are declared to protect eco systems and fauna, to preserve natural beauty and to provide opportunities for scientific research. Following are some types of reserves:
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {['Strict natural reserves', 'Nature reserves', 'Forest reserves', 'Sanctuaries', 'National Parks'].map(t => (
                <span key={t} style={{ background: 'var(--accent-gold)', color: '#000', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.95rem' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Grid for Reserves */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Strict Natural Reserves', desc: 'Haggala, Yala and Ritigala are three of the strict natural reserves. Human activities are restricted in these reserves. Wildlife resources are solely owned by the government and the public is permitted to enter these areas only for scientific research purposes.' },
              { title: 'Nature Reserves', desc: 'Thriconamadhu, Minneriya, Giritale, Wetahiriyakanda are some of the Nature Reserves in Sri Lanka. The government assures protection of living and non-living resources in these areas. Public cannot enter these areas without permission of the government.' },
              { title: 'Forest Reserves', desc: 'Knuckles, Sinharaja, Kanneliya, Dediyagala and Nakiyadeniya are some of the main forest reserves.' },
              { title: 'Sanctuaries', desc: 'It is an area reserved for the protection of wildlife. There are about 62 sanctuaries in Sri Lanka. Weeravilla, Kataragama, Kaudulla, Minneriya, Udawatta Kale, Wilapattu, Gal Oya, Trincomalee, Madhu road, Ravana Ella, Victoria, Randenigala, Rantambe, Sigiriya, Bellanvilla, Madunagala are some of the main sanctuaries in Sri Lanka. Sanctuaries are not under severe restrictions. Human activities are permitted in such a way to protect wildlife and their natural habitats.' },
              { title: 'National Parks', desc: 'There are about 26 national parks in Sri Lanka, which covers more than 5000 sq. km 7.5% of the total of its land area. Yala, Wilpattu, Gal oya, Kumana, Udawalawa, Vasgamuwa, Lunugam Vehera, Maduru Oya, Somawathie, Horton Plains, Bundala, Minneriya are some of them. The wildlife is completely protected in these national parks. The public can observe the wildlife and the natural environment. Provisions for scientific study are also provided.' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderLeft: '4px solid var(--accent-gold)',
                padding: '2rem',
                borderRadius: '0 12px 12px 0',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.4rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Maps Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', padding: '1rem' }}>
              <img src={`${import.meta.env.BASE_URL}wildlife/Forest-reserves-875x1024.jpg`} alt="Forest reserves of Sri Lanka" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', padding: '1rem' }}>
              <img src={`${import.meta.env.BASE_URL}wildlife/National-parks-861x1024.jpg`} alt="National parks of Sri Lanka" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Biodiversity Box */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
            marginTop: '1.5rem'
          }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.8rem', textAlign: 'center' }}>Bio diversity of Srilanka  </h3>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.15rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
              Biodiversity is the term given to the variety of life on earth. It is the variety within and between all species of plants, animals and micro-organisms and the ecosystems within which they live and interact. Sri Lanka has a varied climate and topography, which has resulted in rich biodiversity, distributed within a wide range of ecosystems "The global importance of the island's biodiversity has placed Sri Lanka together with the Western Ghats of India among the 34 biodiversity hotspots in the world".
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { name: 'Fish', text: 'The species richness of freshwater fish in Sri Lanka, which consist of 82 species, including 44 endemics.' },
                { name: 'Amphibians', text: 'Cold blooded vertebrates that breath through their skin and go through a conversion. Three types of Amphibians:\n\n– Caecilians (shape is like an earthworm)\n– Salamanders, Newts and Mudpuppies\n– Frogs and Toads\n\nSL has 111 species of amphibians and 95 endemics.' },
                { name: 'Reptiles', text: 'Reptiles are cold-blooded vertebrates. They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs. SL has 209 reptile species and 125 are endemics.\n\nSnakes, lizards, geckoes, skinks, turtles, tortoises, crocodiles, and alligators are all reptiles.' },
                { name: 'Birds', text: '503 different species of birds have been recorded in Sri Lanka, about 247 are migrants & Vagrants, 256 species are breeding residents. Sri Lanka is home to 33 endemic bird species.\n\nBird Migration – The movement of birds from their breeding grounds to another area to avoid seasonally adverse climatic conditions and the subsequent return to their original breeding grounds is referred to as migration.' },
                { name: 'Mammals', text: 'There are 125 species of indigenous mammals in Sri Lanka, of which 21 species are endemic to the island.' }
              ].map((bio, i) => (
                <div key={i} style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  borderTop: '3px solid var(--accent-gold)'
                }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '0.8rem', fontSize: '1.2rem' }}>{bio.name}</div>
                  <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', whiteSpace: 'pre-wrap' }}>{bio.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WildlifeGallery = () => {
  const images = [
    { src: "wildlife/DSC_9501-1024x876.jpg", alt: "Leopard" },
    { src: "wildlife/Elephant-1024x682.jpg", alt: "Elephant" },
    { src: "wildlife/red-slender-loris.jpg", alt: "Slender loris" },
    { src: "wildlife/DSC3719-877x1024.jpg", alt: "Leopard" },
    { src: "wildlife/Sloth-bear-1-1024x657.jpg", alt: "Sloth bear" },
    { src: "wildlife/Water-buffalow-1024x676.jpg", alt: "Water buffalo" },
    { src: "wildlife/Sppotted-deer-1024x683.jpg", alt: "Spotted deer" },
    { src: "wildlife/Sambar-deer-1024x682.jpg", alt: "Sambar deer" },
    { src: "wildlife/Water-buffallo-1024x682.jpg", alt: "Water buffalos" },
    { src: "wildlife/Salt-water-croc-1024x768.jpg", alt: "Salt water crocodile" },
    { src: "wildlife/Wild-boars-1024x682.jpg", alt: "Herd of wild boars" },
    { src: "wildlife/Land-monitor-lizzard-1024x647.jpg", alt: "Land monitor lizard" },
    { src: "wildlife/Deers-3-1024x682.jpg", alt: "Spotted deers" },
    { src: "wildlife/Gray-langer-2-1024x682.jpg", alt: "Gray langer" },
    { src: "wildlife/DSC6525-1024x1019.jpg", alt: "Leopard" },
    { src: "wildlife/DSC3625-1024x920.jpg", alt: "Torque monkeys" },
    { src: "wildlife/wild-rabbit-1024x658.jpg", alt: "Wild rabbit" },
    { src: "wildlife/Asian-Open-bill-1024x675.jpg", alt: "Asian open bill" },
    { src: "wildlife/chesnut-hawk-eagle-1024x768.jpg", alt: "Crested hawk eagle" },
    { src: "wildlife/Green-bee-eaters-1024x768.jpg", alt: "Green bee eaters" },
    { src: "wildlife/Hornbill-768x1024.jpg", alt: "Malabar pied hornbill" },
    { src: "wildlife/Bar-tailed-godwit-1017x1024.jpg", alt: "Bar tailed godwit" },
    { src: "wildlife/common-kingfisher-1024x649.jpg", alt: "White throated kingfisher" },
    { src: "wildlife/Grey-headed-fish-eagle.jpg", alt: "Grey-headed fish eagle" },
    { src: "wildlife/Paintered-stork-1024x682.jpg", alt: "Painted stork" },
    { src: "wildlife/Blue-tail-bee-eater-1024x682.jpg", alt: "Green bee eater" },
    { src: "wildlife/Commoron-764x1024.jpg", alt: "Cormorant" },
    { src: "wildlife/Hawk-eagle-1024x682.jpg", alt: "Hawk eagle" },
    { src: "wildlife/peacock-1024x910.jpg", alt: "Peacock" },
    { src: "wildlife/Jungle-flowl-1024x683.jpg", alt: "Jungle fowl" },
    { src: "wildlife/Crocs-1024x768.jpg", alt: "Fresh water crocodile" },
    { src: "wildlife/Ruddy-mongoose.jpg", alt: "Ruddy mongoose" },
    { src: "wildlife/Pied-kingfishers.jpg", alt: "Pied kingfishers" },
    { src: "wildlife/Elephant-on-a-lake-1024x731.jpg", alt: "Elephant" },
    { src: "wildlife/Gray-Langers-1024x682.jpg", alt: "Gray Langers" },
    { src: "wildlife/Sea-eagle-1024x680.jpg", alt: "White bellied Sea eagle" },
    { src: "wildlife/Giant-squirral-682x1024.jpg", alt: "Giant Squirrel" },
    { src: "wildlife/Oriental-darter-781x1024.jpg", alt: "Oriental darter" },
    { src: "wildlife/Purple-heron-758x1024.jpg", alt: "Purple heron" },
    { src: "wildlife/Spotted-deers-1-688x1024.jpg", alt: "Spotted deers" }
  ];

  return (
    <section className="section gallery">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Wildlife Gallery</h2>
          <p className="section-subtitle">A glimpse of the beautiful species you might encounter in Sri Lanka.</p>
        </div>
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '1' }}>
              <img src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '1.5rem 1rem 1rem 1rem', color: 'white', fontWeight: 'bold' }}>
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <Testimonials />
  </>
);

const OurStoryPage = () => (
  <div className="page-wrapper" style={{
    position: 'relative',
    backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    paddingBottom: '4rem'
  }}>
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(10, 20, 10, 0.85)'
    }}></div>

    <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
      <div className="text-center">
        <h2 className="section-title" style={{ color: 'white', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.5rem' }}>Our Story</h2>
      </div>

      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Experience the Eco tourism in Srilanka with us</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            We are a Destination Management Company operates in Srilanka & we are specialized in wild life expeditions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-gold)' }}>
              <strong style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>Vision</strong>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>To become the number 01 wildlife DMC in Srilanka.</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-gold)' }}>
              <strong style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>Mission</strong>
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>Maintain the eco tourism concepts through out the business operation.</span>
            </div>
          </div>
        </div>
        <div>
          <img src={`${import.meta.env.BASE_URL}wildlife/DSC_9501-1024x876.jpg`} alt="Leopard in Sri Lanka" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', minHeight: '300px' }} />
        </div>
      </div>

      <div style={{ marginTop: '6rem' }}>
        <div className="text-center">
          <h2 className="section-title" style={{ color: 'white', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '0.5rem' }}>Ethical Safari & Eco Friendly</h2>
          <p style={{ margin: '1rem auto 3rem auto', fontSize: '1.1rem', maxWidth: '600px', color: 'rgba(255,255,255,0.8)' }}>Grow with the community. Maintain the eco tourism concepts through out the business operation.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {[
            { img: `${import.meta.env.BASE_URL}wildlife/no-animal-cruelty.png`, title: "No Animal Cruelty", desc: "We don't promote animal cruelty & fencing animals, therefore the company don't promote visiting the Zoo. We don't promote feeding wild animals and hunting wild animals." },
            { img: `${import.meta.env.BASE_URL}wildlife/DSC3625-1024x920.jpg`, title: "Let them be wild", desc: "When we do the safari we always make sure that travelers & jeeps would not disturb animal's natural habitat. we have given special instructions to our trekkers to comply with park rules & regulations. we are very sensitive on conservation the wild life for the future generation." },
            { img: `${import.meta.env.BASE_URL}wildlife/reusable-bottles.png`, title: "Reusable water bottles", desc: "Plastics & polyethene already become a threat to the wild life in the world. our concept is to mitigate the usage of plastics when you visit the country. we give our clients a reusable water bottle to use and purified water tank in the van." },
            { img: `${import.meta.env.BASE_URL}wildlife/tote-bags.jpg`, title: "Eco friendly tote bags", desc: "We give our clients hand made tote bags made by natural ingredients to conserve the environment by reducing the usage of plastic bags. you can use our tote bag as a shopping bag when you go to a shopping center." },
            { img: `${import.meta.env.BASE_URL}wildlife/local-suppliers.jpg`, title: "Local suppliers", desc: "Community development is a part of eco tourism concept & we believe that we can make a positive impact on community development through travelling. As Ceylon Trailfinders we use local base accommodation to give you the local touch & use local restaurants to give you the authentic srilankan taste." },
            { img: `${import.meta.env.BASE_URL}wildlife/local-guides.jpg`, title: "Local Guides & Trekkers", desc: "We contribute to increase the local employment rate specially in rural areas. there are youngsters who are engaging in tourism activities in nearby national parks, Ceylon Trailfinders wants to give them an opportunity to grow with the company while using their local knowledge to give our clients an authentic experience." }
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '2rem'
            }}>
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.5rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: '1.8' }}>{item.desc}</p>
              </div>
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const WildlifeSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: `${import.meta.env.BASE_URL}slid/wild_life_in_sri_lanka_001.jpg`, alt: "Wildlife in Sri Lanka" },
    { src: `${import.meta.env.BASE_URL}slid/Wildlife-Sanctuaries.jpg`, alt: "Wildlife Sanctuaries" },
    { src: `${import.meta.env.BASE_URL}slid/protect-the-environment-on-your-sri-lanka-wildlife-safari-header.jpg`, alt: "Protect the Environment" },
    { src: `${import.meta.env.BASE_URL}slid/q_70.jpg`, alt: "Safari Experience" },
    { src: `${import.meta.env.BASE_URL}slid/800x450.jpg`, alt: "Scenic Views" },
    { src: `${import.meta.env.BASE_URL}slid/images.jpg`, alt: "Nature & Wildlife" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="slideshow-container" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            backgroundImage: `url(${slide.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            color: 'white',
            background: 'rgba(0,0,0,0.6)',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            backdropFilter: 'blur(5px)'
          }}>
            <h2 style={{ color: 'var(--accent-gold)', margin: 0, fontSize: '1.5rem' }}>{slide.alt}</h2>
          </div>
        </div>
      ))}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentSlide ? 'var(--accent-gold)' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              padding: 0
            }}
          />
        ))}
      </div>
    </div>
  );
};

const WildlifePage = () => (
  <div className="page-wrapper">
    <WildlifeSlideshow />
    <WildlifeInfo />
    <WildlifeGallery />
  </div>
);

const TripsPage = () => (
  <div className="page-wrapper">
    <PopularTrips />
  </div>
);

const WhyUsPage = () => (
  <div className="page-wrapper">
    <WhyChooseUs />
  </div>
);

const ContactPage = () => (
  <div className="page-wrapper">
    <Contact />
  </div>
);

const PantheraTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival and Safari Experience in Wilpattu National Park",
      desc: "Welcome to Sri Lanka – the Paradise Island! Your journey begins with a warm welcome from our local representative, either at Bandaranaike International Airport or your hotel in Negombo. From here, you'll embark on a scenic 4-hour drive (160 km) to the iconic Wilpattu National Park, Sri Lanka's largest and oldest national park, known for its unique \"willus\" (natural lakes) and diverse wildlife.\n\nUpon arrival, gear up for an unforgettable afternoon game drive from 3 PM to 6 PM, where you may spot leopards, elephants, sloth bears, and a variety of birdlife in their natural habitat. After your exciting safari experience, you'll be transferred to your nearby hotel for check-in and a relaxing overnight stay amidst nature.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Afternoon game drive (Leopard safari) – 3 hours"]
    },
    {
      day: "Day 2",
      title: "Full-Day Wildlife Experience at Wilpattu National Park",
      desc: "Start your day with an early morning pickup by your guide for a morning safari in Wilpattu National Park from 6:00 AM to 9:00 AM. Renowned as one of the best places to spot the elusive Sri Lankan leopard (Panthera pardus kotiya), Wilpattu offers a truly immersive wildlife experience. After the safari, return to your hotel for a well-deserved breakfast and some leisure time to enjoy the hotel facilities and natural surroundings.\n\nIn the afternoon, you'll head back into the park for a second game drive from 3:00 PM to 6:00 PM, offering more chances to witness Sri Lanka's rich biodiversity. Conclude your adventurous day with a return to the hotel for an overnight stay.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning game drive (Leopard safari) 3 hours", "Afternoon game drive (Leopard safari) 3 hours"]
    },
    {
      day: "Day 3",
      title: "Travel to Habarana and Afternoon Elephant Safari",
      desc: "After a relaxing breakfast, you will check out from your hotel and set off on a scenic 2-hour journey covering 100 km to Habarana, a charming town known as the gateway to some of Sri Lanka's most famous wildlife reserves. Along the way, your expert tour guide will be available to recommend a variety of optional activities tailored to your interests, ensuring you make the most of your day.\n\nIn the afternoon, prepare for an exhilarating game drive in search of the majestic Sri Lankan elephants (Elephas maximus maximus) roaming freely in their natural environment. After this unforgettable wildlife encounter, you will check in at your hotel in Habarana, where you can unwind and enjoy a comfortable overnight stay.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Afternoon game drive (Elephant safari) 3 hours"],
      optional: ["Experience an authentic Spa treatment at Habarana 30 USD onwards", "Visit Anuradhapura ancient kingdom 25 USD"]
    },
    {
      day: "Day 4",
      title: "Scenic Journey to Wasgamuwa with Local Flavors",
      desc: "After breakfast, you will check out from your hotel and embark on a scenic 2-hour drive covering 120 km to Wasgamuwa National Park, a hidden gem known for its rich biodiversity and serene landscapes. During the day, your expert tour guide will be available to recommend optional activities tailored to your interests, ensuring a personalized and memorable experience.\n\nAs part of this journey, Wild Ceylon has arranged a traditional farmer's lunch, offering you an authentic taste of Sri Lankan rural cuisine and culture. Following a day filled with natural beauty and local flavors, you will check in to your hotel in Wasgamuwa for a restful overnight stay.",
      meals: "Breakfast, Farmer's lunch",
      accom: "Hotel or Guest house",
      optional: ["Visit Lion's rock ( sigiriya ) 35 USD + tax", "Visit Polonnaruwa ancient kingdom 25 USD", "Extra game drive in Minneriya NP – 70 USD per person"]
    },
    {
      day: "Day 5",
      title: "Full-Day Safari Adventure in Wasgamuwa National Park",
      desc: "Another exciting day begins with an early morning departure to Wasgamuwa National Park for a thrilling game drive from 6:00 AM to 9:00 AM. Known for its large herds of wild elephants and unspoiled natural beauty, Wasgamuwa offers a peaceful yet adventurous wildlife experience. After the safari, return to the hotel to enjoy a hearty breakfast and some well-deserved relaxation time.\n\nIn the afternoon, your guide will accompany you back to the park for a second game drive from 3:00 PM to 6:00 PM, offering more chances to spot elephants and other native wildlife. After a rewarding day of exploration, you'll return to the hotel for your overnight stay.",
      meals: "Breakfast",
      accom: "Hotel or Guest house",
      included: ["Morning game drive (Elephant safari) 3 hours", "Afternoon game drive (Elephant safari) 3 hours"]
    },
    {
      day: "Day 6",
      title: "Journey to Nuwara Eliya - The Little England",
      desc: "Welcome to Day 06 of your Sri Lankan journey. After breakfast, you will check out from the hotel and begin your scenic drive to Nuwara Eliya, the country's most beloved hill station, passing through the historic city of Kandy. Often referred to as the \"Little England\" of Sri Lanka, Nuwara Eliya is known for its cool climate, lush tea plantations, and colonial charm — so don't forget to bring warm clothing for the crisp mountain air.\n\nAs a special highlight, Wild Ceylon has arranged a complimentary traditional Sri Lankan lunch prepared by local women as part of a government-supported women empowerment initiative. This experience not only offers you an authentic taste of Sri Lankan cuisine but also supports community development — a core value of Wild Ceylon's responsible tourism philosophy.\n\nOptional activities are available along the way and can be arranged through your guide. You'll arrive in Nuwara Eliya later in the evening and check in at your hotel for a peaceful overnight stay.",
      meals: "Breakfast, Lunch",
      accom: "Hotel",
      optional: ["Visit the sacred temple of tooth relic of Buddha in Kandy 7 USD", "Visit Royal botanical garden in Kandy 10 USD", "Visit a Tea factory & tea plucking experience 3 USD"]
    },
    {
      day: "Day 7",
      title: "Horton Plains Trekking & Descent to Yala",
      desc: "Today promises another exciting day as you explore the stunning highlands of Sri Lanka, situated approximately 1,900 meters above sea level. Early in the morning, you'll depart for Horton Plains National Park, a UNESCO World Heritage Site known for its misty landscapes, rare flora and fauna, and the breathtaking World's End viewpoint. Your hotel will provide a packed breakfast, which you can enjoy upon arrival after the scenic 32 km drive (around 1 hour).\n\nEmbark on a rewarding 9 km trek (approx. 3 hours) through grasslands and cloud forests, taking in the fresh mountain air and panoramic views. After completing the hike, you'll return to the hotel, freshen up, and check out.\n\nAs you descend from the cool hills of Nuwara Eliya, you'll bid farewell to the \"Little England\" and step back into the warmth of Sri Lanka's southern region. Optional activities are available en route to enhance your travel experience. By late evening, you'll check in at your hotel in Yala, where you can relax and enjoy a peaceful overnight stay.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning trekking at Horton plains NP – 3 hours"],
      optional: ["Visit nine arches bridge & Mini adam's peak – No entrance fee"]
    },
    {
      day: "Day 8",
      title: "Bundala Birdwatching & Yala Leopard Safari",
      desc: "Your day begins with an early morning departure for a safari in Bundala National Park from 6:00 AM to 9:00 AM. Known as a birdwatcher's paradise, Bundala is home to a diverse range of migratory and resident bird species, and offers a tranquil wildlife experience near the southern coast of Sri Lanka. After your morning safari, return to the hotel for a leisurely breakfast and time to relax and enjoy the surrounding environment.\n\nIn the afternoon, your guide will take you to the iconic Yala National Park for a thrilling game drive from 3:00 PM to 6:00 PM, where you'll have the opportunity to spot elephants, sloth bears, and possibly the elusive Sri Lankan leopard. After a day full of remarkable wildlife encounters, return to your hotel for a restful overnight stay.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning game drive (Bird watching) at Bundala NP – 3 hours", "Afternoon game drive (Leopard safari) at Yala NP -3 hours"]
    },
    {
      day: "Day 9",
      title: "Morning in Yala & Afternoon Safari in Udawalawe",
      desc: "Today begins with an early morning safari in Yala National Park, offering another chance to spot the park's iconic wildlife before you check out from the hotel. After returning from the game drive, enjoy a hearty breakfast and prepare for your journey to Udawalawe, a scenic 2-hour drive covering 100 km through the southern countryside.\n\nUpon arrival in Udawalawe, you'll head straight into the park for an afternoon game drive from 2:00 PM to 5:00 PM, renowned for its large herds of elephants and diverse birdlife. As the day winds down, you'll check in at a safari campsite, where you can unwind in a peaceful natural setting. Your stay includes a delicious dinner, live music, and a bonfire, making for a memorable night under the stars.",
      meals: "Breakfast, Dinner",
      accom: "Campsite",
      included: ["Morning game drive (Leopard safari) in Yala NP – 3 hours", "Afternoon game drive (Elephant safari) in Udawalave NP – 3 hours"]
    },
    {
      day: "Day 10",
      title: "Journey to Sinharaja Rainforest",
      desc: "Welcome to Day 10 of your Sri Lankan adventure. After enjoying breakfast at the campsite, you will check out and begin your journey to the world-renowned Sinharaja Rainforest, a UNESCO World Heritage Site and Sri Lanka's last viable area of primary tropical rainforest. If you're interested in another optional morning safari before departing, feel free to consult your tour guide for arrangements.\n\nThe drive to Sinharaja covers approximately 70 km and takes around 2 hours, offering scenic views of rural landscapes and forested hills. Upon arrival, check in at your hotel near the forest edge and take the rest of the day to relax and enjoy the tranquil natural surroundings. Your stay includes dinner at the hotel, followed by a peaceful overnight stay close to the rainforest.",
      meals: "Breakfast, Dinner",
      accom: "Guest house",
      optional: ["Extra game drive in Udawalave NP – 70 USD per person", "Milk feeding at Elephant transit home – 5 USD"]
    },
    {
      day: "Day 11",
      title: "Birdwatching Trek in Sinharaja",
      desc: "Begin your day early with a guided morning birdwatching trek in Sinharaja Rainforest from 6:00 AM to 9:00 AM. As a UNESCO World Heritage Site and one of the richest biodiversity hotspots in Sri Lanka, Sinharaja offers the chance to spot rare endemic bird species, including the Sri Lanka blue magpie, red-faced malkoha, and green-billed coucal. After your immersive nature walk, return to the hotel for a relaxing breakfast and some leisure time to enjoy the tranquil surroundings.\n\nIn the afternoon, you'll head back into the forest for a second birdwatching trek from 3:00 PM to 6:00 PM, offering more opportunities to observe the rich wildlife and lush vegetation of this tropical rainforest. Return to your hotel for a delicious dinner and a peaceful overnight stay, surrounded by the soothing sounds of nature.",
      meals: "Breakfast, Dinner",
      accom: "Guest house",
      included: ["Morning Bird watching trekking at Singharaja – 3 hours", "Afternoon Bird watching trekking at Singharaja  – 3 hours"]
    },
    {
      day: "Day 12",
      title: "Journey to Kitulgala",
      desc: "Welcome to Day 12 of your Sri Lanka tour. After breakfast, you will check out around 8:00 AM and begin your scenic journey to Kitulgala, a lush rainforest village known for its riverside charm and adventure activities. The drive takes approximately 6 hours, allowing you to arrive at the Kitulgala campsite around 2:00 PM.\n\nAfter check-in, the rest of the afternoon is yours to relax amidst nature or take part in one of the optional adventure activities available in the area — from river swims to short nature walks. In the evening, enjoy a BBQ dinner under the stars at the campsite, followed by a comfortable overnight stay in the heart of Kitulgala's natural beauty.",
      meals: "Breakfast, Dinner",
      accom: "Camp site",
      optional: ["White water rafting and adventure water sports"]
    },
    {
      day: "Day 13",
      title: "Birdwatching Trek in Kitulgala Forest",
      desc: "Start your day with a guided morning birdwatching trek in the lush Kitulgala Forest Reserve from 6:00 AM to 9:00 AM. Known for its rich biodiversity and rainforest ecosystem, Kitulgala is one of the best places in Sri Lanka to spot rare and endemic bird species, including the Sri Lanka chestnut-backed owlet and the green-billed coucal. After the morning trek, return to the campsite for a well-deserved breakfast and enjoy some leisure time amidst the peaceful natural surroundings.\n\nIn the afternoon, you'll return to the forest for another birdwatching experience from 3:00 PM to 6:00 PM, with more chances to observe the region's incredible avifauna. End your day with a delicious BBQ dinner at the campsite, followed by a restful overnight stay under the forest canopy.",
      meals: "Breakfast, Dinner",
      accom: "Guest house",
      included: ["Morning Bird watching trekking at Kitulgala forest – 3 hours", "Afternoon Bird watching trekking at Kitulgala forest – 3 hours"]
    },
    {
      day: "Day 14",
      title: "Departure",
      desc: "Your unforgettable journey through Sri Lanka comes to an end today. After breakfast, your guide will assist you with your transfer to the airport or your next destination. Should you wish to extend your stay or explore more of this beautiful country, please feel free to discuss your plans with us before the conclusion of your trip. We are here to ensure your travel experience is seamless and memorable until the very last moment.",
      meals: "Breakfast",
      accom: "-",
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/DSC6525-1024x1019.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Panthera</h1>
          <p className="trip-duration">13 Nights & 14 Days</p>
          <p className="trip-hero-desc">The ultimate wildlife experience focusing on the majestic Sri Lankan Leopard in our premium national parks.</p>
        </div>
      </div>

      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Wilpattu, Habarana, Yala, Udawalawe...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>10 Game Drives, 5 Trekkings</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Wildlife, Safari, Birdwatching</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', color: 'var(--text-main)', border: '1px solid rgba(27, 67, 50, 0.2)' }}>
          <h2 className="section-title" style={{ color: 'var(--primary-color)' }}>Tour at a glance</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Panthera plan specially designed to do leopard safari in Srilanka but not only leopard but also other mammals such like elephants, sloth, jackals, birds, reptiles and much more. this is a fully fledge wild life tour & this is the longest plan we have, it consisted 13 nights & 14 days in Srilanka. There are 10 game drives & 5 trekking included in this itinerary. Meal plan is BB ( bed & breakfast ) means your room in the hotel as well as breakfast is included. apart from that 2 lunches and 5 dinners are included. No beverages are included. You are going to stay on beautiful eco friendly properties such as 2 star or equivalent hotels, standard campsites & guest houses.
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Apart from the included activities, there are free slots where you can utilize to do some optional activities. you can always talk to our guide & get his recommendations to plan your optional activities & we will mention some activities you can do in the optional activities section. Even though this is a wildlife tour we have given some space to experience the different aspects of srilanka just like, adventure, cuisines, history & culture.
          </p>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            There is a service of a professionally qualified National tourist guide or a Chauffer tourist guide throughout the tour & he or she will be with you 24X7. They are professionally qualified to do wild life tours & they are specialized in wild life, flora & fauna, birding, mammals, reptiles etc. apart from that part time service of safari trekkers and bird watching trekkers will be taken on site.
          </p>
          <div style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>★★★★★</div>
        </div>

        <div className="inclusions-section" style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Inclusions & activities</h2>
          <div className="inclusions-grid">
            <div className="inclusions-left">
              <div className="inclusion-item">
                <Utensils size={24} />
                <div>
                  <strong>Meals</strong>
                  <span>13 Breakfasts, 2 Lunches, 5 Dinners</span>
                </div>
              </div>
              <div className="inclusion-item">
                <Car size={24} />
                <div>
                  <strong>Transport</strong>
                  <span>Private vehicle</span>
                </div>
              </div>
              <div className="inclusion-item">
                <Bed size={24} />
                <div>
                  <strong>Accommodation</strong>
                  <span>2 star or similar Hotel, Campsite, Guest house</span>
                </div>
              </div>
              <div className="inclusion-item">
                <Users size={24} />
                <div>
                  <strong>Support staff 24 X 7</strong>
                  <span>National tourist guide or chauffer tourist guide ( wild life expert )</span>
                </div>
              </div>
            </div>
            <div className="inclusions-right">
              <div className="inclusion-item">
                <CheckCircle size={24} />
                <div>
                  <strong>Included activities</strong>
                  <ul>
                    <li>3 Game drives (Leopard safari) at Wilpattu NP</li>
                    <li>1 Game drive (Elephant safari) at Minneriya NP</li>
                    <li>2 Game drives (Elephant safari) at Wasgamuwa NP</li>
                    <li>1 Trekking at Horton plains NP</li>
                    <li>3 Game drives (Leopard safari) at Yala NP</li>
                    <li>1 Game drive (Elephant safari) at Udawalava NP</li>
                    <li>2 Trekking (Bird watching) at Singharaja rain forest</li>
                    <li>2 Trekking (Bird watching) at Kitulgala forest</li>
                  </ul>
                </div>
              </div>
              <div className="optional-activities-accordion">
                <button
                  className={`optional-activities-header ${isOptionalExpanded ? 'expanded' : ''}`}
                  onClick={() => setIsOptionalExpanded(!isOptionalExpanded)}
                >
                  <span className="optional-icon" style={{ marginRight: '1rem', color: 'var(--accent-gold)', display: 'flex' }}>
                    {isOptionalExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                  <span>Optional activities</span>
                </button>
                {isOptionalExpanded && (
                  <div className="optional-activities-content">
                    <ul>
                      <li>Experience authentic Spa treatment at Habarana 30 USD onwards</li>
                      <li>Extra game drive in Minneriya NP – 70 USD per person</li>
                      <li>Visit the Lion’s rock 35 USD + tax</li>
                      <li>Visit Anuradhapura ancient kingdom 25 USD</li>
                      <li>Visit Polonnaruwa ancient kingdom 25 USD</li>
                      <li>Visit the sacred temple of tooth relic of Buddha in Kandy 7 USD</li>
                      <li>Visit Royal botanical garden in Kandy 10 USD</li>
                      <li>Visit a Tea factory & tea plucking experience 3 USD</li>
                      <li>Visit nine arches bridge & Mini adam’s peak – No entrance fee</li>
                      <li>Extra game drive in Udawalava NP – 70 USD per person</li>
                      <li>Milk feeding at Elephant transit home – 5 USD</li>
                      <li>White water rafting – 30 USD</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-title text-center" style={{ marginTop: '4rem' }}>Tour in detail</h2>
        <div className="accordion-container" style={{ marginTop: '2rem', maxWidth: '900px', margin: '2rem auto' }}>
          {itinerary.map((day, idx) => {
            const isExpanded = expandedDay === idx;
            return (
              <div className={`accordion-item ${isExpanded ? 'expanded' : ''}`} key={idx}>
                <button className="accordion-header" onClick={() => setExpandedDay(isExpanded ? -1 : idx)}>
                  <span>{day.day}: {day.title}</span>
                  <span className="accordion-icon">
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isExpanded && (
                  <div className="accordion-content">
                    <p style={{ whiteSpace: 'pre-wrap', marginBottom: '1.5rem', lineHeight: '1.6' }}>{day.desc}</p>

                    <div className="accordion-meta">
                      {day.meals && (
                        <div className="meta-row">
                          <strong><Utensils size={18} /> Meals</strong>
                          <span>{day.meals}</span>
                        </div>
                      )}
                      {day.accom && (
                        <div className="meta-row">
                          <strong><Bed size={18} /> Accommodation</strong>
                          <span>{day.accom}</span>
                        </div>
                      )}
                      {day.included && day.included.length > 0 && (
                        <div className="meta-row">
                          <strong><CheckCircle size={18} /> Included activities</strong>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                            {day.included.map((act, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{act}</li>)}
                          </ul>
                        </div>
                      )}
                      {day.optional && day.optional.length > 0 && (
                        <div className="meta-row">
                          <strong><PlusCircle size={18} /> Optional activities</strong>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                            {day.optional.map((act, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{act}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="trip-features-section" style={{ marginTop: '4rem' }}>
          <div className="map-section" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <img src={`${import.meta.env.BASE_URL}wildlife/panthera_map.png`} alt="Sri Lanka Trip Map" style={{ maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
          </div>

          <div className="important-notes-section" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Important notes</h2>
            <ul className="notes-list">
              <li>Some travelers have reported being approached by locals / Hotels offering optional excursions. This has been particularly prevalent in and around the hotels used by us. These guides are in no way connected to wild ceylon and we cannot guarantee the safety or quality standards of their tours. We advise customers against joining any tour offered by the unauthorized guides/suppliers.</li>
              <li>As an optional activity if you wish to visit a temple there are few things to keep in your mind. Traditionally we remove our shoes & hats before entering to a temple. your dress must cover your shoulders & up to your knees. Do not take selfies with buddha statues & don't turn your back to buddha statue when you take a picture.</li>
            </ul>
            <Link to="/eti" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Click here to read essential trip information</Link>
          </div>

          <div className="trip-features-grid">
            <div className="trip-features-text">
              <h2 className="section-title">Why you would love this trip</h2>
              <p>Sri Lanka is a small island in the Indian Ocean, covering just 65,000 sq km. Despite its size, it offers incredible diversity — you can travel from north to south in about 8 hours, and from east to west in around 6 hours. What makes Sri Lanka truly unique is that every 100 km you travel, the landscape and vegetation change dramatically. To make the most of your experience, this tour limits daily travel time to a comfortable maximum of 2.5 hours.</p>
              <p>If you're a true wildlife enthusiast, the <strong>Panthera Plan</strong> is your dream safari adventure come to life. Crafted especially for travelers eager to spot the elusive <strong>Sri Lankan leopard (Panthera pardus kotiya)</strong>, this <strong>14-day wildlife odyssey</strong> takes you deep into the heart of Sri Lanka's most iconic national parks, untamed wildernesses, and rich biodiversity zones.</p>
              <p>But this isn't just about leopards.</p>
              <p>You'll also have the chance to witness <strong>majestic elephants, sloth bears, jackals, monitor lizards, crocodiles</strong>, and over <strong>500 species of birds</strong>, all in their natural habitats. With <strong>10 thrilling game drives</strong> and <strong>5 scenic treks</strong>, this tour offers you unmatched access to <strong>Sri Lanka's diverse ecosystems</strong>, including <strong>dry zone scrub forests, wet montane forests, and tropical rainforests</strong>.</p>
              <p>What makes this plan truly special is the balance of <strong>adventure, conservation, and culture</strong>. Between safaris, you'll explore local villages, taste authentic Sri Lankan cuisine, visit historical sites, and even relax at eco-friendly retreats nestled in nature. From sunrise jungle walks to starlit dinners at safari campsites, every day brings new, unforgettable experiences.</p>
              <p>You'll be accompanied throughout by a <strong>professional wildlife guide or chauffeur-guide</strong>, certified by Sri Lanka Tourism and trained in <strong>zoology, ornithology, and conservation</strong>. Their expert insight into <strong>Sri Lankan flora and fauna</strong> adds immense value to your wildlife encounters. Plus, <strong>local safari trekkers and birdwatching specialists</strong> will join you in the field to enhance your sightings and share regional knowledge.</p>
              <p>Whether you're an avid birder, a big cat chaser, a nature photographer, or just someone who craves raw, immersive travel, the <strong>Panthera Plan</strong> offers an <strong>authentic, all-encompassing wildlife experience</strong> that goes far beyond the average tour.</p>
            </div>

            <div className="trip-features-sidebar">
              <h2 className="section-title">Is this the correct trip for you?</h2>
              <ul className="correct-trip-list">
                <li>The summer months in Sri Lanka are very hot with short, sharp monsoons in the southwest of the country. Please consider your suitability to the time of year you wish to travel and be sure to use adequate sun protection and drink plenty of water.</li>
                <li>There are lot of wildlife safaries are included and you must have the compatibility get in and ride on a Toyota Hilux modified double cab. Safari is always off road and you will experience a bumpy ride. but don't worry it is safe and comfortable.</li>
                <li>Most of the accommodation will be located really close to the national parks to give you the real wildlife experience therefor continuous broadband and electricity supply is not fully guaranteed.</li>
                <li>Hotels, campsites & guest houses are not full luxury but with standard amenities with good comfort level. since it is closer to the wild you will experience the animal sounds, wild animal movements, insects like mosquitos etc. usage of a repellent is highly recommended.</li>
              </ul>

              <div className="difficulty-bars">
                <div className="difficulty-item">
                  <div className="diff-label">Walking difficulty level</div>
                  <div className="diff-bar-container">
                    <div className="diff-bar" style={{ width: '30%' }}>Easy</div>
                  </div>
                </div>
                <div className="difficulty-item">
                  <div className="diff-label">Safari difficulty level</div>
                  <div className="diff-bar-container">
                    <div className="diff-bar" style={{ width: '40%' }}>Bumpy ride</div>
                  </div>
                </div>
                <div className="difficulty-item">
                  <div className="diff-label">Hotel comfort level</div>
                  <div className="diff-bar-container">
                    <div className="diff-bar" style={{ width: '80%' }}>Very good</div>
                  </div>
                </div>
                <div className="difficulty-item">
                  <div className="diff-label">Pace of the itinerary</div>
                  <div className="diff-bar-container">
                    <div className="diff-bar" style={{ width: '40%' }}>Peaceful</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="itinerary-disclaimer" style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', color: 'var(--text-main)', border: '1px solid rgba(27, 67, 50, 0.2)' }}>
          <h2 className="section-title" style={{ color: 'var(--primary-color)' }}>Itinerary disclaimer</h2>
          <div className="disclaimer-block" style={{ marginTop: '1.5rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>ITINERARY CHANGES</strong>
            <p style={{ lineHeight: '1.6' }}>Our itineraries are updated regularly throughout the year based on customer feedback and to reflect the current situation in each destination. The information included in this page may therefore differ from when you first booked your trip. It's important that you review this information prior to travel so that you have the latest updates. Due to weather, local conditions, transport schedules, public holidays, political unrest or other factors, further changes may be necessary to your itinerary once in-country. Your tour guide or local representative will keep you up to date with any such changes once your trip is underway and has the authority to amend or cancel any part of the trip itinerary if deemed necessary due to safety concerns.</p>
          </div>
          <div className="disclaimer-block" style={{ marginTop: '1.5rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>OPTIONAL ACTIVITIES</strong>
            <p style={{ lineHeight: '1.6' }}>A selection of optional activities that have been popular with past travellers are listed in the day-to-day itinerary. This isn't an exhaustive list and should be used as a guide only for some of what might be available. Prices are approximate, are for entrance fees only, and don't include transport to and from the sites or local guides unless indicated. All activities are subject to availability, and maybe on a join-in basis. It may not be possible to do all the activities listed in the time available at each destination, so some pre-planning for what you are most interested in is advised.</p>
            <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>Where activities are considered medium or high risk, we work with operators whose safety and credentials we have sighted and assessed. Although it is possible that you may find the same activity cheaper with another operator on the ground, we cannot vouch for the safety or quality of that operator. Medium and high-risk activities not listed above have not been assessed by us and as such our staff and group leader or local representative are unable to assist you with organising these activities. Activities that contravene our Responsible Travel policies are also not listed. Please remember that the decision to partake in any activity not listed is at your own discretion and risk.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/wildlife" element={<WildlifePage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/panthera" element={<PantheraTripPage />} />
          <Route path="/trips/elephas" element={<ElephasTripPage />} />
          <Route path="/trips/slender-loris" element={<SlenderLorisTripPage />} />
          <Route path="/trips/kingfisher" element={<KingfisherTripPage />} />
          <Route path="/trips/all-in-one-srilanka" element={<AllInOneSriLankaTripPage />} />
          <Route path="/trips/explore-jaffna" element={<ExploreJaffnaTripPage />} />
          <Route path="/trips/pepper-talk" element={<PepperTalkTripPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/eti" element={<EssentialTripInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
