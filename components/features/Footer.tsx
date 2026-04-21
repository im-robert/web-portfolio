"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 300,
            color: "var(--text-3)",
            letterSpacing: "0.02em",
          }}
        >
          Roberto Capellán<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "var(--text-3)",
          }}
        >
          © {year} — Developed by Roberto Capellán.
        </span>
      </div>
    </footer>
  );
}
