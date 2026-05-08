const stats = [
  { value: "1+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
  { value: "∞", label: "Curiosity" },
];

const journey = [
  {
    year: "2022",
    title: "Started Web Development",
    desc: "Fell in love with HTML, CSS & JavaScript. Built my first static websites.",
    color: "#7c3aed",
  },
  {
    year: "2023",
    title: "React & Full-Stack Dev",
    desc: "Levelled up with React, Node.js & REST APIs. Started building real applications.",
    color: "#06b6d4",
  },
  {
    year: "2024",
    title: "Discovered AI/ML",
    desc: "Began exploring Python, NumPy, Pandas & machine learning fundamentals.",
    color: "#f59e0b",
  },
  {
    year: "2025",
    title: "Next.js & Deep Learning",
    desc: "Adopted Next.js for production sites while diving into neural networks & TensorFlow.",
    color: "#22c55e",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ position: "relative" }}>
      <div
        className="orb orb-amber"
        style={{ width: 350, height: 350, left: "10%", top: "20%", filter: "blur(100px)" }}
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
            // who I am
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Main grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", marginBottom: "80px" }}
          className="about-grid"
        >
          {/* Bio */}
          <div style={{ animation: "fadeInLeft 0.8s ease forwards" }}>
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              Web Dev by craft,{" "}
              <span className="gradient-text">AI enthusiast</span> by passion.
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
              <p>
                Hey! I&apos;m <strong style={{ color: "var(--text-primary)" }}>Pratik Fuyal</strong>, a web developer based in Nepal 🇳🇵. I love building things on the internet — from pixel-perfect UIs to robust APIs.
              </p>
              <p>
                My journey into <strong style={{ color: "var(--accent-secondary)" }}>AI & Machine Learning</strong> started out of pure curiosity about how machines can learn and adapt. I&apos;m currently sharpening my skills in deep learning, NLP, and building intelligent applications.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new tech, reading about AI research, or experimenting with side projects that combine web development and ML.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}>
              {["Open Source", "ML Research", "UI/UX Design", "Problem Solving", "Tech Blogging"].map((interest) => (
                <span
                  key={interest}
                  style={{
                    padding: "6px 14px",
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    borderRadius: "6px",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "32px" }}>
              <a
                href="/resume.pdf"
                className="btn-primary"
                style={{ display: "inline-flex" }}
              >
                <span>Download Resume</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </a>
            </div>
          </div>

          {/* Journey timeline */}
          <div style={{ animation: "fadeInRight 0.8s ease forwards" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "32px", color: "var(--text-secondary)", fontFamily: "Fira Code, monospace" }}>
              // my journey
            </h3>

            <div style={{ position: "relative", paddingLeft: "28px" }}>
              <div className="timeline-line" />

              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {journey.map(({ year, title, desc, color }, i) => (
                  <div key={year} style={{ position: "relative" }}>
                    <div
                      className="timeline-dot"
                      style={{
                        background: color,
                        boxShadow: `0 0 12px ${color}80`,
                        top: "6px",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "Fira Code, monospace",
                        fontSize: "0.78rem",
                        color: color,
                        marginBottom: "4px",
                      }}
                    >
                      {year}
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "6px", color: "var(--text-primary)" }}>
                      {title}
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="stats-grid"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="glass-card"
              style={{ padding: "32px 20px", textAlign: "center" }}
            >
              <div
                className="gradient-text"
                style={{ fontSize: "2.8rem", fontWeight: 900, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}
              >
                {value}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: "8px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
