"use client";

const tools = [
  { name: 'Notion',           slug: 'notion',                 color: '000000', type: 'icon' },
  { name: 'Figma',            slug: 'figma',                  color: 'F24E1E', type: 'icon' },
  { name: 'Jira',             slug: 'jira',                   color: '0052CC', type: 'icon' },
  { name: 'Trello',           slug: 'trello',                 color: '0052CC', type: 'icon' },
  { name: 'Slack',            slug: 'slack',                  color: null,     type: 'icon' },
  { name: 'Miro',             slug: 'miro',                   color: 'FFD02F', type: 'icon' },
  { name: 'Google Analytics', slug: 'googleanalytics',        color: 'E37400', type: 'icon' },
  { name: 'Google Sheets',    slug: 'googlesheets',           color: '34A853', type: 'icon' },
  { name: 'PowerPoint',       slug: 'microsoftpowerpoint',    color: 'B7472A', type: 'icon' },
  { name: 'Claude',           slug: null,                     color: null,     type: 'text' },
];

function ToolIcon({ tool }: { tool: typeof tools[number] }) {
  // Claude — text bubble
  if (tool.type === 'text') {
    return (
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#CC785C', letterSpacing: '1px', textAlign: 'center' }}>
        Claude
      </span>
    );
  }

  // PowerPoint — inline SVG (CDN slug unreliable)
  if (tool.slug === 'microsoftpowerpoint') {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#B7472A" d="M12.094 2.44L0 4.28v15.44l12.094 1.84V2.44zm1.468.178v19.164l9.032-1.504V4.12l-9.032-1.502zM5.77 8.232h3.312c.64 0 1.144.064 1.52.196.376.13.686.326.926.59.24.265.416.571.526.921.11.35.166.727.166 1.13 0 .55-.09 1.017-.27 1.4a2.5 2.5 0 0 1-.753.965c-.32.245-.664.41-1.032.494-.37.083-.83.124-1.378.124h-1.22v2.68H5.77V8.232zm1.797 1.41v2.99h1.09c.376 0 .674-.04.898-.12.224-.08.404-.22.542-.42.138-.2.207-.444.207-.734 0-.256-.057-.476-.17-.66a1.01 1.01 0 0 0-.468-.41c-.2-.088-.518-.132-.954-.132H7.567z"/>
      </svg>
    );
  }

  // Google Analytics — inline SVG (CDN slug unreliable)
  if (tool.slug === 'googleanalytics') {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E37400" d="M22.84 2.998C22.84 1.341 21.498 0 19.84 0c-1.656 0-2.998 1.341-2.998 2.998v18.004C16.842 22.659 18.184 24 19.84 24s2.998-1.341 2.998-2.998zm-8.994 6.999c0-1.657-1.342-2.998-2.998-2.998S7.85 8.34 7.85 9.997v11.005C7.85 22.659 9.192 24 10.848 24s2.998-1.341 2.998-2.998zM4.158 16c0-1.105-.895-2-2-2s-2 .895-2 2v4.998C.158 22.102 1.052 24 2.158 24s2-1.898 2-3.002z"/>
      </svg>
    );
  }

  // Slack — inline 4-color brand SVG
  if (tool.slug === 'slack') {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
        <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
        <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
        <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
        <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </svg>
    );
  }

  // All other icons — color override via CDN
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
      alt={tool.name}
      width={34}
      height={34}
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        if (e.currentTarget.parentElement) {
          e.currentTarget.parentElement.innerHTML =
            `<span style="font-size:9px;font-weight:700;color:#888;text-align:center;padding:4px;letter-spacing:1px;">${tool.name}</span>`;
        }
      }}
    />
  );
}

function ToolBubble({ tool }: { tool: typeof tools[number] }) {
  return (
    <div
      title={tool.name}
      style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.8)',
        border: '1px solid rgba(44,44,44,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        margin: '0 16px',
      }}
    >
      <ToolIcon tool={tool} />
    </div>
  );
}

export default function Marquee() {
  return (
    <section style={{ padding: '52px 0', backgroundColor: '#F5F0E8' }}>
      <p
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 18,
          color: '#888',
          textAlign: 'center',
          marginBottom: 28,
          letterSpacing: '1px',
        }}
      >
        Tools I work with
      </p>

      {/* Outer wrapper — overflow hidden + fade edges */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Left fade */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0,
            width: 80, height: '100%', zIndex: 2,
            pointerEvents: 'none',
            background: 'linear-gradient(to right, #F5F0E8, transparent)',
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute', top: 0, right: 0,
            width: 80, height: '100%', zIndex: 2,
            pointerEvents: 'none',
            background: 'linear-gradient(to left, #F5F0E8, transparent)',
          }}
        />

        {/* Scrolling track — four identical copies for seamless -25% loop */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'marqueeScroll 35s linear infinite',
            padding: '4px 0',
          }}
        >
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <ToolBubble key={i} tool={tool} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
