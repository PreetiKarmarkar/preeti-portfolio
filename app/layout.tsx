import type { Metadata } from "next";
import { Caveat, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Elegant editorial font — used for hero name + section headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preeti Karmarkar — Product Manager",
  description:
    "Portfolio of Preeti Karmarkar, a Product Manager passionate about turning messy problems into shipped products through research, data, and user empathy.",
  openGraph: {
    title: "Preeti Karmarkar — Product Manager",
    description:
      "Portfolio of Preeti Karmarkar, a Product Manager passionate about turning messy problems into shipped products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${dmSans.variable} ${cormorant.variable} antialiased`}
        style={{
          fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
          backgroundColor: "#F5F0E8",
          color: "#2C2C2C",
        }}
      >
        {children}
      </body>
    </html>
  );
}
