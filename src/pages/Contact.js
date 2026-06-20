import React, { useState } from "react";

const C = "#293939";
const CL = "#eef3f3";
const CB = "#d4e0e0";
const CA = "#5a9090";

function DonateModal({ onClose }) {
  const [copied, setCopied] = useState("");
  const copy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 overflow-y-auto max-h-screen" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-extrabold text-gray-900">Donate & Make a Difference</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-sm">✕</button>
        </div>
        <p className="text-gray-500 text-sm mb-5">Your donation directly funds our community programs across Telangana.</p>
        <div className="rounded-2xl p-4 mb-5" style={{ background: CL, border: `1px solid ${CB}` }}>
          <p className="text-sm font-bold" style={{ color: C }}>❤️ 97% goes directly to the community</p>
          <p className="text-xs mt-1" style={{ color: CA }}>FCRA Registered · Fully Audited · Complete Transparency</p>
        </div>
        <div className="rounded-2xl p-5 mb-4" style={{ border: `2px solid ${C}` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: C }}>UPI</div>
            <div>
              <div className="font-bold text-gray-900 text-sm">Pay via UPI</div>
              <div className="text-gray-400 text-xs">GPay · PhonePe · Paytm · BHIM</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-200">
            <span className="font-mono font-bold text-gray-900 text-sm">vshelpinghands@upi</span>
            <button onClick={() => copy("vshelpinghands@upi", "upi")} className="text-xs text-white font-bold px-3 py-1.5 rounded-lg transition-colors" style={{ background: C }}>
              {copied === "upi" ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-5">
          <div className="font-bold text-gray-900 text-sm mb-3">🏦 Bank Transfer (NEFT / IMPS / RTGS)</div>
          <div className="flex flex-col gap-2">
            {[
              { label: "Account Name", value: "VSHelpingHands Foundation", key: "name" },
              { label: "Account No.", value: "1234567890123", key: "acc" },
              { label: "IFSC Code", value: "SBIN0012345", key: "ifsc" },
              { label: "Bank", value: "State Bank of India, Banjara Hills", key: "bank" },
            ].map((r, i) => (
              <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-500 text-xs">{r.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800 text-xs">{r.value}</span>
                  <button onClick={() => copy(r.value, r.key)} className="text-xs font-bold hover:underline" style={{ color: C }}>{copied === r.key ? "✓" : "Copy"}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-4">
          <p className="text-green-800 text-sm font-bold">📞 After your transfer, we'll call you within 24 hours</p>
          <p className="text-green-600 text-xs mt-1">You'll receive a donation receipt & impact update from our team</p>
        </div>
        <button onClick={onClose} className="w-full py-3 text-white font-extrabold rounded-xl transition-colors" style={{ background: C }}>Done ✓</button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [showDonate, setShowDonate] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Do I need prior experience to volunteer?", a: "No experience needed! We welcome everyone. We provide full training and orientation for all volunteer roles before any event." },
    { q: "How much time do I need to commit?", a: "Even a few hours a month makes a huge difference. You completely choose your own availability — there are no minimum hour requirements." },
    { q: "Can organizations partner with us?", a: "Absolutely! We partner with NGOs, corporates, schools, colleges, and government bodies. Just call or WhatsApp us to discuss." },
    { q: "Do you provide volunteer certificates?", a: "Yes! All active volunteers receive official certificates, LinkedIn recommendation letters, and appreciation letters from our directors." },
    { q: "How are donations utilized?", a: "97% of all donations go directly to programs. We publish annual audited reports and maintain full financial transparency." },
    { q: "How do I join future events?", a: "Simply call or WhatsApp us. We'll add you to our volunteer list and personally notify you when the next event near you is planned." },
  ];

  const socials = [
    { label: "Facebook", icon: "FB", color: "#1877f2", sub: "@vshelpinghands", href: null },
    { label: "Instagram", icon: "IG", color: "#e1306c", sub: "@vshelpinghand", href: "https://www.instagram.com/vshelpinghand?igsh=OXk1b3N1dGN3cno=" },
    { label: "Twitter / X", icon: "TW", color: "#4a6060", sub: "@vshelpinghands", href: null },
    { label: "YouTube", icon: "YT", color: "#ff0000", sub: "VS Helping Hands", href: null },
    { label: "LinkedIn", icon: "LI", color: "#0077b5", sub: "VSHelpingHands", href: null },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {showDonate && <DonateModal onClose={() => setShowDonate(false)} />}

      {/* Hero */}
      <section style={{ background: "#1a2a2a" }} className="text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-bold text-sm uppercase tracking-widest" style={{ color: CA }}>Reach Out</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">No forms, no waiting. Just reach out to us directly — we're a friendly, approachable team and we'd love to hear from you.</p>
        </div>
      </section>

      {/* 3 Options */}
      <section className="py-10" style={{ background: C }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🙋", title: "Volunteer with Us", desc: "Want to give your time and skills? Call or WhatsApp us and we'll get you started right away." },
              { icon: "❤️", title: "Donate", desc: "Support our work financially. Every rupee makes a real difference on the ground.", action: () => setShowDonate(true) },
              { icon: "🤝", title: "Partner / Corporate CSR", desc: "NGOs, companies, schools — let's collaborate and multiply our impact together." },
            ].map((o, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all ${o.action ? "cursor-pointer" : ""}`} onClick={o.action}>
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="font-extrabold text-gray-900 mb-2">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
                {o.action && <button className="mt-4 px-5 py-2 text-white font-bold text-sm rounded-xl transition-colors" style={{ background: C }}>See Payment Details →</button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{ color: C }}>Contact Details</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Reach Us Directly</h2>
            <p className="text-gray-500 mt-3">We respond within a few hours. No bots — a real person will get back to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Phone / WhatsApp */}
            <div className="rounded-3xl p-8 hover:shadow-lg transition-all" style={{ background: "#f8fafa", border: `2px solid ${C}` }}>
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">Call or WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">Fastest way to reach us. Available 24/7.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919391303824" className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 transition-all group" style={{ border: `2px solid #f0f0f0` }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = C)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#f0f0f0")}>
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Phone</div>
                    <div className="font-extrabold text-gray-900 text-lg">+91 9391303824</div>
                  </div>
                </a>
                <a href="https://wa.me/919391303824" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-50 border-2 border-green-100 rounded-2xl px-5 py-4 hover:border-green-400 transition-all group">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="text-xs text-green-600 font-semibold uppercase tracking-wide">WhatsApp</div>
                    <div className="font-extrabold text-gray-900 text-lg group-hover:text-green-700">+91 9391303824</div>
                  </div>
                </a>
              </div>
              <p className="text-gray-400 text-xs mt-4">🕐 Available 24/7 — Call or WhatsApp us anytime, any day.</p>
            </div>

            {/* Email + Address */}
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl p-7 transition-all" style={{ background: "#f8fafa", border: `2px solid #f0f0f0` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; e.currentTarget.style.boxShadow = "0 4px 16px rgba(41,57,57,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm mb-3">We reply within 24 hours on working days.</p>
                <a href="mailto:Vshelpinghands17@gmail.com" className="font-bold text-base hover:underline" style={{ color: C }}>Vshelpinghands17@gmail.com</a>
              </div>
              <div className="rounded-3xl p-7 transition-all" style={{ background: "#f8fafa", border: `2px solid #f0f0f0` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; e.currentTarget.style.boxShadow = "0 4px 16px rgba(41,57,57,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.boxShadow = "none"; }}>
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-500 text-sm mb-2">Our office is open Monday to Saturday.</p>
                <p className="font-semibold text-gray-800 text-sm">
                  VS Helping Hands Welfare Association<br />
                  1-23, Sancham Village<br />
                  Ranasthalam (Md), Srikakulam (Dt)<br />
                  Andhra Pradesh – 532409
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="rounded-3xl p-8 text-white text-center mb-10" style={{ background: "#1a2a2a" }}>
            <h3 className="text-xl font-extrabold mb-2">Follow Our Journey</h3>
            <p className="text-gray-400 text-sm mb-6">Stay updated with our latest drives, stories, and impact reports.</p>
            <div className="flex flex-wrap justify-center gap-5">
              {socials.map((s, i) => {
                const Wrap = s.href ? 'a' : 'div';
                const linkProps = s.href ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' } : {};
                return (
                  <Wrap key={i} {...linkProps} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm group-hover:scale-110 transition-transform shadow-md" style={{ background: s.color }}>{s.icon}</div>
                    <div className="text-xs font-semibold text-gray-300">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.sub}</div>
                  </Wrap>
                );
              })}
            </div>
          </div>

          {/* Donate CTA */}
          <div className="rounded-3xl p-8 text-center" style={{ background: CL, border: `2px solid ${C}` }}>
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Want to Donate?</h3>
            <p className="text-gray-600 text-sm mb-2 max-w-md mx-auto">We accept UPI and bank transfers. After your donation, our team will personally call you within 24 hours to acknowledge and share your impact report.</p>
            <p className="font-bold text-sm mb-6" style={{ color: C }}>97% of every rupee goes directly to the community.</p>
            <button onClick={() => setShowDonate(true)} className="px-8 py-4 text-white font-extrabold rounded-2xl transition-all shadow-md text-base" style={{ background: C }}>View Payment Details →</button>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: `2px solid #f0f0f0` }}>
            <h3 className="text-xl font-extrabold text-gray-900 mb-5 text-center">🕐 Availability</h3>
            <div className="flex flex-col gap-3">
              {[
                { day: 'Monday – Friday', time: '24 Hours' },
                { day: 'Saturday', time: '24 Hours' },
                { day: 'Sunday', time: '24 Hours' },
              ].map((o, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3 rounded-xl bg-green-50 border border-green-100">
                  <span className="font-semibold text-gray-700 text-sm">{o.day}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm">{o.time}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Open</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">📞 Call or WhatsApp us anytime — we're available 24/7, every day of the week.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-widest" style={{ color: C }}>FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white transition-colors" style={{ border: `2px solid #f0f0f0` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = openFaq === i ? C : "#f0f0f0")}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50">
                  <span className="font-semibold text-gray-900 text-sm">{f.q}</span>
                  <svg className={`w-5 h-5 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} style={{ color: CA }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}