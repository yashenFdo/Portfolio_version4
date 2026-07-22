import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { posts } from '../../data/content';
import { sortByNewest } from '../../utils/date';
import shared from './shared.module.css';
import styles from './WritingTeaser.module.css';

export default function WritingTeaser() {
  const recent = sortByNewest(posts).slice(0, 6);
  return (
    <section id="writing" className={styles.section}>
      <Reveal>
        <h2 className={shared.sectionTitle} style={{ textAlign: 'center' }}>
          Writing
        </h2>
        <p className={styles.subtitle}>
          Notes on Medium and LinkedIn about HCI, embedded systems, and research life
        </p>

        <div className={styles.grid}>
          {recent.map((b) => (
            <a className={styles.card} href={b.url} target="_blank" rel="noopener noreferrer" key={b.slug}>
              <div className={styles.image} style={{ backgroundImage: `url(${b.image})` }} />
              <div className={styles.body}>
                <div className={styles.cardMeta}>
                  <span
                    className={
                      b.platform === 'Medium' ? styles.badgeMedium : styles.badgeLinkedin
                    }
                  >
                    {b.platform}
                  </span>
                </div>
                <h3 className={styles.title}>{b.title}</h3>
                <p className={styles.excerpt}>{b.excerpt}</p>
                <span className={styles.meta}>
                  {b.date} · {b.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.moreWrap}>
          <Link className={styles.moreBtn} to="/blog">
            Read More Articles →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
