import Reveal from '../../components/Reveal';
import { education } from '../../data/content';
import { resolveLogoSrc } from '../../utils/avatar';
import shared from './shared.module.css';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <Reveal>
        <h2 className={shared.sectionTitle}>Education</h2>

        <div className={styles.timeline}>
          {[education.degree, education.hnd].map((h, i) => (
            <div className={styles.row} key={i}>
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
            </div>
          ))}

          <div className={styles.row}>
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
          </div>
        </div>

        <div className={styles.certSection}>
          <div className={styles.certLabel}>Courses &amp; Certifications</div>
          <div className={styles.certList}>
            {education.certifications.map((c) => (
              <div className={styles.certCard} key={c.title}>
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
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
