import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../lib/navigation';
import { profile } from '../data/content';
import styles from './Nav.module.css';

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const progressRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (navRef.current) {
          navRef.current.style.boxShadow =
            window.scrollY > 8 ? '0 8px 30px rgba(0,0,0,0.45)' : 'none';
        }
        if (progressRef.current) progressRef.current.style.width = pct + '%';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [location.pathname]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goSection = (id) => {
    setMenuOpen(false);
    scrollToSection(navigate, location.pathname, id);
  };

  const goRoute = (path) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div ref={progressRef} className={styles.progress} />
      <nav ref={navRef} className={styles.nav}>
        <button className={styles.logo} onClick={() => goRoute('/')}>
          {profile.name}
        </button>

        <div className={styles.links}>
          {SECTION_LINKS.map((l) => (
            <button key={l.id} className={styles.link} onClick={() => goSection(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        <a
          className={styles.resumeBtn}
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>
          {SECTION_LINKS.map((l) => (
            <button key={l.id} className={styles.mobileLink} onClick={() => goSection(l.id)}>
              {l.label}
            </button>
          ))}
          <a className={styles.mobileLinkResume} href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      )}
    </>
  );
}
