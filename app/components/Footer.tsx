export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "48px 0 32px",
        borderTop: "1px solid rgba(124, 58, 237, 0.12)",
        background: "rgba(5, 8, 22, 0.8)",
        backdropFilter: "blur(20px)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "white",
              }}
            >
              PF
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>
              pratik<span className="gradient-text">fuyal</span>
            </span>
          </div>

          {/* Quick nav */}
          <div style={{ display: "flex", gap: "24px" }}>
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-secondary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { href: "https://github.com/fuyalpratik", label: "GitHub" },
              { href: "https://linkedin.com/in/pratikfuyal", label: "LinkedIn" },
              { href: "https://twitter.com/pratikfuyal", label: "Twitter" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  padding: "6px 12px",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: "6px",
                  transition: "all 0.3s",
                  fontFamily: "Fira Code, monospace",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-secondary)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontFamily: "Fira Code, monospace" }}>
            © {year} Pratik Fuyal. Built with{" "}
            <span style={{ color: "var(--accent-secondary)" }}>Next.js</span> &amp;{" "}
            <span style={{ color: "#ef4444" }}>❤️</span>
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
            Designed &amp; developed by{" "}
            <span style={{ color: "var(--accent-secondary)", fontWeight: 500 }}>Pratik Fuyal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
