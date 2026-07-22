import Reveal from '../../components/Reveal';
import { TrophyIcon } from '../../components/Icons';
import { resolveLogoSrc } from '../../utils/avatar';
import shared from './shared.module.css';
import styles from './TimelineSection.module.css';

export default function TimelineSection({ id, title, items, alt, collage, statBanner }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={shared.sectionTitle}>{title}</h2>

          {statBanner && (
            <div className={styles.statBanner}>
              <div className={styles.statIcon} aria-hidden="true">
                <TrophyIcon width={26} height={26} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>{statBanner.value}</span>
                <span className={styles.statLabel}>{statBanner.label}</span>
              </div>
            </div>
          )}

          {typeof collage === 'string' ? (
            <div className={styles.collage} style={{ backgroundImage: `url(${collage})` }} />
          ) : (
            collage && (
              <div className={`${styles.collage} placeholder-stripes`}>
                <span className="placeholder-label">PHOTO COLLAGE</span>
              </div>
            )
          )}

          <div className={styles.list}>
            {items.map((item, i) => (
              <div className={styles.row} key={i}>
                <div className={styles.logoGroup}>
                  <div className={styles.logo}>
                    <img src={resolveLogoSrc(item.logo)} alt="" loading="lazy" />
                  </div>
                  <div className={styles.dates}>{item.dates}</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.roleRow}>
                    <h3 className={styles.role}>{item.role}</h3>
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                  </div>
                  <div className={styles.company}>{item.company}</div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
