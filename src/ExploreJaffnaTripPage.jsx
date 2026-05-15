import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const ExploreJaffnaTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Scenic Train to Jaffna & City Tour", 
      desc: "Begin your cultural adventure with an early morning departure from Colombo Fort Railway Station at 5:45 AM, boarding a scenic train that winds through the diverse landscapes of Sri Lanka on its way to the island’s northern capital — Jaffna.\n\nUpon arrival, check in at your hotel and take a moment to refresh before heading out to explore the city.\n\nIn the evening, embark on a guided Jaffna City Tour, visiting:\n- The historic Jaffna Fort, once a stronghold of colonial powers\n- Bustling local markets filled with northern flavors and crafts\n- The vibrant and spiritual Nallur Kandaswamy Kovil, a revered Hindu temple\n\nFor dinner, enjoy one of Jaffna’s authentic local restaurants (dinner at your own preference and expense).\nOvernight stay in Jaffna.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Train ride from Colombo to Jaffna", "Jaffna city tour including Jaffna Fort"],
      optional: ["Rio Ice cream in Jaffna – 2 USD onwards"]
    },
    { 
      day: "Day 2", 
      title: "Jaffna Peninsula Day Tour", 
      desc: "After a hearty breakfast, explore the unique natural and cultural attractions of northern Sri Lanka:\n\n- Point Pedro – The northernmost tip with stunning seascapes.\n- Nilavarai Natural Pond – A rare underground water spring surrounded by lush greenery.\n- Keeramalei Hot Water Spring – Enjoy the soothing warmth of natural geothermal waters.\n- Kadurugoda Buddhist temple – A peaceful Buddhist site known for its traditional architecture and its effective evidence on the Buddhist history in Jaffna.\n\nLunch stop at a local family – feel the home made Jaffna flavors.\nEvening at leisure or relax at the hotel.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      included: ["Jaffna peninsular day tour"]
    },
    { 
      day: "Day 3", 
      title: "Nagadeepa Ferry & Cultural Experiences", 
      desc: "Start your day after breakfast with a scenic ferry ride across the Palk Strait.\n\n- Ferry to Nagadeepa Island: Journey to one of the most significant Buddhist pilgrimage sites in Sri Lanka, surrounded by peaceful waters and sacred traditions.\n- Visit Nagadeepa Purana Vihara: Explore the revered religious site believed to have been visited by Gautama Buddha during his second visit to Sri Lanka.\n- Discover Nearby Temples: Walk through the island’s tranquil paths and visit local Hindu temples and shrines.\n- Sunset Cocktail at Casuarina Beach: Unwind on the soft sands of Jaffna’s most famous coastal escape. Sip on a signature cocktail as the sun sets over the horizon.\n- Authentic Jaffna Cooking Class & Dinner: Join a local chef for a hands-on Jaffna cooking demonstration, learning to prepare traditional Northern Sri Lankan dishes. Then enjoy your meal as part of a flavor-packed dinner experience.\n\nAfter dinner, you’ll be transferred back to your hotel in Jaffna for a relaxing overnight stay.", 
      meals: "Breakfast, Dinner", 
      accom: "Hotel", 
      included: ["Ferry tour to Nagadeepa island & the ancient Buddhist temple", "Special sunset cocktail at Casuarina beach", "Cooking demonstration & Authentic Jaffna dinner experience"]
    },
    {
      day: "Day 4",
      title: "Journey to Trincomalee",
      desc: "After breakfast, check out from your Jaffna hotel and travel to Trincomalee via Vavuniya. Upon arrival, check in and enjoy a free afternoon — optional beachside lunch available.\n\nIn the evening, explore highlights of Trincomalee on a guided city tour, including:\n- Koneswaram Temple – A cliffside Hindu temple offering breathtaking ocean views.\n- The View of Trincomalee Harbor – The biggest and the oldest natural harbor in Srilanka as well as one of the oldest natural harbors in the world.\n- Fort Frederick – Historic Portuguese and Dutch fortifications. Maritime archaeological sites showcasing the city’s strategic importance.\n\nDinner options by the beach. Overnight stay in Trincomalee.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Trincomalee city tour"]
    },
    {
      day: "Day 5",
      title: "Nilaveli Beach & Cultural Experiences",
      desc: "Start your day with a relaxing visit to Nilaveli Beach, one of Sri Lanka’s most serene coastal spots. Spend up to 5 hours unwinding on a sunbed, swimming in turquoise waters, and enjoying lunch or snacks at a beachfront restaurant.\n\nVisit a local Palmyra toddy tapper, where a village woman will demonstrate the traditional method of tapping and fermenting Palmyra toddy – a mildly alcoholic, coconut-like drink unique to Northern Sri Lanka. Taste freshly tapped toddy paired with a local snack, while learning about the cultural significance of the Palmyra palm in the region.\n\nLater, enjoy an interactive cooking demonstration, where you’ll learn to prepare authentic Northern Sri Lankan dishes using local spices and techniques. End the evening with a delicious homemade-style dinner, full of rich flavors and cultural flair.\n\nReturn to your hotel for an overnight stay in Trincomalee.",
      meals: "Breakfast, Dinner",
      accom: "Hotel",
      included: ["Relax at Nilaveli Beach with optional beachside dining", "Discover Palmyra toddy-making with a local host", "Participate in a cooking class and enjoy a traditional dinner"]
    },
    {
      day: "Day 6",
      title: "Pigeon Island Snorkeling",
      desc: "Post breakfast, embark on a boat trip to Pigeon Island National Park, famed for its coral reefs and diverse marine life. Enjoy snorkeling in crystal-clear waters, exploring vibrant underwater ecosystems.\n\nAfter the tour, relax at the beach or your hotel for the rest of the day.\nOvernight stay in Trincomalee.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Pigeon island national park visit & Snorkeling"]
    },
    {
      day: "Day 7",
      title: "Journey to Habarana",
      desc: "After breakfast, check out and travel to Habarana, located in the heart of Sri Lanka’s Cultural Triangle.\n\nAlong the way, stop at the Dambulla Cave Temple, a UNESCO World Heritage Site featuring a series of ancient rock caves filled with over 150 Buddha statues and stunning ceiling murals dating back over 2,000 years.\n\nArrive in Habarana, a peaceful village surrounded by lush forest and lakes, known as a central base for exploring nearby cultural and wildlife attractions. Check in at your hotel and enjoy some leisure time.\n\nIn the evening, you have the option to embark on an exciting elephant safari in Minneriya National Park, home to the famous “Gathering” — where hundreds of wild elephants come together around the reservoir during the dry season.\nOvernight stay in Habarana.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Dambulla cave art temple – guided tour"],
      optional: ["Elephant safari at Minneriya national park – 70 USD per person"]
    },
    {
      day: "Day 8",
      title: "Polonnaruwa Ancient City",
      desc: "Begin your day with a scenic drive from Habarana to the ancient city of Polonnaruwa, a UNESCO World Heritage Site and once the thriving royal capital of Sri Lanka. Walk through beautifully preserved ruins, royal palaces, audience halls, and majestic stupas that date back over 800 years. As you explore, your guide will bring the history to life with fascinating stories and cultural insights.\n\nAfter the tour, enjoy a traditional Sri Lankan lunch at a local restaurant or village home. Savor freshly prepared rice and curry dishes, seasonal vegetables, and traditional accompaniments — a true taste of the island’s culinary heritage.\n\nFollowing lunch, return to your hotel in Habarana for a well-deserved rest. Spend your afternoon at leisure — whether it’s lounging by the pool, enjoying a quiet nature walk, or unwinding with an optional spa treatment.",
      meals: "Breakfast, Lunch",
      accom: "Hotel",
      included: ["Polonnaruwa ancient kingdom tour – Guided tour", "Authentic Srilankan lunch meal"],
      optional: ["Experience an ayurvedic Spa treatment – 30 USD onwards"]
    },
    {
      day: "Day 9",
      title: "Sigiriya & Journey to Kandy",
      desc: "Wake up before dawn for one of the most unforgettable experiences of your journey. At 5:00 AM, begin the early morning climb to Sigiriya Lion’s Rock, a UNESCO World Heritage Site and one of Sri Lanka’s most iconic landmarks. As you ascend the ancient rock fortress in the soft light of morning, you’ll be rewarded with breathtaking sunrise views over the surrounding jungle and water gardens—an awe-inspiring moment of peace and natural beauty.\n\nAfter descending, return to your hotel for a well-deserved breakfast, then check out and begin your journey toward the cultural capital of Kandy.\n\nContinue your drive with a stop at a local Spice & Herbal Garden, where you’ll take part in a guided tour that introduces you to the island’s rich tradition of herbal medicine and spice cultivation.\n\nA local lunch will be enjoyed en route as you make your way into the lush hills of central Sri Lanka. Arrive in Kandy, a vibrant hill-country city surrounded by misty mountains and steeped in culture.\n\nAfterwards, step into the spiritual heart of the city with a visit to the Temple of the Sacred Tooth Relic for the 6:30 PM pooja ceremony. Watch as monks and devotees gather in this sacred temple, believed to house a relic of Lord Buddha himself—an incredibly moving and atmospheric experience.\n\nEnd your day with a hearty North Indian dinner at Balaji Café, known for its flavorful vegetarian cuisine and cozy atmosphere. Overnight stay in Kandy.",
      meals: "Breakfast, Dinner",
      accom: "Hotel",
      included: ["Sun rise hike at Lion’s rock ( Sigiriya ) – Guided tour", "Spice & the herbal garden – Education tour", "Sacred temple of the tooth relic of Buddha in Kandy", "Dinner at Balaji Dosa – authentic North Indian foods in Kandy"],
      optional: ["The cultural dance show – 7 USD", "Pidurangala sun rise hike – 10 USD"]
    },
    {
      day: "Day 10",
      title: "Artisan Workshops & Tea Factory",
      desc: "After breakfast and hotel check-out, begin your morning with visits to two of Kandy’s renowned artisan workshops:\n\n- Gem Museum & Workshop: Discover Sri Lanka’s world-famous gemstones. Learn about gem mining, cutting, and polishing.\n- Wood Carving & Batik Workshop: Watch skilled artisans craft intricate woodwork and traditional batik textiles.\n- Tea factory & tea plucking experience: witness how we make world famous Ceylon tea in our tea factories and you can get chance to pluck the tea leaves. at end of the tour taste a pure ceylon cup of tea and if you like you can buy some tea from the factory as well.\n\nEnjoy some free time in Kandy city to explore at your own pace. Or you can visit Peradeniya Royal Botanical garden which is the largest and the oldest botanical garden in the island. You may stroll around Kandy Lake, browse local markets, or relax at a café with views of the surrounding hills.\nOvernight stay in Kandy.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Gem & Wood artisan", "Tea factory visit & tea plucking experience"],
      optional: ["Silk & Batik artisan – Free of charge", "Peradeniya royal botanical garden – 12 USD"]
    },
    {
      day: "Day 11",
      title: "Departure",
      desc: "After breakfast, check out from your hotel. Depending on your onward travel plans, your guide will transfer you to Colombo or Bandaranaike International Airport, or assist with further travel arrangements.",
      meals: "Breakfast",
      accom: "-",
      included: []
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/Explore-jaffna.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>Explore Jaffna - The culture tour</h1>
          <p className="trip-duration">10 Nights & 11 Days</p>
          <p className="trip-hero-desc">Dive deep into the rich, untold cultural heritage of Northern Sri Lanka and the beautiful peninsula of Jaffna.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Jaffna, Trincomalee, Habarana, Kandy...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>Culture, Safari, Snorkeling, Train</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Culture Tour, Deep Heritage, Culinary</span>
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
                  <span>10 Breakfasts, 2 Lunches, 3 Dinners</span>
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
                    <li>Train ride from Colombo to Jaffna</li>
                    <li>Jaffna city tour including Jaffna Fort & Peninsular tour</li>
                    <li>Authentic Tamil lunch & dinner experiences</li>
                    <li>Nagadeepa Buddhist temple tour & Casuarina beach</li>
                    <li>Visit Pigeon Island & Snorkeling tour</li>
                    <li>Trincomalee city tour & Nilaveli beach</li>
                    <li>Palmyra toddy experience</li>
                    <li>Cooking demonstration & Dinner</li>
                    <li>Dambulla cave art temple & Polonnaruwa ancient kingdom</li>
                    <li>Lion’s rock ( Sigiriya )</li>
                    <li>Spice & herbal garden visit ( education tour )</li>
                    <li>The sacred temple of the tooth relic of buddha</li>
                    <li>Gem & Wood artisan tour & Tea factory visit</li>
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
                      <li>Rio Ice cream in Jaffna – 2 USD onwards</li>
                      <li>Elephant safari in Minneriya national park – 70 USD per person</li>
                      <li>Pidurangala sun rise hike – 10 USD</li>
                      <li>Ayurveda SPA – 30 USD onwards</li>
                      <li>Silk & Batik artisan – Free of charge</li>
                      <li>Kandy cultural dance show – 7 USD</li>
                      <li>Kandy royal botanical garden – 12 USD</li>
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
              <p>This is not just a tour — it’s a journey through the soul of Sri Lanka.</p>
              <p>You’ll begin your adventure with the rhythm of the rails as the train winds its way from Colombo to the untouched north. In Jaffna, you’ll walk through quiet lanes filled with stories of resilience and revival, savor authentic Tamil cuisine, and feel the spiritual pulse of ancient temples and remote villages. The calm of the northern peninsula, the warm hospitality, and the rich cultural tapestry will leave a lasting imprint on your heart.</p>
              <p>As you move east to Trincomalee, pristine beaches and sacred sites welcome you with open arms. Here, you’ll snorkel with vibrant marine life at Pigeon Island, sip local toddy by the sea, and explore temples perched on cliffs with panoramic views of the Indian Ocean.</p>
              <p>Then comes the cultural core — Habarana and Polonnaruwa — where you’ll walk in the footsteps of kings, explore ancient cities, and rise before dawn to conquer Sigiriya’s Lion Rock, one of the world’s greatest heritage treasures.</p>
              <p>Finally, in the hill capital of Kandy, you’ll witness centuries-old rituals at the Temple of the Tooth, immerse yourself in local arts and crafts, and enjoy the peaceful charm of the misty highlands.</p>
              <p>Throughout the journey, you’ll be guided by a passionate local expert, ensuring every moment is meaningful. With a perfect blend of history, spirituality, nature, food, and human connection — this is a trip you’ll carry with you long after you leave.</p>
            </div>

            <div className="trip-features-sidebar">
              <h2 className="section-title">Is this the correct trip for you?</h2>
              <ul className="correct-trip-list">
                <li>If you’re a traveler who seeks depth over speed, culture over crowds, and authenticity over luxury, then yes — this is the perfect trip for you.</li>
                <li>This journey is designed for the curious and open-minded. It’s ideal if you want to go beyond the typical tourist trails and explore parts of Sri Lanka that remain untouched by mass tourism.</li>
                <li>You’ll need to enjoy early starts (like the 5:00 AM climb to Sigiriya Rock) and appreciate the beauty of long drives that connect remote regions.</li>
                <li>If you’re looking for meaningful travel — where every day teaches you something new about the country, its people, and even yourself — this tour will leave you deeply fulfilled.</li>
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
                    <div className="diff-bar" style={{ width: '60%' }}>Moderate</div>
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

export default ExploreJaffnaTripPage;
