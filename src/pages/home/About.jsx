import Reveal from '../../components/Reveal';
import { about } from '../../data/content';
import shared from './shared.module.css';
import styles from './About.module.css';

const iconCdn = (slug) => `https://cdn.simpleicons.org/${slug}`;

const skillMeta = {
  // Forced to white — OpenJDK's default mark (#000000) is invisible on our dark pills.
  Java: { logo: iconCdn('openjdk/ffffff'), color: '#22d3ee' },
  'Spring Boot': { logo: iconCdn('springboot'), color: '#a78bfa' },
  React: { logo: iconCdn('react'), color: '#f472b6' },
  JavaScript: { logo: iconCdn('javascript'), color: '#fbbf24' },
  MySQL: { logo: iconCdn('mysql'), color: '#4ade80' },
  MongoDB: { logo: iconCdn('mongodb'), color: '#60a5fa' },
  Docker: { logo: iconCdn('docker'), color: '#fb923c' },
  Kubernetes: { logo: iconCdn('kubernetes'), color: '#f87171' },
  // Simple Icons dropped AWS's mark over trademark enforcement; devicon still hosts it.
  AWS: {
    logo: 'https://cdn.jsdelivr.net/npm/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    color: '#2dd4bf',
  },
  Python: { logo: iconCdn('python'), color: '#818cf8' },
  Git: { logo: iconCdn('git'), color: '#a3e635' },
  // Forced to white — GitHub's default mark (#181717) is invisible on our dark pills.
  GitHub: { logo: iconCdn('github/ffffff'), color: '#fb7185' },
};

function SkillPill({ name, hidden }) {
  const meta = skillMeta[name];
  return (
    <span
      className={styles.pill}
      style={{ '--pill-accent': meta.color }}
      tabIndex={hidden ? -1 : 0}
    >
      <img
        className={styles.pillLogo}
        src={meta.logo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable="false"
      />
      {name}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Reveal className={styles.intro}>
        <div className={shared.eyebrow}>About</div>
        <h2 className={shared.sectionTitle} style={{ textAlign: 'center', margin: '0 auto 24px' }}>
          About Me
        </h2>
        <div className={styles.bioCard}>
          {about.paragraphs.map((p, i) => (
            <p className={styles.paragraph} key={i}>
              {p}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>
            {about.skills.map((s) => (
              <SkillPill name={s} key={s} />
            ))}
          </div>
          <div className={styles.marqueeGroup} aria-hidden="true">
            {about.skills.map((s) => (
              <SkillPill name={s} key={s} hidden />
            ))}
          </div>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {about.highlights.map((h, i) => (
          <Reveal as="div" key={h.title} delay={i * 100} className={styles.card}>
            <div className={styles.cardIcon} aria-hidden="true">
              ◆
            </div>
            <h3 className={styles.cardTitle}>{h.title}</h3>
            <p className={styles.cardDesc}>{h.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
