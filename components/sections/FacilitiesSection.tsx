"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const facilities = [
  { id: 1, icon: "📶", title: "Free WiFi", description: "High-speed internet throughout the campsite" },
  { id: 2, icon: "🅿️", title: "Car Parking", description: "Secure on-site parking for all guests" },
  { id: 3, icon: "⛺", title: "Tent Area", description: "Shaded, level pitches among olive trees" },
  { id: 4, icon: "🚐", title: "Camper Parking", description: "Full hook-up camper van spots with electricity" },
  { id: 5, icon: "🚿", title: "Hot Showers", description: "Clean private shower facilities, 24/7 hot water" },
  { id: 6, icon: "🍴", title: "Restaurant", description: "On-site traditional Albanian cuisine and grill", href: "#menu" },
  { id: 7, icon: "🚕", title: "Taxi Service", description: "Convenient transportation to destinations & activities", href: "#destination" },
  { id: 8, icon: "🏕️", title: "Outdoor Activities", description: "Equipment rental and guided excursion booking" },
  { id: 9, icon: "⛰️", title: "Mountain View", description: "Unobstructed panorama of the Albanian Alps" },
  { id: 10, icon: "🏙️", title: "City View", description: "Breathtaking vistas over the old town rooftops" },
];

export default function FacilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="facilities"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--charcoal)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, var(--sunset), transparent)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 80px", marginBottom: 80, alignItems: "center" }} className="facilities-header">
          <div>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title" style={{ color: "white" }}>
              World-Class <em style={{ color: "var(--sunset-light)", fontStyle: "italic" }}>Facilities</em>
            </h2>
            <div className="divider" />
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.55)" }}>
              We believe great camping doesn&apos;t mean giving up comfort. Every facility at Old Town Camping is designed for both convenience and delight.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
              <Image
                src="/images/facilities_photo.jpg"
                alt="Campsite facilities"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: "absolute", inset: 0, border: "2px solid var(--sunset)", transform: "translate(12px, 12px)", pointerEvents: "none" }} />
          </div>
        </div>

        {/* Facilities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 2,
          }}
        >
          {facilities.map((f, i) => {
            const cardStyle: React.CSSProperties = {
              padding: "32px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              textAlign: "center",
              transition: "opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
              cursor: f.href ? "pointer" : "default",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.06}s`,
              textDecoration: "none",
              display: "block",
            };

            const inner = (
              <>
                <span style={{ fontSize: 32, display: "block", marginBottom: 14 }}>{f.icon}</span>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "white", marginBottom: 8 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>
                  {f.description}
                </p>
                {f.href && (
                  <span style={{ display: "inline-block", marginTop: 12, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--sunset-light)" }}>
                    View guides →
                  </span>
                )}
              </>
            );

            const onEnter = (e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(196,98,45,0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,98,45,0.35)";
            };
            const onLeave = (e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
            };

            return f.href ? (
              <a key={f.id} href={f.href} style={cardStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {inner}
              </a>
            ) : (
              <div key={f.id} style={cardStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .facilities-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
