"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI QUALITY & LLM EVALUATION ANALYST",
    company: "Handshake AI",
    date: "Jan 2026 – Present",
    pills: ["LLM Evaluation", "Model Safety", "Prompt Testing"],
    desc: "Evaluated AI-generated responses across diverse prompts using structured rubrics to improve model accuracy, coherence, and safety. Identified failure patterns and edge cases in LLM outputs.",
  },
  {
    role: "PRODUCT & GROWTH",
    company: "SODA.IO · New York City",
    date: "Jun 2025 – Present",
    pills: ["Attendance 38%→55%", "50+ User Interviews", "+30% Leads"],
    desc: "Designed automated onboarding workflows (Zapier + CRM), built scalable U.S. event playbook, and ran targeted partnership experiments during Databricks World increasing qualified leads by 30%.",
  },
  {
    role: "AI PRODUCT MANAGER",
    company: "Omnicom Media Group · New York City",
    date: "Sep – Dec 2025",
    pills: ["Python + SQL", "Power BI", "4-Person Team Lead"],
    desc: "Led development of AI analytics dashboard for L'Oréal portfolio. Built sentiment analysis framework and executive BI dashboards reducing manual reporting time significantly.",
  },
  {
    role: "PRODUCT MANAGEMENT INTERN",
    company: "Wealth Note Investments · Pune",
    date: "Jan – May 2024",
    pills: ["200+ Users", "MVP in 12 Weeks", "Activation +20%"],
    desc: "Defined product vision and MVP scope, authored PRD, launched beta within 12 weeks. Used SQL funnel analysis to identify 35% post-signup drop-off and introduced guided onboarding.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ backgroundColor: "#F5F0E8", padding: "80px 56px" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ marginBottom: 64, textAlign: "center" }}
      >
        <p style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 10, letterSpacing: 4, color: "#aaa",
          textTransform: "uppercase", marginBottom: 16,
        }}>
          Where I&apos;ve Worked
        </p>
        <h2 style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
          fontSize: 48, fontWeight: 400, color: "#1a1a1a", margin: 0,
        }}>
          Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", paddingLeft: 32 }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: 1,
          background: "#e0d8d0",
        }} />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              marginBottom: i < experiences.length - 1 ? 52 : 0,
            }}
          >
            {/* Dot */}
            <div style={{
              position: "absolute",
              left: -36,
              top: 4,
              width: 8, height: 8,
              borderRadius: "50%",
              background: "#1a1a1a",
            }} />

            {/* Row 1 — role + date */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15, fontWeight: 700, letterSpacing: 2,
                color: "#1a1a1a", textTransform: "uppercase",
              }}>
                {exp.role}
              </span>
              <span style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13, color: "#aaa", letterSpacing: 1,
                whiteSpace: "nowrap", marginLeft: 24, flexShrink: 0,
              }}>
                {exp.date}
              </span>
            </div>

            {/* Row 2 — company */}
            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15, color: "#888", marginTop: 4, marginBottom: 0,
            }}>
              {exp.company}
            </p>

            {/* Row 3 — pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
              {exp.pills.map((pill) => (
                <span key={pill} style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 12, letterSpacing: 1, padding: "4px 12px",
                  border: "1px solid #e0d8d0", borderRadius: 20,
                  color: "#888", background: "transparent",
                }}>
                  {pill}
                </span>
              ))}
            </div>

            {/* Row 4 — description */}
            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15, color: "#666", lineHeight: 1.7,
              marginTop: 10, maxWidth: 640, marginBottom: 0,
            }}>
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
