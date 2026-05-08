"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send delay
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const contacts = [
    { icon: "📧", label: "Email", value: "pratikfuyalbusiness@gmail.com", href: "mailto:pratikfuyalbusiness@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/pratik-fuyal-8b1b97212/", href: "https://www.linkedin.com/in/pratik-fuyal-8b1b97212/" },
    { icon: "🐙", label: "GitHub", value: "github.com/pratik0-code", href: "https://github.com/pratik0-code" },
    { icon: "📍", label: "Location", value: "Nepal 🇳🇵", href: null },
  ];

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(124,58,237,0.2)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "var(--text-primary)",
    fontSize: "0.95rem",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <section id="contact" className="section-padding grid-bg" style={{ position: "relative" }}>
      <div
        className="orb orb-purple"
        style={{ width: 400, height: 400, right: -80, bottom: 0, filter: "blur(100px)" }}
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
            // get in touch
          </span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you!
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "48px", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "8px" }}>Get In Touch</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "36px", lineHeight: 1.7 }}>
              Open to freelance opportunities, collaborations, and full-time roles. Let&apos;s build something amazing together.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contacts.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="glass-card"
                  style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      background: "rgba(124,58,237,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "2px" }}>{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-secondary)", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 500 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="glass-card"
              style={{ padding: "20px", marginTop: "24px", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 12px #22c55e",
                  animation: "pulse-glow 2s ease infinite",
                }}
              />
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>Available for work</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>Currently accepting new projects</div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card" style={{ padding: "40px" }}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "10px" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-secondary)" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }} className="btn-outline" style={{ marginTop: "24px" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "8px", fontFamily: "Fira Code, monospace" }}>
                      // name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "8px", fontFamily: "Fira Code, monospace" }}>
                      // email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="hello@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "8px", fontFamily: "Fira Code, monospace" }}>
                    // subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Let's work together!"
                    value={form.subject}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "8px", fontFamily: "Fira Code, monospace" }}>
                    // message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)")}
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary"
                  disabled={status === "sending"}
                  style={{ justifyContent: "center", opacity: status === "sending" ? 0.75 : 1 }}
                >
                  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                  {status !== "sending" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
