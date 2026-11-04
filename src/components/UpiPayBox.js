import React from 'react';

const UPI_ID = '6260117221@myapgb';
const PAYEE = 'VENKATA SOMU HELPING HANDS WELFARE ASSOCIATION';
const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE)}&cu=INR`;
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(UPI_LINK)}`;

export default function UpiPayBox({ copied, onCopy, accent = '#293939' }) {
  return (
    <div className="rounded-2xl p-5 mb-4" style={{ border: `2px solid ${accent}` }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm" style={{ background: accent }}>UPI</div>
        <div>
          <div className="font-bold text-gray-900 text-sm">Pay via UPI</div>
          <div className="text-gray-400 text-xs">UPI ID is filled in the app — enter amount and PIN to pay</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-3 flex flex-col items-center">
        <img src={QR_SRC} alt="UPI QR code" width="180" height="180" className="w-44 h-44" />
        <p className="text-gray-400 text-[11px] text-center mt-1">Scan with GPay, PhonePe, Paytm or BHIM</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-200 mb-3">
        <span className="font-mono font-bold text-gray-900 text-sm">{UPI_ID}</span>
        <button type="button" onClick={() => onCopy(UPI_ID, 'upi')} className="text-xs text-white font-bold px-3 py-1.5 rounded-lg transition-colors" style={{ background: accent }}>
          {copied === 'upi' ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      <button
        type="button"
        onClick={() => { window.location.href = UPI_LINK; }}
        className="w-full text-center py-2.5 rounded-xl text-xs font-extrabold text-white"
        style={{ background: accent }}
      >
        Pay with UPI app
      </button>
    </div>
  );
}
