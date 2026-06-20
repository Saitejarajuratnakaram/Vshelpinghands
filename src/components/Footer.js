import React from 'react';
import logo from '../img/charitylogo1.jpeg';

export default function Footer({ navigate }) {
  return (
    <footer style={{background:'#f8fafa', borderTop:'2px solid #d4e0e0'}} className="text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 shadow-sm" style={{border:'2px solid #d4e0e0'}}>
                <img src={logo} alt="VS Helping Hands Logo" className="w-full h-full object-cover" style={{objectPosition:'50% 50%', transform:'scale(1.8)', transformOrigin:'50% 50%'}} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base leading-tight" style={{color:'#293939'}}>VS<span style={{color:'#5a9090'}}>HelpingHands</span></span>
                <span className="text-xs leading-tight" style={{color:'#7a9e9e'}}>Welfare Association</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-500">
              Serving underprivileged and needy people with compassion, humanity, and social responsibility. Founded by Venkatesh Meesala on 01 August 2023.
            </p>
            <div className="flex gap-3">
              {[
  {l:'FB', c:'#1877f2', href:null},
  {l:'IG', c:'#e1306c', href:'https://www.instagram.com/vshelpinghand?igsh=OXk1b3N1dGN3cno='},
  {l:'TW', c:'#5a9090', href:null},
  {l:'YT', c:'#ff0000', href:null},
].map((s,i)=>(
  s.href
    ? <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{background:s.c}}>{s.l}</a>
    : <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity" style={{background:s.c}}>{s.l}</div>
))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{color:'#293939'}}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['home','about','services','contact'].map(p => (
                <button key={p} onClick={() => navigate(p)}
                  className="text-left text-sm capitalize transition-colors text-gray-500"
                  onMouseEnter={e => e.currentTarget.style.color='#293939'}
                  onMouseLeave={e => e.currentTarget.style.color='#6b7280'}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{color:'#293939'}}>Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-2"><span style={{color:'#5a9090'}}>✉</span><span>Vshelpinghands17@gmail.com</span></div>
              <div className="flex items-center gap-2"><span style={{color:'#5a9090'}}>📞</span><span>+91 9391303824</span></div>
              <div className="flex items-start gap-2"><span style={{color:'#5a9090'}}>📍</span><span>1-23, Sancham Village, Ranasthalam (Md), Srikakulam (Dt), Andhra Pradesh – 532409</span></div>
            </div>
          </div>

        </div>{/* ← closes grid */}

        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{borderTop:'1px solid #d4e0e0'}}>
          <p className="text-xs text-gray-400">© 2025 VS Helping Hands Welfare Association. All rights reserved.</p>
          <p className="text-xs text-gray-400">Made with ❤️ for the community · Srikakulam, AP · Est. 2023</p>
        </div>
      </div>
    </footer>
  );
}