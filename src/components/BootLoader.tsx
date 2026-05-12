import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function BootLoader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, [path]);

  return (
    <div className={`boot ${show ? "boot--on" : "boot--off"}`} aria-hidden>
      <span className="boot__txt">&gt; LOADING OPENBOX<span className="boot__dots">...</span></span>
    </div>
  );
}
