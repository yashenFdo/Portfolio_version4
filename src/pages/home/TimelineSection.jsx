import Reveal3D from '../../components/Reveal3D';
import SpotlightCard from '../../components/SpotlightCard';
import { TrophyIcon } from '../../components/Icons';
import { resolveLogoSrc } from '../../utils/avatar';
import shared from './shared.module.css';
import styles from './TimelineSection.module.css';

function StatBannerCard({ value, label }) {
  const parts = label.split(' · ');
  const mainLabel = parts[0] || label;
  const subLabel = parts[1] || '';
  const [years, status] = subLabel.split(', ');

  return (
    <SpotlightCard className={styles.statCard} glowColor="rgba(34,211,238,0.15)">
      <div className={styles.statCardInner}>
        <div className={styles.statCardHeader}>
          <div className={styles.statCardNumberContainer}>
            <span className={styles.statCardNumber}>{value}</span>
            <div className={styles.statPulseRing}>
              <div className={styles.statPulseDot} />
            </div>
          </div>
          <div className={styles.statCardIcon}>
            <TrophyIcon width={28} height={28} />
          </div>
        </div>
        
        <div className={styles.statCardBody}>
          <p className={styles.statCardLabel}>{mainLabel}</p>
          <div className={styles.statCardBadges}>
            {years && <span className={styles.statCardBadge}>{years}</span>}
            {status && (
              <span className={`${styles.statCardBadge} ${styles.statCardBadgePulse}`}>
                <span className={styles.pulseDot} />
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function TimelineSection({ id, title, items, alt, collage, statBanner }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className={styles.inner}>
        <Reveal3D>
          <h2 className={shared.sectionTitle}>{title}</h2>

          {statBanner && (
            <Reveal3D delay={80}>
              <StatBannerCard value={statBanner.value} label={statBanner.label} />
            </Reveal3D>
          )}

          {typeof collage === 'string' ? (
            <div className={styles.collageWrap}>
              <div className={styles.collage} style={{ backgroundImage: `url(${collage})` }} />
            </div>
          ) : (
            collage && (
              <div className={styles.collageWrap}>
                <div className={`${styles.collage} placeholder-stripes`}>
                  <span className="placeholder-label">PHOTO COLLAGE</span>
                </div>
              </div>
            )
          )}

          <div className={styles.list}>
            {items.map((item, i) => (
              <Reveal3D key={i} delay={i * 60}>
                <SpotlightCard className={styles.row} glowColor="rgba(99,102,241,0.10)">
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
                </SpotlightCard>
              </Reveal3D>
            ))}
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
