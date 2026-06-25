export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 240 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car Body (Roof and Hood) */}
      <path 
        d="M 25 70 C 10 70 15 45 25 45 L 45 40 L 80 20 L 130 20 L 180 40 L 215 45 C 225 45 230 70 215 70" 
        stroke="url(#car-gradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Back and front bumper connectors to wheels */}
      <path 
        d="M 25 70 L 35 70" 
        stroke="url(#car-gradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
      <path 
        d="M 205 70 L 215 70" 
        stroke="url(#car-gradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />

      {/* Left Wheel Arc */}
      <path 
        d="M 35 70 A 20 20 0 1 0 75 70" 
        stroke="url(#car-gradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
      
      {/* Right Wheel Arc */}
      <path 
        d="M 165 70 A 20 20 0 1 0 205 70" 
        stroke="url(#car-gradient)" 
        strokeWidth="10" 
        strokeLinecap="round" 
      />

      {/* Heartbeat EKG Line connecting the wheels */}
      <polyline 
        points="55,70 90,70 105,35 120,95 135,70 185,70" 
        stroke="url(#pulse-gradient)" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Wheel centers (pulse dots) */}
      <circle cx="55" cy="70" r="6" fill="#00c6ff" />
      <circle cx="185" cy="70" r="6" fill="#00c6ff" />

      {/* Gradients */}
      <defs>
        <linearGradient id="car-gradient" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5a3791" />
          <stop offset="1" stopColor="#2d1b4e" />
        </linearGradient>
        <linearGradient id="pulse-gradient" x1="55" y1="0" x2="185" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00c6ff" />
          <stop offset="1" stopColor="#5a3791" />
        </linearGradient>
      </defs>
    </svg>
  );
}
