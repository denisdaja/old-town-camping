"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "We had a wonderful stay at this motorhome campsite. The people were incredibly kind and hospitable – they welcomed us with fresh fruit and a small shot, and they were so lovely to our little daughter. The location is very calm and quiet, yet close to the city center. We can highly recommend this place to everyone!",
    author: "Martin Held",
    location: "4 months ago · Google",
    stars: 5,
  },
  {
    id: 2,
    quote: "100% recommendation! Complete service, very well-maintained site, super-clean restrooms. But the best part: the hosts. We thank you from the bottom of our hearts for the great fruit, the many espressos, our conversations, the olives, and the great help with repairing our motorhome. It was like being part of a family!",
    author: "Thomas Rexrodt",
    location: "6 months ago · Google",
    stars: 5,
  },
  {
    id: 3,
    quote: "A beautiful campsite with spacious, level pitches, in a quiet location yet within easy walking distance of Berat. New and spotlessly clean sanitary facilities, wonderful showers. On top of that, incredibly friendly owners who provided us with freshly picked pomegranates daily. Camping couldn't be better.",
    author: "Florian Feichtmeier",
    location: "7 months ago · Google",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px clamp(20px,4vw,60px)",
        background: "var(--olive-dark)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background quote mark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: 360,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Stars */}
        <div style={{ fontSize: 16, color: "#D4AF37", marginBottom: 28, letterSpacing: 4 }}>
          {"★".repeat(t.stars)}
        </div>

        {/* Quote */}
        <blockquote
          key={active}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "white",
            lineHeight: 1.7,
            marginBottom: 36,
            animation: "fadeIn 0.6s ease",
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--sunset-light)", letterSpacing: "0.08em" }}>
            {t.author}
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {t.location}
          </span>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 36 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "18px 6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={`Review ${i + 1}`}
            >
              <span style={{
                display: "block",
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? "var(--sunset-light)" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }} />
            </button>
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
