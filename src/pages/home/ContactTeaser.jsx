import Reveal3D from '../../components/Reveal3D';
import { contact, socialsContact } from '../../data/content';
import { SOCIAL_ICONS, WhatsAppIcon, CalendarIcon, PinIcon, PhoneIcon, EmailIcon } from '../../components/Icons';
import shared from './shared.module.css';
import styles from './ContactTeaser.module.css';

export default function ContactTeaser() {
  return (
    <section id="contact" className={styles.section}>
      <Reveal3D className={styles.inner}>
        {/* Decorative glow ring */}
        <div className={styles.glowRing} aria-hidden="true" />

        <div className={styles.eyebrowRow}>
          <div className={shared.eyebrow}>Contact</div>
        </div>

        <h2 className={styles.heading}>
          Say Hii...{' '}
          <span className={styles.headingAccent}>Let&apos;s talk</span>
        </h2>

        <p className={styles.subtitle}>
          Have a project, a research idea, or just want to talk shop? My inbox is open.
        </p>

        <div className={styles.ctaRow}>
          <a
            className={styles.primaryCta}
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> WhatsApp Me
          </a>
          <a className={styles.secondaryCta} href={contact.calendarHref} target="_blank" rel="noopener noreferrer">
            <CalendarIcon /> Schedule a Meeting
          </a>
        </div>

        <div className={styles.pillRow}>
          <a className={styles.pill} href={`mailto:${contact.email}`}>
            <EmailIcon width={15} height={15} /> {contact.email}
          </a>
          <a className={styles.pill} href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
            <PhoneIcon width={15} height={15} /> {contact.phone}
          </a>
          <span className={styles.pillStatic}>
            <PinIcon width={15} height={15} /> {contact.location}
          </span>
        </div>

        <div className={styles.social}>
          {socialsContact.map((s) => {
            const Icon = SOCIAL_ICONS[s.key];
            return (
              <a
                key={s.key}
                className={styles.socialIcon}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </Reveal3D>
    </section>
  );
}
