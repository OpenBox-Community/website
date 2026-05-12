import { useEffect, useState } from "react";

export function Atmosphere() {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY * 0.3));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div className="dot-grid" aria-hidden style={{ transform: `translate3d(0, ${-y}px, 0)` }} />
      <div className="scanlines" aria-hidden />
    </>
  );
}
