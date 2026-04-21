"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/interfaces";
import { ExternalLink, ArrowUpRight } from "lucide-react";

// SVG icon for GitHub (missing in this lucide-react version)
const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Backend",
  "Fullstack",
  "Integrations",
];

const categoryColors: Record<ProjectCategory, string> = {
  Backend: "#5B8DD9",
  Fullstack: "#7BC08B",
  Integrations: "#CF8A5B",
};

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] as any }}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Category badge + featured */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.2rem 0.6rem",
            borderRadius: "2px",
            background: `${categoryColors[project.category]}18`,
            color: categoryColors[project.category],
            border: `1px solid ${categoryColors[project.category]}35`,
          }}
        >
          {project.category}
        </span>
        {project.featured && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "var(--accent)",
            }}
          >
            ★ Featured
          </span>
        )}
      </div>

      {/* Title */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 400,
            color: hovered ? "var(--accent)" : "var(--text-1)",
            lineHeight: 1.2,
            transition: "color 250ms ease",
          }}
        >
          {project.name}
        </h3>
        <motion.div
          animate={{ rotate: hovered ? -45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: "var(--text-3)", flexShrink: 0, marginTop: "0.2rem" }}
        >
          <ArrowUpRight size={16} />
        </motion.div>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.65 }}>
        {project.description}
      </p>

      {/* Challenge / Solution */}
      <div
        style={{
          borderLeft: "2px solid var(--border)",
          paddingLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
            Challenge
          </span>
          <p style={{ fontSize: "0.8rem", color: "var(--text-2)", marginTop: "0.25rem", lineHeight: 1.55 }}>
            {project.challenge}
          </p>
        </div>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}>
            Solution
          </span>
          <p style={{ fontSize: "0.8rem", color: "var(--text-2)", marginTop: "0.25rem", lineHeight: 1.55 }}>
            {project.solution}
          </p>
        </div>
      </div>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "auto" }}>
        {project.stack.map((tech) => (
          <span key={tech} className="tag" style={{ fontSize: "0.62rem" }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.repoUrl || project.demoUrl) && (
        <div style={{ display: "flex", gap: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--text-3)", transition: "color 250ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <GithubIcon size={13} />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--text-3)", transition: "color 250ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function ProjectGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as any }}
          style={{ marginBottom: "3rem" }}
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
            04. Projects
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                fontWeight: 300,
                color: "var(--text-1)",
              }}
            >
              Selected{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>works.</em>
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`tag ${activeFilter === cat ? "active" : ""}`}
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                  {cat}
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
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
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
