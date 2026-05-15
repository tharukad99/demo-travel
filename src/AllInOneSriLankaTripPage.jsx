import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Heart, Utensils, Car, Bed, Users, CheckCircle, PlusCircle, Minus, Plus } from 'lucide-react';
import './App.css';

const AllInOneSriLankaTripPage = () => {
  const [expandedDay, setExpandedDay] = useState(-1);
  const [isOptionalExpanded, setIsOptionalExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itinerary = [
    { 
      day: "Day 1", 
      title: "Arrival & Journey to Dambulla & Habarana", 
      desc: "Upon arrival at Bandaranaike International Airport, you’ll be greeted by your guide/driver and begin your scenic transfer inland toward Dambulla — located approximately 4 hours away. Sit back and relax as you pass through changing landscapes of villages, coconut plantations, and lush greenery.\n\nArrive in Dambulla, home to one of Sri Lanka’s most iconic religious and historical landmarks — the Dambulla Cave Temple, a UNESCO World Heritage Site. This ancient complex of five caves, set into a massive rock face, contains more than 150 stunning Buddha statues, sacred relics, and beautifully preserved mural paintings that date back over 2,000 years.\n\nAfter the temple visit, continue your journey to Habarana, a peaceful hub centrally located for exploring Sri Lanka’s ancient cities and national parks. Upon arrival, check in to your hotel and unwind after your travels.", 
      meals: "Breakfast", 
      accom: "Hotel", 
      included: ["Dambulla ancient cave temple (cave art gallery ) – 1 & 1/2 hours guided tour"],
      optional: ["Elephant safari ( Minneriya National Park) – 70 USD per person"]
    },
    { 
      day: "Day 2", 
      title: "Sigiriya Rock Fortress, Village Tour & Spa", 
      desc: "Start your day early with an optional sunrise hike to Pidurangala Rock, a hidden gem near Sigiriya. This moderate climb offers a breathtaking 360° view — including the iconic Sigiriya Lion’s Rock bathed in morning light. It’s a must-do for photographers and nature lovers. After the hike, return to your hotel for a refreshing shower and a delicious breakfast before heading out for more adventures.\n\nNext, visit the world-famous Sigiriya Rock Fortress, a UNESCO World Heritage Site and one of the top tourist attractions in Sri Lanka. Climb the ancient rock to discover frescoes, the mirror wall, and the iconic Lion’s Paw entrance. At the top, you’ll be rewarded with incredible views and a deep sense of history.\n\nExperience traditional Sri Lankan culture with a guided village tour. Travel by bullock cart or canoe through the countryside and enjoy a hands-on look at local life. The highlight is a homemade Sri Lankan lunch, cooked over firewood and served in traditional style — often on banana leaves.\n\nUnwind with a peaceful Ayurvedic spa session to end your day. Using herbal oils and ancient healing techniques, this treatment is designed to relax your body and restore your balance — the perfect finish to an unforgettable Sigiriya day trip.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      included: ["Lion’s rock ( Sigiriya ) Hike – 3 hours – Guided tour", "Village tour with a farmer’s lunch", "Ayurvedic SPA treatment – 1 hour"],
      optional: ["Pidurangala sun rise hike – 10 USD"]
    },
    { 
      day: "Day 3", 
      title: "Polonnaruwa Ancient City", 
      desc: "Begin your day with a scenic drive from Habarana to the ancient city of Polonnaruwa, a UNESCO World Heritage Site and once the thriving royal capital of Sri Lanka. Walk through beautifully preserved ruins, royal palaces, audience halls, and majestic stupas that date back over 800 years. As you explore, your guide will bring the history to life with fascinating stories and cultural insights.\n\nAfter the tour, enjoy a traditional Sri Lankan lunch at a local restaurant or village home. Savor freshly prepared rice and curry dishes, seasonal vegetables, and traditional accompaniments — a true taste of the island’s culinary heritage.\n\nFollowing lunch, return to your hotel in Habarana for a well-deserved rest. Spend your afternoon at leisure — whether it’s lounging by the pool, enjoying a quiet nature walk, or unwinding with an optional spa treatment.", 
      meals: "Breakfast, Lunch", 
      accom: "Hotel", 
      included: ["Polonnaruwa ancient kingdom tour – Guided tour", "Authentic Srilankan lunch meal"],
      optional: ["Experience an ayurvedic Spa treatment – 30 USD onwards"]
    },
    {
      day: "Day 4",
      title: "Spice Garden & Kandy Temple of Tooth",
      desc: "After breakfast, check out from your hotel in Habarana and begin your scenic drive towards Kandy, a UNESCO World Heritage City nestled in the central highlands. Along the way, enjoy picturesque countryside views, plantations, and charming rural life.\n\nOn the way to Kandy, make a brief stop at a spice garden in Matale, where you can learn about Sri Lanka’s rich history of spice cultivation. Explore fragrant gardens filled with cinnamon, cardamom, pepper, clove, and nutmeg plants. A local guide will explain the traditional uses of each spice — both in cooking and in ancient Ayurvedic practices. You may also enjoy a short Ayurvedic demonstration or shop for authentic herbal products.\n\nUpon arrival in Kandy, visit one of the most revered Buddhist sites in the world — the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa). This golden-roofed temple houses a sacred relic believed to be a tooth of Lord Buddha, making it a major pilgrimage site for Buddhists globally. Walk through its beautifully decorated halls, listen to the sounds of traditional drumming, and witness rituals that take place throughout the day.\n\nIn the evening, attend an optional cultural dance performance, where traditional Kandyan dancers and drummers bring Sri Lanka’s folklore to life. The show features colorful costumes, rhythmic drumming, fire-walking, and energetic traditional dances — a memorable cultural experience.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Spice & the herbal garden", "Sacred temple of the tooth of Buddha"],
      optional: ["Kandy cultural dance show – 7 USD"]
    },
    {
      day: "Day 5",
      title: "Artisan Workshops & White Water Rafting",
      desc: "After breakfast and hotel check-out, begin your morning with visits to two of Kandy’s renowned artisan workshops:\n\n- Gem Museum & Workshop: Discover Sri Lanka’s world-famous gemstones. Learn about gem mining, cutting, and polishing — and view (or purchase) certified gems, including sapphires, moonstones, and garnets.\n- Wood Carving & Batik Workshop: Watch skilled artisans craft intricate woodwork and traditional batik textiles, reflecting centuries-old design techniques.\n\nEnjoy some free time in Kandy city to explore at your own pace. Or you can visit Peradeniya Royal Botanical garden which is the largest and the oldest botanical garden in the island. You may stroll around Kandy Lake, browse local markets, or relax at a café with views of the surrounding hills.\n\nAfter lunch, depart for Kitulgala, a picturesque town nestled between lush rainforest and the Kelani River — the very spot where the classic movie “The Bridge on the River Kwai” was filmed. Upon arrival, check in at your riverside adventure campsite, surrounded by nature.\n\nGear up for an adrenaline-pumping experience as you take part in white water rafting on the Kelani River — an exhilarating ride through rapids suitable for both beginners and adventure enthusiasts.\n\nAs the sun sets, gather around a crackling bonfire for a relaxed and hearty BBQ dinner by the river. Share stories, enjoy the sounds of the forest, and soak in the camp’s rustic charm under the stars.",
      meals: "Breakfast, Dinner",
      accom: "Hotel",
      included: ["Gem & Wood artisan", "White water rafting & adventure sports"],
      optional: ["Silk & Batik artisan – Free of charge", "Peradeniya royal botanical garden – 12 USD"]
    },
    {
      day: "Day 6",
      title: "Tea Factory & Nuwara Eliya",
      desc: "After breakfast, check out from your riverside campsite in Kitulgala and begin your scenic ascent into Sri Lanka’s central highlands. As you leave the tropical lowlands behind, the road climbs into misty mountains, tea-covered hills, and cooler temperatures.\n\nContinue the drive with a photo stop at the Ramboda Falls, one of the most beautiful waterfalls in the region. Tucked between lush greenery and steep hills, it’s a perfect spot to stretch your legs and capture postcard-worthy images.\n\nStop en route at a working Ceylon tea factory and plantation, where you’ll witness the journey of Sri Lanka’s most iconic export — from freshly plucked leaves to your steaming cup. Learn about the different grades of tea, the drying and rolling processes, and enjoy a fresh cup with panoramic views of the plantations.\n\nArrive in Nuwara Eliya by early afternoon and check in at your hotel. The rest of the day is at leisure. You may choose to relax at your hotel, or take a gentle walk through the quaint Nuwara Eliya town, known for its colonial architecture, well-manicured gardens, and cool climate.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Visit a Tea factory & tea plucking experience"],
      optional: ["Nuwara eliya city walk"]
    },
    {
      day: "Day 7",
      title: "Horton Plains & Scenic Train to Ella",
      desc: "Start your day early with a transfer from your hotel to Horton Plains National Park, located at an elevation of over 2,000 meters above sea level. Carry a packed breakfast provided by your hotel as you set out on a moderate 3-hour loop trail through a unique cloud forest and open grassland ecosystem.\n\nKey highlights:\n- World’s End – a dramatic 880-meter cliff with panoramic views\n- Mini World’s End – a smaller but equally scenic drop\n- Baker’s Falls – a beautiful cascading waterfall tucked within the forest\n\nAfter the hike, return to your Nuwara Eliya hotel to refresh and check out. Your bags will be transferred to Ella by your private vehicle.\n\nHead to Nanu Oya Railway Station and board the train bound for Ella — known as one of the most scenic train journeys in the world. Wind your way through lush tea plantations, misty mountains, and quaint hillside villages. The ride offers endless photo opportunities and a peaceful window into rural Sri Lankan life.\n\nUpon arrival at Ella Railway Station, take a short walk (or optional tuk-tuk ride) to your hotel in the heart of this charming mountain village. Ella is known for its relaxed vibe, incredible views, and easy access to attractions like Ella Rock, Little Adam’s Peak, and the Nine Arches Bridge.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Morning trekking at Horton plains NP – 3 hours", "Scenic train ride from Nanu oya to Ella – 3 hours"]
    },
    {
      day: "Day 8",
      title: "Nine Arch Bridge & Mini Adam’s Peak",
      desc: "After breakfast, embark on a short drive to one of Ella’s most iconic attractions – the Nine Arch Bridge. This architectural marvel, built during the British colonial period, stands tall amidst lush greenery and tea fields. It’s the perfect spot for photography and offers a unique chance to witness a train crossing the bridge – a truly memorable experience.\n\nContinue your morning with a gentle hike to Mini Adam’s Peak, a popular viewpoint just outside the town. The 30–45 minute walk through tea plantations is relatively easy and suitable for all fitness levels. From the summit, you’ll enjoy spectacular panoramic views of Ella Gap and the surrounding highlands – an ideal location for sunrise or mid-morning visits.\n\nFor travelers looking for a burst of adrenaline, an optional ride on the Flying Ravana Mega Zipline awaits. One of the longest ziplines in South Asia, this thrilling ride takes you soaring over tea fields and forests with a bird’s-eye view of Ella’s natural beauty. It’s a perfect add-on for adventure lovers.\n\nIn the afternoon, you can either relax and soak in the serene atmosphere of Ella or opt for a more challenging trek to Ella Rock. This hike is ideal for experienced hikers seeking a rewarding climb. The 4-hour round trip takes you through scenic trails, local villages, and lush greenery, ending with breathtaking views from the summit.\n\nAfter a day of exploration and adventure, unwind with a delicious dinner at a local casual restaurant in Ella town.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["Visit Nine arch bridge & Mini adam’s peak"],
      optional: ["Visit Ella rock – 3 USD", "Ziplining at Ravana mega zipline – 30 USD"]
    },
    {
      day: "Day 9",
      title: "Ravana Falls & Yala Safari",
      desc: "After breakfast, check out from your hotel in Ella and begin your journey to the wild side of Sri Lanka — Yala, home to the country’s most famous national park and its elusive leopards.\n\nEn route to Yala, make a brief stop at Ravana Falls, one of Sri Lanka’s most popular and picturesque waterfalls. This cascading beauty is surrounded by lush jungle and steeped in local legend, making it a perfect photo opportunity and a refreshing break along your scenic mountain-to-lowland drive.\n\nArrive in Yala around midday and enjoy a relaxing lunch before checking in to your hotel or wildlife lodge. After settling in, get ready for an unforgettable wildlife experience.\n\nIn the late afternoon, set off on an exciting leopard safari in Yala National Park, one of the best places in the world to spot the elusive Sri Lankan leopard in its natural habitat. Your guided 4×4 jeep safari will take you deep into the park’s diverse ecosystems, where you might also encounter elephants, crocodiles, sloth bears, deer, wild boars, and a variety of bird species.\n\nAfter your safari, return to your hotel to unwind and enjoy a peaceful overnight stay surrounded by the natural beauty of Yala.",
      meals: "Breakfast",
      accom: "Hotel or Campsite",
      included: ["Afternoon game drive ( Leopard safari ) in Yala NP – 3 hours"]
    },
    {
      day: "Day 10",
      title: "Coconut Tree Hill & Mirissa",
      desc: "Start your day with breakfast at your hotel in Yala, or choose to add more adventure to your trip with an optional early morning safari in Yala National Park, where you’ll have another chance to spot leopards, elephants, and a variety of birdlife in the fresh morning light.\n\nAfter your morning activities, check out from the hotel and begin your scenic drive along the southern coast toward Mirissa, one of Sri Lanka’s most popular beach destinations.\n\nEn route, stop at the famous Coconut Tree Hill in Mirissa – a picture-perfect palm tree-covered cliff overlooking the Indian Ocean. It’s one of the most Instagram-worthy spots in Sri Lanka and a must-visit for travelers heading to the south coast.\n\nUpon arrival in Mirissa, check in to your beachfront hotel or resort. The rest of the day is yours to relax and explore.\n\nSpend your afternoon and evening at leisure. You can enjoy the golden sands of Mirissa Beach or choose from exciting optional water sports such as surfing, scuba diving, snorkeling, or jet skiing.\n\nAs the sun sets, dine at one of the many beachfront restaurants in Mirissa, offering everything from fresh seafood to Sri Lankan and international cuisine.",
      meals: "Breakfast",
      accom: "Hotel",
      optional: ["Extra game drive in Yala NP – 70 USD per person", "Water sports in Mirissa – Surfing, Scuba, Snorkeling etc."]
    },
    {
      day: "Day 11",
      title: "Free Day in Mirissa or Optional Whale Watching",
      desc: "Wake up to the sound of the ocean in beautiful Mirissa, one of Sri Lanka’s top beach destinations. Today is designed as a relaxed, flexible day, perfect for enjoying the coastline at your own pace — or you can opt for an early morning marine adventure.\n\nFor early risers and ocean lovers, we offer an optional whale watching tour in Mirissa, one of the best places in the world to spot blue whales, sperm whales, and dolphins during the season.\n\nAfter the tour, return to your hotel and enjoy a late breakfast or you can request a Packed breakfast to have your breakfast in the boat. The rest of the day is yours to relax and explore Mirissa at your own pace: lounge on the beach, try water sports, explore local cafés, or unwind with a beachside massage.\n\nAs the sun sets, you can enjoy dinner at one of Mirissa’s beachfront restaurants, many offering candlelit tables, fresh seafood BBQs, and a laid-back island atmosphere.",
      meals: "Breakfast",
      accom: "Hotel",
      optional: ["Whale watching tour – 70 USD per person"]
    },
    {
      day: "Day 12",
      title: "Galle Fort & Bentota",
      desc: "After breakfast at your hotel in Mirissa, check out and begin your journey north along Sri Lanka’s picturesque southern coastline. Today’s route includes a cultural highlight and some free time to enjoy one of the country’s most charming colonial-era towns.\n\nEn route to Bentota, stop in the historic city of Galle to explore the iconic Galle Dutch Fort, a UNESCO World Heritage Site. Enjoy a guided walking tour through cobblestone streets lined with colonial buildings, churches, museums, cafés, and boutique shops.\n\nYour guide will share fascinating insights into the fort’s history, from its Portuguese and Dutch origins to its present-day status as a cultural and artistic hub. After the tour, enjoy free time to explore Galle Fort at your own pace.\n\nContinue your coastal drive to Bentota, a tranquil beach resort town known for its golden sands, water sports, and lush river landscapes. Upon arrival, check in to your hotel and unwind.\n\nSpend the evening at leisure. You can relax by the pool, take a peaceful walk along the beach, or explore the surroundings. Bentota offers a calm and laid-back atmosphere – perfect for unwinding after a day of sightseeing.",
      meals: "Breakfast",
      accom: "Hotel",
      included: ["The Dutch fort in Galle – Guided walking tour"]
    },
    {
      day: "Day 13",
      title: "Madu River Safari & Turtle Hatchery",
      desc: "Enjoy a full day of coastal exploration and eco-adventure in Bentota, a serene beach destination that blends natural beauty with cultural charm. After breakfast at your hotel, set out for a guided Bentota city tour packed with unique local experiences.\n\nBegin your day with a visit to a sea turtle conservation hatchery, where you’ll learn about Sri Lanka’s efforts to protect endangered sea turtles. See baby turtles up close and gain insight into how hatchlings are safely released into the ocean.\n\nNext, embark on a Madu River mangrove safari – a peaceful boat ride through one of Sri Lanka’s most biodiverse wetland ecosystems. Navigate through narrow waterways surrounded by lush mangroves, spot exotic birdlife, and visit small islands along the river, including one with a fish spa experience!\n\nAfter the safari, return to your hotel after the lunch. In the afternoon, you can choose to relax by the beach or participate in optional water sports offered in Bentota, including jet skiing, banana boat rides, wind surfing, or paddle boarding.\n\nAs the sun sets, unwind at your hotel or take a leisurely beach stroll. Bentota’s laid-back atmosphere is ideal for a calm and restful evening.",
      meals: "Breakfast",
      accom: "Hotel",
      optional: ["Visit a turtle hatchery – 10 USD per person", "Visit Madu river mangroves river safari – 20 USD per person", "Water sports in the river – 40 USD upwards"]
    },
    {
      day: "Day 14",
      title: "Colombo City Tour & Departure",
      desc: "After breakfast, check out from your hotel in Bentota and begin your journey to the airport. On the way, enjoy a final cultural immersion with a guided city tour of Colombo, Sri Lanka’s bustling commercial capital.\n\nHead north along the scenic coastal road to Colombo, where modern life meets colonial heritage. Upon arrival, enjoy a guided city tour covering some of Colombo’s most iconic landmarks and attractions, including Independence Square, Gangaramaya Temple, Galle Face Green, Old Parliament Building, and the vibrant Pettah Bazaar.\n\nYour expert guide will share insights into Colombo’s rich history, diverse architecture, and modern transformation into a vibrant metropolitan hub.\n\nAfter your Colombo city tour, enjoy a farewell lunch at a recommended restaurant, sampling either traditional Sri Lankan cuisine or international dishes.\n\nFollowing lunch, proceed directly to Bandaranaike International Airport (CMB) in Negombo for your departure flight, bringing your unforgettable Sri Lanka tour to a close.",
      meals: "Breakfast",
      accom: "-",
      included: ["The Colombo city tour – guided panoramic tour"]
    }
  ];

  return (
    <div className="trip-details-page">
      <div className="trip-hero">
        <div className="trip-hero-bg" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}wildlife/All-in-one-srilanka.jpg)` }}></div>
        <div className="trip-hero-content">
          <h1>All in one Srilanka</h1>
          <p className="trip-duration">13 Nights & 14 Days</p>
          <p className="trip-hero-desc">A comprehensive journey covering wildlife safaris, cultural heritage, beautiful beaches, and scenic highlands.</p>
        </div>
      </div>
      
      <div className="trip-container container">
        <div className="trip-overview">
          <div className="overview-item">
            <MapPin size={32} />
            <div>
              <strong>Destinations</strong>
              <span>Sigiriya, Kandy, Nuwara Eliya, Yala, Mirissa...</span>
            </div>
          </div>
          <div className="overview-item">
            <Map size={32} />
            <div>
              <strong>Activities</strong>
              <span>Culture, Safari, Beaches, Train</span>
            </div>
          </div>
          <div className="overview-item">
            <Heart size={32} />
            <div>
              <strong>Theme</strong>
              <span>Comprehensive, Best of Srilanka, Discovery</span>
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
                  <span>13 Breakfasts, 2 Lunches, 1 Dinner</span>
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
                  <span>3 star / 4 star or similar Hotel, Campsite, Guest house</span>
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
                    <li>Dambulla cave art temple & Lion’s rock ( Sigiriya )</li>
                    <li>Village tour with a farmer’s lunch</li>
                    <li>Polonnaruwa ancient kingdom tour</li>
                    <li>Spice & herbal garden visit ( education tour )</li>
                    <li>The sacred temple of the tooth relic of buddha</li>
                    <li>White water rafting & adventure water sports</li>
                    <li>Tea factory & tea plucking experience</li>
                    <li>Horton plain national park trekking</li>
                    <li>Train ride from Nanu oya to Ella ( 3 hours )</li>
                    <li>Nine arched bridge & mini adam’s peak hike</li>
                    <li>Mammal safari at Yala national park</li>
                    <li>Dutch fort tour in Galle & Colombo city tour</li>
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
                      <li>Elephant safari in Minneriya national park – 70 USD per person</li>
                      <li>Pidurangala sun rise hike – 10 USD</li>
                      <li>Ayurveda SPA – 30 USD onwards</li>
                      <li>Kandy cultural dance show – 7 USD</li>
                      <li>Kandy royal botanical garden – 12 USD</li>
                      <li>Ziplining at Ravana mega zipline – 30 USD</li>
                      <li>Surfing / Scuba / Snorkeling at Mirissa – 40 USD onwards</li>
                      <li>Whale watching – 70 USD per person</li>
                      <li>Turtle hatchery & Madu river Mangroves boat safari</li>
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
              <p>What makes this Sri Lanka tour unforgettable is how it weaves diverse experiences into a seamless, enriching journey. It’s not just about visiting famous sites — it’s about truly connecting with the country.</p>
              <p>You’ll start with ancient wonders like Dambulla Cave Temple and Sigiriya’s Lion Rock, then dive into rural life with a village tour and farmer’s lunch. Cultural highlights like the Temple of the Tooth, Polonnaruwa’s ruins, and local artisan visits give you a deeper appreciation for Sri Lanka’s rich heritage.</p>
              <p>For nature and adventure lovers, there’s white-water rafting, national park safaris, mountain hikes, and the iconic train ride through the hill country. Tea plantations, waterfalls, and Ayurveda wellness treatments add a soothing contrast to the active days.</p>
              <p>What you’ll love most is the balance — between activity and rest, between the well-known and the hidden gems, and between comfort and authenticity. Every experience is curated to leave you with not just photos, but memories and stories.</p>
              <p>Plus, with optional add-ons like elephant safaris, ziplining, whale watching, and surfing, you can personalize your adventure to suit your interests. You’ll return home not only refreshed, but deeply inspired by the warmth of Sri Lankan hospitality, the beauty of its landscapes, and the richness of its culture.</p>
            </div>

            <div className="trip-features-sidebar">
              <h2 className="section-title">Is this the correct trip for you?</h2>
              <ul className="correct-trip-list">
                <li>You enjoy a mix of culture, nature, and adventure.</li>
                <li>You prefer planned logistics and comfortable stays.</li>
                <li>You want guided insights but also some freedom to explore.</li>
                <li>You’re open to local food, traditions, and authentic encounters.</li>
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

export default AllInOneSriLankaTripPage;
