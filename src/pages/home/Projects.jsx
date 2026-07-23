import { Link } from 'react-router-dom';
import Reveal3D from '../../components/Reveal3D';
import SpotlightCard from '../../components/SpotlightCard';
import { projects } from '../../data/content';
import shared from './shared.module.css';
import styles from './Projects.module.css';

const TEASER_COUNT = 3;

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <Reveal3D>
        <div className={shared.eyebrow}>Final Year Project</div>
        <div className={styles.featured} onMouseMove={(e) => {
          const el = e.currentTarget;
          const rect = el.getBoundingClientRect();
          el.style.setProperty('--fx', `${e.clientX - rect.left}px`);
          el.style.setProperty('--fy', `${e.clientY - rect.top}px`);
          el.style.setProperty('--fo', '1');
        }} onMouseLeave={(e) => e.currentTarget.style.setProperty('--fo', '0')}>
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
              View Code <span className={styles.btnArrow}>→</span>
            </a>
          </div>
        </div>
      </Reveal3D>

      <Reveal3D delay={100}>
        <h3 className={styles.otherHeading}>Other Projects</h3>
        <div className={styles.grid}>
          {projects.other.slice(0, TEASER_COUNT).map((p, i) => (
            <Reveal3D key={p.title} delay={i * 80}>
              <SpotlightCard className={styles.card} glowColor="rgba(34,211,238,0.13)">
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
                    View Code <span className={styles.btnArrow}>→</span>
                  </a>
                </div>
              </SpotlightCard>
            </Reveal3D>
          ))}
        </div>
      </Reveal3D>

      <div className={styles.exploreWrap}>
        <Link className={styles.exploreBtn} to="/projects">
          View More Projects <span className={styles.btnArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
