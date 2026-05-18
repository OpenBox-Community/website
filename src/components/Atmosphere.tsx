import { useEffect, useRef } from "react";

export function Atmosphere() {
  const gridRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const grid = gridRef.current;
    let ticking = false;

    const update = () => {
      grid.style.transform = `translate3d(0, ${-window.scrollY * 0.3}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="dot-grid" ref={gridRef} aria-hidden />
      <div className="scanlines" aria-hidden />
    </>
  );
}
