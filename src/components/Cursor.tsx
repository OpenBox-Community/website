import { useEffect, useState } from "react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);

    // Use a native CSS cursor with an inline SVG target. No JS tracking/animation.
    const svg = encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><line x1='10' y1='4' x2='10' y2='16' stroke='%236EE87A' stroke-width='2' stroke-linecap='round'/><line x1='4' y1='10' x2='16' y2='10' stroke='%236EE87A' stroke-width='2' stroke-linecap='round'/></svg>"
    );
    const cursor = `url("data:image/svg+xml;utf8,${svg}") 10 10, auto`;
    const prev = document.documentElement.style.cursor;
    document.documentElement.style.cursor = cursor;

    return () => {
      document.documentElement.style.cursor = prev || "";
    };
  }, []);

  if (!enabled) return null;
  return null;
}
