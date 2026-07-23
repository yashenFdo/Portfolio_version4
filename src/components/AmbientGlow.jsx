import { useEffect, useRef } from 'react';

/**
 * AmbientGlow — two soft radial gradient orbs that gently follow the mouse.
 * Renders as a fixed, pointer-events-none overlay behind all content.
 */
export default function AmbientGlow() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let rafId = null;
    let tx1 = window.innerWidth * 0.25, ty1 = window.innerHeight * 0.3;
    let tx2 = window.innerWidth * 0.75, ty2 = window.innerHeight * 0.7;
    let x1 = tx1, y1 = ty1, x2 = tx2, y2 = ty2;

    const onMove = (e) => {
      tx1 = e.clientX - 300;
      ty1 = e.clientY - 300;
      tx2 = e.clientX + 200;
      ty2 = e.clientY + 200;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      x1 = lerp(x1, tx1, 0.06);
      y1 = lerp(y1, ty1, 0.06);
      x2 = lerp(x2, tx2, 0.04);
      y2 = lerp(y2, ty2, 0.04);

      if (orb1.current) {
        orb1.current.style.transform = `translate(${x1}px, ${y1}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${x2}px, ${y2}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Primary glow — follows mouse closely */}
      <div
        ref={orb1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(34,211,238,0.12) 40%, transparent 70%)',
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />
      {/* Secondary glow — lags behind for depth */}
      <div
        ref={orb2}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.14) 0%, rgba(56,189,248,0.10) 40%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
      {/* Static bottom-right accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
