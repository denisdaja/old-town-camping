"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    title: "City Heritage Tours",
    subtitle: "Berat Castle · Mangalem · Gorica Bridge",
    category: "Heritage",
    description: "Expert-guided riding through Berat Castle, Mangalem, Gorica Bridge, and the National Museum.",
    image: "/images/berat.webp",
    duration: "2–3 hours",
    distance: "10 min walk",
    highlight: "Panoramic views at sunset",
  },
  {
    id: 2,
    title: "Rafting & Swimming",
    subtitle: "Kanioni i Osumit",
    category: "Nature",
    description: "Albania's 'Grand Canyon' — dramatic limestone gorges carved by the Osum River. Swim in turquoise pools, raft through rapids, or hike the canyon rim.",
    image: "/images/canione_foto.webp",
    duration: "Full day",
    distance: "45 min drive",
    highlight: "Rafting & swimming",
  },
  {
    id: 3,
    title: "Mountain Hiking",
    subtitle: "Tomori Mountain",
    category: "Adventure",
    description: "Trek the trails above Berat through ancient forests with panoramic castle views. Guides available for all levels.",
    image: "/images/hiking.jpeg",
    duration: "3–6 hours",
    distance: "From campsite",
    highlight: "Panoramic castle views",
  },
  {
    id: 4,
    title: " Wine Experiences",
    subtitle: "Gastronomia Shqiptare",
    category: "Culinary",
    description: "Albanian wine degustation, raki tasting, and guided visits to the best local wineries in Berat.",
    image: "/images/cobo_winery.webp",
    duration: "2–4 hours",
    distance: "Various locations",
    highlight: "Local wineries & raki",
  },
  {
    id: 5,
    title: "Exploring Waterfall of Bogova",
    subtitle: "Ujëvara e Bogovës",
    category: "Nature",
    description: "Discover one of Albania's most breathtaking hidden gems — the stunning Bogova Waterfall, nestled in a lush gorge just a short drive from Berat.",
    image: "/images/Bogova-Waterfall.jpg",
    duration: "Half day",
    distance: "30 min drive",
    highlight: "Hidden natural wonder",
  },
  {
    id: 7,
    title: "Off Road Riding",
    subtitle: "4x4 Adventure",
    category: "Adventure",
    description: "Explore the rugged terrain around Berat in powerful 4x4 vehicles. Experience Albanian landscapes from a whole new perspective.",
    image: "/images/off-road.jpeg",
    duration: "Half / Full day",
    distance: "From campsite",
    highlight: "4x4 terrain adventure",
  },
];

export default function DestinationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="destination"
      ref={ref}
      style={{ background: "var(--charcoal)", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, transparent, var(--sunset), transparent)" }} />

      <div style={{ padding: "120px clamp(20px,4vw,60px) 120px", maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 70, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="section-label">Explore Berat</span>
            <h2 className="section-title" style={{ color: "white" }}>
              Activities & <em style={{ fontStyle: "italic", color: "var(--sunset-light)" }}>Experiences</em>
            </h2>
            <div className="divider" />
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 340, lineHeight: 1.8 }}>
            Every corner of Berat tells a story spanning centuries. Let us be your guide.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {destinations.map((dest, i) => (
            <article
              key={dest.id}
              style={{
                position: "relative",
                height: 380,
                overflow: "hidden",
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={() => setActive(dest.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Image or placeholder */}
              {dest.image ? (
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform: active === dest.id ? "scale(1.08)" : "scale(1)",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.03)",
                }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Photo coming soon
                  </span>
                </div>
              )}

              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: active === dest.id
                  ? "linear-gradient(to top, rgba(36,30,20,0.92) 0%, rgba(36,30,20,0.4) 60%, transparent 100%)"
                  : "linear-gradient(to top, rgba(36,30,20,0.85) 0%, rgba(36,30,20,0.2) 60%, transparent 100%)",
                transition: "background 0.4s ease",
              }} />

              {/* Category badge */}
              <span style={{
                position: "absolute", top: 20, left: 20, zIndex: 1,
                fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--sunset-light)", background: "rgba(0,0,0,0.45)",
                padding: "4px 10px", backdropFilter: "blur(4px)",
              }}>
                {dest.category}
              </span>

              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px", zIndex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "white", marginBottom: 2, lineHeight: 1.2 }}>
                  {dest.title}
                </h3>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.55)", display: "block", marginBottom: active === dest.id ? 14 : 0 }}>
                  {dest.subtitle}
                </span>

                <div style={{ maxHeight: active === dest.id ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: 16 }}>
                    {dest.description}
                  </p>
                  <div style={{ display: "flex", gap: 20 }}>
                    <span style={{ fontSize: 11, color: "var(--sunset-light)" }}>⏱ {dest.duration}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>📍 {dest.distance}</span>
                  </div>
                </div>

                {active !== dest.id && (
                  <span style={{ display: "inline-block", marginTop: 10, fontSize: 11, color: "var(--sunset-light)", letterSpacing: "0.08em" }}>
                    ✦ {dest.highlight}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
