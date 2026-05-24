"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/gallery-1.webp", alt: "Old Town Camping", tall: true },
  { id: 2, src: "/images/gallery-2.webp", alt: "Old Town Camping" },
  { id: 3, src: "/images/gallery-3.webp", alt: "Old Town Camping" },
  { id: 4, src: "/images/gallery-4.webp", alt: "Old Town Camping", tall: true },
  { id: 5, src: "/images/gallery-5.webp", alt: "Old Town Camping" },
  { id: 6, src: "/images/camp_photo1.webp", alt: "Old Town Camping" },
  { id: 7, src: "/images/camp_photo2.webp", alt: "Old Town Camping", tall: true },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) setLightbox((p) => ((p ?? 0) + 1) % galleryImages.length);
      if (e.key === "ArrowLeft" && lightbox !== null) setLightbox((p) => ((p ?? 0) - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const activeImg = lightbox !== null ? galleryImages[lightbox] : null;

  return (
    <section
      id="gallery"
      ref={ref}
      style={{ padding: "120px 0", background: "var(--stone-white)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label">Visual Journey</span>
          <h2 className="section-title">
            Camping Through <em style={{ fontStyle: "italic", color: "var(--sunset)" }}>Our Lens</em>
          </h2>
          <div className="divider divider-center" />
        </div>

        {/* Masonry Grid */}
        <div
          style={{
            columns: "3 250px",
            columnGap: 16,
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setLightbox(i)}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                height: img.tall ? 420 : 260,
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.97)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.transform = "scale(1.04)";
                  (e.target as HTMLImageElement).parentElement!.querySelector(".overlay")!.setAttribute("style", "opacity:1");
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.transform = "scale(1)";
                  (e.target as HTMLImageElement).parentElement!.querySelector(".overlay")!.setAttribute("style", "opacity:0");
                }}
              />
              {/* Hover overlay */}
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(196,98,45,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                <span style={{ color: "white", fontSize: 28, fontWeight: 300 }}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && activeImg && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(20,18,14,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
              background: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              width: 44,
              height: 44,
              cursor: "pointer",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => ((p ?? 0) - 1 + galleryImages.length) % galleryImages.length); }}
            style={{ position: "absolute", left: 20, background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "white", width: 48, height: 48, cursor: "pointer", fontSize: 20 }}
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={activeImg.src}
            alt={activeImg.alt}
            width={1200}
            height={800}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "85vw", maxHeight: "85vh", objectFit: "contain", boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => ((p ?? 0) + 1) % galleryImages.length); }}
            style={{ position: "absolute", right: 20, background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "white", width: 48, height: 48, cursor: "pointer", fontSize: 20 }}
          >
            ›
          </button>

          {/* Caption */}
          <span style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--font-display)", fontStyle: "italic", color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
            {activeImg.alt} · {lightbox + 1} / {galleryImages.length}
          </span>
        </div>
      )}
    </section>
  );
}
