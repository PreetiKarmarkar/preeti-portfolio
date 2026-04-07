"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "✦ FOUNDER",
    title: "PM Club @ RCERT",
    stat: "100+ members · 15+ mentors",
    desc: "Built the university's first product management community, organized product teardown workshops and mentorship programs.",
  },
  {
    label: "✦ LEAD STRATEGIST",
    title: "Digital Experience Initiative",
    stat: "30+ user interviews",
    desc: "Conducted user interviews and prototyped hybrid engagement experiences to improve fan interaction metrics.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        backgroundColor: "#F5F0E8",
        padding: "80px 56px",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ marginBottom: 56 }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: 4,
            color: "#aaa",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Beyond the Job
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: 48,
            fontWeight: 400,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Leadership
        </h2>
      </motion.div>

      {/* Cards */}
      <div style={{ display: "flex", gap: 24 }}>
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              border: "1px solid #e0d8d0",
              padding: 32,
              borderRadius: 0,
              background: "transparent",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 10,
                letterSpacing: 3,
                color: "#aaa",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {card.label}
            </p>

            <h3
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 26,
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: 1,
                color: "#aaa",
                marginBottom: 16,
              }}
            >
              {card.stat}
            </p>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                color: "#666",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
