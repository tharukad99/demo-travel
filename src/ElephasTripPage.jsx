import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const ElephasTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Arrival and Journey to Wilpattu National Park", 
      desc: "Welcome to Sri Lanka – The Paradise Island! Upon your arrival at the airport or at your hotel in Negombo, you will be warmly greeted by our local representative. Your journey begins with a scenic 4-hour drive (approximately 160 km) to Wilpattu National Park, one of Sri Lanka’s most iconic wildlife destinations.\n\nIn the afternoon, experience an exciting safari game drive from 3:00 PM to 6:00 PM, where you may encounter leopards, elephants, and a variety of exotic wildlife in their natural habitat.\n\nAfter the safari, check in at your selected Wilpattu hotel for a relaxing overnight stay. Enjoy a delicious included dinner at the hotel, surrounded by the serene wilderness of the area.", 
      meals: "Breakfast, Dinner", 
      accom: "Hotel", 
      included: ["Afternoon game drive (leopard safari) – 3 hours"]
    },
    { 
      day: "Day 2", 
      title: "Full-Day Safari in Wilpattu National Park", 
      desc: "Start your day with an early morning pick-up by your guide as you head out for an exciting morning safari in Wilpattu National Park from 6:00 AM to 9:00 AM. Witness the park come alive with activity as you search for leopards, elephants, sloth bears, and a variety of birds in the soft golden light of dawn.\n\nAfter your wildlife adventure, return to the hotel and enjoy a hearty breakfast. Spend the late morning and early afternoon relaxing at your hotel or exploring the peaceful surroundings at your own pace.\n\nIn the afternoon, gear up for another thrilling game drive in Wilpattu from 3:00 PM to 6:00 PM, offering a second chance to encounter the park’s majestic wildlife.\n\nAfter the safari, return to your hotel for a relaxing evening and overnight stay.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Morning game drive (Leopard safari) 3 hours", "Afternoon game drive (Leopard safari) 3 hours"]
    },
    { 
      day: "Day 3", 
      title: "Travel to Habarana and Afternoon Elephant Safari", 
      desc: "After enjoying a delicious breakfast, you’ll check out from your hotel in Wilpattu and begin your journey to Habarana, a scenic 2-hour drive covering approximately 100 km.\n\nUpon arrival, you can relax or explore optional activities in the area—your tour guide will be happy to recommend experiences based on your interests.\n\nIn the afternoon, prepare for another unforgettable adventure: an afternoon game drive to spot the majestic Elephas maximus maximus, the Sri Lankan elephant, in its natural habitat. This is one of the most iconic wildlife experiences the island has to offer.\n\nAfter the safari, you’ll check in at your hotel in Habarana, where you’ll spend a peaceful night surrounded by nature.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Afternoon game drive (Elephant safari) 3 hours"],
      optional: ["Experience an authentic Spa treatment at Habarana 30 USD onwards", "Visit Anuradhapura ancient kingdom 25 USD"]
    },
    {
      day: "Day 4",
      title: "Scenic Journey to Wasgamuwa with Local Flavors",
      desc: "After breakfast, you will check out from your hotel in Habarana and begin your journey to Wasgamuwa, a picturesque drive of approximately 120 km that takes around 2 hours.\n\nOn the way, you’ll have the opportunity to explore optional activities tailored to your interests—just ask your tour guide, your local subject expert, for personalized recommendations.\n\nAs a special highlight, Wild Ceylon has arranged a traditional farmer’s lunch, offering you an authentic taste of Sri Lankan village life and cuisine—a truly immersive cultural experience.\n\nAfter this enriching day, you’ll arrive in Wasgamuwa and check in at your hotel for a relaxing overnight stay, surrounded by the serenity of nature.",
      meals: "Breakfast, Farmer’s lunch",
      accom: "Hotel or Guest house",
      optional: ["Visit Lion’s rock ( sigiriya ) 35 USD + tax", "Visit Polonnaruwa ancient kingdom 25 USD", "Extra game drive in Minneriya NP – 70 USD per person"]
    },
    {
      day: "Day 5",
      title: "Full-Day Safari Adventure in Wasgamuwa National Park",
      desc: "Another exciting day awaits! Early in the morning, you’ll meet your guide and head to Wasgamuwa National Park for a morning game drive from 6:00 AM to 9:00 AM. This park is renowned for its thriving population of Sri Lankan elephants, offering you a memorable chance to witness these gentle giants in their natural habitat.\n\nAfter the safari, return to your hotel and enjoy a well-deserved breakfast. Take some time to relax and enjoy the peaceful surroundings.\n\nIn the afternoon, you’ll set off once again with your guide for a second game drive in the national park from 3:00 PM to 6:00 PM, giving you another opportunity to spot wildlife and take in the natural beauty of the area.\n\nAfter the safari, head back to your hotel for a relaxing evening. Dinner is included tonight, and you’ll spend another restful night at your Wasgamuwa hotel.",
      meals: "Breakfast, Dinner",
      accom: "Hotel or Guest house",
      included: ["Morning game drive (Elephant safari) 3 hours", "Afternoon game drive (Elephant safari) 3 hours"]
    },
    {
      day: "Day 6",
      title: "Journey to Nuwara Eliya - The Little England",
      desc: "Welcome to Day 06 of your Sri Lankan adventure! Today, after breakfast, you will check out from your hotel in Wasgamuwa and begin your scenic journey to Nuwara Eliya via the historic city of Kandy. The drive takes you from the dry lowlands to the misty hills—so get ready for a change in climate. Known as the \"Little England\" of Sri Lanka, Nuwara Eliya offers a cool, refreshing escape. Don't forget to bring warm clothing to stay comfortable in the hill country's crisp air.\n\nAs part of Wild Ceylon’s commitment to community development, you’ll enjoy a complimentary lunch at a local kitchen run by Sri Lankan women. This initiative supports a government-backed women empowerment program, allowing you to not only enjoy authentic traditional cuisine but also contribute to a meaningful cause.\n\nThroughout the journey, you’ll have the option to engage in optional activities, which your guide will be happy to arrange based on your preferences.\n\nLater in the evening, you’ll check in at your hotel in Nuwara Eliya for a relaxing overnight stay amidst the scenic highlands.",
      meals: "Breakfast, Lunch",
      accom: "Hotel",
      optional: ["Visit the sacred temple of tooth relic of Buddha in Kandy 7 USD", "Visit Royal botanical garden in Kandy 10 USD", "Visit a Tea factory & tea plucking experience 3 USD"]
    },
    {
      day: "Day 7",
      title: "Horton Plains Trekking & Descent to Udawalawe",
      desc: "Get ready for another exciting and refreshing day—you’ll be exploring Sri Lanka at around 1,900 meters above sea level!\n\nEarly in the morning, you’ll depart for Horton Plains National Park, a UNESCO World Heritage Site known for its stunning landscapes and the famous World’s End viewpoint. Your hotel will provide a packed breakfast for the journey. The park is located 32 km away and takes about 1 hour to reach.\n\nUpon arrival, enjoy your breakfast before beginning the 9 km nature trail, which typically takes around 3 hours to complete. During your trek, you’ll pass through cloud forests, grasslands, and waterfalls, all while taking in breathtaking mountain views.\n\nAfter returning to the car park, you’ll head back to your hotel to check out. It’s time to say goodbye to Sri Lanka’s “winter” and descend back into the island’s warm and sunny lowlands.\n\nAs always, there are optional activities along the way for those looking to personalize their experience with more cultural or nature-based adventures.\n\nIn the late evening, you’ll arrive in Udawalawe and check in at your accommodation for a relaxing overnight stay.",
      meals: "Breakfast",
      accom: "Campsite",
      included: ["Trekking at Horton plains NP – 3 hours"],
      optional: ["Visit nine arches bridge & Mini adam’s peak – No entrance fee"]
    },
    {
      day: "Day 8",
      title: "Full-Day Safari in Udawalawe National Park",
      desc: "Another thrilling day in the wild awaits! Early in the morning, you’ll meet your guide and head out for a morning safari in Udawalawe National Park, from 6:00 AM to 9:00 AM. This park is one of the best places in Sri Lanka to see herds of wild elephants, often referred to as the gentle giants of the island.\n\nAfter your safari, return to your accommodation to enjoy a relaxing breakfast. You’ll then have some free time to unwind, explore the surroundings, or simply enjoy the tranquil atmosphere.\n\nIn the afternoon, you’ll head back to the park for another game drive from 3:00 PM to 6:00 PM, offering more opportunities to spot elephants, deer, buffalo, crocodiles, and a variety of bird species in their natural habitat.\n\nAfter an action-packed day, return to your accommodation in Udawalawe for a peaceful evening. Dinner is included tonight, served at the campsite, making for a perfect end to your day in the wild.",
      meals: "Breakfast, Dinner",
      accom: "Campsite",
      included: ["Morning game drive (Elephant safari) 3 hours", "Afternoon game drive (Elephant safari) 3 hours"]
    },
    {
      day: "Day 9",
      title: "Departure",
      desc: "Your incredible journey through Sri Lanka comes to an end today. Our guide will assist you with a timely transfer to the airport or your next destination, ensuring a smooth and comfortable departure.\n\nIf you wish to extend your stay or explore more of Sri Lanka, please feel free to discuss your plans with us before the final day of your trip. We’re here to help customize your travel experience!",
      meals: "Breakfast",
      accom: "-",
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/Elephant-1024x682.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Elephas</h1>
          <p className="trip-duration">08 Nights & 09 Days</p>
          <p className="trip-hero-desc">An incredible journey celebrating the Sri Lankan Elephant, exploring Udawalawe, Minneriya, and wild habitats.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Wilpattu, Habarana, Wasgamuwa, Udawalawe...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>8 Game Drives, 1 Trekking</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Wildlife, Elephant Safari, Nature</span>
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
                  <span>8 Breakfasts, 2 Lunches, 3 Dinners</span>
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
                  <span>2 star or similar Hotel, Guest house, Campsite</span>
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
                    <li>2 Game drives (Elephant safari) at Udawalave NP</li>
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
                      <li>Experience authentic Spa treatment at Habarana 30 USD onwards</li>
                      <li>Extra game drive in Minneriya NP – 70 USD per person</li>
                      <li>Visit the Lion’s rock 35 USD + tax</li>
                      <li>Visit Anuradhapura ancient kingdom 25 USD</li>
                      <li>Visit Polonnaruwa ancient kingdom 25 USD</li>
                      <li>Visit the sacred temple of tooth relic of Buddha in Kandy 7 USD</li>
                      <li>Visit Royal botanical garden in Kandy 10 USD</li>
                      <li>Visit a Tea factory & tea plucking experience 3 USD</li>
                      <li>Visit nine arches bridge & Mini adam’s peak – No entrance fee</li>
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
              <p>Imagine waking up to the gentle morning breeze as your adventure begins on the paradise island of Sri Lanka. From the moment you land and meet your friendly local guide, you know this trip will be more than just a vacation—it’s a journey into the heart of nature, culture, and authentic Sri Lankan life.</p>
              <p>Your days are filled with thrilling wildlife safaris in some of Sri Lanka’s most famous national parks. Picture yourself driving through the wild landscapes of Wilpattu, spotting elusive leopards and herds of majestic elephants roaming freely. The excitement of a morning safari, followed by the calm relaxation at your cozy hotel, creates the perfect balance of adventure and comfort.</p>
              <p>As you travel from the dry lowlands to the misty highlands, you experience the island’s rich diversity firsthand. The cool, refreshing air of Nuwara Eliya, known as Sri Lanka’s “Little England,” offers a charming contrast to the warm plains below. Here, you savor traditional Sri Lankan meals prepared by local women—meals that not only delight your taste buds but also support community empowerment projects, making your travel meaningful on more levels.</p>
              <p>Hiking through Horton Plains National Park, you traverse landscapes that feel like stepping into a storybook—with sweeping views and hidden waterfalls. Each step connects you more deeply to Sri Lanka’s natural beauty.</p>
              <p>The journey continues as you descend to Udawalawe, home to the gentle giants of Sri Lanka—the elephants. Twice a day, you venture into the wild to witness these incredible creatures in their natural habitat, creating memories that will last a lifetime. The thrill of spotting wildlife combined with warm, authentic hospitality at your campsite makes for truly special days.</p>
              <p>Throughout your trip, every moment is carefully curated to balance adventure, culture, and comfort. Optional activities offer flexibility for you to explore beyond the typical path, while your expert guide ensures a seamless experience. And when the time comes to say goodbye, you leave Sri Lanka not just with souvenirs, but with a heart full of stories, connections, and an unforgettable experience that will inspire you to return again.</p>
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

export default ElephasTripPage;
