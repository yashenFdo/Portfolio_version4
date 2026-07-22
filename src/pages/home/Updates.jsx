import Reveal from '../../components/Reveal';
import { updates } from '../../data/content';
import shared from './shared.module.css';
import styles from './Updates.module.css';

export default function Updates() {
  return (
    <section id="updates" className={styles.section}>
      <Reveal>
        <h2 className={shared.sectionTitle}>Latest Updates</h2>
        <div className={styles.list}>
          {updates.map((u, i) => (
            <div className={styles.row} key={i}>
              <div className={styles.date}>{u.date}</div>
              <div>
                <span className={styles.tag}>{u.tag}</span>
              </div>
              <p className={styles.text}>{u.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
