import { useEffect, useState } from "react";

export function Typewriter({ lines, speed = 55, className }: { lines: string[]; speed?: number; className?: string }) {
  const full = lines.join("\n");
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(full.length); setDone(true); return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setN(i);
      if (i >= full.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [full, speed]);

  const shown = full.slice(0, n);
  const rendered = shown.split("\n");
  return (
    <span className={className}>
      {rendered.map((ln, i) => (
        <span key={i}>
          {ln}
          {i < rendered.length - 1 && <br />}
        </span>
      ))}
      <span className={`tw-caret ${done ? "tw-caret--blink" : ""}`} aria-hidden />
    </span>
  );
}
