import { useEffect, useState } from 'react';
import { ArrowUpIcon } from './Icons';
import styles from './BackToTop.module.css';

const SHOW_AFTER = 480;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button className={styles.button} onClick={scrollToTop} aria-label="Back to top">
      <ArrowUpIcon width={18} height={18} />
    </button>
  );
}
