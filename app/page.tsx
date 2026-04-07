'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // isMounted ensures Loader only renders client-side (no SSR/hydration mismatch)
  const [isMounted, setIsMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && !loaded && (
        <Loader onComplete={() => setLoaded(true)} />
      )}

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
        className="relative z-10 overflow-hidden"
      >
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
