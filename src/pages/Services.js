import React, { useState } from 'react';

const C = '#293939';
const CL = '#eef3f3';
const CB = '#d4e0e0';
const CA = '#5a9090';

const services = [
  { icon: '🎓', title: 'Education Support', category: 'Education', desc: 'Free tutoring, school supplies, digital literacy training, and scholarship guidance to underprivileged children and youth.', features: ['Free tutoring sessions', 'School supplies distribution', 'Digital literacy camps', 'Scholarship guidance', 'Adult literacy programs', 'Career counseling'], impact: '1,200+ students helped annually' },
  { icon: '🏥', title: 'Healthcare Outreach', category: 'Health', desc: 'Organizing free medical camps, health awareness drives, mental health support, and connecting communities to healthcare.', features: ['Free medical camps', 'Health awareness drives', 'Mental health support', 'Vaccination drives', 'Nutrition counseling', 'Eye & dental camps'], impact: '80+ camps, 15,000+ patients' },
  { icon: '🌱', title: 'Environmental Drives', category: 'Environment', desc: 'From tree plantation to waste management, community-driven environmental initiatives for a sustainable tomorrow.', features: ['Tree plantation drives', 'Lake & river clean-ups', 'Waste management', 'Eco-awareness workshops', 'Green energy promotion', 'Plastic-free campaigns'], impact: '25,000 trees planted' },
  { icon: '🍱', title: 'Food & Nutrition', category: 'Food', desc: 'Fighting hunger through community kitchens, food banks, meal distribution, and nutritional awareness programs.', features: ['Daily meal distribution', 'Community food banks', 'Nutritional awareness', 'Ration kit drives', 'Festive meal programs', 'School mid-day meals'], impact: '500+ meals served daily' },
  { icon: '👩', title: 'Women Empowerment', category: 'Empowerment', desc: 'Skill development, legal awareness, entrepreneurship training, and support networks for women across communities.', features: ['Skill development workshops', 'Legal rights awareness', 'Entrepreneurship training', 'Self-defense classes', 'Financial literacy', 'SHG formation support'], impact: '800+ women trained & employed' },
  { icon: '🧓', title: 'Elder Care', category: 'Elder Care', desc: 'Providing companionship, healthcare support, and dignity to senior citizens in old age homes and isolated communities.', features: ['Regular visits & companionship', 'Medical assistance', 'Recreational activities', 'Emergency support', 'Digital inclusion', 'Pension guidance'], impact: '300+ seniors supported' },
  { icon: '🐾', title: 'Animal Welfare', category: 'Animals', desc: 'Rescue, rehabilitation, and adoption campaigns for stray animals, plus awareness drives for humane treatment.', features: ['Stray animal rescue', 'Rehabilitation & shelter', 'Adoption drives', 'Vaccination camps', 'Anti-cruelty awareness', 'Feeder network support'], impact: '400+ animals rescued' },
  { icon: '🏗️', title: 'Rural Development', category: 'Rural', desc: 'Infrastructure support, sanitation programs, digital access, and skill development for underserved rural communities.', features: ['Sanitation infrastructure', 'Digital access programs', 'Skill development', 'Clean water initiatives', 'Agricultural support', 'Community hall support'], impact: '30+ villages transformed' },
];

export default function Services({ navigate }) {
  const [active, setActive] = useState(null);

  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section style={{background:'#1a2a2a'}} className="text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-bold text-sm uppercase tracking-widest" style={{color:CA}}>What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We run impactful programs across 8 key areas of community development. Every initiative is volunteer-powered, community-centered, and impact-measured.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {services.map((s, i) => (
              <button key={i} onClick={() => setActive(active === i ? null : i)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={active === i
                  ? {background:C, color:'#fff', border:`1px solid ${C}`}
                  : {background:'rgba(255,255,255,0.08)', color:'#d0d8d8', border:'1px solid rgba(255,255,255,0.15)'}}>
                {s.icon} {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const isOpen = active === i;
              return (
                <div key={i} className="rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{border: isOpen ? `2px solid ${C}` : `2px solid #f0f0f0`}}
                  onMouseEnter={e => { if(!isOpen) e.currentTarget.style.borderColor=CB; }}
                  onMouseLeave={e => { if(!isOpen) e.currentTarget.style.borderColor='#f0f0f0'; }}>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{background:CL, border:`1px solid ${CB}`}}>{s.icon}</div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{background:CL, color:C}}>{s.category}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3" style={{background:CL, color:C, border:`1px solid ${CB}`}}>📊 {s.impact}</div>
                    <br />
                    <button onClick={() => setActive(isOpen ? null : i)} className="text-xs font-bold mt-1 hover:opacity-80" style={{color:C}}>
                      {isOpen ? 'Show Less ↑' : 'See Details ↓'}
                    </button>
                  </div>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-72' : 'max-h-0'}`}>
                    <div className="px-5 pb-5 border-t border-gray-100 pt-4" style={{background:CL}}>
                      <h4 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">What's Included</h4>
                      <ul className="flex flex-col gap-1.5">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-xs text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background:C}} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Why Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Why Volunteer With VSHelpingHands?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⏰', title: 'Flexible Hours', desc: 'Volunteer for as little as 2 hours a week or go full-time — your schedule, your choice.' },
              { icon: '🎓', title: 'Training Provided', desc: 'Every volunteer gets proper training, orientation, and ongoing support from our team.' },
              { icon: '🏅', title: 'Certified Experience', desc: 'Receive official certificates, LinkedIn recommendations, and recognition for your service.' },
              { icon: '🧑‍🤝‍🧑', title: 'Community Access', desc: 'Join our 5,000+ volunteer WhatsApp network and grow with an incredible community.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 transition-all group" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 4px 16px rgba(41,57,57,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md" style={{background:C}}>{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">How to Get Started</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">No paperwork, no complicated process. Just reach out and we'll guide you from there.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '💬', title: 'Contact & Talk to Us', desc: "Call, WhatsApp, or message us. We have a friendly 1-on-1 conversation to understand who you are and how you'd like to help — no forms needed.", action: 'Contact Us →', page: 'contact' },
              { step: '02', icon: '🔍', title: 'Understand Our Services', desc: "Browse our 8 cause areas above. We'll personally walk you through our ongoing programs and where your skills can make the biggest impact.", action: null, page: null },
              { step: '03', icon: '🤝', title: 'Work With Us', desc: "We match you with the right team and the next event near you. Show up — we'll provide training, coordination, and full support every step of the way.", action: 'Get Started →', page: 'contact' },
            ].map((h, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 transition-all group" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 8px 32px rgba(41,57,57,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-md" style={{background:C}}>{h.icon}</div>
                <div className="text-xs font-extrabold text-gray-300 uppercase tracking-widest mb-2">Step {h.step}</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{h.desc}</p>
                {h.page && <button onClick={() => navigate(h.page)} className="text-sm font-bold hover:opacity-80" style={{color:C}}>{h.action}</button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{background:C}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to Start Volunteering?</h2>
          <p className="mb-8" style={{color:'#a0c4c4'}}>Pick any cause that resonates with you and reach out. We'll guide you every step of the way.</p>
          <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white font-extrabold rounded-2xl transition-all shadow-lg" style={{color:C}}>
            Contact Us →
          </button>
        </div>
      </section>
    </div>
  );
}