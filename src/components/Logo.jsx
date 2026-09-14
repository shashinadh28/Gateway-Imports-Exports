import React from "react";

export function GatewayLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision SVG globe/swirl icon matching reference image */}
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        {/* Navy swirl arc */}
        <path
          d="M20 4C11.163 4 4 11.163 4 20C4 26.5 7.8 32.1 13.4 34.6C12.5 32.8 12 30.7 12 28.5C12 21.6 17.6 16 24.5 16C27.2 16 29.7 16.9 31.8 18.3C30.2 10.2 23.4 4 20 4Z"
          fill="#06283D"
        />
        {/* Vibrant orange swirl arc */}
        <path
          d="M20 36C28.837 36 36 28.837 36 20C36 13.5 32.2 7.9 26.6 5.4C27.5 7.2 28 9.3 28 11.5C28 18.4 22.4 24 15.5 24C12.8 24 10.3 23.1 8.2 21.7C9.8 29.8 16.6 36 20 36Z"
          fill="#FF7A18"
        />
        <circle cx="20" cy="20" r="3.5" fill="#06283D" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="text-[17px] font-black tracking-tight text-[#06283D] uppercase font-sans">
          Gateway
        </span>
        <span className="text-[9px] font-bold tracking-[0.24em] text-slate-500 uppercase mt-0.5 font-sans">
          Workforce
        </span>
      </div>
    </div>
  );
}

export function GatewayLogoWhite({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4C11.163 4 4 11.163 4 20C4 26.5 7.8 32.1 13.4 34.6C12.5 32.8 12 30.7 12 28.5C12 21.6 17.6 16 24.5 16C27.2 16 29.7 16.9 31.8 18.3C30.2 10.2 23.4 4 20 4Z"
          fill="#38BDF8"
        />
        <path
          d="M20 36C28.837 36 36 28.837 36 20C36 13.5 32.2 7.9 26.6 5.4C27.5 7.2 28 9.3 28 11.5C28 18.4 22.4 24 15.5 24C12.8 24 10.3 23.1 8.2 21.7C9.8 29.8 16.6 36 20 36Z"
          fill="#FF7A18"
        />
        <circle cx="20" cy="20" r="3.5" fill="#ffffff" />
      </svg>
      <div className="flex flex-col justify-center leading-none">
        <span className="text-[17px] font-black tracking-tight text-white uppercase font-sans">
          Gateway
        </span>
        <span className="text-[9px] font-bold tracking-[0.24em] text-slate-400 uppercase mt-0.5 font-sans">
          Workforce
        </span>
      </div>
    </div>
  );
}
