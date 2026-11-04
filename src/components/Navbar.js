import React, { useState, useEffect } from 'react';
import UpiPayBox from './UpiPayBox';
const logo = require('../img/charitylogo1.jpeg');

const links = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Services', key: 'services' },
  { label: 'Contact', key: 'contact' },
];

function DonateModal({ onClose }) {
  const [copied, setCopied] = useState('');
  const copy = (text, key) => { navigator.clipboard?.writeText(text); setCopied(key); setTimeout(() => setCopied(''), 2000); };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 overflow-y-auto max-h-screen" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-extrabold text-gray-900">Get Involved & Donate</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm">✕</button>
        </div>
        <p className="text-gray-500 text-sm mb-5">Your donation directly funds our community programs across Telangana.</p>
        <div className="rounded-2xl p-4 mb-5" style={{background:'#eef3f3', border:'1px solid #d4e0e0'}}>
          <p className="text-sm font-bold" style={{color:'#293939'}}>❤️ 97% goes directly to the community</p>
          <p className="text-xs mt-1" style={{color:'#3d6060'}}>FCRA Registered · Fully Audited · Complete Transparency</p>
        </div>
        <UpiPayBox copied={copied} onCopy={copy} />
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-5">
          <div className="font-bold text-gray-900 text-sm mb-3">🏦 Bank Transfer (NEFT / IMPS / RTGS)</div>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Account Name', value: 'VENKATA SOMU HELPING HANDS WELFARE ASSOCIATIONS.', key: 'name' },
              { label: 'Account No.', value: '626010000002691', key: 'acc' },
              { label: 'IFSC Code', value: 'UBINOCG7999', key: 'ifsc' },
              { label: 'Bank', value: 'APGVB (Phydibheemavaram)', key: 'bank' },
            ].map((r, i) => (
              <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-500 text-xs">{r.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-xs">{r.value}</span>
                  <button onClick={() => copy(r.value, r.key)} className="text-xs font-bold hover:underline" style={{color:'#293939'}}>{copied === r.key ? '✓' : 'Copy'}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-4">
          <p className="text-green-800 text-sm font-bold">📞 After your transfer, we'll call you within 24 hours</p>
          <p className="text-green-600 text-xs mt-1">You'll receive a donation receipt & impact update from our team</p>
        </div>
        <button onClick={onClose} className="w-full py-3 text-white font-extrabold rounded-xl transition-colors" style={{background:'#293939'}}>Done ✓</button>
      </div>
    </div>
  );
}

export default function Navbar({ current, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (key) => { navigate(key); setOpen(false); };

  return (
    <>
      {showDonate && <DonateModal onClose={() => setShowDonate(false)} />}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white border-b`} style={{borderColor:'#d4e0e0', boxShadow: scrolled ? '0 2px 16px rgba(41,57,57,0.10)' : 'none'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button onClick={() => go('home')} className="flex items-center gap-2.5 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0">
                <img src={logo} alt="VS Helping Hands Logo" className="w-full h-full object-cover" style={{objectPosition: '50% 50%', transform: 'scale(1.8)', transformOrigin: '50% 50%'}} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-base font-extrabold text-gray-900 tracking-tight leading-tight">
                  VS<span style={{color:'#293939'}}>HelpingHands</span>
                </span>
                <span className="text-gray-400 text-xs leading-tight hidden sm:block">Welfare Association</span>
              </div>
            </button>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <button key={l.key} onClick={() => go(l.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200`}
                  style={current === l.key
                    ? {background:'#293939', color:'#fff'}
                    : {color:'#4a5a5a'}
                  }
                  onMouseEnter={e => { if(current !== l.key){ e.currentTarget.style.color='#293939'; e.currentTarget.style.background='#eef3f3'; }}}
                  onMouseLeave={e => { if(current !== l.key){ e.currentTarget.style.color='#4a5a5a'; e.currentTarget.style.background='transparent'; }}}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => setShowDonate(true)}
                className="ml-3 px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
                style={{background:'#293939'}}
                onMouseEnter={e => e.currentTarget.style.background='#1e2d2d'}
                onMouseLeave={e => e.currentTarget.style.background='#293939'}>
                Donate Now
              </button>
            </div>

            {/* Hamburger */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
              {links.map(l => (
                <button key={l.key} onClick={() => go(l.key)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors`}
                  style={current === l.key ? {background:'#293939', color:'#fff'} : {color:'#374151'}}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => { setShowDonate(true); setOpen(false); }}
                className="mt-2 px-4 py-3 text-white text-sm font-bold rounded-xl transition-colors text-center"
                style={{background:'#293939'}}>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}