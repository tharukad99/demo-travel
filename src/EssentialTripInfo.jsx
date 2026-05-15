import React, { useEffect } from 'react';
import { Shield, CreditCard, Heart, Map, Smartphone, Luggage, MapPin, HeartHandshake, Sun, Stethoscope, FileText, Users, AlertTriangle } from 'lucide-react';
import './App.css';

const EssentialTripInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-white)', padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem', color: '#2c2c2c' }}>
          Essential Trip Information (ETI)
        </h1>
        
        <div className="eti-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <HeartHandshake size={28} /> Responsible travel
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Elephant performances & Elephant riding</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>At Wild ceylon, we respect each individual’s choices while traveling. However, we do not include elephant rides or unnatural performance activities on any of our itineraries, and we encourage travelers to avoid these activities if they are offered during your stay.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>Professional wildlife conservation and animal welfare organizations, such as World Animal Protection, emphasize that captive elephants are still wild animals. Despite good intentions, many venues are unable to provide the proper living conditions these animals require, which negatively affects their well-being.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>While some argue that the money spent on these activities supports the livelihoods of elephants and their mahouts, this also contributes to the ongoing demand for elephants to be captured from the wild or bred in captivity.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Local dress</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>When packing for travel in Asia, it’s important to note that dress standards are generally conservative, especially outside major cities. To respect local customs—and for your own comfort—we strongly recommend modest clothing. This typically means garments that cover your shoulders and knees. Loose, lightweight, and long clothing is both respectful and practical in Asia’s predominantly hot climate.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>In many rural areas, women are expected to wear modest clothing even when swimming. Items such as singlets, tank tops, and topless sunbathing are considered unacceptable. When visiting religious sites, men are often required to wear long trousers, while women should wear a long skirt or sarong.</p>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Buddha images</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>It is considered extremely disrespectful—and in some cases illegal—to pose for photographs next to statues of Buddha. Additionally, the mistreatment of Buddhist images, including wearing tattoos, jewelry, or clothing associated with Buddhism, is viewed as deeply offensive and should be avoided.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Shield size={28} /> Travel insurance
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Travel Insurance</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>Travel insurance is compulsory for all travelers on our international trips. At a minimum, your policy must cover medical expenses, including emergency repatriation. You will not be permitted to join the group until your group leader or local representative has seen proof of your insurance coverage and the insurer’s 24-hour emergency contact number.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>If you are traveling within your home country or region, please ensure you have access to the public healthcare system in case of an accident. Regardless of destination, we strongly recommend all travelers have a comprehensive policy that also includes:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Personal liability</li>
                <li>Trip cancellation or curtailment</li>
                <li>Loss or theft of luggage and personal belongings</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Credit Card Insurance</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>If you are relying on insurance provided through a credit card, you must provide the following details to your group leader or local representative:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Name of the participating insurer or underwriter</li>
                <li>Policy number and level of coverage</li>
                <li>24-hour emergency contact number</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Please note that your bank’s name and credit card details are not sufficient—contact your bank prior to departure to obtain the required information.</p>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Travelers from the EU, Switzerland, and the USA</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>For residents of the European Union, Switzerland, or the United States, purchasing travel insurance cannot be made compulsory due to local regulations. However, it is still strongly recommended. If you choose not to purchase travel insurance and are traveling outside your home region, you will be required to sign a Travel Insurance Waiver Form at the group meeting. This form acknowledges your personal responsibility for any emergency medical or repatriation costs that may arise.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Users size={28} /> Community guidelines
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Respectful Travel Conduct</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>At Wild Ceylon, we are committed to creating a safe, inclusive, and respectful environment for everyone. We do not tolerate any form of violence, harassment (physical, verbal, or sexual), or disrespect toward fellow travelers, our team members, or local communities.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>To ensure the wellbeing of all participants, decisions made by your group leader are final. These decisions are made with safety, cultural respect, and group harmony in mind.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>Please note that romantic relationships between travelers and group leaders or local representatives are not permitted during the trip. Maintaining professional boundaries is essential to ensuring a respectful and impartial experience for everyone.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Any behavior that:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Prevents your group leader from operating the trip as planned</li>
                <li>Violates local laws</li>
                <li>Contradicts these guidelines</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>may result in your removal from the trip or denial of future bookings with wild ceylon.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>If at any point you feel uncomfortable or have concerns during your travels, please speak to your group leader immediately. Your voice matters, and we are here to support you.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <AlertTriangle size={28} /> Safety
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Travel Advisories & Alerts</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Before you travel, we recommend checking your government’s foreign travel advisory for the most up-to-date information about your destination. It’s also important to ensure your travel insurance covers all countries and activities included in your itinerary.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Personal Safety</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Your safety is our priority. While traveling, please consider the following tips:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Use a secure method (e.g., money belt) to carry your passport, phone, credit cards, and cash.</li>
                <li>Leave high-value items (including jewelry) at home.</li>
                <li>Use hotel safety deposit boxes when available.</li>
                <li>Ensure your luggage is lockable.</li>
                <li>Be aware of pick-pocketing and petty theft, especially in crowded areas.</li>
                <li>Avoid walking alone at night; use well-lit, populated routes.</li>
                <li>Stay alert on public transport; keep your bag in front and never leave personal items unattended.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>LGBTQIA+ Travelers</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>wild ceylon welcomes all LGBTQIA+ travelers. However, please be aware that some destinations on our itineraries may be less accepting. We are committed to ensuring non-discriminatory experiences on all trip components under our control.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>We recommend visiting Equaldex and your government’s travel advice pages for LGBTQIA+ guidance relevant to your chosen destination.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Current Situation – Sri Lanka</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>The terrorist attack (2019) in Sri Lanka were tragic and have impacted local tourism. While the security situation has been fully stabilized, travelers might notice a high police presence and frequent security checkpoints in cities and towns to maintain high level of national security.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Wild ceylon remains committed to our local staff and communities and continues to operate all trips in Sri Lanka. Your itinerary is not expected to change, but travel times and airport procedures may be affected due to ongoing security measures.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Political Tension</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Political demonstrations can escalate quickly and may become violent. Please note:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Avoid large gatherings and protests.</li>
                <li>Follow your group leader’s advice at all times.</li>
                <li>Curfews may be imposed at short notice.</li>
                <li>Security forces, particularly in the northern and eastern provinces, may establish checkpoints or close roads without prior warning.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Petty Crime</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Petty crime such as pick-pocketing and bag-snatching is common, especially in tourist areas, markets, and on public transport. Please take precautions:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Carry only what you need and use hotel safes.</li>
                <li>Be aware of credit card skimming—use ATMs attached to banks or major hotels only.</li>
                <li>Avoid purchasing jewelry and gems from unknown vendors, as counterfeit items are common.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Local Laws</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>You must carry official photo ID at all times; a photocopy of your passport is recommended.</li>
                <li>Smoking and drinking in most public spaces is illegal and may result in fines or other penalties.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Women’s Safety</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Sri Lanka is generally safe, but women should take additional precautions:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Respect local dress codes—modest clothing is advised.</li>
                <li>Avoid isolated or poorly lit areas, including beaches and village lanes.</li>
                <li>Do not travel alone at night on public transport, taxis, or auto-rickshaws.</li>
                <li>If being picked up at the airport, ensure your driver has properly identified themselves.</li>
              </ul>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Bicycle Helmets</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Please be aware that helmets are not always provided for bicycle sightseeing activities. If you prefer, you are welcome to bring your own helmet for safety.</p>
            </div>
          </section>
          
          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Sun size={28} /> Climate and seasonal information
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Sri Lanka Weather</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Sri Lanka’s weather varies significantly based on region and time of year, so it’s important to plan accordingly:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Northeast Monsoon: December to March</li>
                <li>Southwest Monsoon: May to October</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>During these periods, heavy rain, flooding, and landslides are possible, which may lead to travel delays or reroutes. Be prepared for some flexibility in your itinerary.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>The summer months in Sri Lanka can be very hot, especially in the central and southern regions. Short, intense monsoon showers are also common in the southwest during this time. If you’re visiting during summer:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Stay hydrated</li>
                <li>Use adequate sun protection</li>
                <li>Wear lightweight, breathable clothing</li>
              </ul>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Perahera Festival</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>The Perahera Festival is a major cultural event held annually in July or August in Kandy to honour the Sacred Tooth Relic, housed at the Temple of the Tooth. The festival spans 10 nights and features elaborate evening processions, including traditional dancers, drummers, and over 50 decorated elephants.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Due to our ethical stance against elephant cruelty, we do not include the Perahera Festival in our itineraries and cannot purchase tickets on behalf of travelers.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Smartphone size={28} /> Phone and internet access
            </h2>
            <div className="eti-block">
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Hotels in Sri Lanka generally have excellent WiFi connections. Most hotels offer free WiFi in public areas, with many also offering in room WiFi. Your tour leader will offer you the best advice on communications in remote areas of the country. You can purchase a local SIM card at the airport on arrival. Etisalat and Airtel are two of the bigger operators with the best nationwide coverage.</p>
            </div>
          </section>
          
          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Luggage size={28} /> Packing
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>What to Pack for Your Trip to Sri Lanka</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>What you need to bring will vary depending on your trip style, destinations, and season of travel. As a general rule, we recommend you pack as lightly as possible and ensure that you can carry and lift your own luggage and walk with it short distances.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Luggage Guidelines</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li><strong>Main Bag:</strong> Most travelers use a backpack or soft-sided bag. A smaller bag with wheels can be useful, but it should also have carry straps.</li>
                <li><strong>Daypack:</strong> You’ll need a daypack for daily excursions and your overnight hike into the tea plantations.</li>
                <li><strong>Luggage Weight Limit:</strong> Please limit your luggage to 15–20 kg total. Hard suitcases or externally framed packs are not recommended, as they’re difficult to store and may damage other travelers’ gear.</li>
                <li><strong>Security:</strong> A lockable bag or small padlock is recommended.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Essentials</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Clothing:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Lightweight, breathable layers</li>
                <li>Long-sleeve shirts and pants (for mosquito protection and temple visits)</li>
                <li>One smart-casual outfit for dinners (e.g., in Colombo)</li>
                <li>Women: A light scarf for covering shoulders at religious sites</li>
                <li>Clothes that are easy to wash and quick to dry</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Footwear:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Closed-in shoes for protection on city walks and outdoor trails</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Sun Protection:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Hat</li>
                <li>Sunglasses</li>
                <li>High-SPF sunscreen</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Recommended Items</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Cool Climate Gear:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>A light, warm, waterproof jacket (for the hill country and tea plantation hike)</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Hiking Essentials:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Comfortable hiking boots</li>
                <li>Moisture-wicking T-shirts and hiking socks</li>
                <li>Long pants (leech protection in the hill country)</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Health & Hygiene:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Personal medical kit (your guide will carry a first aid kit)</li>
                <li>Mild painkillers, rehydration salts, Band-Aids, insect repellent</li>
                <li>Reusable water bottle (1 L reusable water bottle will be provided complementry from wild ceylon at the start of the tour)</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Other:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Camera or smartphone for photos</li>
                <li>Portable power bank or extra batteries for electronics</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Optional Extras</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Earplugs (for street noise or shared rooms)</li>
                <li>Travel journal, book, or music player</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Valuables & Documents</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Avoid bringing valuables you don’t need.</li>
                <li>Use hotel safes where available.</li>
                <li>Carry a money belt or pouch for your passport and cash.</li>
                <li>Bring photocopies of all important documents (passport, flight tickets, vaccination certificates) and store them separately from the originals.</li>
              </ul>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Power Access</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Most accommodations on our trips provide access to power daily for charging phones and cameras. However, we still recommend carrying a power bank or spare battery for longer journeys or remote areas.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <CreditCard size={28} /> Money matters
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Spending Money</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Every traveler’s spending habits are different, so please budget according to your personal needs. Consider costs for:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Optional meals and drinks</li>
                <li>Souvenirs and shopping</li>
                <li>Optional activities and entrance fees</li>
                <li>Laundry and personal expenses</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>Be sure to review your itinerary and trip inclusions so you know what’s covered and what you may need to pay for on the road.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Sri Lanka Money</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Currency: The official currency is the Sri Lankan Rupee (LKR).</li>
                <li>Cash is king: While credit/debit cards can be used at ATMs and are accepted in larger establishments in cities, cash is the most widely used form of payment, especially in rural or small-town areas.</li>
                <li>ATMs: Widely available in major towns and cities.</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', fontStyle: 'italic' }}>💡 Suggested budget for meals not included: USD $350</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Tipping</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Tipping is not compulsory but is a common and appreciated practice in Sri Lanka and many other countries. It’s a great way to acknowledge good service.</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Avoid tipping with coins, very small denominations, or damaged notes, as this may be seen as disrespectful.</li>
                <li>Tipping should always feel voluntary and thoughtful.</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Optional Tipping Kitty</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Your group leader or local representative may suggest a group tipping kitty on Day 1 of the trip. Here’s how it works:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Each traveler contributes an equal amount</li>
                <li>Your leader distributes tips to drivers, local guides, hotel staff, and others who provide services during the trip</li>
                <li>A record of all contributions and expenses will be maintained and any remaining funds will be refunded at the end of the trip</li>
                <li>Participation is optional—you’re free to manage your own tipping if preferred</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', fontWeight: 'bold' }}>💰 Suggested amount for tipping kitty: LKR 6,750 per person</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', fontStyle: 'italic', marginTop: '0.5rem' }}>Note: The tipping kitty does not include a tip for your group leader or local representative.</p>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Tipping Your Group Leader or Local Representative</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>If your group leader or local representative provides outstanding service, you may wish to leave a tip as a token of appreciation.</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Suggested amount: USD/EUR 4–7 per person, per day</li>
                <li>Tipping is entirely at your discretion based on service quality and trip length</li>
              </ul>
            </div>
            
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Bus Drivers and Crew</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>If your trip includes a dedicated bus driver and bus attendant, consider tipping them for their service.</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Suggested amount: USD 4–5 per day, shared among the bus crew</li>
              </ul>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Contingency Funds</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>While we plan carefully, some situations are beyond our control (e.g. natural disasters, civil unrest, severe weather, or transport disruptions). In the event of such emergencies:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>You may be responsible for any additional costs related to necessary itinerary changes</li>
                <li>This includes expenses like alternative transport, accommodation, or missed services</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', fontWeight: 'bold' }}>💵 Recommended emergency fund: USD 500, in case of unexpected changes or disruptions.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', fontStyle: 'italic', marginTop: '0.5rem' }}>Note: While this is listed in USD for reference, local currency may be required once in-country.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <Stethoscope size={28} /> Medical and health information
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>General Health</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>To ensure the safety and well-being of everyone, all travelers should be in good physical health to fully participate in the trip. If you’re unwell before your departure, please stay at home and contact us for alternative arrangements.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>Before booking your trip, carefully review the itinerary and assess your ability to handle our style of travel. If our group leader or local representative determines that a traveler cannot complete the itinerary without putting themselves or others at risk, we reserve the right to exclude them from part or all of the trip without a refund.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>It is recommended to consult your doctor for up-to-date medical travel advice and necessary vaccinations before departure. Additionally, carry a first aid kit and any personal medications in their original packaging (as they may not be easily available while traveling). If you’re carrying medication, ensure you check your government’s travel advice for local restrictions or requirements.</p>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Mosquito-Borne Illnesses</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>In Sri Lanka, mosquito-borne illnesses such as dengue fever, chikungunya fever, Japanese encephalitis, and filariasis are prevalent, with outbreaks occurring regularly.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>Dengue fever is especially common in the western regions of the country, and while there is no vaccine, you can take preventive measures:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <li>Wear long clothing</li>
                <li>Use insect repellent</li>
                <li>Stay indoors at dawn and dusk, when mosquitoes are most active.</li>
              </ul>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6' }}>If you develop a fever or feel unwell, inform your group leader immediately for assistance. It’s important to take proactive measures to avoid mosquito bites and protect your health during your trip.</p>
            </div>
          </section>

          <section className="eti-section">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary-color)', borderBottom: '2px solid rgba(27, 67, 50, 0.2)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
              <FileText size={28} /> Passports, visas and entry requirements
            </h2>
            <div className="eti-block" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Passport</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>To travel internationally, you’ll need a valid passport. Most countries require your passport to be valid for at least 6 months beyond your intended stay, so be sure to check the expiry date well in advance.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>For a smooth trip preparation, we need your passport details to match the information on your booking exactly. Please ensure all information is correct.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}><strong>Helpful Tips:</strong></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Carry a copy of the photo page of your passport while traveling.</li>
                <li>Leave a copy at home with a family member or friend in case of emergencies.</li>
              </ul>
            </div>
            
            <div className="eti-block">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#2c2c2c' }}>Visas & Entry Requirements</h3>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>Srilanka require a visa for entry, and it’s your responsibility to ensure you obtain the correct visa for the destination and any countries you may transit through.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem' }}>We recommend checking visa requirements as soon as you book your trip to give yourself plenty of time to prepare your documents and complete the visa application process.</p>
              <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '0.5rem' }}>You can find entry requirements for your nationality on:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4a4a4a', lineHeight: '1.6' }}>
                <li>Your government’s foreign travel advisory</li>
                <li>Consular websites</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default EssentialTripInfo;
