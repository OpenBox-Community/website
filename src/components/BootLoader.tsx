import { useEffect, useState } from "react";

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
  const [current, setCurrent] = useState(-1);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const shown = sessionStorage.getItem("openboxBootShown");
      if (shown) return; // already shown this session
    } catch (e) {
      // ignore
    }
    setVisible(true);
    let idx = 0;
    const step = () => {
      setCurrent((c) => c + 1);
      idx += 1;
      if (idx < LINES.length) {
        timer = window.setTimeout(step, 120);
      } else {
        // after last line pause then close
        timer = window.setTimeout(() => setClosing(true), 400);
      }
    };
    let timer = window.setTimeout(step, 120);

    return () => { if (timer) clearTimeout(timer); };
  }, []);

  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem("openboxBootShown", "1"); } catch (e) {}
    }, 600);
    return () => clearTimeout(t);
  }, [closing]);

  if (!visible) return null;

  return (
    <div className={`boot-screen ${closing ? "boot-screen--closing" : ""}`} aria-hidden>
      <div className="boot-screen__logo" aria-hidden>
        <div className="boot-screen__logo-inner">OB</div>
      </div>
      <div className="boot-screen__lines">
        {LINES.map((t, i) => (
          <div key={t} className={`boot-line ${i <= current ? "boot-line--on" : ""}`}>
            <span className="boot-line__text">{i <= current ? t : ""}</span>
            {i === current && <span className="boot-caret">_</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
