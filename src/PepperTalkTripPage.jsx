import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const PepperTalkTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Arrival & First Rice & Curry in Anuradhapura", 
      desc: "Your Sri Lankan foodie adventure begins the moment you arrive! After meeting your guide, we journey north to the ancient city of Anuradhapura, the heart of Sri Lanka’s first kingdom and a UNESCO World Heritage Site.\n\nAs you settle into the rhythm of local life, it’s time for your first taste of authentic Sri Lankan cuisine — a vibrant rice & curry buffet lunch, served with a variety of local vegetables, lentils, and spicy sambols. This is more than just a meal; it’s your first step into the island’s rich culinary heritage.\n\nAfter lunch, check in at your comfortable hotel and unwind.\n\nIn the evening, explore the spiritual side of Anuradhapura with a guided visit to the sacred Greater Monastery, where centuries-old stupas and ancient banyan trees whisper stories of devotion and history.\n\nDinner tonight is open — choose to venture into Anuradhapura town for a local bite or simply relax at the hotel.\nOvernight stay in Anuradhapura.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      included: ["First Rice & Curry meal experience in Srilanka", "Evening visit the Greater Monastery in Anuradapura Kingdom – Guided walking tour ( 2 hours )"]
    },
    { 
      day: "Day 2", 
      title: "Cycling in Anuradhapura & Journey to Jaffna", 
      desc: "After a hearty breakfast, check out from your hotel and get ready for an unforgettable morning — a cycling tour through the sacred city of Anuradhapura. Pedal past ancient stupas, serene reservoirs, and crumbling ruins that whisper stories from over 2,000 years ago. It’s the perfect way to connect with the history and soul of Sri Lanka’s first kingdom.\n\nMidway through the tour, take a well-earned break with a special picnic lunch near the Elephant Pond (Eth Pokuna) — a peaceful and scenic spot steeped in history.\n\nIn the afternoon, continue your journey northward to Jaffna, the cultural capital of Sri Lanka’s Tamil heritage. Arrive by evening and check in to your hotel.\n\nThe rest of the evening is yours to relax. Dinner is optional, with the choice to dine at the hotel or explore Jaffna’s local eateries for your first taste of Northern flavors.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      included: ["Cycling tour in Anuradapura Kingdom followed by a picnic lunch near the Elephant pond"]
    },
    { 
      day: "Day 3", 
      title: "Jaffna City Tour & Cooking Experience", 
      desc: "After breakfast, dive into the heart of Jaffna with a guided Jaffna city tour — a journey through the rich Tamil culture and colonial history of Sri Lanka’s northern capital.\n\nVisit the iconic Dutch Fort, the sacred Nallur Kovil (Hindu temple), the historic Jaffna Public Library, and the lively Jaffna local market. No visit to the city is complete without stopping at the famous Rio Ice Cream parlour, where you’ll enjoy a cool treat that’s beloved by locals.\n\nNext, head to a local home for a warm and welcoming experience — a traditional homemade Tamil lunch with a local family. It’s an intimate way to learn about Jaffna’s unique cuisine, hospitality, and daily life.\n\nAfter lunch, return to your hotel and take some time to relax.\n\nAs the evening sets in, we’ll head to Casuarina Beach, known for its soft sands and calm waters. Sip on a refreshing Sri Lankan cocktail while watching a stunning northern sunset.\n\nEnd your day with a hands-on Tamil cooking demonstration in a local home, followed by a delicious authentic Jaffna-style dinner — a flavorful and unforgettable culinary experience.\nReturn to hotel & overnight stay in Jaffna.", 
      meals: "Breakfast, Lunch, Dinner", 
      accom: "Hotel", 
      included: ["Jaffna city tour including Jaffna fort & Rio ice cream", "Home made Jaffna lunch meal with a Tamil family", "Sunset cocktail on casuarina beach", "Jaffna style cooking experience and dinner"]
    },
    {
      day: "Day 4",
      title: "Village Tour & Authentic Dosa in Kandy",
      desc: "After breakfast, say goodbye to Jaffna and begin your scenic journey south towards Habarana, where you’ll step into rural Sri Lankan life with an immersive village tour. Travel by traditional modes of transport, meet local villagers, and walk through lush fields and quiet paths surrounded by nature.\n\nYour efforts will be rewarded with a fresh farmer’s lunch, served in authentic village style — cooked with locally sourced ingredients and prepared the traditional way over wood fire. It’s a delicious, grounding experience that connects you to the roots of Sri Lanka’s rural cuisine.\n\nAfter lunch, continue your journey to the cultural capital, Kandy, nestled in the central highlands.\n\nArrive in the evening and check in to your hotel. Tonight, dinner is arranged at the much-loved Balaji Dosa Café, a local favorite serving authentic North Indian vegetarian cuisine — perfect for a flavorful end to your travel day.\nOvernight stay in Kandy.",
      meals: "Breakfast, Dinner",
      accom: "Hotel",
      included: ["Village tour followed by farmer’s lunch in Sigiriya", "Authentic north Indian Dosa dinner at Balaji Café in Kandy"]
    },
    {
      day: "Day 5",
      title: "Kandy Temple & Kandyan Cooking Demonstration",
      desc: "After breakfast, begin your day with a spiritual and cultural experience — a visit to the Sacred Temple of the Tooth Relic, one of Sri Lanka’s most revered Buddhist sites. Nestled on the edge of Kandy Lake, this UNESCO World Heritage Site offers a peaceful yet powerful glimpse into the island’s spiritual legacy and royal past.\n\nNext, immerse yourself in the flavors of the hill country with a hands-on Kandyan cooking demonstration at the beautifully set Café Onchilla (Swing). Learn the secrets of age-old recipes and fragrant spice blends before sitting down to enjoy a home-style Kandyan lunch, freshly prepared by you and your hosts.\n\nAfter lunch, the afternoon is yours to enjoy. You may choose to return to your hotel and relax — or explore further with optional experiences.\n\nIn the evening, you have the option to attend the vibrant Kandy Cultural Dance Show (approx. USD 7) — a captivating performance of traditional music, drumming, and dance that brings Kandyan heritage to life.\nDinner is at your leisure, with options available at the hotel or nearby restaurants.\nOvernight stay in Kandy.",
      meals: "Breakfast, Lunch",
      accom: "Hotel",
      included: ["Visit scared tooth relic temple in Kandy", "Cooking demonstration & Lunch in Café onchilla ( Swing ) in Kandy"],
      optional: ["Kandy city walk", "Gem & Wood artisan – Free of charge", "Silk & Batik artisan – Free of charge", "Peradeniya royal botanical garden – 12 USD", "Kandy cultural dance show – 7 USD"]
    },
    {
      day: "Day 6",
      title: "Tea Plucking & Journey to Galle",
      desc: "After breakfast, check out from your hotel in Kandy and begin your scenic journey south toward the coastal city of Galle — but not before experiencing one of Sri Lanka’s most iconic traditions.\n\nEn route, stop at the Giramagama Tea Factory for a fascinating tea plucking and tasting experience. Walk through lush tea plantations, try your hand at plucking the perfect leaves, and learn how Ceylon tea is processed — from leaf to cup. Sip freshly brewed tea as you take in panoramic views of the rolling hills.\n\nContinue your journey down to the southern coast and arrive in Galle by evening. After checking in at your hotel, head out to the laid-back shores of Unawatuna Beach, where the Sea of Srilanka meets golden sands and palm trees sway in the sea breeze.\n\nEnjoy the option of dinner right on the beach, with fresh seafood and tropical flavors under the stars.\nReturn to the hotel afterward and unwind.\nOvernight stay in Galle.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Visit a Tea factory & tea plucking experience", "Visit Unawatuna Beach"]
    },
    {
      day: "Day 7",
      title: "Galle Cooking Demonstration & Dutch Fort Tour",
      desc: "After breakfast, dive into the coastal culinary culture of Galle with a hands-on cooking experience hosted by a local chef. Begin the morning with an immersive visit to a bustling local market, where you’ll shop alongside your host for fresh vegetables, aromatic spices, and locally sourced meats — just as any Sri Lankan home cook would.\n\nReturn to the host’s home and roll up your sleeves for an interactive Galle-style cooking demonstration. You’ll learn to prepare iconic southern dishes using traditional methods and ingredients — a perfect balance of coastal spice and tropical richness. Once everything’s ready, sit down and enjoy the delicious home-cooked lunch you’ve helped create.\nAfter lunch, return to your hotel for a well-deserved rest.\n\nAs the sun begins to set, head out for a guided walking tour of the Galle Dutch Fort, a UNESCO World Heritage Site. Wander along cobbled streets, admire colonial architecture, and listen as your guide brings the fort’s 400-year-old history to life. At the end of the tour, enjoy free time to explore the fort area on your own — browse quaint boutiques, art galleries, or simply soak in the sea views from the ramparts.\n\nDinner tonight is arranged at the charming Coffee Bean Restaurant in the Dutch Hospital precinct, offering a modern dining experience with colonial flair.\nReturn to the hotel after dinner. Overnight stay in Galle.",
      meals: "Breakfast, Dinner",
      accom: "Hotel",
      included: ["Cooking demonstration & Lunch in Galle style", "Dutch fort in Galle – Guided walking tour", "Dinner at historic Dutch Hospital premises in Galle"]
    },
    {
      day: "Day 8",
      title: "Journey to Colombo & Farewell Dinner",
      desc: "After breakfast, check out from your Galle hotel and begin your journey to Sri Lanka’s bustling capital — Colombo.\n\nAlong the way, you’ll have the chance to enjoy two unique optional experiences like a visit to a Turtle Hatchery or a peaceful Madu River mangrove boat safari.\n\nOnce you arrive in Colombo, an optional lunch stop is available at the elegant Ceylon Curry Club, a fine-dining restaurant located in the historic Dutch Hospital precinct, where modern culinary flair meets traditional Sri Lankan flavors.\n\nAfter lunch, check in to your hotel. The afternoon is yours to relax, shop, or explore the city at your own pace.\n\nIn the evening, gather for a special finale to your foodie journey — a farewell dinner at Nuga Gama, the award-winning Sri Lankan village-style restaurant nestled beneath a massive banyan tree at Cinnamon Grand Colombo. Celebrate the flavors, friendships, and memories made on this incredible journey through Sri Lanka’s culinary heart.\nReturn to the hotel after dinner. Overnight stay in Colombo.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Farewell Dinner at Nuga gama ( banyan tree village ) at Cinnamon Grand hotel Colombo"],
      optional: ["Turtle hatchery – 10 USD", "Madu river Mangroves boat safari – 20 USD per person"]
    },
    {
      day: "Day 9",
      title: "Colombo City Tour & Departure",
      desc: "After breakfast, check out from your hotel as your unforgettable Sri Lankan foodie and cultural journey comes to a close — but not before one last taste of the island’s vibrant city life.\n\nSpend the morning on a guided Colombo city tour, exploring a blend of colonial charm and modern urban energy. Visit iconic landmarks such as the Independence Square, Gangaramaya Temple, Old Parliament, and the bustling streets of Pettah Market. It’s the perfect snapshot of Sri Lanka’s capital — diverse, colorful, and full of character.\n\nAfter the tour, there are optional lunch choices available at some of Colombo’s popular dining spots — whether you’re in the mood for fusion, fine dining, or a casual local bite.\n\nFollowing lunch, it’s time to head to the airport for your departure, carrying with you rich memories, new friendships, and the unforgettable flavors of Sri Lanka.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Colombo city tour – Guided tour"]
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/Peper-talk-the-foodie-tour.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Pepper talk - The foodie tour</h1>
          <p className="trip-duration">08 Nights & 09 Days</p>
          <p className="trip-hero-desc">The ultimate foods & culinary experience in Srilanka with lots of foods and cooking demonstrations & plenty of spices.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Anuradhapura, Jaffna, Kandy, Galle, Colombo...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>Cooking Classes, City Tours, Village Tours</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Culinary, Culture, Foodie Tour</span>
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
                  <span>08 Breakfasts, 6 Lunches, 4 Dinners</span>
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
                  <span>3 star / 4 star or similar Hotel, Guest house</span>
                </div>
              </div>
              <div className="inclusion-item">
                <Users size={24} />
                <div>
                  <strong>Support staff 24 X 7</strong>
                  <span>Full time service of a National / Chauffer tourist guide ( subject expert )</span>
                </div>
              </div>
            </div>
            <div className="inclusions-right">
              <div className="inclusion-item">
                <CheckCircle size={24} />
                <div>
                  <strong>Included activities</strong>
                  <ul>
                    <li>First Rice & Curry meal experience in Srilanka</li>
                    <li>Jaffna style cooking experience and dinner</li>
                    <li>Cooking demonstration & Lunch in Café onchilla ( Swing ) in Kandy</li>
                    <li>Cooking demonstration & Lunch in Galle style</li>
                    <li>Farewell Dinner at Nuga gama (banyan tree village)</li>
                    <li>Cycling tour in Anuradapura Kingdom & Evening visit to Greater Monastery</li>
                    <li>Jaffna city tour & Home made Jaffna lunch meal with a Tamil family</li>
                    <li>Village tour followed by farmer’s lunch in Sigiriya</li>
                    <li>Authentic north Indian Dosa dinner at Balaji Café in Kandy</li>
                    <li>Visit scared tooth relic temple in Kandy & Tea factory experience</li>
                    <li>Visit Unawatuna Beach & Dutch fort in Galle</li>
                    <li>Dinner at historic Dutch Hospital premises in Galle</li>
                    <li>Colombo city tour – Guided tour</li>
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
                      <li>Gem & Wood artisan – Free of charge</li>
                      <li>Silk & Batik artisan – Free of charge</li>
                      <li>Kandy cultural dance show – 7 USD</li>
                      <li>Kandy city walk</li>
                      <li>Kandy royal botanical garden – 12 USD</li>
                      <li>Turtle hatchery – 10 USD</li>
                      <li>Madu river Mangroves boat safari – 20 USD per person</li>
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
              <p>This isn’t just a food tour — it’s a story told through spice, tradition, and soul.</p>
              <p>You’ll start your journey the way every Sri Lankan does — with a warm plate of rice and curry, rich with coconut, turmeric, and love. From there, each region unfolds like a new chapter: the sacred silence of Anuradhapura’s ancient monasteries, the bold, fiery flavors of Jaffna’s Tamil kitchens, the fragrant cinnamon air in Galle, and the misty hills of Kandy where tea leaves and temple chants swirl in the breeze.</p>
              <p>You’ll sit down for meals not just in restaurants, but in homes and villages, where real stories are shared over steaming pots and sizzling pans. Learn to cook like the locals — from traditional Jaffna crab curry to Galle-style coconut sambol — and savor the joy of slow food and genuine hospitality.</p>
              <p>Alongside each dish, you’ll walk through living history — cycle past ancient ruins, sip cocktails on quiet beaches, pluck your own tea in the highlands, and dine beneath a banyan tree in the heart of Colombo.</p>
              <p>Whether you’re a culinary explorer or a cultural enthusiast, this trip will awaken your senses, deepen your understanding, and leave you with memories — and flavors — that stay long after the journey ends.</p>
            </div>

            <div className="trip-features-sidebar">
              <h2 className="section-title">Is this the correct trip for you?</h2>
              <ul className="correct-trip-list">
                <li>If you believe the best way to understand a country is through its food — this trip is made for you.</li>
                <li>This journey is for the adventurous foodie, the culture lover, and the curious traveler who wants more than a checklist of landmarks.</li>
                <li>You don’t need to be a professional chef — just someone open to new tastes, new stories, and new experiences.</li>
                <li>Comfortable 3–4 star stays and private transport keep the trip easy and relaxed.</li>
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
                    <div className="diff-bar" style={{ width: '20%' }}>Mild</div>
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

export default PepperTalkTripPage;
