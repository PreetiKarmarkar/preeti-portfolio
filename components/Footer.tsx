"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        borderTop: "1px solid rgba(245,240,232,0.1)",
        padding: "24px 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: 1,
          color: "rgba(245,240,232,0.3)",
        }}
      >
        © 2026 Preeti Karmarkar
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: 1,
          color: "rgba(245,240,232,0.3)",
        }}
      >
        Built with Next.js · Designed in collaboration with Claude
      </span>
    </footer>
  );
}
