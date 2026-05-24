"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "2,400+", label: "Years of History" },
  { value: "UNESCO", label: "World Heritage Site" },
  { value: "1000+", label: "Happy Campers" },
  { value: "4.9★", label: "Guest Rating" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 0",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background text */}
      <div
        style={{
          position: "absolute",
          right: -40,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(80px,15vw,160px)",
          fontWeight: 600,
          color: "rgba(90,80,60,0.04)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        BERAT
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,60px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px 60px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Logo side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="about-logo-wrap"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 460,
              padding: "clamp(24px, 5vw, 48px)",
              border: "none",
              background: "transparent",
              boxShadow: "none",
            }}
          >
<Image
              src="/images/logo_camping.webp"
              alt="Old Town Camping Logo"
              width={360}
              height={360}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
              sizes="(max-width: 768px) 70vw, 30vw"
            />
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <span className="section-label">Our Story</span>
          <h2 className="section-title">
            Where Ancient Walls<br />
            <em style={{ fontStyle: "italic", color: "var(--sunset)" }}>Meet Open Skies</em>
          </h2>
          <div className="divider" />
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--charcoal-light)", marginBottom: 20 }}>
            About Us – Old Town Camping Berat

Welcome to Old Town Camping Berat, your peaceful escape in the heart of Albania’s most beautiful historic city. Surrounded by nature and located close to the famous UNESCO old town of Berat, our campsite is the perfect place for travelers seeking relaxation, adventure, and authentic Albanian hospitality.

We welcome campers from all over the world with spaces for camper vans, caravans, and tents in a friendly and comfortable environment. Here you can enjoy quiet evenings, fresh mountain air, stunning views, and the unique atmosphere of Berat — known worldwide as the “City of a Thousand Windows”.

          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--charcoal-light)", marginBottom: 36 }}>
           
          </p>Our mission is simple: to make every guest feel at home while exploring the culture, history, and adventure that Berat has to offer. Whether you stay for one night or several days, we are always happy to share local tips, warm hospitality, and the best experiences of our region.

Come as a guest, leave as a friend.
Old Town Camping Berat – Experience Nature, Adventure & Tradition!

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px 32px",
              paddingTop: 32,
              borderTop: "1px solid var(--stone)",
            }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 600,
                    color: "var(--sunset)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--charcoal-light)", letterSpacing: "0.06em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-logo-wrap > div { max-width: 320px !important; }
        }
      `}</style>
    </section>
  );
}
