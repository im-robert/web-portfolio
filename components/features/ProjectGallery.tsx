
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectCategory, Project } from "@/interfaces";
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Backend",
  "Fullstack",
];

const categoryColors: Record<ProjectCategory, string> = {
  Backend: "#5B8DD9",
  Fullstack: "#7BC08B",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.repoUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] as any }}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.75rem",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Hover Background Accent */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, var(--accent-dim), transparent)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1.75rem", height: "100%" }}>
        {/* Category badge + featured */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.3rem 0.85rem",
              borderRadius: "4px",
              background: `${categoryColors[project.category]}18`,
              color: categoryColors[project.category],
              border: `1px solid ${categoryColors[project.category]}40`,
            }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              ★ {language === 'en' ? 'Featured' : 'Destacado'}
            </span>
          )}
        </div>

        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
              fontWeight: 400,
              color: hovered ? "var(--accent)" : "var(--text-1)",
              lineHeight: 1.2,
              transition: "color 250ms ease",
            }}
          >
            {project.name[language]}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? -45 : 0, scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.25 }}
            style={{ color: hovered ? "var(--accent)" : "var(--text-3)", flexShrink: 0, marginTop: "0.4rem" }}
          >
            <ArrowUpRight size={24} />
          </motion.div>
        </div>

        {/* Description */}
        <p style={{ fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.6 }}>
          {project.description[language]}
        </p>

        {/* Bottom bar with icon and tags */}
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", paddingTop: "1rem" }}>
          {/* Stack tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {project.stack.map((tech: string) => (
              <span key={tech} className="tag" style={{ fontSize: "0.8rem", padding: "0.4rem 1rem" }}>
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub indicator */}
          <motion.div
            animate={{ y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-3)",
            }}
          >
            <GithubIcon size={18} />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectGallery() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
          style={{ marginBottom: "5rem" }}
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
            04. {t.projects.title}
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 300,
                color: "var(--text-1)",
              }}
            >
              {t.projects.subtitle.split(' ')[0]}{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{t.projects.subtitle.split(' ').slice(1).join(' ')}</em>
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`tag ${activeFilter === cat ? "active" : ""}`}
                  style={{ cursor: "pointer", background: "none", border: "none", padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
                >
                  {cat === 'All' ? (language === 'en' ? 'All' : 'Todos') : cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "2.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
