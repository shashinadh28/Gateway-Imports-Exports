import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Navigation, Box, CheckCircle2, Shield } from "lucide-react";

export default function WorldMapGraphic({ selectedHub, onSelectHub }) {
  const [hoveredHub, setHoveredHub] = useState(null);

  // Scaled coordinates for a 900x480 viewBox
  const hubs = [
    {
      id: "china",
      name: "China",
      flag: "🇨🇳",
      x: 670,
      y: 205,
      controlX: 650,
      controlY: 220,
      role: "Manufacturing & Tech Corridor",
      specialty: "Consumer Electronics, Tools & Industrial Parts",
      transit: "Direct Sea & Air Routes",
    },
    {
      id: "japan",
      name: "Japan",
      flag: "🇯🇵",
      x: 745,
      y: 190,
      controlX: 690,
      controlY: 200,
      role: "Precision Engineering Hub",
      specialty: "Advanced Components, Tooling & Precision Machinery",
      transit: "Pacific Maritime Lane",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      flag: "🇻🇳",
      x: 665,
      y: 275,
      controlX: 640,
      controlY: 285,
      role: "High-Growth Assembly Corridor",
      specialty: "Consumer Goods, Lifestyle Products & Components",
      transit: "Southeast Asia Trade Route",
    },
    {
      id: "kyrgyzstan",
      name: "Kyrgyzstan",
      flag: "🇰🇬",
      x: 575,
      y: 180,
      controlX: 585,
      controlY: 215,
      role: "Central Asian Trade Bridge",
      specialty: "Selected Commodities, Energy & Raw Materials",
      transit: "Multimodal Silk Corridor",
    },
    {
      id: "other",
      name: "Other Global Markets",
      flag: "🌍",
      x: 420,
      y: 230,
      controlX: 500,
      controlY: 235,
      role: "Agile Global Corridors",
      specialty: "Niche B2B Sourcing, Specialized Equipment",
      transit: "Global Maritime Network",
    },
  ];

  // Destination: India
  const destinationIndia = {
    name: "India",
    flag: "🇮🇳",
    x: 605,
    y: 260,
    role: "Target Market & Commercial Distribution",
  };

  const activeHubData = hubs.find((h) => h.id === (hoveredHub || selectedHub)) || hubs[0];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-brand-navy-950 via-[#0a1c2b] to-brand-navy-900 border border-brand-navy-800 shadow-2xl overflow-hidden">
      {/* Top Map Header Ribbon */}
      <div className="px-6 py-4 border-b border-brand-navy-800/80 flex flex-wrap items-center justify-between gap-3 bg-brand-navy-950/80 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase font-bold tracking-widest text-slate-300">
            Active Global Sourcing Corridors → Indian Market
          </span>
        </div>

        {/* Live Corridor Selectors */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {hubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => onSelectHub && onSelectHub(hub.id)}
              onMouseEnter={() => setHoveredHub(hub.id)}
              onMouseLeave={() => setHoveredHub(null)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                (selectedHub === hub.id || hoveredHub === hub.id)
                  ? "bg-brand-orange-500 text-white shadow-glow-orange scale-105"
                  : "bg-brand-navy-800/80 text-slate-300 hover:bg-brand-navy-700 hover:text-white"
              }`}
            >
              <span>{hub.flag}</span>
              <span>{hub.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[16/9] max-h-[500px]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

        <svg
          viewBox="0 0 900 480"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff8533" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Continents outlines (Stylized World Silhouettes) */}
          <g fill="#162e42" fillOpacity="0.35" stroke="#254d6e" strokeWidth="0.6" opacity="0.6">
            {/* North America */}
            <path d="M120,90 Q150,80 200,95 Q230,120 220,170 Q180,210 150,220 Q120,180 110,130 Z" />
            {/* South America */}
            <path d="M200,240 Q250,260 260,320 Q240,390 200,410 Q180,360 190,290 Z" />
            {/* Europe */}
            <path d="M430,90 Q490,95 510,130 Q480,165 440,160 Q420,130 430,90 Z" />
            {/* Africa */}
            <path d="M430,175 Q490,180 500,240 Q480,330 440,360 Q410,290 410,210 Z" />
            {/* Eurasia & Central Asia */}
            <path d="M510,85 Q650,70 780,100 Q800,160 740,210 Q660,180 560,160 Z" />
            {/* China & East Asia */}
            <path d="M640,160 Q730,150 750,230 Q700,260 640,240 Q620,190 640,160 Z" />
            {/* Southeast Asia */}
            <path d="M660,250 Q710,260 720,320 Q670,330 650,290 Z" />
            {/* Australia */}
            <path d="M720,340 Q800,340 810,400 Q740,430 710,390 Z" />
            {/* India Subcontinent */}
            <path
              d="M585,220 Q630,220 635,270 L605,310 L575,260 Z"
              fill="#1e4663"
              fillOpacity="0.6"
              stroke="#f97316"
              strokeWidth="1"
            />
          </g>

          {/* Trade Routes to India (Bezier Arcs) */}
          {hubs.map((hub) => {
            const isSelected = selectedHub === hub.id || hoveredHub === hub.id;
            const pathD = `M ${hub.x} ${hub.y} Q ${hub.controlX} ${hub.controlY} ${destinationIndia.x} ${destinationIndia.y}`;

            return (
              <g key={`route-${hub.id}`}>
                {/* Background soft glow path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth={isSelected ? 3.5 : 1.5}
                  strokeOpacity={isSelected ? 0.9 : 0.4}
                  filter={isSelected ? "url(#glow)" : undefined}
                />

                {/* Flowing animated dash path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth={isSelected ? 3 : 1.8}
                  className="route-flow"
                  strokeLinecap="round"
                />

                {/* Animated Moving Cargo Pulse */}
                <circle r={isSelected ? 4 : 3} fill="#f97316">
                  <animateMotion
                    path={pathD}
                    dur={isSelected ? "2.2s" : "3.5s"}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* India Destination Node */}
          <g transform={`translate(${destinationIndia.x}, ${destinationIndia.y})`}>
            {/* Pulsing Radar Ring */}
            <circle
              r="22"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.5"
              className="radar-ring"
            />
            <circle
              r="14"
              fill="#f97316"
              fillOpacity="0.25"
            />
            <circle
              r="8"
              fill="#f97316"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text
              x="0"
              y="-16"
              textAnchor="middle"
              className="text-[11px] font-extrabold fill-white font-heading"
            >
              🇮🇳 INDIA (Hub)
            </text>
            <text
              x="0"
              y="20"
              textAnchor="middle"
              className="text-[8px] font-semibold fill-brand-orange-400 tracking-wider"
            >
              Gateway Workforce
            </text>
          </g>

          {/* Hub Nodes (Origins) */}
          {hubs.map((hub) => {
            const isHovered = hoveredHub === hub.id || selectedHub === hub.id;
            return (
              <g
                key={`hub-${hub.id}`}
                transform={`translate(${hub.x}, ${hub.y})`}
                className="cursor-pointer transition-transform"
                onClick={() => onSelectHub && onSelectHub(hub.id)}
                onMouseEnter={() => setHoveredHub(hub.id)}
                onMouseLeave={() => setHoveredHub(null)}
              >
                {/* Outer halo */}
                <circle
                  r={isHovered ? 15 : 10}
                  fill={isHovered ? "#f97316" : "#38bdf8"}
                  fillOpacity="0.2"
                  className="transition-all duration-300"
                />
                <circle
                  r={isHovered ? 7 : 5}
                  fill={isHovered ? "#f97316" : "#38bdf8"}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                {/* Country label */}
                <text
                  x="0"
                  y={hub.y > 230 ? 18 : -14}
                  textAnchor="middle"
                  className={`text-[10px] font-bold fill-slate-200 transition-all ${
                    isHovered ? "fill-brand-orange-400 font-extrabold scale-110" : ""
                  }`}
                >
                  {hub.flag} {hub.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Active Corridor Detail Card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-brand-navy-950/90 backdrop-blur-md border border-brand-navy-800 rounded-xl p-3.5 text-xs text-white shadow-card-elevated">
          <div className="flex items-center justify-between pb-2 border-b border-brand-navy-800 mb-2">
            <div className="flex items-center gap-2 font-bold text-sm text-brand-orange-400">
              <span>{activeHubData.flag}</span>
              <span>{activeHubData.name} ➔ India Corridor</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-brand-orange-500/20 text-brand-orange-300 font-semibold border border-brand-orange-500/30">
              Active Flow
            </span>
          </div>

          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <p>
              <span className="text-slate-400 font-medium">Trade Focus: </span>
              <span className="text-white font-medium">{activeHubData.specialty}</span>
            </p>
            <p>
              <span className="text-slate-400 font-medium">Corridor Logistics: </span>
              <span className="text-slate-200">{activeHubData.transit}</span>
            </p>
          </div>
        </div>

        {/* Floating Shipping Containers Badge (Matching User Request) */}
        <div className="hidden md:flex absolute top-4 right-4 items-center gap-3 bg-brand-navy-950/85 backdrop-blur-md border border-brand-navy-800 rounded-xl px-3.5 py-2 text-xs">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded bg-brand-orange-500 flex items-center justify-center text-[9px] font-bold text-white shadow">
              CN
            </div>
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white shadow">
              JP
            </div>
            <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white shadow">
              VN
            </div>
            <div className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center text-[9px] font-bold text-white shadow">
              KG
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-slate-400">B2B Corridors</span>
            <span className="text-xs font-semibold text-white">Direct Sea & Air Sourcing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
