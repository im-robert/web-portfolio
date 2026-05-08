
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import type { Experience } from "@/interfaces";

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] as any }}
      style={{
        display: "grid",
        gridTemplateColumns: "180px 2px 1fr",
        gap: "0 3rem",
        position: "relative",
      }}
    >
      {/* Date column */}
      <div style={{ paddingTop: "0.4rem", textAlign: "right" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            color: "var(--text-3)",
            lineHeight: 1.6,
          }}
        >
          {exp.period[language]}
        </span>
      </div>

      {/* Timeline line + dot */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: exp.endYear === null ? "var(--accent)" : "var(--text-3)",
            border: exp.endYear === null ? "2px solid var(--accent)" : "2px solid var(--text-3)",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
            marginTop: "0.5rem",
          }}
        />
        {index < experiences.length - 1 && (
          <div
            style={{
              flex: 1,
              width: "2px",
              background: "var(--border)",
              minHeight: "80px",
              marginTop: "0.75rem",
            }}
          />
        )}
      </div>

      {/* Content column */}
      <div style={{ paddingBottom: "5rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {exp.company}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 300,
            color: "var(--text-1)",
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          {exp.role[language]}
        </h3>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-2)",
            marginBottom: "1.75rem",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          {exp.description[language]}
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {exp.achievements[language].map((ach, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                fontSize: "0.95rem",
                color: "var(--text-2)",
                lineHeight: 1.6,
                maxWidth: "650px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "0.6rem",
                }}
              />
              {ach}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "2rem" }}>
          {exp.technologies.map((tech) => (
            <span key={tech} className="tag" style={{ fontSize: "0.75rem", padding: "0.35rem 0.85rem" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
          style={{ marginBottom: "6rem" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            03. {t.experience.title}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--text-1)",
            }}
          >
            {t.experience.subtitle.split(' ')[0]}{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t.experience.subtitle.split(' ').slice(1).join(' ')}</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
