"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "120px 56px",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(48px, 6vw, 80px)",
          fontWeight: 300,
          color: "#F5F0E8",
          marginBottom: 16,
          lineHeight: 1.1,
        }}
      >
        Let&apos;s build something.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 14,
          color: "rgba(245,240,232,0.5)",
          marginBottom: 48,
        }}
      >
        Open to full-time PM roles, collaborations, and good conversations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
      >
        <a
          href="mailto:ppk2035@nyu.edu"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#1a1a1a",
            background: "#F5F0E8",
            padding: "16px 32px",
            borderRadius: 0,
            textDecoration: "none",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          ppk2035@nyu.edu ↗
        </a>
        <a
          href="https://linkedin.com/in/preeti-karmarkar-174370255"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#F5F0E8",
            background: "transparent",
            border: "1px solid rgba(245,240,232,0.3)",
            padding: "16px 32px",
            borderRadius: 0,
            textDecoration: "none",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          LinkedIn ↗
        </a>
      </motion.div>
    </section>
  );
}
