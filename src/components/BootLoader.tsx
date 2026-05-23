import { useEffect, useRef, useState } from "react";

const LINES = [
  "> INITIALIZING OPENBOX...",
  "> LOADING COMMUNITY DATA...",
  "> CONNECTING TO DISCORD GATEWAY...",
  "> FETCHING BUILDER PROFILES...",
  "> MOUNTING MODULES...",
  "> ALL SYSTEMS ONLINE.",
  "> WELCOME TO OPENBOX.",
];

export function BootLoader() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const shown = sessionStorage.getItem("openboxBootShown");
      if (shown) {
        document.documentElement.removeAttribute("data-booting");
        return;
      }
    } catch (e) {
      // ignore
    }
    
    setVisible(true);
    let idx = 0;
    
    const showLine = () => {
      if (containerRef.current && idx < LINES.length) {
        const lineEl = containerRef.current.children[idx] as HTMLElement;
        if (lineEl) {
          lineEl.classList.add("boot-line--on");
        }
        idx++;
        if (idx < LINES.length) {
          timer = window.setTimeout(showLine, 120);
        } else {
          timer = window.setTimeout(closeBoot, 400);
        }
      }
    };
    
    const closeBoot = () => {
      if (containerRef.current) {
        containerRef.current.classList.add("boot-screen--closing");
      }
      timer = window.setTimeout(() => {
        setVisible(false);
        document.documentElement.removeAttribute("data-booting");
        try { sessionStorage.setItem("openboxBootShown", "1"); } catch (e) {}
      }, 600);
    };
    
    let timer = window.setTimeout(showLine, 120);
    return () => { if (timer) clearTimeout(timer); };
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-screen" aria-hidden ref={containerRef}>
      <div className="boot-screen__logo" aria-hidden>
        <div className="boot-screen__logo-inner">OB</div>
      </div>
      <div className="boot-screen__lines">
        {LINES.map((t) => (
          <div key={t} className="boot-line">
            <span className="boot-line__text">{t}</span>
            <span className="boot-caret">_</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// A premium full-screen loading animation — pure CSS, no dependencies.
export function LoadingScreen() {
  return (
    <div
      className="loading-screen"
      aria-live="polite"
      role="status"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg, #0a0a0a)",
        zIndex: 9999,
      }}
    >
      <div
        className="loading-spinner"
        style={{
          width: 56,
          height: 56,
          border: "4px solid var(--border, #222)",
          borderTopColor: "var(--green, #4ade80)",
          borderRadius: "50%",
          animation: "ob-spin 1s linear infinite",
        }}
      />
      <p
        style={{
          marginTop: "1.25rem",
          fontFamily: "var(--font-mono, monospace)",
          color: "var(--muted, #26b104)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Loading…
      </p>

      {/* Inline keyframes — no external CSS file needed */}
      <style>{`
        @keyframes ob-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
