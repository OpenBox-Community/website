import React from "react";

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
          color: "var(--muted, #666)",
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
