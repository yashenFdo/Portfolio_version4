import { useMemo, useState } from 'react';
import { projects } from '../data/content';
import styles from './Projects.module.css';

const allProjects = [projects.featured, ...projects.other];

export default function Projects() {
  const [tag, setTag] = useState('All');

  const tags = useMemo(() => {
    const set = new Set();
    allProjects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(
    () => (tag === 'All' ? allProjects : allProjects.filter((p) => p.tags.includes(tag))),
    [tag]
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.intro}>
        <h1 className={styles.h1}>
          All <span className={styles.accent}>Projects</span>
        </h1>
        <div className={styles.rule} />
        <p className={styles.lead}>Things I&apos;ve built, from final year research to weekend builds</p>
      </div>

      <div className={styles.filters}>
        {tags.map((t) => (
          <button
            key={t}
            className={t === tag ? styles.chipActive : styles.chip}
            onClick={() => setTag(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <div className={styles.card} key={p.title}>
              <div className={styles.image} style={{ backgroundImage: `url(${p.image})` }} />
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                {p.dates && <div className={styles.dates}>{p.dates}</div>}
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span className={styles.tag} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a className={styles.codeBtn} href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No projects match this filter.</p>
      )}
    </div>
  );
}
