"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// SVG icons for missing lucide-react exports in this version
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: "Correo",
    value: "capellan1603@email.com",
    href: "mailto:capellan1603@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/roberto-capellan",
    href: "https://www.linkedin.com/in/roberto-capellan-62531024b/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/im-robert",
    href: "https://github.com/im-robert",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contacto"
      className="section"
      style={{
        borderTop: "1px solid var(--border)",
        background: "linear-gradient(to bottom, var(--bg), var(--surface))",
      }}
    >
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            05. Contact
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 300,
              color: "var(--text-1)",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            Building something{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>extraordinary?</em>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-2)",
              maxWidth: "500px",
              lineHeight: 1.7,
              marginBottom: "4rem",
            }}
          >
            Open to new opportunities or colabs. If you have an ambicous project, let's talk.
          </p>
        </motion.div>

        {/* Contact links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.4, 0, 0.2, 1] as any }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.5rem 0",
                  borderBottom: "1px solid var(--border)",
                  gap: "1rem",
                  textDecoration: "none",
                  transition: "all 300ms ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.paddingLeft = "0.75rem";
                  el.style.borderBottomColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.paddingLeft = "0";
                  el.style.borderBottomColor = "var(--border)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <span style={{ color: "var(--text-3)" }}>
                    <Icon size={16} />
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                        display: "block",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                        fontWeight: 300,
                        color: "var(--text-1)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {link.value}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} color="var(--text-3)" style={{ flexShrink: 0 }} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
