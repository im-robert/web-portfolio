"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/experience";

function TimelineItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
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
        gridTemplateColumns: "140px 1px 1fr",
        gap: "0 2rem",
        position: "relative",
      }}
    >
      {/* Date column */}
      <div style={{ paddingTop: "0.2rem", textAlign: "right" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--text-3)",
            lineHeight: 1.6,
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Timeline line + dot */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: exp.endYear === null ? "var(--accent)" : "var(--text-3)",
            border: exp.endYear === null ? "1px solid var(--accent)" : "1px solid var(--text-3)",
            position: "relative",
            zIndex: 1,
            flexShrink: 0,
            marginTop: "0.35rem",
          }}
        />
        {index < experiences.length - 1 && (
          <div
            style={{
              flex: 1,
              width: "1px",
              background: "var(--border)",
              minHeight: "60px",
              marginTop: "0.5rem",
            }}
          />
        )}
      </div>

      {/* Content column */}
      <div style={{ paddingBottom: "3.5rem" }}>
        <div style={{ marginBottom: "0.25rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
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
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 300,
            color: "var(--text-1)",
            letterSpacing: "-0.01em",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          {exp.role}
        </h3>

        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-2)",
            marginBottom: "1.25rem",
            maxWidth: "580px",
            lineHeight: 1.65,
          }}
        >
          {exp.description}
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {exp.achievements.map((ach, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "0.75rem",
                fontSize: "0.85rem",
                color: "var(--text-2)",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: "0.55rem",
                }}
              />
              {ach}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.25rem" }}>
          {exp.technologies.map((tech) => (
            <span key={tech} className="tag" style={{ fontSize: "0.65rem" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiencia" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
          style={{ marginBottom: "4.5rem" }}
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
            03. Experience
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 300,
              color: "var(--text-1)",
            }}
          >
            Professional{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>timeline.</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
