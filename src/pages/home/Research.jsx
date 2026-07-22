import Reveal from '../../components/Reveal';
import { research } from '../../data/content';
import shared from './shared.module.css';
import styles from './Research.module.css';

export default function Research() {
  return (
    <section id="research" className={`${styles.section} ${styles.alt}`}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={shared.sectionTitle}>Research &amp; Publications</h2>
          <div className={styles.grid}>
            {research.map((r, i) => (
              <div className={styles.card} key={i}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${r.image})` }}
                />
                <div className={styles.body}>
                  <h3 className={styles.title}>
                    {r.title}
                    <span className={styles.extLink} aria-hidden="true">
                      ↗
                    </span>
                  </h3>
                  <div className={styles.authors}>{r.authors}</div>
                  <div className={styles.meta}>
                    {r.venue} · {r.dates} · {r.status}
                  </div>
                  <div className={styles.tags}>
                    {r.topics.map((t) => (
                      <span className={styles.tag} key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className={styles.learnMore}>Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
