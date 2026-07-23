import Reveal3D from '../../components/Reveal3D';
import SpotlightCard from '../../components/SpotlightCard';
import { education } from '../../data/content';
import { resolveLogoSrc } from '../../utils/avatar';
import shared from './shared.module.css';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <Reveal3D>
        <h2 className={shared.sectionTitle}>Education</h2>

        <div className={styles.timeline}>
          {[education.degree, education.hnd].map((h, i) => (
            <Reveal3D key={i} delay={i * 80}>
              <SpotlightCard className={styles.row} glowColor="rgba(99,102,241,0.10)">
                <div className={styles.logoGroup}>
                  <div className={styles.logo}>
                    <img src={resolveLogoSrc(h.logo)} alt="" loading="lazy" />
                  </div>
                  <div className={styles.dates}>{h.dates}</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.eyebrow}>Higher Education</div>
                  <h3 className={styles.title}>{h.institution}</h3>
                  <p className={styles.degree}>{h.degree}</p>
                  <p className={styles.detail}>{h.detail}</p>
                  <div className={styles.courses}>
                    {h.courses.map((c) => (
                      <span className={styles.coursePill} key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal3D>
          ))}

          <Reveal3D delay={160}>
            <SpotlightCard className={styles.row} glowColor="rgba(34,211,238,0.08)">
              <div className={styles.logoGroup}>
                <div className={styles.logo}>
                  <img src={resolveLogoSrc(education.school.logo)} alt="" loading="lazy" />
                </div>
                <div className={styles.dates}>{education.school.dates}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.eyebrow}>School Education</div>
                <h3 className={styles.title}>{education.school.institution}</h3>
                <p className={styles.degree}>{education.school.exam}</p>
                <p className={styles.detail}>{education.school.detail}</p>
              </div>
            </SpotlightCard>
          </Reveal3D>
        </div>

        <Reveal3D delay={200} className={styles.certSection}>
          <div className={styles.certLabel}>Courses &amp; Certifications</div>
          <div className={styles.certList}>
            {education.certifications.map((c, i) => (
              <Reveal3D key={c.title} delay={i * 50}>
                <SpotlightCard className={styles.certCard} glowColor="rgba(99,102,241,0.10)">
                  <div>
                    <h4 className={styles.certTitle}>{c.title}</h4>
                    <span className={styles.certProvider}>{c.provider}</span>
                  </div>
                  <span
                    className={
                      c.status === 'Completed' ? styles.statusDone : styles.statusProgress
                    }
                  >
                    {c.status}
                  </span>
                </SpotlightCard>
              </Reveal3D>
            ))}
          </div>
        </Reveal3D>
      </Reveal3D>
    </section>
  );
}
