import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--charcoal)",
        color: "rgba(255,255,255,0.7)",
        padding: "80px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px 40px",
          paddingBottom: 60,
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 20,
                color: "var(--sunset-light)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "block",
              }}
            >
              Old Town
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              Camping · Berat
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: 24, maxWidth: 260 }}>
            Nestled beneath the ancient walls of Berat Castle, where Albanian heritage meets the open sky.
          </p>
          {/* Social links */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { label: "WhatsApp", href: "https://wa.me/355684211666", icon: "wa" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--sunset-light)",
              marginBottom: 20,
            }}
          >
            Explore
          </h4>
          {[
            ["About Us", "#about"],
            ["Activities & Experiences", "#destination"],
            ["Gallery", "#gallery"],
            ["Facilities", "#facilities"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="footer-link"
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                marginBottom: 10,
                transition: "color 0.2s ease",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sunset-light)", marginBottom: 20 }}>
            Contact
          </h4>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
            Berat, Albania<br />
            Near Mangalem Quarter<br />
            <a href="tel:+355684211666" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>+355 68 421 1666</a><br />
            <a href="mailto:oldtowncampingberat@gmail.com" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>oldtowncampingberat@gmail.com</a>
          </p>
          <a
            href="https://wa.me/355684211666"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#25D366",
              textDecoration: "none",
              border: "1px solid #25D36640",
              padding: "8px 16px",
              transition: "background 0.25s ease",
            }}
          >
            <span>●</span> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "20px clamp(20px,4vw,60px)",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          © {year} Old Town Camping, Berat. All rights reserved.
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          Built for the beauty of Albania
        </p>
      </div>

      <style>{`
        .footer-social:hover { background: var(--sunset) !important; color: white !important; border-color: var(--sunset) !important; }
        .footer-link:hover { color: rgba(255,255,255,0.85) !important; }
        .footer-whatsapp:hover { background: #25D36615 !important; }
      `}</style>
    </footer>
  );
}
