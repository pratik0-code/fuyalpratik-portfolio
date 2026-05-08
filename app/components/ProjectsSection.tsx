"use client";

const projects = [
  {
    title: "AI Chat Interface",
    description:
      "A sleek real-time AI chat app built with Next.js and OpenAI API. Features streaming responses, conversation history, and a beautiful dark UI.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    color: "#7c3aed",
    icon: "🤖",
    demo: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Sentiment Analyser",
    description:
      "NLP-powered web app that analyses the sentiment of text using a fine-tuned BERT model, deployed with FastAPI and a React front end.",
    tags: ["Python", "FastAPI", "React", "BERT"],
    color: "#06b6d4",
    icon: "🧠",
    demo: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a fully responsive Next.js site with glassmorphism design, particle animations, and smooth scroll interactions.",
    tags: ["Next.js", "CSS", "TypeScript"],
    color: "#f59e0b",
    icon: "✨",
    demo: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "Task Manager App",
    description:
      "Full-stack task management app with drag-and-drop boards, real-time sync, user auth, and a REST API built with Node.js.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    color: "#22c55e",
    icon: "📋",
    demo: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "ML Image Classifier",
    description:
      "Convolutional neural network trained on CIFAR-10 to classify images with 92% accuracy, using Keras and TensorFlow.",
    tags: ["Python", "TensorFlow", "Keras", "CNN"],
    color: "#ef4444",
    icon: "🖼️",
    demo: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app consuming OpenWeatherMap API, with interactive charts, 7-day forecast, and location search.",
    tags: ["React", "Chart.js", "REST API"],
    color: "#8b5cf6",
    icon: "🌤️",
    demo: "#",
    repo: "#",
    featured: false,
  },
];

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding" style={{ position: "relative" }}>
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, left: -100, bottom: "10%", filter: "blur(100px)" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "var(--accent-secondary)",
              fontSize: "0.9rem",
              marginBottom: "12px",
              display: "block",
            }}
          >
            // things I&apos;ve built
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A mix of web apps and AI/ML experiments I&apos;m proud of.
          </p>
        </div>

        {/* Featured cards (large) */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "28px" }}
          className="featured-grid"
        >
          {featured.map((p) => (
            <div
              key={p.title}
              className="glass-card"
              style={{
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                borderColor: `${p.color}25`,
              }}
            >
              {/* Glow spot */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: `${p.color}15`,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ fontSize: "2.8rem", marginBottom: "20px" }}>{p.icon}</div>

              <div
                style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  color: p.color,
                  fontFamily: "Fira Code, monospace",
                  marginBottom: "16px",
                }}
              >
                Featured Project
              </div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                {p.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px", fontSize: "0.95rem" }}>
                {p.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={p.demo}
                  className="btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.85rem" }}
                >
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
                <a
                  href={p.repo}
                  className="btn-outline"
                  style={{ padding: "10px 22px", fontSize: "0.85rem" }}
                >
                  <span>GitHub</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
          className="other-grid"
        >
          {others.map((p) => (
            <div
              key={p.title}
              className="glass-card"
              style={{ padding: "28px", borderColor: `${p.color}20` }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href={p.demo} style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = p.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                  <a href={p.repo} style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = p.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                </div>
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>{p.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "20px" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tech-tag" style={{ fontSize: "0.72rem" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .other-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .other-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
