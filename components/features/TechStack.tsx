"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack, techCategories } from "@/data/stack";
import { useLanguage } from "@/context/LanguageContext";
import type { TechItem } from "@/interfaces";

function TechGroup({ category, items, index, labels }: { category: TechItem["category"]; items: TechItem[]; index: number; labels: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <span style={{ display: "inline-block", width: "1.75rem", height: "1.5px", background: "var(--accent)" }} />
        {labels[category]}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {items.map((tech) => (
          <span key={tech.name} className="tag" style={{ padding: "0.4rem 1rem", fontSize: "0.8rem" }}>
            {tech.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const { t } = useLanguage();
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
          style={{ marginBottom: "5rem" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            02. {t.stack.title}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 300,
              color: "var(--text-1)",
            }}
          >
            {t.stack.title.split(' ')[0]}{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t.stack.title.split(' ').slice(1).join(' ')}.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "4rem 5rem",
          }}
        >
          {techCategories.map((cat, i) => {
            const items = techStack.filter((t) => t.category === cat);
            if (items.length === 0) return null;
            return <TechGroup key={cat} category={cat} items={items} index={i} labels={t.stack.categories} />;
          })}
        </div>
      </div>
    </section>
  );
}
