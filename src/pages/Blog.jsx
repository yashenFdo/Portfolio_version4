import { useMemo, useState } from 'react';
import { posts } from '../data/content';
import styles from './Blog.module.css';

const PAGE_SIZE = 6;
const PLATFORMS = ['All', ...new Set(posts.map((p) => p.platform))];
const TOPICS = ['All', ...new Set(posts.map((p) => p.topic))];

export default function Blog() {
  const [platform, setPlatform] = useState('All');
  const [topic, setTopic] = useState('All');
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      posts.filter(
        (p) =>
          (platform === 'All' || p.platform === platform) &&
          (topic === 'All' || p.topic === topic)
      ),
    [platform, topic]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const paged = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const selectPlatform = (p) => {
    setPlatform(p);
    setPage(0);
  };

  const selectTopic = (t) => {
    setTopic(t);
    setPage(0);
  };

  const selectPage = (n) => {
    setPage(n);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.intro}>
        <h1 className={styles.h1}>
          All <span className={styles.accent}>Articles</span>
        </h1>
        <div className={styles.rule} />
        <p className={styles.lead}>
          Writing on Medium and LinkedIn about HCI, embedded systems, and research life
        </p>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterRow}>
          {PLATFORMS.map((p) => (
            <button
              key={p}
              className={p === platform ? styles.chipActive : styles.chip}
              onClick={() => selectPlatform(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <div className={styles.filterRowSmall}>
          {TOPICS.map((t) => (
            <button
              key={t}
              className={t === topic ? styles.subChipActive : styles.subChip}
              onClick={() => selectTopic(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {paged.length > 0 ? (
        <div className={styles.grid}>
          {paged.map((b) => (
            <a className={styles.card} href={b.url} target="_blank" rel="noopener noreferrer" key={b.slug}>
              <div className={styles.image} style={{ backgroundImage: `url(${b.image})` }} />
              <div className={styles.body}>
                <div className={styles.cardMeta}>
                  <span className={b.platform === 'Medium' ? styles.badgeMedium : styles.badgeLinkedin}>
                    {b.platform}
                  </span>
                  <span className={styles.topic}>{b.topic}</span>
                </div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.excerpt}>{b.excerpt}</p>
                <span className={styles.meta}>
                  {b.date} · {b.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No articles match these filters.</p>
      )}

      <div className={styles.pagination}>
        <button
          className={styles.pageBtn}
          disabled={safePage === 0}
          onClick={() => selectPage(Math.max(0, safePage - 1))}
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={i === safePage ? styles.pageBtnActive : styles.pageBtn}
            onClick={() => selectPage(i)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={styles.pageBtn}
          disabled={safePage >= totalPages - 1}
          onClick={() => selectPage(Math.min(totalPages - 1, safePage + 1))}
        >
          →
        </button>
      </div>
    </div>
  );
}
