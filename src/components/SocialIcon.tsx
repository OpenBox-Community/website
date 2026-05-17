import React from "react";

export function SocialIcon({ name, size = 20 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" } as any;
  const color = "currentColor";
  switch (name) {
    case "Discord":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 4h16v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4z" fill={color} />
          <path d="M7 9.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm10 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" fill="#00000000" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" fill={color} />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" fill={color} />
          <path d="M10 9l6 3-6 3V9z" fill="#00000000" />
        </svg>
      );
    case "X":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 4l14 16M19 4L5 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" fill={color} />
        </svg>
      );
    case "Patreon":
      return (
        <svg {...common} aria-hidden>
          <circle cx="9" cy="12" r="4" fill={color} />
          <rect x="14" y="8" width="4" height="8" rx="2" fill={color} />
        </svg>
      );
    case "GitHub":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.36 1.09 2.94.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.59.69.49A10 10 0 0 0 12 2z" fill={color} />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="9" fill={color} />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="4" fill={color} />
        </svg>
      );
  }
}
