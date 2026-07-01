import styles from './Footer.module.css';
import Logo from './Logo.jsx';
import { IconPhone } from './Icons.jsx';
import { footerColumns, legalLinks, socials } from '../data/navigation.js';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Contact band */}
      <div className={styles.contactBand}>
        <div className={`container ${styles.contactInner}`}>
          <div>
            <h2 className={styles.contactTitle}>Une question&nbsp;? Nous sommes là pour vous</h2>
            <p>Nos conseillers vous accompagnent du lundi au vendredi, de 8h à 18h.</p>
          </div>
          <div className={styles.contactActions}>
            <a className="btn btn--light btn--lg" href="tel:0980980990">
              <IconPhone width={18} height={18} />
              09 80 98 09 90
            </a>
            <a className="btn btn--ghost btn--lg" href="/nous-contacter/">
              Nous écrire
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={`container ${styles.main}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.brandText}>
            Groupe de protection sociale paritaire et mutualiste, au service de la santé
            et de l’avenir de 10 millions de personnes.
          </p>
          <ul className={styles.socials} aria-label="Réseaux sociaux">
            {socials.map((s) => (
              <li key={s.icon}>
                <a href={s.href} className={styles.social} aria-label={s.label}>
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.columns} aria-label="Pied de page">
          {footerColumns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h2 className={styles.columnTitle}>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Legal bar */}
      <div className={styles.legal}>
        <div className={`container ${styles.legalInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Malakoff Humanis — Réplique à but pédagogique.
          </p>
          <ul className={styles.legalLinks}>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const p = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    focusable: 'false',
    'aria-hidden': 'true',
  };
  switch (name) {
    case 'facebook':
      return (
        <svg {...p}>
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.5v8h3z" />
        </svg>
      );
    case 'x':
      return (
        <svg {...p}>
          <path d="M17.5 3h3l-6.6 7.5L22 21h-6l-4.7-6.1L5.9 21H3l7-8L2.5 3h6.2l4.2 5.6L17.5 3zm-1 16h1.7L7.6 4.8H5.8L16.5 19z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...p}>
          <path d="M6.9 8.5H4V20h2.9V8.5zM5.4 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 20v-6.3c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V8.5H10V20h2.9v-6.1c0-1.5.8-2.1 1.8-2.1 1 0 1.8.6 1.8 2.1V20H20z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...p}>
          <path d="M22 8.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7.2.2c-.4 0-1.2.1-2 .9C2.2 6.7 2 8.2 2 8.2S1.8 9.9 1.8 11.7v1.2c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.9.2 6.9.2s4.4 0 7.2-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.2c0-1.8-.2-3.5-.2-3.5zM9.9 15V9.3l4.8 2.9L9.9 15z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...p}>
          <path d="M12 8.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zM12 4c2.2 0 2.5 0 3.3.05 2 .1 3.1 1.2 3.2 3.2 0 .9.05 1.1.05 3.3s0 2.5-.05 3.3c-.1 2-1.2 3.1-3.2 3.2-.8.05-1.1.05-3.3.05s-2.5 0-3.3-.05c-2-.1-3.1-1.2-3.2-3.2C4.5 14.5 4.5 14.2 4.5 12s0-2.5.05-3.3c.1-2 1.2-3.1 3.2-3.2C8.5 4 8.8 4 11 4h1zm5.4 3.1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
        </svg>
      );
    default:
      return null;
  }
}
