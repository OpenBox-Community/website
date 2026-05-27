import { useEffect, useRef } from "react";

export function Typewriter({
  lines,
  speed = 55,
  className,
}: {
  lines: string[];
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const full = lines.join("\n");

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.textContent = full;
      const caret = ref.current.querySelector(".tw-caret");
      if (caret) caret.classList.add("tw-caret--blink");
      return;
    }

    let i = 0;
    const el = ref.current;

    const id = setInterval(() => {
      if (i < full.length) {
        el.textContent = full.slice(0, i + 1);
        i++;
      } else {
        clearInterval(id);
        const caret = el.querySelector(".tw-caret");
        if (caret) caret.classList.add("tw-caret--blink");
      }
    }, speed);

    return () => clearInterval(id);
  }, [full, speed]);

  return (
    <span className={className} ref={ref}>
      <span className="tw-caret" aria-hidden />
    </span>
  );
}
