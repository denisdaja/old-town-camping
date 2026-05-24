"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Homemade Pie",
    subtitle: "Byrek Shtëpiak",
    description: "Thin hand-rolled pastry filled with spinach and local white cheese, slowly baked to golden perfection. A staple of traditional Albanian home cooking.",
    image: "/images/home_pie.jpeg",
  },
  {
    id: 2,
    name: "Stuffed Peppers",
    subtitle: "Speca të Mbushur",
    description: "Fresh peppers filled with seasoned rice, local herbs and cheese, slow-cooked in a pot. A true classic of the Berat table, rich in authentic flavour.",
    image: "/images/stuffed_peppers.webp",
  },
  {
    id: 3,
    name: "Village Salad",
    subtitle: "Sallatë Fshati",
    description: "Sun-ripened tomatoes and cucumbers from local gardens, green peppers, red onion and crumbled local white cheese. Simple, wholesome and authentic.",
    image: "/images/village_salad.webp",
  },
  {
    id: 4,
    name: "Crispy Potatoes",
    subtitle: "Patate të Skuqura",
    description: "Golden and crunchy fried potatoes, served as a side alongside grilled meats and traditional Albanian specialities fresh from the grill.",
    image: "/images/french_fries.jpeg",
  },
  {
    id: 5,
    name: "Fresh Seasonal Fruits",
    subtitle: "Fruta të Freskëta",
    description: "Hand-picked seasonal fruits from the orchards surrounding Berat — peaches, figs, grapes and watermelon. A sweet and pure taste of Albanian nature.",
    image: "/images/fruits.jpeg",
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={ref}
      style={{ padding: "120px 0", background: "var(--cream)", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative background text */}
      <div style={{
        position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)",
        fontFamily: "var(--font-heading)", fontSize: "clamp(80px,15vw,160px)",
        fontWeight: 600, color: "rgba(90,80,60,0.04)", letterSpacing: "0.1em",
        textTransform: "uppercase", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        MENU
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,4vw,60px)" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label">Our Kitchen</span>
          <h2 className="section-title">
            Traditional <em style={{ fontStyle: "italic", color: "var(--sunset)" }}>Albanian Flavours</em>
          </h2>
          <div className="divider divider-center" />
          <p style={{ fontSize: 14, color: "var(--charcoal-light)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Prepared with fresh local ingredients, our dishes bring the authentic taste of Berat straight to your table.
          </p>
        </div>

        {/* Dish Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 2,
          marginBottom: 2,
        }}>
          {dishes.map((dish, i) => (
            <div
              key={dish.id}
              style={{
                display: "flex",
                background: "white",
                border: "1px solid var(--stone)",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Photo */}
              <div style={{ position: "relative", width: 160, minWidth: 160, flexShrink: 0 }}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="160px"
                />
              </div>

              {/* Text */}
              <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--sunset)", marginBottom: 6, display: "block",
                }}>
                  {dish.subtitle}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600,
                  color: "var(--charcoal)", marginBottom: 10, lineHeight: 1.2,
                }}>
                  {dish.name}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--charcoal-light)" }}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Local Products Feature */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          background: "var(--charcoal)",
          overflow: "hidden",
          marginTop: 60,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
        }} className="local-products-grid">

          {/* Photo */}
          <div style={{ position: "relative", minHeight: 320 }}>
            <Image
              src="/images/local_prouct.webp"
              alt="Local Products from Berat"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, transparent 60%, var(--charcoal) 100%)",
            }} />
          </div>

          {/* Text */}
          <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--sunset-light)", marginBottom: 16, display: "block",
            }}>
              Shop Local
            </span>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600,
              color: "white", marginBottom: 16, lineHeight: 1.2,
            }}>
              Local Products <br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.7)", fontSize: "0.85em" }}>from Berat</em>
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(255,255,255,0.65)", marginBottom: 28, maxWidth: 440 }}>
              Straight from the land of Berat — we offer a curated selection of the finest local products: <strong style={{ color: "rgba(255,255,255,0.85)" }}>cold-pressed olive oil</strong> from centuries-old groves,{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>local white and red wine</strong> from the region's vineyards,{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>Gliko Berati</strong> — a traditional candied fruit preserve,{" "}
              and homemade <strong style={{ color: "rgba(255,255,255,0.85)" }}>fruit jam</strong> and <strong style={{ color: "rgba(255,255,255,0.85)" }}>compote</strong> crafted with recipes passed down through generations.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Olive Oil", "Local Wine", "Gliko Berati", "Fruit Jam", "Compote"].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--sunset-light)", border: "1px solid rgba(196,98,45,0.4)",
                  padding: "5px 14px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .local-products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
