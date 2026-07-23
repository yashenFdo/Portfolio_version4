import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import BackToTop from './BackToTop';
import AmbientGlow from './AmbientGlow';

export default function Layout() {
  const location = useLocation();
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Custom cursor tracking
  useEffect(() => {
    let rafId = null;
    let tx = -100, ty = -100;
    let x = tx, y = ty;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      // dot follows instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    // Hide default cursor on desktop
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `@media (hover: hover) { body { cursor: none !important; } a, button { cursor: none !important; } }`;
    document.head.appendChild(style);

    const onEnterLink = () => cursorRef.current?.classList.add('cursor-hover');
    const onLeaveLink = () => cursorRef.current?.classList.remove('cursor-hover');
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button')) onEnterLink();
      else onLeaveLink();
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
      document.getElementById('custom-cursor-style')?.remove();
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
      {/* Ambient glow layer — behind everything */}
      <AmbientGlow />

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        id="cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(34,211,238,0.6)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.3s, height 0.3s, background 0.3s, border-color 0.3s',
          mixBlendMode: 'normal',
          willChange: 'transform',
        }}
      />
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />

      {/* Add hover cursor expansion via global style */}
      <style>{`
        #cursor-ring.cursor-hover {
          width: 56px !important;
          height: 56px !important;
          background: rgba(34,211,238,0.08) !important;
          border-color: rgba(34,211,238,0.9) !important;
        }
        @media (hover: none) {
          #cursor-ring, #cursor-ring + div { display: none; }
        }
      `}</style>

      <Nav />
      <div key={location.pathname} className="route-fade" style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
