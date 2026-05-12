const WORDS = ["BUILD", "COLLABORATE", "SHIP", "CONNECT", "CREATE", "OPENBOX"];

export function Ticker() {
  const items = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker__track">
        {items.map((w, i) => (
          <span key={i} className="ticker__item">
            {w}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
