
"use client";

import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }
  },
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
      }}
    >
      {/* Background geometric lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Vertical line left */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] as any }}
          style={{
            position: "absolute",
            left: "8%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        {/* Vertical line right */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] as any }}
          style={{
            position: "absolute",
            right: "8%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(200, 169, 110, 0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "1000px" }}
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <span className="accent-line" style={{ width: "3.5rem" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.18em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.7rem, 10vw, 7.7rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--text-1)",
              marginBottom: "2rem",
            }}
          >
            {t.hero.title_part1}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>
              {t.hero.title_accent}
            </em>{" "}
            {t.hero.title_part2}
            <br />
            {t.hero.title_part3}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
              color: "var(--text-2)",
              maxWidth: "640px",
              lineHeight: 1.6,
              marginBottom: "4rem",
            }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center" }}
          >
            <a href="#contact" className="btn-primary" style={{ padding: "1.15rem 2.75rem", fontSize: "1rem" }}>
              {t.hero.cta_primary}
            </a>
            <a
              href={t.hero.cv_url}
              download={t.hero.cv_filename + ".pdf"}
              className="btn-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1.15rem 2.75rem", fontSize: "1rem" }}
            >
              <Download size={20} />
              {t.hero.cta_secondary}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "1.25rem", marginTop: "5rem" }}
          >
            {[
              { icon: <GithubIcon size={24} />, href: "https://github.com/im-robert", label: "GitHub" },
              { icon: <LinkedinIcon size={24} />, href: "https://www.linkedin.com/in/roberto-capellan-62531024b/", label: "LinkedIn" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "68px",
                  height: "68px",
                  borderRadius: "16px",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--text-3)",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.background = "var(--accent-dim)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-3)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface-2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
