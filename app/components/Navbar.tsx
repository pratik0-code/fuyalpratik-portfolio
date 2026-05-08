"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(5, 8, 22, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(124, 58, 237, 0.15)"
          : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "white",
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
            }}
          >
            PF
          </div>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.5px",
            }}
          >
            pratik<span className="gradient-text">fuyal</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className={`nav-link ${active === href.replace("#", "") ? "active" : ""}`}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {label}
            </button>
          ))}

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "0.9rem" }}
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--text-primary)",
                borderRadius: "1px",
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translateY(7px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translateY(-7px)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5, 8, 22, 0.98)",
            backdropFilter: "blur(20px)",
            padding: "20px 24px 28px",
            borderTop: "1px solid rgba(124, 58, 237, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
          className="mobile-menu"
        >
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: active === href.replace("#", "") ? "var(--accent-secondary)" : "var(--text-secondary)",
                fontSize: "1.1rem",
                fontWeight: 500,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
