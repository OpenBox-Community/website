import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tiers", label: "Tiers" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog" },
  { to: "/join", label: "Join" },
  { to: "/docs", label: "Docs" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__box" aria-hidden />
          <span className="logo__text">OPENBOX</span>
        </Link>

        <div className="nav__links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav__link"
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            className="btn nav__cta"
            href="https://discord.gg/openbox"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        </div>

        <button
          className="nav__burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
    </nav>
  );
}
