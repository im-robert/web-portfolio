
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "5rem 0",
        background: "var(--surface)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "var(--text-1)",
            letterSpacing: "0.02em",
          }}
        >
          Roberto Capellán<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              color: "var(--text-3)",
              textTransform: "uppercase",
            }}
          >
            © {year} — {t.footer.rights}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--text-3)",
              opacity: 0.7,
            }}
          >
            {t.footer.designed_by} Roberto Capellán
          </span>
        </div>
      </div>
    </footer>
  );
}
