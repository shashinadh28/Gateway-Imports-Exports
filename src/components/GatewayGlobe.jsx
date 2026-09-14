import React from "react";

/**
 * GatewayGlobe
 * A stylized rotating "globe" (2D/SVG, no WebGL deps) showing major
 * import-source countries arcing their trade routes into India — built
 * for Gateway Imports and Exports.
 *
 * No external libs required beyond React, so it drops into any project
 * without needing cobe / three / framer-motion etc.
 */
export default function GatewayGlobe() {
  const CENTER = { x: 300, y: 300 };
  const RADIUS = 180;

  // India sits near the globe's optical center — everything routes here.
  const india = { name: "India", x: 320, y: 320 };

  // Major sourcing / trade hubs, positioned around the globe surface.
  const hubs = [
    { name: "Europe", x: 190, y: 180, cx: 220, cy: 150 },
    { name: "Kyrgyzstan", x: 330, y: 140, cx: 330, cy: 190 },
    { name: "China", x: 425, y: 185, cx: 400, cy: 210 },
    { name: "Japan", x: 460, y: 255, cx: 420, cy: 270 },
    { name: "Vietnam", x: 430, y: 370, cx: 400, cy: 345 },
    { name: "Other Markets", x: 175, y: 385, cx: 220, cy: 355 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full max-w-[560px] mx-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="globeShade" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#123a55" />
            <stop offset="55%" stopColor="#0b2740" />
            <stop offset="100%" stopColor="#051523" />
          </radialGradient>

          <radialGradient id="globeRim" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#FF7A18" stopOpacity="0" />
            <stop offset="97%" stopColor="#FF7A18" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF7A18" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A18" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#FF7A18" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FF9F45" stopOpacity="1" />
          </linearGradient>

          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <clipPath id="globeClip">
            <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} />
          </clipPath>
        </defs>

        {/* Sphere body */}
        <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} fill="url(#globeShade)" />
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={RADIUS}
          fill="none"
          stroke="#1d4d70"
          strokeWidth="1"
        />
        <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS + 6} fill="url(#globeRim)" />

        {/* Rotating wireframe grid (lat/long lines) */}
        <g clipPath="url(#globeClip)">
          <g className="gg-spin" style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}>
            {/* Longitude lines */}
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <ellipse
                key={`lon-${deg}`}
                cx={CENTER.x}
                cy={CENTER.y}
                rx={RADIUS * Math.abs(Math.cos((deg * Math.PI) / 180)) || 2}
                ry={RADIUS}
                fill="none"
                stroke="#274b68"
                strokeWidth="0.6"
                strokeOpacity="0.6"
                transform={`rotate(${deg} ${CENTER.x} ${CENTER.y})`}
              />
            ))}
          </g>
          {/* Latitude lines (static, don't spin with longitude for readability) */}
          {[-120, -70, -20, 30, 80, 130].map((offset) => (
            <ellipse
              key={`lat-${offset}`}
              cx={CENTER.x}
              cy={CENTER.y + offset}
              rx={Math.sqrt(Math.max(RADIUS * RADIUS - offset * offset, 0))}
              ry={Math.max(6, 18 - Math.abs(offset) / 12)}
              fill="none"
              stroke="#1d4d70"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
          ))}
        </g>

        {/* Trade-route arcs, every hub flowing in to India */}
        {hubs.map((hub) => {
          const d = `M ${hub.x} ${hub.y} Q ${hub.cx} ${hub.cy} ${india.x} ${india.y}`;
          return (
            <g key={hub.name}>
              <path
                d={d}
                fill="none"
                stroke="#FF7A18"
                strokeWidth="1.4"
                strokeOpacity="0.35"
                strokeDasharray="3 4"
              />
              <path
                d={d}
                fill="none"
                stroke="url(#flowGrad)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <circle r="3" fill="#FF7A18" filter="url(#glow)">
                <animateMotion path={d} dur="3.2s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        {/* Hub nodes + labels */}
        {hubs.map((hub) => (
          <g key={`node-${hub.name}`}>
            <circle cx={hub.x} cy={hub.y} r="4" fill="#FF7A18" stroke="#fff" strokeWidth="1" />
            <rect
              x={hub.x - hub.name.length * 3.1}
              y={hub.y - 15}
              width={hub.name.length * 6.2}
              height="12"
              rx="3"
              fill="#051724"
              fillOpacity="0.85"
              stroke="#274b68"
              strokeWidth="0.5"
            />
            <text
              x={hub.x}
              y={hub.y - 6}
              textAnchor="middle"
              className="fill-white font-bold"
              style={{ fontSize: "8px" }}
            >
              {hub.name}
            </text>
          </g>
        ))}

        {/* India — the destination node */}
        <g transform={`translate(${india.x}, ${india.y})`}>
          <circle r="20" fill="none" stroke="#FF7A18" strokeWidth="1.2" className="gg-radar" />
          <circle r="11" fill="#FF7A18" fillOpacity="0.25" />
          <circle r="6" fill="#FF7A18" stroke="#fff" strokeWidth="1.6" />
          <text
            x="0"
            y="24"
            textAnchor="middle"
            className="fill-white"
            style={{ fontSize: "13px", fontWeight: 900 }}
          >
            India
          </text>
        </g>
      </svg>

      <style>{`
        .gg-spin {
          animation: gg-rotate 50s linear infinite;
        }
        @keyframes gg-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .gg-radar {
          animation: gg-pulse 2.6s ease-out infinite;
          transform-origin: center;
        }
        @keyframes gg-pulse {
          0% { r: 6; opacity: 0.9; }
          80% { r: 24; opacity: 0; }
          100% { r: 24; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
