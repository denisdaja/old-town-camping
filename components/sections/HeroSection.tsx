"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Crossfade: video1 ends → play video2
  const handleVideo1End = useCallback(() => {
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play();
    }
    setActiveVideo(2);
  }, []);

  // Crossfade: video2 ends → play video1
  const handleVideo2End = useCallback(() => {
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play();
    }
    setActiveVideo(1);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background parallax container */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          inset: "-20%",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        {/* Fallback image (shown before video loads) */}
        <Image
          src="/images/berat.webp"
          alt="Berat cityscape"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />

        {/* Video 1 */}
        <video
          ref={video1Ref}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideo1End}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            opacity: activeVideo === 1 ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        {/* Video 2 */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="metadata"
          onEnded={handleVideo2End}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            opacity: activeVideo === 2 ? 1 : 0,
            transition: "opacity 1.5s ease",
          }}
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(to top, rgba(18,14,10,0.48) 0%, rgba(18,14,10,0.28) 35%, rgba(18,14,10,0.12) 60%, transparent 100%), linear-gradient(to top, rgba(140,60,20,0.35) 0%, transparent 55%)`,
          pointerEvents: "none",
        }}
      />

      {/* Decorative top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, var(--sunset-light), var(--gold), var(--sunset-light), transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 clamp(20px,5vw,80px)",
          maxWidth: 900,
          animation: "heroFadeIn 1.2s ease forwards",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--sunset-light)",
            display: "block",
            marginBottom: 28,
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.3s forwards",
          }}
        >
          Berat · Albania · UNESCO Heritage
        </span>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 8,
            opacity: 0,
            animation: "fadeUp 0.9s ease 0.5s forwards",
            textShadow: "0 4px 40px rgba(0,0,0,0.3)",
          }}
        >
          Old Town
          <br />
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300, letterSpacing: "0.12em", fontSize: "0.85em", textTransform: "none", color: "rgba(255,255,255,0.9)" }}>
            Camping
          </span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            margin: "28px auto",
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.7s forwards",
          }}
        >
          <div style={{ height: 1, width: 60, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.5))" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sunset-light)" }} />
          <div style={{ height: 1, width: 60, background: "linear-gradient(to left, transparent, rgba(255,255,255,0.5))" }} />
        </div>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.82)",
            marginBottom: 48,
            letterSpacing: "0.04em",
            opacity: 0,
            animation: "fadeUp 0.8s ease 0.9s forwards",
          }}
        >
          Experience the Heart of Berat
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.8s ease 1.1s forwards",
          }}
        >
          <a
            href="#gallery"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "white",
              background: "var(--sunset)",
              textDecoration: "none",
              padding: "16px 36px",
              display: "inline-block",
              transition: "background 0.3s ease, transform 0.3s ease",
              boxShadow: "0 8px 32px rgba(196,98,45,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--sunset-light)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--sunset)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Explore Campsite
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "white",
              background: "transparent",
              textDecoration: "none",
              padding: "15px 34px",
              border: "1px solid rgba(255,255,255,0.5)",
              display: "inline-block",
              transition: "background 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)";
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "fadeUp 1s ease 1.5s forwards",
          opacity: 0,
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
          Discover
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            animation: "scrollPulse 2s ease infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50% { opacity: 0.9; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
