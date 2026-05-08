"use client";

const skills = {
  "Web Development": [
    { name: "React / Next.js", level: 85 },
    { name: "TypeScript", level: 78 },
    { name: "HTML & CSS", level: 92 },
    { name: "Node.js", level: 72 },
    { name: "Tailwind CSS", level: 88 },
  ],
  "AI / ML": [
    { name: "Python", level: 80 },
    { name: "NumPy / Pandas", level: 75 },
    { name: "Scikit-learn", level: 65 },
    { name: "TensorFlow / Keras", level: 58 },
    { name: "Data Visualization", level: 70 },
  ],
  "Tools & Other": [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "REST APIs", level: 80 },
    { name: "Docker (basics)", level: 50 },
    { name: "Linux / CLI", level: 72 },
  ],
};

const techIcons = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#ffffff" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Python", color: "#F7CA41" },
  { label: "Node.js", color: "#84BA64" },
  { label: "TensorFlow", color: "#FF8000" },
  { label: "Tailwind", color: "#38BDF8" },
  { label: "Git", color: "#F05032" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding grid-bg" style={{ position: "relative" }}>
      <div
        className="orb orb-purple"
        style={{ width: 400, height: 400, right: -100, top: "10%", filter: "blur(100px)" }}
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
            // what I work with
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A blend of front-end craft and machine learning curiosity.
          </p>
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            marginBottom: "64px",
          }}
          className="skills-grid"
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card" style={{ padding: "32px" }}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "28px",
                  color: "var(--accent-secondary)",
                  fontFamily: "'Fira Code', monospace",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "var(--accent-primary)" }}>{"{"}</span>
                {category}
                <span style={{ color: "var(--accent-primary)" }}>{"}"}</span>
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {items.map(({ name, level }) => (
                  <div key={name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{name}</span>
                      <span style={{ color: "var(--text-muted)", fontFamily: "'Fira Code', monospace", fontSize: "0.8rem" }}>
                        {level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icon strip */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "20px", fontFamily: "Fira Code, monospace" }}>
            // technologies I use
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {techIcons.map(({ label, color }) => (
              <div
                key={label}
                style={{
                  padding: "8px 20px",
                  border: `1px solid ${color}30`,
                  borderRadius: "8px",
                  background: `${color}10`,
                  color: color,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  fontFamily: "'Fira Code', monospace",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = `${color}20`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = `${color}10`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1100px) { .skills-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
