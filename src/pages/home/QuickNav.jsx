import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { quickNav } from '../../data/content';
import { scrollToSection } from '../../lib/navigation';
import styles from './QuickNav.module.css';

export default function QuickNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    // Give the DOM a moment to paint the sections
    setTimeout(() => {
      quickNav.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.floatingNav} aria-label="Quick Navigation">
      {quickNav.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
          onClick={() => scrollToSection(navigate, location.pathname, item.id)}
          aria-label={item.title}
        >
          <span className={styles.label}>{item.title}</span>
          <span className={styles.dot} />
        </button>
      ))}
    </nav>
  );
}
