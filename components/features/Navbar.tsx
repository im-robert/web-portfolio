"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const USAFlag = () => (
  <svg width="16" height="12" viewBox="0 0 741 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "1px" }}>
    <rect width="741" height="390" fill="#3C3B6E"/>
    <path d="M0 30H741M0 90H741M0 150H741M0 210H741M0 270H741M0 330H741" stroke="white" strokeWidth="30"/>
    <path d="M0 60H741M0 120H741M0 180H741M0 240H741M0 300H741M0 360H741" stroke="#B22234" strokeWidth="30"/>
    <rect width="296.4" height="210" fill="#3C3B6E"/>
    <g fill="white">
      <path d="M22.8 21l2.5 7.6h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8z"/>
      <path d="M68.4 21l2.5 7.6h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8z"/>
      <path d="M114 21l2.5 7.6h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8z"/>
      <path d="M45.6 42l2.5 7.6h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8z"/>
      <path d="M91.2 42l2.5 7.6h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8z"/>
    </g>
  </svg>
);

const SpainFlag = () => (
  <svg width="16" height="12" viewBox="0 0 750 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "1px" }}>
    <rect width="750" height="500" fill="#C60B1E"/>
    <rect y="125" width="750" height="250" fill="#FFC400"/>
  </svg>
);

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navLinks]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 400ms ease, border-color 400ms ease",
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBlock: "1.5rem" }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "var(--text-1)",
            textDecoration: "none"
          }}
        >
          Roberto <span style={{ fontWeight: 600 }}>Capellán</span><span style={{ color: "var(--accent)", marginLeft: "2px" }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "3rem", alignItems: "center" }} className="hide-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: activeSection === link.href.replace("#", "") ? "var(--accent)" : "var(--text-2)",
                transition: "color 250ms ease",
                position: "relative",
              }}
              className="underline-hover"
            >
              {link.label}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--text-1)",
              padding: "0.6rem",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 300ms ease",
            }}
            aria-label="Toggle theme"
            className="theme-switcher"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleLanguage}
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              color: "var(--text-1)",
              padding: "0.6rem 1rem",
              borderRadius: "6px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              transition: "all 300ms ease",
            }}
            className="lang-switcher"
          >
            {language === "en" ? <USAFlag /> : <SpainFlag />}
            <span>{language.toUpperCase()}</span>
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "0.65rem 1.5rem", fontSize: "0.8rem" }}
          >
            {t.nav.talk}
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="show-mobile" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--text-1)",
              padding: "0.5rem",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleLanguage}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--text-1)",
              padding: "0.5rem 0.75rem",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {language === "en" ? <USAFlag /> : <SpainFlag />}
            <span>{language.toUpperCase()}</span>
          </button>
          
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span style={{ display: "block", width: "22px", height: "1px", background: menuOpen ? "var(--accent)" : "var(--text-1)", transition: "all 300ms ease", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: menuOpen ? "var(--accent)" : "var(--text-1)", transition: "all 300ms ease", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "1px", background: menuOpen ? "var(--accent)" : "var(--text-1)", transition: "all 300ms ease", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as any }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--border)", background: "var(--bg)", backdropFilter: "blur(20px)" }}
          >
            <div className="container" style={{ paddingBlock: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-2)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hide-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        .lang-switcher:hover {
          background: var(--accent-dim) !important;
          border-color: var(--accent) !important;
        }
      `}</style>
    </motion.header>
  );
}
