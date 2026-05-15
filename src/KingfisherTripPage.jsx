import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const KingfisherTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Arrival & Journey to Kitulgala", 
      desc: "Welcome to Sri Lanka – the paradise island! Upon arrival, you will be warmly greeted by our representative at the airport or your hotel in Negombo. From there, you’ll begin your scenic journey to Kitulgala, a serene montane village nestled within lush wet montane forests—perfect for nature and bird lovers alike. The drive is approximately 100 km and takes around 2.5 hours.\n\nOnce you reach Kitulgala, check in at the eco-friendly campsite and take some time to relax in the heart of nature. In the evening, you’ll set off on your first bird watching trek, exploring the forest trails in search of endemic and migratory species unique to this region.\n\nAfter the trek, return to the campsite for a peaceful night and overnight stay in Kitulgala.", 
      meals: "Breakfast", 
      accom: "Campsite", 
      included: ["Evening bird watching trekking in kitulgala forest – 3 hours"]
    },
    { 
      day: "Day 2", 
      title: "Morning Bird Watching in Kitulgala", 
      desc: "Start your day immersed in the sights and sounds of the rainforest. Your guide will meet you early in the morning for a bird watching trek in Kitulgala Forest, from 6:00 AM to 9:00 AM. This region is known for its rich avian biodiversity, offering you a chance to spot endemic and migratory bird species in their natural habitat.\n\nAfter the trek, return to the campsite for breakfast and enjoy a few hours of leisure, soaking in the peaceful surroundings of Kitulgala. The rest of the day is free for you to relax—or if you’re feeling adventurous, you can opt for exciting activities like white-water rafting, ziplining, or canyoning. Simply consult your guide for personalized recommendations and safe arrangements.\n\nIn the evening, gather around the fire for a BBQ dinner included at the campsite, and enjoy another overnight stay in Kitulgala under the stars.", 
      meals: "Breakfast, Dinner", 
      accom: "Campsite", 
      included: ["Morning trekking (Bird watching) in Kitulgala forest – 3 hours"],
      optional: ["White water rafting & other water sports"]
    },
    { 
      day: "Day 3", 
      title: "Journey to Sinharaja Rainforest", 
      desc: "After breakfast, it’s time to check out from your hotel and begin your journey to Deniyaya, the lush entrance to the Sinharaja Rainforest, a UNESCO World Heritage Site. The scenic drive covers 180 km and takes approximately 6 hours, passing through charming countryside and forested landscapes.\n\nUpon arrival in Deniyaya, you’ll check in at your eco-lodge or hotel and spend the evening at leisure, relaxing and recharging after the long drive in preparation for your rainforest adventures ahead.\n\nEnjoy a peaceful overnight stay in Deniyaya, surrounded by nature’s calm and the sounds of the forest.", 
      meals: "Breakfast", 
      accom: "Guest house"
    },
    {
      day: "Day 4",
      title: "Full Day Birding in Sinharaja",
      desc: "Get ready for a truly immersive birding experience in one of the world’s most biodiverse rainforests. Your guide will meet you early in the morning for a bird watching trek in Sinharaja Rainforest, from 6:00 AM to 9:00 AM. This UNESCO World Heritage Site is a haven for endemic and rare bird species, making it a highlight of your tour.\n\nAfter the morning trek, return to your hotel for a well-deserved breakfast, and enjoy some free time to relax and appreciate the peaceful natural surroundings.\n\nIn the afternoon, you’ll head back into the rainforest for a second bird watching trek from 3:00 PM to 6:00 PM, offering another chance to spot species that are more active in the cooler hours of the day.\n\nAfter your day in the wild, return to the hotel for a delicious included dinner and a restful overnight stay in Deniyaya.",
      meals: "Breakfast, Dinner",
      accom: "Guest house",
      included: ["Morning Bird watching trekking at Singharaja – 3 hours", "Evening Bird watching trekking at Singharaja – 3 hours"]
    },
    {
      day: "Day 5",
      title: "Journey to Yala National Park",
      desc: "Welcome to Day 5 of your exciting Sri Lanka tour! After enjoying breakfast, you will check out from your hotel and embark on a scenic 3-hour drive to Yala National Park, one of Sri Lanka’s premier wildlife destinations.\n\nOn the way, you have the option to participate in various optional activities—just consult your tour guide for personalized recommendations to make the most of your journey.\n\nOnce you arrive in Yala, you will check in at your hotel and prepare for an exhilarating evening game drive in Yala National Park. This safari offers incredible opportunities to spot elusive wildlife including leopards, elephants, and a variety of bird species.\n\nAfter the safari, return to your hotel for a comfortable overnight stay and rest up for another day of adventure.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Afternoon game drive at Yala NP (Leopard safari) – 3 hours"],
      optional: ["Milk feeding at Elephant transit home – 5 USD"]
    },
    {
      day: "Day 6",
      title: "Bundala Birdwatching & Yala Safari",
      desc: "Start your day early with your guide as you embark on a morning safari at Bundala National Park from 6:00 AM to 9:00 AM. Located near Yala, Bundala is renowned for its diverse birdlife, making it a paradise for bird watchers and nature enthusiasts alike.\n\nAfter the safari, return to your hotel for a delicious breakfast and enjoy some leisure time to relax and soak in the natural surroundings.\n\nIn the afternoon, get ready for another thrilling wildlife experience with an afternoon game drive at Yala National Park from 3:00 PM to 6:00 PM. Yala is famous for its population of leopards, elephants, and a wide variety of other wildlife.\n\nConclude your day by returning to the hotel for an overnight stay, resting up for the adventures ahead.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning game drive (Bird watching) 3 hours", "Afternoon game drive (birds & mammals) 3 hours"]
    },
    {
      day: "Day 7",
      title: "Departure",
      desc: "Your unforgettable Sri Lanka adventure comes to an end today. Our guide will escort you to the airport or your next destination with care and comfort.\n\nIf your journey takes you toward Colombo or Bandaranaike International Airport, you have the option to visit the historic Galle Dutch Fort—a UNESCO World Heritage Site offering rich cultural heritage and stunning coastal views.\n\nShould you wish to extend your stay in Sri Lanka, please let us know in advance so we can help arrange additional accommodations and experiences.",
      meals: "Breakfast",
      accom: "-",
      optional: ["Dutch fort tour in Galle – Entrance free", "Cooking class with Lunch – 75 USD per person"]
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/common-kingfisher-1024x649.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Kingfisher</h1>
          <p className="trip-duration">06 Nights & 07 Days</p>
          <p className="trip-hero-desc">A perfect tour for bird watchers and nature lovers, exploring Sri Lanka's rich avian biodiversity.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Kitulgala, Sinharaja, Yala, Bundala...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>3 Game Drives, 4 Trekkings</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Bird Watching, Photography, Nature</span>
            </div>
          </div>
        </div>

        <div className="inclusions-section" style={{marginTop: '4rem'}}>
          <h2 className="section-title">Inclusions & activities</h2>
          <div className="inclusions-grid">
            <div className="inclusions-left">
              <div className="inclusion-item">
                <Utensils size={24} />
                <div>
                  <strong>Meals</strong>
                  <span>6 Breakfasts, 2 Dinners</span>
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
                  <span>National tourist guide or chauffer tourist guide ( Wild life expert )</span>
                </div>
              </div>
            </div>
            <div className="inclusions-right">
              <div className="inclusion-item">
                <CheckCircle size={24} />
                <div>
                  <strong>Included activities</strong>
                  <ul>
                    <li>2 Bird watching Trekking at Kitulgala forest</li>
                    <li>2 Bird watching Trekking at Singharaja rain forest</li>
                    <li>2 Game drives (Birds & mammals) at Yala NP</li>
                    <li>1 Game drive (Bird watching) at Bundala NP</li>
                  </ul>
                </div>
              </div>
              <div className="optional-activities-accordion">
                <button 
                  className={`optional-activities-header ${isOptionalExpanded ? 'expanded' : ''}`}
                  onClick={() => setIsOptionalExpanded(!isOptionalExpanded)}
                >
                  <span className="optional-icon" style={{marginRight: '1rem', color: 'var(--accent-gold)', display: 'flex'}}>
                    {isOptionalExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                  <span>Optional activities</span>
                </button>
                {isOptionalExpanded && (
                  <div className="optional-activities-content">
                    <ul>
                      <li>White water rafting – 30 USD</li>
                      <li>Milk feeding at Elephant transit home – 5 USD</li>
                      <li>Dutch Fort tour in Galle – Entrance free</li>
                      <li>Cooking class with Lunch – 75 USD per person</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-title text-center" style={{marginTop: '4rem'}}>Tour in detail</h2>
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
                            {day.included.map((act, i) => <li key={i} style={{marginBottom: '0.3rem'}}>{act}</li>)}
                          </ul>
                        </div>
                      )}
                      {day.optional && day.optional.length > 0 && (
                        <div className="meta-row">
                          <strong><PlusCircle size={18} /> Optional activities</strong>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                            {day.optional.map((act, i) => <li key={i} style={{marginBottom: '0.3rem'}}>{act}</li>)}
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

        <div className="trip-features-section" style={{marginTop: '4rem'}}>
          <div className="map-section" style={{textAlign: 'center', marginBottom: '3rem'}}>
            <img src={`${import.meta.env.BASE_URL}wildlife/panthera_map.png`} alt="Sri Lanka Trip Map" style={{maxWidth: '450px', width: '100%', height: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto'}} />
          </div>

          <div className="important-notes-section" style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Important notes</h2>
            <ul className="notes-list">
              <li>Some travelers have reported being approached by locals / Hotels offering optional excursions. This has been particularly prevalent in and around the hotels used by us. These guides are in no way connected to wild ceylon and we cannot guarantee the safety or quality standards of their tours. We advise customers against joining any tour offered by the unauthorized guides/suppliers.</li>
              <li>As an optional activity if you wish to visit a temple there are few things to keep in your mind. Traditionally we remove our shoes & hats before entering to a temple. your dress must cover your shoulders & up to your knees. Do not take selfies with buddha statues & don't turn your back to buddha statue when you take a picture.</li>
            </ul>
            <Link to="/eti" className="btn btn-primary" style={{marginTop: '1rem', display: 'inline-block'}}>Click here to read essential trip information</Link>
          </div>

          <div className="trip-features-grid">
            <div className="trip-features-text">
              <h2 className="section-title">Why you would love this trip</h2>
              <p>If your heart beats faster at the flutter of wings and the call of the wild, then the Kingfisher Plan is your dream come true. Designed specifically for bird lovers and nature photographers, this 6-night, 7-day journey through Sri Lanka will take you through the island’s most diverse and bird-rich habitats, offering you the chance to spot over 500 bird species, including many rare and endemic ones.</p>
              <p>This isn’t just a bird-watching tour—it’s a carefully curated expedition that follows a natural rhythm through three major types of vegetation: the misty wet montane forests of the central highlands, the dense tropical rainforests of the southwest, and the arid beauty of the dry evergreen forests in the southeast. Each region offers a completely different birding experience—different sounds, species, and surprises.</p>
              <p>You’ll embark on 3 exciting game drives and 4 immersive treks, guided by a professional, wildlife-certified national tour guide who is with you throughout the journey. Their deep knowledge of birds, reptiles, mammals, flora, and fauna adds immense value, ensuring you don’t just see the wildlife—but understand it.</p>
              <p>Between your birding adventures, there’s space to relax and connect. Stay in eco-friendly accommodations—from cozy campsites to rustic guesthouses and nature lodges—chosen for their proximity to the wild and their low impact on the environment. Enjoy a bed & breakfast meal plan, along with two special dinners, all while soaking in the serene beauty of your surroundings.</p>
              <p>Whether you’re an avid birder, a wildlife enthusiast, or a mindful traveler looking for a meaningful escape into nature, the Kingfisher Plan offers you more than just sightings—it offers you stories. Of feathers, forests, and the magic of Sri Lanka.</p>
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
                    <div className="diff-bar" style={{ width: '40%' }}>Moderate</div>
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

        <div className="itinerary-disclaimer" style={{marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', color: 'var(--text-main)', border: '1px solid rgba(27, 67, 50, 0.2)'}}>
          <h2 className="section-title" style={{color: 'var(--primary-color)'}}>Itinerary disclaimer</h2>
          <div className="disclaimer-block" style={{marginTop: '1.5rem'}}>
            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>ITINERARY CHANGES</strong>
            <p style={{lineHeight: '1.6'}}>Our itineraries are updated regularly throughout the year based on customer feedback and to reflect the current situation in each destination. The information included in this page may therefore differ from when you first booked your trip. It's important that you review this information prior to travel so that you have the latest updates. Due to weather, local conditions, transport schedules, public holidays, political unrest or other factors, further changes may be necessary to your itinerary once in-country. Your tour guide or local representative will keep you up to date with any such changes once your trip is underway and has the authority to amend or cancel any part of the trip itinerary if deemed necessary due to safety concerns.</p>
          </div>
          <div className="disclaimer-block" style={{marginTop: '1.5rem'}}>
            <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>OPTIONAL ACTIVITIES</strong>
            <p style={{lineHeight: '1.6'}}>A selection of optional activities that have been popular with past travellers are listed in the day-to-day itinerary. This isn't an exhaustive list and should be used as a guide only for some of what might be available. Prices are approximate, are for entrance fees only, and don't include transport to and from the sites or local guides unless indicated. All activities are subject to availability, and maybe on a join-in basis. It may not be possible to do all the activities listed in the time available at each destination, so some pre-planning for what you are most interested in is advised.</p>
            <p style={{marginTop: '1rem', lineHeight: '1.6'}}>Where activities are considered medium or high risk, we work with operators whose safety and credentials we have sighted and assessed. Although it is possible that you may find the same activity cheaper with another operator on the ground, we cannot vouch for the safety or quality of that operator. Medium and high-risk activities not listed above have not been assessed by us and as such our staff and group leader or local representative are unable to assist you with organising these activities. Activities that contravene our Responsible Travel policies are also not listed. Please remember that the decision to partake in any activity not listed is at your own discretion and risk.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KingfisherTripPage;
