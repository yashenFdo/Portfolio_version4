import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { projects } from '../../data/content';
import shared from './shared.module.css';
import styles from './Projects.module.css';

const TEASER_COUNT = 3;

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <Reveal>
        <div className={shared.eyebrow}>Final Year Project</div>
        <div className={styles.featured}>
          <div
            className={styles.featuredImage}
            style={{ backgroundImage: `url(${projects.featured.image})` }}
          />
          <div className={styles.featuredBody}>
            <h3 className={styles.featuredTitle}>{projects.featured.title}</h3>
            <div className={styles.featuredDates}>{projects.featured.dates}</div>
            <p className={styles.featuredDesc}>{projects.featured.description}</p>
            <div className={styles.tags}>
              {projects.featured.tags.map((t) => (
                <span className={styles.tag} key={t}>
                  {t}
                </span>
              ))}
            </div>
            <a
              className={styles.codeBtn}
              href={projects.featured.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code →
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h3 className={styles.otherHeading}>Other Projects</h3>
        <div className={styles.grid}>
          {projects.other.slice(0, TEASER_COUNT).map((p) => (
            <div className={styles.card} key={p.title}>
              <div className={styles.cardImage} style={{ backgroundImage: `url(${p.image})` }} />
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{p.title}</h4>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span className={styles.tag} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  className={styles.codeBtn}
                  href={p.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={styles.exploreWrap}>
        <Link className={styles.exploreBtn} to="/projects">
          View More Projects →
        </Link>
      </div>
    </section>
  );
}
