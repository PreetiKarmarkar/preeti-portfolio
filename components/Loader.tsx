'use client';
import { useState, useEffect } from 'react';

/* ── TWEAK VALUES HERE ──────────────── */
const C = {
  outerR:    185,   // outer ring radius px
  innerR:    112,   // inner ring radius px
  outerSize:  26,   // outer font size px
  innerSize:  12,   // inner font size px
  outerFW:   800,   // outer font weight
  innerFW:   400,   // inner font weight
  outerY:    -26,   // outer ring vertical offset px
  innerY:     28,   // inner ring vertical offset px
  tilt:       22,   // rotateX tilt toward viewer in degrees
  spinMs:   9000,   // ms per full rotation — higher = slower
  loaderMs: 6500,   // total loader duration in ms
};

const OUTER_TEXT = 'BUILDING WHAT THE WORLD USES NEXT  ·  ';
const INNER_TEXT = 'PRODUCT STRATEGY  ·  USER RESEARCH  ·  DATA ANALYTICS  ·  PM  ·  NYU  ·  NEW YORK  ·  ';
/* ────────────────────────────────────── */

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'rise' | 'spin' | 'drop'>('rise');

  /* inject keyframes */
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'loader-keyframes';
    style.textContent = `
      @keyframes kSpin {
        from { transform: rotateX(${C.tilt}deg) rotateY(0deg); }
        to   { transform: rotateX(${C.tilt}deg) rotateY(-360deg); }
      }
      @keyframes kRise {
        from { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(90px); opacity: 0; }
        to   { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(0px);  opacity: 1; }
      }
      @keyframes kDrop {
        0%   { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(0px);   opacity: 1; }
        25%  { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(-28px); opacity: 0.95; }
        60%  { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(80px);  opacity: 0.4; }
        100% { transform: rotateX(${C.tilt}deg) rotateY(0deg) translateY(280px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.getElementById('loader-keyframes')?.remove();
  }, []);

  /* phase transitions */
  useEffect(() => {
    const t = setTimeout(() => setPhase('spin'), 1100);
    return () => clearTimeout(t);
  }, []);

  /* counter */
  useEffect(() => {
    const steps = C.loaderMs / 40;
    let cur = 0;
    const timer = setInterval(() => {
      cur++;
      setCount(Math.min(Math.round((cur / steps) * 100), 100));
      if (cur >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setPhase('drop');
          setTimeout(onComplete, 1000);
        }, 300);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  /* animation per phase */
  const ringAnim: React.CSSProperties =
    phase === 'rise'
      ? { animation: 'kRise 1.1s cubic-bezier(0.22,1,0.36,1) forwards' }
      : phase === 'spin'
      ? { animation: `kSpin ${C.spinMs}ms linear infinite` }
      : { animation: 'kDrop 1s cubic-bezier(0.4,0,0.6,1) forwards' };

  /* build letter elements for one ring */
  function buildLetters(
    text: string,
    radius: number,
    fontSize: number,
    fontWeight: number,
    yOff: number
  ) {
    return text.split('').map((ch, i) => {
      const n = text.length;
      const deg = (i / n) * 360;
      const rad = (deg * Math.PI) / 180;
      const x = radius * Math.sin(rad);
      const z = radius * Math.cos(rad);
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 0, top: 0,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: `
              translate(-50%, -50%)
              translate3d(${x}px, ${yOff}px, ${z}px)
              rotateY(${deg}deg)
            `,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', 'Helvetica Neue', 'Inter', sans-serif",
              fontSize: `${fontSize}px`,
              fontWeight,
              color: '#1C1C1C',
              whiteSpace: 'pre',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {ch}
          </span>
        </div>
      );
    });
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      width: '100vw', height: '100vh',
      background: '#F2EDE4',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* 3D scene */}
      <div style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 48%',
      }}>
        <div style={{ position: 'relative', width: 0, height: 0 }}>
          {/* rotating ring group */}
          <div style={{
            position: 'absolute',
            left: 0, top: 0,
            transformStyle: 'preserve-3d',
            ...ringAnim,
          }}>
            {/* outer ring — big bold text */}
            {buildLetters(OUTER_TEXT, C.outerR, C.outerSize, C.outerFW, C.outerY)}
            {/* inner ring — small secondary text */}
            {buildLetters(INNER_TEXT, C.innerR, C.innerSize, C.innerFW, C.innerY)}
          </div>
        </div>
      </div>

      {/* spacer — pushes counter below ring */}
      <div style={{ height: '154px', flexShrink: 0 }} />

      {/* percentage counter */}
      <div style={{
        fontFamily: "'DM Sans', 'Inter', sans-serif",
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '5px',
        color: '#bbb',
        textAlign: 'center',
        opacity: phase === 'drop' ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}>
        {count}%
      </div>
    </div>
  );
}
