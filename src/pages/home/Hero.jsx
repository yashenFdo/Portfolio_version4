import { useLocation, useNavigate } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { scrollToSection } from '../../lib/navigation';
import { profile, socialsMain } from '../../data/content';
import { SOCIAL_ICONS } from '../../components/Icons';
import styles from './Hero.module.css';

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const go = (id) => scrollToSection(navigate, location.pathname, id);

  return (
    <section id="home" className={styles.section}>
      <Reveal className={styles.copy}>
        <div className={styles.availabilityPill}>
          <span className={styles.pulseDot} />
          <span>Available for freelance & research collabs</span>
        </div>
        
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>{profile.name.split(' ')[0]}</span>
        </h1>
        <ul className={styles.tagline}>
          {profile.tagline.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <button className={styles.primaryCta} onClick={() => go('projects')}>
            View My Work <span className={styles.btnArrow}>→</span>
          </button>
          <button className={styles.secondaryCta} onClick={() => go('contact')}>
            Contact Me <span className={styles.btnArrow}>→</span>
          </button>
        </div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
        >
          Download Resume <span className={styles.resumeArrow}>↓</span>
        </a>
        <div className={styles.social}>
          {socialsMain.map((s) => {
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
                <Icon />
              </a>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={120} className={styles.portraitWrap}>
        <div className={styles.glow} />
        {profile.photo ? (
          <img className={styles.portrait} src={profile.photo} alt={profile.name} />
        ) : (
          <div className={`${styles.portrait} placeholder-stripes`}>
            <span className="placeholder-label">PORTRAIT</span>
          </div>
        )}
      </Reveal>
    </section>
  );
}
