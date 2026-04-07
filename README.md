# Preeti Karmarkar — Portfolio Website

A personal portfolio website for Preeti Karmarkar, Product Manager.

## Tech Stack
- **Next.js 16** (App Router)
- **Framer Motion** — scroll-triggered animations and hover effects
- **Tailwind CSS v4** — utility-first styling
- **Google Fonts** — Caveat (headings) + DM Sans (body)

## Getting Started (Local Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:** Navigate to [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

The easiest way to deploy this portfolio is via [Vercel](https://vercel.com):

### Option 1: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project root
3. Follow the prompts — Vercel auto-detects Next.js

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repo
4. Vercel will auto-configure everything — click "Deploy"

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Global styles, theme tokens, animations
├── components/
│   ├── Hero.tsx         # Hero section with animated name + CTA
│   ├── Marquee.tsx      # Auto-scrolling tools strip
│   ├── About.tsx        # Bio + stat cards
│   ├── Experience.tsx   # Timeline of work experience
│   ├── Projects.tsx     # Case study cards
│   ├── Leadership.tsx   # Leadership + community roles
│   ├── Contact.tsx      # Contact section with email + LinkedIn
│   └── Footer.tsx       # Simple footer
└── README.md            # This file
```

## Customization

- **Colors:** Edit the `@theme` block in `app/globals.css`
- **Content:** Each section is its own component in `components/` — edit text directly
- **Animations:** Framer Motion variants are defined at the top of each component
