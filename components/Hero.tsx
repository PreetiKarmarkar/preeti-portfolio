"use client";

import { useState } from "react";

function PhotoColumn() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(160deg, #D4C5B0, #BFB09A)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          }}
        >
          Add your photo here
        </span>
      </div>
    );
  }

  return (
    <img
      src="/images/preeti.jpg"
      alt="Preeti Karmarkar"
      onError={() => setImgError(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        display: "block",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        backgroundColor: "#F5F0E8",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Top metadata bar ── */}
      <div
        style={{
          height: 48,
          flexShrink: 0,
          borderBottom: "1px solid rgba(44,44,44,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        {["PREETI KARMARKAR", "PRODUCT MANAGER", "NYU · NEW YORK", "2026"].map(
          (item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "3px",
                color: "#888",
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          )
        )}
      </div>

      {/* ── Two-column body ── */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
        {/* LEFT COLUMN */}
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "48px 48px 48px 56px",
          }}
        >
          {/* Small label */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 10,
              letterSpacing: "4px",
              color: "#aaa",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            PORTFOLIO · 2026
          </p>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(52px, 7vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-2px",
              color: "#1a1a1a",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            BUILDING WHAT
            <br />
            THE WORLD
            <br />
            USES NEXT
          </h1>

          {/* Intro paragraph */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#555",
              maxWidth: 380,
              marginBottom: 40,
            }}
          >
            I build at the intersection of product, growth, and AI. From
            turning user insights into scalable playbooks to designing systems
            that drive real outcomes, I focus on solving messy, real-world
            problems.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "#1a1a1a",
                color: "#F5F0E8",
                padding: "14px 28px",
                fontSize: 11,
                letterSpacing: "2px",
                fontWeight: 600,
                border: "none",
                borderRadius: 0,
                textDecoration: "none",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                cursor: "pointer",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#333")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1a1a1a")
              }
            >
              VIEW MY WORK →
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#1a1a1a",
                padding: "14px 28px",
                fontSize: 11,
                letterSpacing: "2px",
                fontWeight: 600,
                border: "1px solid rgba(44,44,44,0.3)",
                borderRadius: 0,
                textDecoration: "none",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                cursor: "pointer",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#1a1a1a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(44,44,44,0.3)")
              }
            >
              SAY HELLO
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            flexShrink: 0,
            background: "rgba(44,44,44,0.12)",
          }}
        />

        {/* RIGHT COLUMN — photo */}
        <div
          style={{
            width: "45%",
            overflow: "hidden",
            background: "#D4C5B0",
          }}
        >
          <PhotoColumn />
        </div>
      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 767px) {
          #hero > div:last-child {
            flex-direction: column;
          }
          #hero > div:last-child > div:first-child {
            width: 100% !important;
            padding: 32px 24px 32px 24px !important;
          }
          #hero > div:last-child > div:last-child {
            width: 100% !important;
            height: 40vh !important;
            order: -1;
          }
          #hero > div:last-child > div:nth-child(2) {
            display: none;
          }
          h1 {
            font-size: clamp(40px, 10vw, 64px) !important;
          }
        }
      `}</style>
    </section>
  );
}
