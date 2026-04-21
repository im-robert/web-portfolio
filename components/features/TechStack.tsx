"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack, techCategories } from "@/data/stack";
import type { TechItem } from "@/interfaces";

const categoryLabels: Record<TechItem["category"], string> = {
  Language: "Languages",
  Framework: "Frameworks",
  Database: "Databases",
  Cloud: "Cloud",
  Architecture: "Architecture",
  DevOps: "DevOps",
};

function TechGroup({ category, items, index }: { category: TechItem["category"]; items: TechItem[]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ display: "inline-block", width: "1.25rem", height: "1px", background: "var(--accent)" }} />
        {categoryLabels[category]}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map((tech) => (
          <span key={tech.name} className="tag">
            {tech.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: "4rem" }}
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
            02. Tech Stack
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 300,
              color: "var(--text-1)",
            }}
          >
            Tools{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "3rem 4rem",
          }}
        >
          {techCategories.map((cat, i) => {
            const items = techStack.filter((t) => t.category === cat);
            if (items.length === 0) return null;
            return <TechGroup key={cat} category={cat} items={items} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
