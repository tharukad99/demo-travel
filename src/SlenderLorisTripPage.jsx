import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const SlenderLorisTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Arrival & Journey to Dambulla", 
      desc: "Welcome to Sri Lanka! Upon your arrival, one of our friendly representatives will meet you at the airport or your hotel in Negombo. Today, you’ll embark on a scenic 4-hour drive covering 160 km to the cultural city of Dambulla.\n\nBefore checking in at the hotel, there’s an optional activity available—feel free to consult your tour guide for personalized recommendations tailored to your interests.\n\nOnce you arrive in Dambulla, you’ll check in to your hotel and enjoy a leisurely afternoon at your own pace.\n\nAs evening falls, get ready for a unique and exciting Slender Loris expedition tour, where you’ll have the chance to observe these elusive nocturnal primates in their natural habitat.\n\nAfter the tour, return to the hotel for a comfortable overnight stay.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Slender loris expedition trekking – 2 hours"],
      optional: ["Visit Dambulla cave temple (ancient cave art gallery) 7 USD"]
    },
    { 
      day: "Day 2", 
      title: "Travel to Nuwara Eliya via Kandy", 
      desc: "Welcome to Day 2 of your Sri Lankan adventure! Today, you’ll check out from your hotel and set off on a scenic journey to the hill station of Nuwara Eliya, traveling via the historic city of Kandy.\n\nKnown as the “winter” of Sri Lanka, Nuwara Eliya offers a refreshing cool climate, so be sure to pack appropriate clothing to stay comfortable during your visit.\n\nAs part of Wild Ceylon’s commitment to community development and sustainable tourism, you’ll enjoy a complimentary lunch at a local eatery where women prepare authentic Sri Lankan traditional cuisine. This meal supports a government-backed women’s empowerment project, allowing your travel to have a meaningful impact.\n\nThroughout the day, optional activities are available to enhance your experience. Your expert tour guide will be happy to recommend the best options while managing your time efficiently.\n\nLater in the evening, you’ll check in to your hotel in Nuwara Eliya for a relaxing overnight stay.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      optional: ["Visit Spice & Herbal garden (Education tour)", "Visit the sacred temple of tooth relic of Buddha in Kandy 7 USD", "Visit Royal botanical garden in Kandy 10 USD", "Visit Batik & Gem artisan", "Visit a Tea factory & tea plucking experience 3 USD"]
    },
    { 
      day: "Day 3", 
      title: "Horton Plains Trekking & Descent to Yala", 
      desc: "Get ready for an exciting day at approximately 1,900 meters above sea level! Early in the morning, you’ll set off for Horton Plains National Park. Your hotel will prepare a packed breakfast for you to enjoy before you begin your trek.\n\nHorton Plains is just a 32 km, one-hour drive from your hotel. Upon arrival, you can have your breakfast before embarking on a scenic 9 km walk, which typically takes around 3 hours. This nature trail offers stunning views, unique wildlife, and iconic spots like World’s End.\n\nAfter your walk, you’ll return to the car park and head back to the hotel to check out. It’s time to say goodbye to the cool highlands—the “winter” of Sri Lanka—as you descend to the warmer lowlands.\n\nThere are optional activities available if you want to explore more of Sri Lanka’s diverse experiences. Later in the evening, you’ll check in at your hotel in Yala for a relaxing overnight stay.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Morning trekking at Horton plains NP – 3 hours"],
      optional: ["Visit nine arches bridge & Mini adam’s peak – No entrance fee"]
    },
    {
      day: "Day 4",
      title: "Bundala Birdwatching & Yala Leopard Safari",
      desc: "Today, your guide will meet you early in the morning for an exciting morning safari at Bundala National Park from 6:00 AM to 9:00 AM. After exploring Bundala’s rich birdlife and diverse ecosystems, you’ll return to your hotel for a delicious breakfast.\n\nEnjoy some leisure time to relax and take in the beautiful surroundings before your next adventure.\n\nIn the afternoon, get ready for an exhilarating game drive at Yala National Park from 3:00 PM to 6:00 PM. Yala is famous for its population of leopards, elephants, and a variety of other wildlife, offering incredible safari experiences.\n\nAfter the safari, you’ll return to your hotel for a comfortable overnight stay.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning game drive (Bird watching) 3 hours", "Afternoon game drive (Mammals & Birds) 3 hours"]
    },
    {
      day: "Day 5",
      title: "Yala Safari & Journey to Udawalawe",
      desc: "Today, you will check out from Yala after an exciting morning safari in Yala National Park. Enjoy wildlife spotting from early morning until returning for a hearty breakfast at your accommodation.\n\nAfter breakfast, embark on a scenic 2-hour drive (100 km) to Udawalawe National Park. In the afternoon, prepare for another thrilling game drive from 2:00 PM to 5:00 PM, where you’ll have the chance to see elephants and other wildlife in their natural habitat.\n\nLater, check in at your cozy campsite in Udawalawe, where your evening includes a delicious dinner accompanied by live music and a bonfire, offering the perfect way to unwind after a day of adventure.",
      meals: "Breakfast, Dinner",
      accom: "Campsite",
      included: ["Morning game drive in Yala NP (Leopard safari) – 3 hours", "Afternoon game drive in Udawalave NP (Elephant safari) – 3 hours"]
    },
    {
      day: "Day 6",
      title: "Journey to Sinharaja Rainforest",
      desc: "Welcome to Day 6 of your unforgettable Sri Lanka tour! After enjoying breakfast, you will check out from your campsite. For early risers, there’s an optional morning safari available before breakfast—just consult your tour guide to plan this exciting experience.\n\nToday, you’ll embark on a scenic 2-hour drive covering 70 km to the lush Sinharaja Tropical Rainforest, a UNESCO World Heritage Site renowned for its incredible biodiversity.\n\nUpon arrival, check in to your hotel and take some time to relax amidst the tranquil surroundings.\n\nAs the day cools, prepare for an exciting evening bird watching tour in Sinharaja Rainforest, where you’ll have the chance to spot rare and endemic bird species in their natural habitat.\n\nAfter the tour, return to your hotel for a delicious included dinner and a restful overnight stay.",
      meals: "Breakfast, Dinner",
      accom: "Guest house",
      included: ["Evening bird watching trekking at Singha raja rain forest – 3 hours"],
      optional: ["Extra game drive in Udawalave NP – 70 USD per person", "Milk feeding at Elephant transit home – 5 USD"]
    },
    {
      day: "Day 7",
      title: "Sinharaja Trekking & Journey to Kitulgala",
      desc: "Your guide will meet you early in the morning for an invigorating morning trek in Sinharaja Rainforest from 6:00 AM to 9:00 AM. Explore the lush biodiversity of this UNESCO World Heritage Site before heading back to the hotel for a delicious breakfast.\n\nAfter breakfast, around 10:00 AM, you will check out and begin your scenic drive to Kitulgala, a journey of approximately 6 hours.\n\nArriving at the Kitulgala campsite around 4:00 PM, you’ll check in and have the rest of the evening free to relax or enjoy optional activities recommended by your guide.\n\nThe day concludes with a BBQ dinner included at the campsite, followed by an overnight stay under the serene surroundings of Kitulgala.",
      meals: "Breakfast, Dinner",
      accom: "Camp site",
      included: ["Morning bird watching trekking at Singha-raja rain forest – 3 hours"],
      optional: ["White water rafting & adventure water sports"]
    },
    {
      day: "Day 8",
      title: "Birdwatching in Kitulgala & Departure",
      desc: "On your final day in Sri Lanka, your guide will meet you early in the morning for a bird-watching trek in the Kitulgala forest from 6:00 AM to 9:00 AM. This lush rainforest is home to several rare and endemic bird species, offering the perfect ending to your nature-filled adventure.\n\nAfter your trek, return to the campsite for a relaxing breakfast. Then, it’s time to check out and begin your journey back. Your guide will transfer you to the airport or to any other preferred destination.\n\nIf you wish to extend your stay, feel free to speak with us before the end of your trip—we’re happy to help you plan additional experiences.",
      meals: "Breakfast",
      accom: "-",
      included: ["Morning Bird watching trekking at Kitulgala forest – 3 hours"]
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/red-slender-loris.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Slender Loris</h1>
          <p className="trip-duration">07 Nights & 08 Days</p>
          <p className="trip-hero-desc">A specialized wildlife adventure focused on spotting the elusive and fascinating nocturnal Slender Loris.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Dambulla, Nuwara Eliya, Yala, Udawalawe...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>4 Game Drives, 5 Trekkings</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Wildlife, Expedition, Nature</span>
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
                  <span>7 Breakfasts, 1 Lunch, 3 Dinners</span>
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
                  <strong>Support staff 24X7</strong>
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
                    <li>1 Slender loris expedition trekking</li>
                    <li>1 Trekking at Horton plains NP</li>
                    <li>2 Game drives (Leopard safari) at Yala NP</li>
                    <li>1 Game drive (Bird watching) at Bundala NP</li>
                    <li>1 Game drive (Elephant safari) at Udawalava NP</li>
                    <li>2 Trekking (Bird watching) at Singharaja rain forest</li>
                    <li>1 Trekking (Bird watching) at Kitulgala</li>
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
              <p>If you’re a nature lover, wildlife enthusiast, or simply someone looking for a unique travel experience, this 7-night, 8-day wildlife expedition across Sri Lanka is a journey you’ll never forget. This isn’t just about ticking animals off a checklist—it’s about immersing yourself in three distinct ecosystems: the dry evergreen forests, the misty wet mountain forests, and the vibrant tropical rainforests of this paradise island.</p>
              <p>At the heart of the itinerary is the Slender Loris Expedition, a rare and magical opportunity to witness one of Sri Lanka’s most elusive nocturnal creatures. But the adventure doesn’t stop there—you’ll be going on 4 thrilling game drives and 5 guided treks, offering close encounters with elephants, leopards, exotic birds, reptiles, and countless other species in their natural habitats.</p>
              <p>What makes this journey even more special is its pace and purpose. You’ll be traveling through diverse landscapes—from the serene highlands of Nuwara Eliya to the untamed wilderness of Yala and the dense canopies of Sinharaja—all in under a week, guided by a professionally qualified wildlife expert who will be with you 24/7. Their deep knowledge of flora, fauna, birdlife, and mammals adds a rich layer to every step you take.</p>
              <p>You’ll stay in eco-friendly lodges, standard campsites, and charming guest houses, chosen not for luxury, but for their closeness to nature and their authentic charm. The meal plan includes bed & breakfast, with a locally prepared lunch and three special dinners, offering you a taste of Sri Lanka’s diverse cuisine as part of a responsible travel experience.</p>
              <p>Best of all, this tour leaves room for spontaneity—with free time for optional activities and cultural moments, from traditional cooking experiences to insights into Sri Lanka’s history and heritage. This isn’t just a wildlife tour—it’s a carefully curated expedition where every moment is designed to bring you closer to nature, culture, and yourself. It’s wild, it’s raw, it’s real—and you’re going to love every second of it.</p>
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

export default SlenderLorisTripPage;
