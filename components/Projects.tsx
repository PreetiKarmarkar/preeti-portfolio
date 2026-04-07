"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    tag: "AI · FINTECH",
    title: "TalkMyBill",
    description: "AI-powered bill analyzer that breaks down any bill in plain English, flags sketchy charges, and tells you exactly what to say when you call to dispute.",
    subline: "Free. No signup. No lawyers needed. 😄",
    chatbotBadge: "✦ Has a built-in chatbot",
    link: "#",
    hideViewLink: true,
    liveLink: "https://talkmybill-2d9rytwjt-preetikarmarkars-projects.vercel.app",
    imgBg: "#EDE5DC",
    imgSrc: "/images/talkmybill.png",
    imgText: undefined,
    imgScale: "scale(1.8)",
    imgPosition: "15% 8%",
    bodyBg: "#F5F0EA",
  },
  {
    number: "02",
    tag: "AI · SALES",
    title: "OutreachIQ",
    description: "Find the pain. Show the proof. Send the email.",
    subline: "Paste a company name, get their real pain points with sources, and an email worth opening in seconds.",
    chatbotBadge: "✦ AI-Powered Outreach",
    link: "#",
    hideViewLink: true,
    liveLink: "https://outreach-iq-tan.vercel.app",
    imgBg: "#EDD8D0",
    imgSrc: "/images/outreachiq-v3.png",
    imgText: undefined,
    imgScale: "scale(1.2)",
    imgPosition: "top center",
    bodyBg: "#F7F0ED",
    colors: {
      number: "#555",
      tag: "#444",
      badge: "#7BAED4",
      title: "#111111",
      description: "#222222",
      subline: "#555555",
      liveLink: "#4A90C4",
    },
  },
  {
    number: "03",
    tag: "AI · STRATEGY",
    title: "CompeteIQ",
    description: "Competitive intelligence, on demand.",
    subline: "Type any company or market — get a full competitive analysis in seconds. Threat alerts, feature gaps, user sentiment, and a one-click strategy memo. What takes a PM 2–3 days, done instantly.",
    chatbotBadge: "✦ LIVE WEB INTELLIGENCE",
    link: "#",
    hideViewLink: true,
    liveLink: "https://competitor-intelligence-dashboard.vercel.app/",
    imgBg: "#C2CEDB",
    imgSrc: "/images/competeiq.png",
    imgText: undefined,
    imgScale: "scale(1.2)",
    imgPosition: "15% 8%",
    bodyBg: "#E4EAF0",
    colors: {
      number: "#555",
      tag: "#444",
      badge: "#A8C8E8",
      title: "#1a1a1a",
      description: "#222222",
      subline: "#555555",
      liveLink: "#A8C8E8",
    },
  },
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        cursor: "pointer",
        background: "#E8E2D9",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setImgHovered(false); }}
    >
      {/* Image area — fixed height */}
      <div
        style={{
          height: "280px",
          flexShrink: 0,
          background: project.imgBg,
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: imgHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {project.imgSrc ? (
          <div style={{ overflow: "hidden", width: "100%", height: "100%", position: "relative" }}>
            <img
              src={project.imgSrc}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: project.imgPosition ?? "top center",
                transform: project.imgScale ?? "scale(1)",
                transformOrigin: "top center",
              }}
            />
          </div>
        ) : project.imgText ? (
          <span style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 2 }}>
            {project.imgText}
          </span>
        ) : (
          <span style={{ fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.4)" }}>
            Project Image
          </span>
        )}
      </div>

      {/* Content area — grows with content */}
      <div
        style={{
          flex: 1,
          height: "auto",
          minHeight: "auto",
          padding: 28,
          background: project.bodyBg,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          overflow: "visible",
        }}
      >
        {/* Row 1 — number + tag */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: project.colors?.number ?? "#888",
              letterSpacing: 3,
            }}
          >
            {project.number}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              padding: "6px 14px",
              border: "1px solid rgba(44,44,44,0.2)",
              borderRadius: 20,
              color: project.colors?.tag ?? "#666",
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Row 2 — chatbot badge (Card 1 only) + title */}
        <div>
          {project.chatbotBadge && (
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: 2,
                color: project.colors?.badge ?? "#A8C8E8",
                fontWeight: 600,
                textTransform: "uppercase",
                margin: "12px 0 10px",
              }}
            >
              {project.chatbotBadge}
            </p>
          )}
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontWeight: 600,
              color: project.colors?.title ?? "#1a1a1a",
              lineHeight: 1.1,
              margin: project.chatbotBadge ? "0 0 12px" : "12px 0 12px",
            }}
          >
            {project.title}
          </p>
        </div>

        {/* Row 3 — description + optional subline */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: project.colors?.description ?? "#444",
              lineHeight: 1.7,
              marginBottom: project.subline ? 0 : 16,
            }}
          >
            {project.description}
          </p>
          {project.subline && (
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                color: project.colors?.subline ?? "#888",
                marginTop: 6,
                marginBottom: 16,
              }}
            >
              {project.subline}
            </p>
          )}
        </div>

        {/* Row 4 — link(s) */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {!project.hideViewLink && <ViewLink link={project.link} />}
          {project.liveLink && <LiveLink link={project.liveLink} color={project.colors?.liveLink} />}
        </div>
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,26,26,0.04)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function ViewLink({ link }: { link: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link}
      style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 3,
        color: hovered ? "#A8C8E8" : "#1a1a1a",
        textDecoration: "none",
        textTransform: "uppercase",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        transition: "color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      View Case Study →
    </a>
  );
}

function LiveLink({ link, color }: { link: string; color?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={link}
      style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 3,
        color: color ?? "#A8C8E8",
        textDecoration: "none",
        textTransform: "uppercase",
        opacity: hovered ? 0.7 : 1,
        transition: "opacity 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Try It Live ↗
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "80px 56px",
        backgroundColor: "#F5F0E8",
      }}
    >
      {/* Left vertical label */}
      <span
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 9,
          letterSpacing: 3,
          color: "#ccc",
          whiteSpace: "nowrap",
        }}
      >
        PRESENTATION · 001
      </span>

      {/* Right vertical label */}
      <span
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 9,
          letterSpacing: 3,
          color: "#ccc",
          whiteSpace: "nowrap",
        }}
      >
        PRESENTATION · 003
      </span>

      {/* Section header */}
      <div style={{ marginBottom: 56 }}>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: 4,
            color: "#aaa",
            marginBottom: 16,
            textTransform: "uppercase",
          }}
        >
          Selected Work
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
          Things I&apos;ve Built
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
        className="projects-grid"
      >
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-grid > div {
            aspect-ratio: 4/3 !important;
          }
        }
      `}</style>
    </section>
  );
}
