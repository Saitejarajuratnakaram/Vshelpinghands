import React, { useState } from 'react';
const certificate = require('../img/registration-certificate.jpg');

const team = [
  { name: 'Venkatesh Meesala', role: 'Founder & President', initials: 'VM', bio: 'Visionary founder who established VS Helping Hands in 2023 with a mission to serve underprivileged communities.' },
  { name: 'Uday Pyla', role: 'Vice President', initials: 'UP', bio: 'Leads strategic initiatives and volunteer coordination across all drives and programs.' },
  { name: 'Kanchana Maheswari', role: 'Secretary', initials: 'KM', bio: 'Manages organizational records, communications, and smooth functioning of all activities.' },
  { name: 'Hemala Rao', role: 'Joint Secretary', initials: 'HR', bio: 'Assists in administration, event planning, and supports day-to-day operations.' },
  { name: 'Narsu Naidu', role: 'Treasurer', initials: 'NN', bio: 'Oversees all financial operations and maintains full transparency in fund utilization.' },
  { name: 'Mahalaxmi', role: 'Member', initials: 'ML', bio: 'Active member contributing to community outreach and volunteer engagement across events.' },
  { name: 'Venu', role: 'Member', initials: 'VN', bio: 'Dedicated member supporting ground-level operations and drive coordination.' },
];

const milestones = [
  { year: '2023', event: 'VS Helping Hands Welfare Association established on 01/08/2023 by Venkatesh Meesala with a mission to serve underprivileged and needy people across Telangana.' },
  { year: '2023', event: 'Launched first food distribution drive, providing meals and basic necessities to homeless individuals and struggling families in Hyderabad.' },
  { year: '2024', event: 'Expanded shelter and care support programs for elderly people, women, and children living on streets without protection.' },
  { year: '2024', event: 'Launched education support initiative for underprivileged children to help them build a brighter future with dignity and hope.' },
  { year: '2024', event: 'Planted 25,000 trees, served 1.8 lakh meals, organized 80+ health camps across communities in Telangana.' },
  { year: '2025', event: 'Grew to 5,000+ active volunteers; impacting 10,000+ lives across 50 communities with 8 active cause verticals.' },
];

const awards = [
  { title: 'Best NGO Award 2024', org: 'Telangana State Government', icon: '🏆' },
  { title: 'Community Impact Award', org: 'FICCI Foundation', icon: '🎖️' },
  { title: 'Youth Volunteer Excellence', org: 'National Youth Council', icon: '⭐' },
  { title: 'CSR Partner of the Year', org: 'CII Hyderabad Chapter', icon: '🌟' },
];

const C = '#293939';
const CB = '#d4e0e0';
const CA = '#5a9090';

export default function About({ navigate }) {
  const [showCert, setShowCert] = useState(false);
  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section style={{background:'#1a2a2a'}} className="text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold text-sm uppercase tracking-widest" style={{color:CA}}>About Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
                A Movement Born from<br /><span style={{color:CA}}>Compassion & Humanity</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                VS Helping Hands Welfare Association was established on 01/08/2023 by Mr. Venkatesh Meesala with a mission to serve underprivileged and needy people in society. We work with compassion, humanity, and social responsibility to help those who need it most.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">Our primary goal is to help poor people by providing food, basic necessities, shelter, and emotional support — because every individual deserves to live with dignity and hope.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => navigate('contact')} className="px-6 py-3 text-white font-extrabold rounded-xl transition-colors text-sm shadow-md" style={{background:C}}>Join Our Mission</button>
                <button onClick={() => navigate('services')} className="px-6 py-3 border-2 text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-10 transition-colors text-sm" style={{borderColor:'rgba(255,255,255,0.3)'}}>See Our Work</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '5,247', label: 'Total Volunteers', change: '+18% YoY' },
                { val: '214', label: 'Projects Completed', change: '+32 new projects' },
                { val: '₹1.2 Cr', label: 'Funds Utilized', change: '97% utilization rate' },
                { val: '10,400+', label: 'Lives Touched', change: 'Across 50 communities' },
              ].map((a, i) => (
                <div key={i} className="rounded-2xl p-5 transition-all" style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)'}}>
                  <div className="text-2xl font-extrabold mb-1" style={{color:CA}}>{a.val}</div>
                  <div className="text-gray-300 font-semibold text-sm mb-1">{a.label}</div>
                  <div className="text-green-400 text-xs">{a.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To serve underprivileged and needy people in society by providing food, basic necessities, shelter, and emotional support — reducing poverty and creating a society where every individual lives with dignity and hope.' },
              { icon: '🔭', title: 'Our Vision', desc: 'A world where no child goes hungry, no elderly person sleeps on the street, and every underprivileged family has access to education, healthcare, and the care they deserve.' },
              { icon: '💎', title: 'Our Promise', desc: 'Complete transparency in our operations, maximum utilization of every rupee donated, and unwavering commitment to the dignity of every person we serve — because kindness costs nothing.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 transition-all hover:shadow-lg" style={{border:`2px solid ${CB}`}}
                onMouseEnter={e => e.currentTarget.style.borderColor=C}
                onMouseLeave={e => e.currentTarget.style.borderColor=CB}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Registration */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Legal Status</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Registered Welfare Society</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Officially registered under the Andhra Pradesh Societies Registration Act, 2001 with the Registrar of Societies, Srikakulam.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <button type="button" onClick={() => setShowCert(true)} className="bg-white rounded-2xl p-3 shadow-sm text-left" style={{border:`2px solid ${CB}`}}>
              <img src={certificate} alt="Certificate of Registration — Venkata Somu Helping Hands Welfare Association" className="w-full rounded-xl" />
              <p className="text-center text-xs text-gray-400 mt-2">Tap to view full certificate</p>
            </button>
            <div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Name of the Society', value: 'VENKATA SOMU HELPING HANDS WELFARE ASSOCIATION' },
                  { label: 'Society Registration Number', value: 'No. 189 of 2023' },
                  { label: 'Date of Registration', value: '01 August 2023' },
                  { label: 'Society Category', value: 'Welfare Associations' },
                  { label: 'Registration District', value: 'Srikakulam, Andhra Pradesh' },
                  { label: 'Application No.', value: 'SCR01230005266' },
                  { label: 'Registered Address', value: '1-194, Sancham, Ranastalam, Srikakulam, Andhra Pradesh — 532409' },
                ].map((row, i) => (
                  <div key={i} className="bg-white rounded-xl p-4" style={{border:`1px solid ${CB}`}}>
                    <div className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{row.label}</div>
                    <div className="text-sm font-semibold text-gray-900 leading-relaxed">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 py-8" onClick={() => setShowCert(false)}>
          <div className="max-w-4xl w-full max-h-full overflow-auto" onClick={e => e.stopPropagation()}>
            <img src={certificate} alt="Certificate of Registration" className="w-full rounded-lg" />
            <button onClick={() => setShowCert(false)} className="mt-4 w-full py-3 bg-white font-bold rounded-xl" style={{color:C}}>Close</button>
          </div>
        </div>
      )}

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤝', title: 'Compassion', desc: 'Every action we take is driven by genuine care for people — especially the homeless, elderly, women, and children who suffer silently.' },
              { icon: '🌍', title: 'Humanity', desc: 'We believe true humanity means standing beside the helpless and treating every person with kindness, understanding, and equal respect.' },
              { icon: '💡', title: 'Social Responsibility', desc: 'We are committed to reducing poverty and empowering communities through education, shelter, food, and welfare assistance.' },
              { icon: '📊', title: 'Transparency', desc: 'We operate with full accountability to our volunteers, donors, and communities — because trust is the foundation of everything we do.' },
              { icon: '🚀', title: 'Impact-first', desc: "Every initiative is measured by the real change it creates — because one kind action can make a big difference in someone's life." },
              { icon: '🔗', title: 'Dignity', desc: 'We believe every individual, regardless of their background or condition, deserves to be treated with dignity, hope, and compassion.' },
            ].map((v, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white transition-all" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 2px 12px rgba(41,57,57,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="text-2xl">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Founder's Message</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">A Word from Our Founder</h2>
          </div>
          <div className="rounded-3xl p-8 md:p-12 transition-all" style={{background:'#f8fafa', border:`2px solid ${CB}`}}>
            <div className="text-5xl font-serif mb-6" style={{color:CA}}>"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              Every child deserves love, care, and a safe place to smile without fear or hunger. Kindness costs nothing, but it has the power to heal hearts and spread happiness. If every person chooses to help even one needy person, the world will become a much better and brighter place for everyone.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              VS Helping Hands Welfare Association was born from a simple belief — that together, through kindness and service, we can create positive change in society. We are committed to reducing poverty and creating a society where every individual can live with dignity and hope.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl text-white font-extrabold text-xl flex items-center justify-center shadow-md" style={{background:C}}>VM</div>
              <div>
                <div className="font-extrabold text-gray-900 text-lg">Venkatesh Meesala</div>
                <div className="text-sm font-bold" style={{color:C}}>(Founder & Director , VS Helping Hands Welfare Association)</div>
                <div className="text-gray-400 text-xs mt-0.5">Est. 01 August 2023 · Srikakulam, AP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Growing Impact Since 2023</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{background:CB}} />
            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full text-white flex items-center justify-center font-extrabold text-xs shadow-lg" style={{background:C}}>{m.year.slice(2)}</div>
                  <div className="flex-1 bg-white rounded-xl p-4 transition-all" style={{border:`2px solid #f0f0f0`}}
                    onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 2px 8px rgba(41,57,57,0.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                    <span className="font-extrabold text-sm" style={{color:C}}>{m.year}</span>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Recognition</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center transition-all" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 4px 16px rgba(41,57,57,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{a.title}</h3>
                <p className="text-gray-400 text-xs">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>People</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white transition-all group" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 4px 16px rgba(41,57,57,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="w-16 h-16 rounded-2xl text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-md" style={{background:C}}>{t.initials}</div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-xs font-bold mb-2" style={{color:C}}>{t.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{background:C}}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Be Part of Our Story</h2>
          <p className="mb-8" style={{color:'#a0c4c4'}}>Your skills, time, and passion can transform lives. Join VS Helping Hands Welfare Association today.</p>
          <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white font-extrabold rounded-2xl transition-all shadow-lg" style={{color:C}}>
            Get In Touch →
          </button>
        </div>
      </section>
    </div>
  );
}