import React, { useState, useEffect } from 'react';

const C = '#293939';
const CL = '#eef3f3';
const CB = '#d4e0e0';
const CA = '#5a9090';

const stats = [
  { value: '5,000+', label: 'Active Volunteers', icon: '👐' },
  { value: '200+', label: 'Projects Completed', icon: '✅' },
  { value: '50+', label: 'Communities Served', icon: '🏘️' },
  { value: '10K+', label: 'Lives Impacted', icon: '❤️' },
];

const causes = [
  { icon: '🍱', title: 'Food Security', desc: 'Providing meals, basic necessities, and nutritional support to poor and homeless individuals every day.', stat: '1.8 lakh meals served' },
  { icon: '🏠', title: 'Shelter & Care', desc: 'Offering shelter assistance, welfare support, and care to homeless and struggling families.', stat: '500+ families supported' },
  { icon: '🎓', title: 'Education Support', desc: 'Free tutoring, school supplies, and scholarship guidance for underprivileged children to build a brighter future.', stat: '1,200+ students helped' },
  { icon: '🏥', title: 'Healthcare Outreach', desc: 'Free medical camps, health awareness drives, and connecting communities to healthcare services.', stat: '80+ medical camps' },
  { icon: '🌱', title: 'Environmental Drives', desc: 'Tree plantation drives, lake clean-ups, and community-driven environmental initiatives.', stat: '25,000 trees planted' },
  { icon: '👩', title: 'Women Empowerment', desc: 'Skill development, legal awareness, and entrepreneurship training for women across communities.', stat: '800+ women trained' },
  { icon: '🧓', title: 'Elder Care', desc: 'Providing companionship, healthcare support, and dignity to elderly people who suffer silently on the streets.', stat: '300+ seniors supported' },
  { icon: '🏗️', title: 'Rural Development', desc: 'Infrastructure, sanitation, and skill programs for underserved rural communities across Telangana.', stat: '30+ villages reached' },
];

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Our Food Distribution Drive 2024', desc: 'Watch how we provided meals and essential care to hundreds of homeless and needy people across Hyderabad.', tag: 'Food Security' },
  { id: '9bZkp7q19f0', title: 'Community Health Camp Highlights', desc: 'A look at our free medical camp that served 1,200+ patients across 3 districts in one weekend.', tag: 'Healthcare' },
  { id: 'ScMzIvxBSi4', title: 'Green Hyderabad Initiative', desc: 'Join 800 volunteers as we plant 5,000 trees in one day to restore the lungs of our city.', tag: 'Environment' },
];

const pastEvents = [
  { date: 'Mar 2025', title: 'Hussain Sagar Clean-Up', location: 'Hussain Sagar Lake, Hyderabad', volunteers: 320, tag: 'Environment', result: '4 tonnes of waste cleared' },
  { date: 'Feb 2025', title: 'Free Eye Camp', location: 'LB Nagar Community Center', volunteers: 45, tag: 'Healthcare', result: '600+ patients screened' },
  { date: 'Jan 2025', title: 'Literacy Drive — Nizamabad', location: 'Nizamabad District Schools', volunteers: 80, tag: 'Education', result: '200 children enrolled' },
  { date: 'Dec 2024', title: 'Winter Meal Distribution', location: 'Old City, Hyderabad', volunteers: 150, tag: 'Food', result: '5,000 meals served' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Volunteer since 2023', quote: 'Joining VS Helping Hands changed my perspective on life. The impact we create together in just a weekend is truly incredible.', avatar: 'PS', city: 'Hyderabad' },
  { name: 'Ravi Kumar', role: 'Community Lead', quote: 'This platform made organizing volunteers effortless. Within months we coordinated 3 major drives across Secunderabad.', avatar: 'RK', city: 'Secunderabad' },
  { name: 'Anita Reddy', role: 'NGO Partner', quote: 'VS Helping Hands connected us with the most passionate volunteers. Our reach doubled within 6 months of partnering.', avatar: 'AR', city: 'Warangal' },
  { name: 'Mohammed Farhan', role: 'Corporate Volunteer', quote: 'Our entire company team volunteered for the food drive. It brought us together in ways no team outing ever could.', avatar: 'MF', city: 'Hyderabad' },
];

const partners = ['TSCCL', 'GHMC', 'Cyberabad Police', 'HMDA', 'Aarogyasri', 'Robin Hood Army', 'Teach for India', 'Goonj'];

const impactStories = [
  {
    title: 'Feeding a Child in Need',
    category: 'Child in Need',
    excerpt: 'Every child deserves love, protection, food, and a happy life filled with care and support. Even a small act of help can bring comfort and hope to someone who is suffering. A caring society is built through kindness, understanding, and helping hands — because one kind action can make a big difference in someone\'s life.',
    img: require('../img/1.jpg'),
  },
  {
    title: 'Clothing the Elderly',
    category: 'Elder Care',
    excerpt: 'Many poor people suffer every day without proper shelter, food, or safety — elderly people most of all. A small act of kindness such as offering food, clothing, or a few comforting words can make a great difference. True humanity is shown when we stand beside the helpless and treat them with kindness and dignity.',
    img: require('../img/2.jpg'),
  },
  {
    title: 'Giving with Both Hands',
    category: 'Rural Development',
    excerpt: 'Offering clothes, speaking kindly, and listening with respect can make a needy person feel valued and cared for. True humanity is not about wealth or status, but about helping others with sincerity and compassion. Kindness costs nothing, yet its impact can last forever in the hearts of those who receive it.',
    img: require('../img/donates.png'),
  },
];

function DonateModal({ onClose }) {
  const [copied, setCopied] = useState('');
  const copy = (text, key) => { navigator.clipboard?.writeText(text); setCopied(key); setTimeout(() => setCopied(''), 2000); };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 overflow-y-auto max-h-screen" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-extrabold text-gray-900">Donate & Make a Difference</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm">✕</button>
        </div>
        <p className="text-gray-500 text-sm mb-5">Your donation directly funds our community programs across Telangana.</p>
        <div className="rounded-2xl p-4 mb-5" style={{background:CL, border:`1px solid ${CB}`}}>
          <p className="text-sm font-bold" style={{color:C}}>❤️ 97% goes directly to the community</p>
          <p className="text-xs mt-1" style={{color:CA}}>FCRA Registered · Fully Audited · Complete Transparency</p>
        </div>
        <div className="rounded-2xl p-5 mb-4" style={{border:`2px solid ${C}`}}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{background:C}}>UPI</div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Pay via UPI</div>
              <div className="text-gray-400 text-xs">GPay · PhonePe · Paytm · BHIM</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-200">
            <span className="font-mono font-bold text-gray-900 text-sm">vshelpinghands@upi</span>
            <button onClick={() => copy('vshelpinghands@upi', 'upi')} className="text-xs text-white font-bold px-3 py-1.5 rounded-lg transition-colors" style={{background:C}}>
              {copied === 'upi' ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-5">
          <div className="font-bold text-gray-900 text-sm mb-3">🏦 Bank Transfer (NEFT / IMPS / RTGS)</div>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Account Name', value: 'VS Helping Hands Welfare Association', key: 'name' },
              { label: 'Account No.', value: '1234567890123', key: 'acc' },
              { label: 'IFSC Code', value: 'SBIN0012345', key: 'ifsc' },
              { label: 'Bank', value: 'State Bank of India, Banjara Hills', key: 'bank' },
            ].map((r, i) => (
              <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-500 text-xs">{r.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-xs">{r.value}</span>
                  <button onClick={() => copy(r.value, r.key)} className="text-xs font-bold hover:underline" style={{color:C}}>{copied === r.key ? '✓' : 'Copy'}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-4">
          <p className="text-green-800 text-sm font-bold">📞 After your transfer, we'll call you within 24 hours</p>
          <p className="text-green-600 text-xs mt-1">You'll receive a donation receipt & impact update from our team</p>
        </div>
        <button onClick={onClose} className="w-full py-3 text-white font-extrabold rounded-xl transition-colors" style={{background:C}}>Done ✓</button>
      </div>
    </div>
  );
}

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group" style={{border:`1px solid #f0f0f0`}}>
      <div className="relative bg-gray-900" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0">
          {playing ? (
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          ) : (
            <>
              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button onClick={() => setPlaying(true)} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
                  <svg className="w-7 h-7 ml-1" style={{color:C}} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </div>
              <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{background:C}}>{video.tag}</span>
            </>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2 text-base">{video.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{video.desc}</p>
      </div>
    </div>
  );
}

export default function Home({ navigate }) {
  const [showDonate, setShowDonate] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeT, setActiveT] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveT(a => (a + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pt-16 md:pt-20">
      {showDonate && <DonateModal onClose={() => setShowDonate(false)} />}

{/* Founder Introduction */}
<section className="py-12 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

      {/* Image */}
      <div className="w-full lg:w-2/5 flex-shrink-0">
        <div className="relative mx-auto" style={{maxWidth:'380px'}}>
          <div className="absolute -inset-3 rounded-3xl opacity-20" style={{background:C}} />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{border:`4px solid ${CB}`}}>
            <img
              src={require('../img/about.jpg')}
              alt="Venkatesh Meesala - Founder & Director"
              className="w-full object-cover object-top"
              style={{height:'320px', maxHeight:'420px'}}
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-3 -right-3 rounded-2xl px-4 py-2 shadow-xl" style={{background:C}}>
            <p className="text-white font-extrabold text-xs">Est. 01 Aug 2023</p>
            <p className="text-xs" style={{color:'#a0c4c4'}}>Srikakulam, AP</p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
        <span className="font-bold text-xs uppercase tracking-widest" style={{color:C}}>Meet the Founder</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-1">Venkatesh Meesala</h2>
        <p className="font-semibold mb-4 text-sm md:text-base" style={{color:CA}}>(Founder & Director , VS Helping Hands Welfare Association)</p>

        <p className="text-gray-500 italic text-sm leading-relaxed mb-4 border-l-4 pl-4" style={{borderColor:CA}}>
          "Kindness costs nothing, but it has the power to heal hearts and spread happiness. If every person chooses to help even one needy person, the world will become a much better and brighter place for everyone."
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          VS Helping Hands Welfare Association was established on <strong>01/08/2023</strong> with a mission to serve underprivileged and needy people in society. The organization works with compassion, humanity, and social responsibility.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Our primary goal is to help poor people by providing food, basic necessities, and emotional support. We are committed to reducing poverty and creating a society where every individual can live with dignity and hope.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          The association also focuses on education for underprivileged children and shelter assistance for homeless families — because together, through kindness and service, we can create positive change in society.
        </p>

        <div className="flex flex-wrap gap-2">
          {['🎯 Mission-Driven', '🤝 Community-First', '✅ FCRA Registered', '📅 Since 2023'].map((b, i) => (
            <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-full" style={{background:CL, color:C, border:`1px solid ${CB}`}}>{b}</span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      

      {/* Stats */}
      <section style={{background:C}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-sm font-semibold" style={{color:'#a0c4c4'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">8 Causes, One Mission</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We work across every dimension of community welfare — because every life deserves dignity and hope.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {causes.map((c, i) => (
              <div key={i} onClick={() => navigate('services')} className="rounded-2xl bg-white p-5 transition-all duration-300 group cursor-pointer hover:shadow-lg" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => e.currentTarget.style.borderColor=C}
                onMouseLeave={e => e.currentTarget.style.borderColor='#f0f0f0'}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all" style={{background:CL, border:`1px solid ${CB}`}}>{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{c.desc}</p>
                <div className="text-xs font-bold px-2.5 py-1 rounded-full inline-block" style={{background:CL, color:C, border:`1px solid ${CB}`}}>{c.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Impact Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Real Change</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Stories of Impact</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every number in our stats is a human story. Here are just a few.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((s, i) => (
              <div key={i} className="rounded-2xl bg-white overflow-hidden transition-all hover:shadow-lg" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => e.currentTarget.style.borderColor=C}
                onMouseLeave={e => e.currentTarget.style.borderColor='#f0f0f0'}>
                <div className="h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img src={s.img} alt={s.title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{color:C}}>{s.category}</span>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-2 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kindness Quote Banner */}
      <section className="py-16" style={{background:'#1a2a2a'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl font-serif mb-6" style={{color:CA}}>"</div>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-6 italic">
            Kindness costs nothing, but it has the power to heal hearts and spread happiness. If every person chooses to help even one needy person, the world will become a much better and brighter place for everyone.
          </p>
          <p className="font-bold text-sm" style={{color:CA}}>— Venkatesh Meesala, Founder & Director</p>
        </div>
      </section>

{/* Videos */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>In Action</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">See Our Work Live</h2>
      <p className="text-gray-500 max-w-xl mx-auto">Real stories, real impact. Watch our volunteers in action across Telangana.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { src: require('../img/blankets.mp4'), tag: 'Elder Care', title: 'Blankets Distribution Drive', desc: 'Warm blankets distributed to homeless and elderly people on cold nights across Hyderabad.' },
        { src: require('../img/food donate vedio.mp4'), tag: 'Food Security', title: 'Food Donation Drive', desc: 'Volunteers personally hand out meals and essentials to hundreds of needy families in our community.' },
        { src: require('../img/serving.mp4'), tag: 'Community Service', title: 'Serving the Needy', desc: 'Our dedicated team serves food and clothing to underprivileged individuals across Telangana.' },
      ].map((v, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300" style={{border:'1px solid #f0f0f0'}}>
          {/* Video wrapper — natural aspect ratio, no crop */}
          <div className="w-full bg-black">
            <video
              className="w-full h-auto block"
              style={{maxHeight:'320px', objectFit:'contain'}}
              controls
              preload="metadata"
              playsInline
            >
              <source src={v.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Tag + Info */}
          <div className="p-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white inline-block mb-3" style={{background:C}}>{v.tag}</span>
            <h3 className="font-bold text-gray-900 mb-2 text-base">{v.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Hero
      <section className="relative text-white overflow-hidden" style={{background:'#1a2a2a'}}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{background:'rgba(90,144,144,0.10)', transform:'translate(40%,-40%)'}} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full" style={{background:'rgba(41,57,57,0.15)', transform:'translate(-40%,40%)'}} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{background:'rgba(90,144,144,0.15)', border:'1px solid rgba(90,144,144,0.3)', color:'#8fbfbf'}}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{background:CA}} />
                Welfare Association · Hyderabad, Telangana · Est. 2023
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Lend a Hand,<br /><span style={{color:CA}}>Change a Life.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                VS Helping Hands Welfare Association serves underprivileged and needy people with compassion, humanity, and social responsibility. Join 5,000+ volunteers making a real difference every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => setShowDonate(true)} className="px-8 py-4 text-white font-extrabold rounded-2xl transition-all shadow-lg text-base" style={{background:C}}
                  onMouseEnter={e => e.currentTarget.style.background='#1e2d2d'}
                  onMouseLeave={e => e.currentTarget.style.background=C}>
                  Get Involved →
                </button>
                <button onClick={() => setShowDonate(true)} className="px-8 py-4 text-white font-semibold rounded-2xl hover:bg-white hover:bg-opacity-10 transition-all text-base" style={{border:'2px solid rgba(255,255,255,0.25)'}}>
                  ❤️ Donate Now
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {['🏆 Award-winning NGO', '✅ FCRA Registered', '🌍 50+ Communities'].map((b, i) => (
                  <span key={i} className="text-xs text-gray-300 px-3 py-1.5 rounded-full" style={{background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)'}}>{b}</span>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { emoji: '🍱', val: '1.8L+', sub: 'Meals served' },
                { emoji: '🏥', val: '80+', sub: 'Free health camps' },
                { emoji: '🎓', val: '1,200+', sub: 'Students helped' },
                { emoji: '🧓', val: '300+', sub: 'Seniors supported' },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl p-5 transition-all" style={{background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)'}}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor='rgba(90,144,144,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.10)'; }}>
                  <div className="text-3xl mb-3">{c.emoji}</div>
                  <div className="text-2xl font-extrabold mb-1" style={{color:CA}}>{c.val}</div>
                  <div className="text-gray-400 text-xs">{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
     {/* Upcoming Plans */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Coming Soon</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">What We're Building Next</h2>
      <p className="text-gray-500 max-w-xl mx-auto">Big plans are in motion. Here's what we're working toward — and we need your support to make it happen.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {[
        { title: 'Mass Meal Distribution Drive', location: 'Old City, Hyderabad', goal: '500 volunteers needed', tag: 'Food', plan: 'Target: 10,000 meals in one day' },
        { title: 'Free Health & Eye Camp', location: 'Nizamabad District', goal: 'Medical volunteers needed', tag: 'Healthcare', plan: 'Target: 1,000+ patients screened' },
        { title: 'Back to School Drive', location: 'Rural Telangana Schools', goal: 'Sponsors & volunteers needed', tag: 'Education', plan: 'Target: 500 kids enrolled' },
        { title: 'Green Telangana Plantation', location: 'Across Hyderabad', goal: '1,000 volunteers needed', tag: 'Environment', plan: 'Target: 10,000 trees planted' },
      ].map((e, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 transition-all hover:shadow-md" style={{border:`2px solid #f0f0f0`}}
          onMouseEnter={e2 => e2.currentTarget.style.borderColor=C}
          onMouseLeave={e2 => e2.currentTarget.style.borderColor='#f0f0f0'}>
          <div className="flex items-center justify-end mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{background:CL, color:C}}>{e.tag}</span>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mb-1">{e.title}</h3>
          <p className="text-gray-400 text-xs mb-3">📍 {e.location}</p>
          <p className="text-gray-500 text-xs mb-3">🙋 {e.goal}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
            <p className="text-blue-700 text-xs font-bold">🎯 {e.plan}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="rounded-3xl p-8 md:p-10 text-white text-center" style={{background:'#1a2a2a'}}>
      <div className="text-4xl mb-4">🤝</div>
      <h3 className="text-2xl md:text-3xl font-extrabold mb-3">We Need Your Support</h3>
      <p className="text-gray-300 text-base mb-2 max-w-xl mx-auto">These plans are only possible with volunteers, donors, and partners standing with us. Register your interest and we'll reach out personally when we need you.</p>
      <p className="text-gray-400 text-sm mb-6">No commitment needed — just tell us you're in.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => navigate('contact')} className="px-8 py-4 text-white font-extrabold rounded-2xl transition-all shadow-lg text-base" style={{background:C}}>
          🙋 I Want to Volunteer
        </button>
        <button onClick={() => setShowDonate(true)} className="px-8 py-4 font-extrabold rounded-2xl transition-all shadow-lg text-base text-white" style={{background:'#2a4040'}}>
          ❤️ Support This Mission
        </button>
      </div>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>How to Join</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3">Simple as 1-2-3</h2>
            <p className="text-gray-500 max-w-xl mx-auto">No paperwork, no commitments — just a conversation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '💬', title: 'Contact & Talk to Us', desc: "Reach out via WhatsApp, phone, or our contact page. We'll have a friendly 1-on-1 conversation — no forms, no formalities. Just tell us who you are and we'll take it from there.", action: 'Contact Us →', page: 'contact' },
              { step: '02', icon: '🔍', title: 'Understand Our Work', desc: "Explore our 8 cause areas and ongoing programs. We'll personally walk you through what we do, what impact we've made, and where your skills can make the biggest difference.", action: 'See Our Services →', page: 'services' },
              { step: '03', icon: '🤝', title: 'Work With Us', desc: "Once we connect, we match you with the right team and the next event near you. Show up with a willing heart — we'll provide training, coordination and full support.", action: 'Get Started →', page: 'contact' },
            ].map((h, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 transition-all group" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.boxShadow='0 8px 32px rgba(41,57,57,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.boxShadow='none'; }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-md" style={{background:C}}>{h.icon}</div>
                <div className="text-xs font-extrabold text-gray-300 uppercase tracking-widest mb-2">Step {h.step}</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{h.desc}</p>
                <button onClick={() => navigate(h.page)} className="text-sm font-bold hover:opacity-80" style={{color:C}}>{h.action}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{background:C}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to Change Lives?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto" style={{color:'#a0c4c4'}}>Whether you have 2 hours or 2 years — your time and passion can create ripples that last forever.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white font-extrabold rounded-2xl hover:bg-gray-50 transition-all shadow-lg text-base" style={{color:C}}>
              Join as Volunteer
            </button>
            <button onClick={() => setShowDonate(true)} className="px-8 py-4 font-extrabold rounded-2xl transition-all shadow-lg text-base text-white" style={{background:'#1a2a2a'}}>
              ❤️ Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{color:C}}>Voices</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">What Our Community Says</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 transition-all duration-500" style={{border: activeT === i ? `2px solid ${C}` : `2px solid #f0f0f0`, boxShadow: activeT === i ? '0 4px 24px rgba(41,57,57,0.12)' : 'none'}}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <svg key={s} className="w-4 h-4" style={{color:CA}} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full text-white text-xs font-extrabold flex items-center justify-center shrink-0" style={{background:C}}>{t.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role} · {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Our Partners & Supporters</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((p, i) => (
              <div key={i} className="px-5 py-3 bg-white rounded-xl text-gray-500 font-semibold text-sm shadow-sm transition-all" style={{border:`2px solid #f0f0f0`}}
                onMouseEnter={e => { e.currentTarget.style.borderColor=C; e.currentTarget.style.color='#1a2a2a'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='#f0f0f0'; e.currentTarget.style.color='#6b7280'; }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{background:'#1a2a2a'}}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Stay in the Loop</h2>
          <p className="text-gray-400 mb-6 text-sm">Get monthly updates on our drives, impact reports, and volunteer opportunities.</p>
          {subscribed ? (
            <div className="rounded-2xl px-6 py-4 font-bold" style={{background:'rgba(90,144,144,0.15)', border:`1px solid ${CA}`, color:'#8fbfbf'}}>🎉 You're subscribed! Welcome to the VS Helping Hands family.</div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none bg-white" />
              <button onClick={() => { if (email) setSubscribed(true); }} className="px-6 py-3 text-white font-extrabold rounded-xl transition-all text-sm shrink-0" style={{background:C}}>Subscribe</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}