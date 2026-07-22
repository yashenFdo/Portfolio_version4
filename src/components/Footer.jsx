import { useLocation, useNavigate } from 'react-router-dom';
import { backToTop, scrollToSection } from '../lib/navigation';
import { profile, footerBlurb, socialsFooter } from '../data/content';
import { SOCIAL_ICONS } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (id) => scrollToSection(navigate, location.pathname, id);

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brandName}>{profile.name}</div>
          <p className={styles.brandBlurb}>{footerBlurb}</p>
        </div>

        <div>
          <div className={styles.colTitle}>Explore</div>
          <div className={styles.colLinks}>
            <button className={styles.colLink} onClick={() => goSection('about')}>
              About
            </button>
            <button className={styles.colLink} onClick={() => goSection('experience')}>
              Experience
            </button>
            <button className={styles.colLink} onClick={() => goSection('projects')}>
              Projects
            </button>
            <button className={styles.colLink} onClick={() => goSection('writing')}>
              Writing
            </button>
            <button className={styles.colLink} onClick={() => goSection('research')}>
              Research
            </button>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Connect</div>
          <div className={styles.social}>
            {socialsFooter.map((s) => {
              const Icon = SOCIAL_ICONS[s.key];
              return (
                <a
                  key={s.key}
                  className={styles.socialIcon}
                  href={s.href}
                  target={s.key === 'email' ? undefined : '_blank'}
                  rel={s.key === 'email' ? undefined : 'noreferrer'}
                  aria-label={s.label}
                >
                  <Icon width={16} height={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.meta}>© 2026 {profile.name}.</span>
        <button className={styles.backToTop} onClick={backToTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
