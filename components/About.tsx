"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "200+", label: "Users Researched" },
  { number: "3", label: "Products Shipped" },
  { number: "100+", label: "Community Members" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#F5F0E8",
        padding: "80px 56px",
        display: "flex",
        gap: 80,
        alignItems: "flex-start",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      {/* LEFT — stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ flex: "0 0 45%", minWidth: 0 }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: 4,
            color: "#aaa",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          About
        </p>

        <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "stretch" }}>
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    background: "#e0d8d0",
                    alignSelf: "stretch",
                    margin: "0 32px",
                  }}
                />
              )}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: 64,
                    fontWeight: 300,
                    color: "#1a1a1a",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: 3,
                    color: "#aaa",
                    textTransform: "uppercase",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — bio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true }}
        style={{ flex: 1, minWidth: 0, overflow: "hidden", overflowWrap: "break-word" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 42,
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          Hi, I&apos;m Preeti.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.8,
            color: "#555",
            marginBottom: 0,
            maxWidth: "100%",
            overflowWrap: "break-word",
            wordBreak: "normal",
          }}
        >
          Currently pursuing my Master&apos;s in Management of Technology at
          NYU. I&apos;m drawn to zero-to-one environments where ambiguity is
          high and building structure is part of the job.
          <br /><br />
          I focus on translating user behavior and data into scalable systems
          that drive real outcomes. Right now, I&apos;m exploring how AI can
          power better products, automate decision-making, and unlock new ways
          of building and scaling.
        </p>

        <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
          {["📍 New York City", "🎓 New York University"].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: 1,
                color: "#888",
                padding: "6px 14px",
                border: "1px solid #e0d8d0",
                borderRadius: 20,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom rule */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 56,
          right: 56,
          height: 1,
          background: "#e0d8d0",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          #about {
            flex-direction: column !important;
            padding: 48px 24px !important;
            gap: 40px !important;
          }
          #about > div {
            flex: none !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
