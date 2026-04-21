"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experiencia" },
  { label: "Projects", href: "#proyectos" },
  { label: "Contact", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, []);

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
        background: scrolled ? "rgba(8, 8, 16, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBlock: "1.25rem" }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.15rem",
            fontWeight: 400,
            letterSpacing: "0.03em",
            color: "var(--text-1)",
          }}
        >
          Roberto<span style={{ color: "var(--accent)", marginLeft: "2px" }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hide-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
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
          <a
            href="#contacto"
            className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.7rem" }}
          >
            Let's talk
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as any }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--border)", background: "rgba(8, 8, 16, 0.98)", backdropFilter: "blur(20px)" }}
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
      `}</style>
    </motion.header>
  );
}
