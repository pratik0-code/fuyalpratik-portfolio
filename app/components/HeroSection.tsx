"use client";

import { useState, useEffect } from "react";

const roles = [
  "Web Developer",
  "AI/ML Enthusiast",
  "React & Next.js Dev",
  "Problem Solver",
  "Tech Learner",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Orb decorations */}
      <div
        className="orb orb-purple animate-float"
        style={{ width: 500, height: 500, top: "-100px", right: "-100px", animationDelay: "0s" }}
      />
      <div
        className="orb orb-cyan animate-float"
        style={{ width: 350, height: 350, bottom: "50px", left: "-80px", animationDelay: "2s" }}
      />
      <div
        className="orb orb-amber animate-float"
        style={{ width: 200, height: 200, top: "40%", right: "20%", animationDelay: "4s" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div style={{ animation: "fadeInLeft 0.9s ease forwards" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                background: "rgba(124, 58, 237, 0.1)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                borderRadius: "50px",
                marginBottom: "24px",
                fontSize: "0.85rem",
                color: "var(--accent-secondary)",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
              Available for opportunities
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "16px" }}>
              Hi, I&apos;m{" "}
              <span className="gradient-text">Pratik</span>
              <br />
              <span className="gradient-text">Fuyal</span>
            </h1>

            <div
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "24px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              <span style={{ color: "var(--accent-secondary)" }}>&gt; </span>
              <span style={{ color: "var(--text-primary)" }}>{displayed}</span>
              <span className="cursor" style={{ color: "var(--accent-primary)", fontWeight: 300 }}>|</span>
            </div>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "500px",
              }}
            >
              Crafting modern, performant web apps with a growing passion for
              AI/ML. I love turning ideas into elegant digital experiences.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                <span>View Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
              {[
                { label: "GitHub", href: "https://github.com/pratik0-code", icon: "GH" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pratik-fuyal-8b1b97212/", icon: "LI" },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "10px",
                    border: "1px solid rgba(124,58,237,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "'Fira Code', monospace",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-primary)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-secondary)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar / 3D card */}
          <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", animation: "fadeInRight 0.9s ease forwards" }}
            className="hero-right"
          >
            <div style={{ position: "relative" }}>
              {/* Spinning ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -24,
                  borderRadius: "50%",
                  border: "2px dashed rgba(124,58,237,0.25)",
                }}
              />
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -48,
                  borderRadius: "50%",
                  border: "1px dashed rgba(6,182,212,0.15)",
                  animationDirection: "reverse",
                  animationDuration: "30s",
                }}
              />

              {/* Avatar card */}
              <div
                className="animate-float animate-pulse-glow"
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.2) 100%)",
                  border: "2px solid rgba(124,58,237,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "7rem",
                  position: "relative",
                }}
              >
                👨‍💻
              </div>

              {/* Floating badge 1 */}
              <div
                className="glass-card"
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -40,
                  padding: "10px 16px",
                  whiteSpace: "nowrap",
                  animation: "fadeInUp 1s ease 0.5s both",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "2px" }}>Tech Stack</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-secondary)", fontFamily: "Fira Code, monospace" }}>React · Next.js · Python</div>
              </div>

              {/* Floating badge 2 */}
              <div
                className="glass-card"
                style={{
                  position: "absolute",
                  top: -16,
                  right: -40,
                  padding: "10px 16px",
                  whiteSpace: "nowrap",
                  animation: "fadeInUp 1s ease 0.8s both",
                }}
              >
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "2px" }}>Passionate about</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-tertiary)" }}>🤖 AI / ML</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.5,
            animation: "fadeInUp 1s ease 1.2s both",
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "Fira Code, monospace" }}>scroll</span>
          <div
            style={{
              width: 24,
              height: 40,
              border: "2px solid rgba(124,58,237,0.4)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                background: "var(--accent-primary)",
                borderRadius: "2px",
                animation: "fadeInUp 1.5s ease infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
