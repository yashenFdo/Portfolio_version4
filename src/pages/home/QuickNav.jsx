import { useLocation, useNavigate } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  FlaskIcon,
  CodeIcon,
  HeartHandshakeIcon,
  PenIcon,
} from '../../components/Icons';
import { scrollToSection } from '../../lib/navigation';
import { quickNav } from '../../data/content';
import styles from './QuickNav.module.css';

const NAV_ICONS = {
  experience: BriefcaseIcon,
  education: GraduationCapIcon,
  research: FlaskIcon,
  projects: CodeIcon,
  volunteering: HeartHandshakeIcon,
  writing: PenIcon,
};

export default function QuickNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {quickNav.map((item, i) => {
          const Icon = NAV_ICONS[item.id];
          return (
            <Reveal
              as="button"
              key={item.id}
              delay={(i % 3) * 80}
              className={styles.card}
              onClick={() => scrollToSection(navigate, location.pathname, item.id)}
            >
              <div className={styles.icon} aria-hidden="true">
                {Icon && <Icon width={22} height={22} />}
              </div>
              <div className={styles.body}>
                <span className={styles.eyebrow}>{item.eyebrow}</span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
