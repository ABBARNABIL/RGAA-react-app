import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { IconArrowRight } from './Icons.jsx';

const slides = [
  {
    id: 'seniors',
    eyebrow: 'Le mois des seniors',
    title: 'Des offres exclusives dédiées aux seniors',
    text: "Du 1er au 30 juin, profitez d'offres en santé, prévoyance et épargne, pour une protection complète et avantageuse.",
    note: 'Offre soumise à conditions. Voir le détail sur chaque contrat.',
    primary: { label: 'Découvrir les offres', href: '/particuliers/mutuelle/offres-seniors/' },
    secondary: { label: 'Faire un devis', href: '/particuliers/mutuelle/' },
  },
  {
    id: 'sante',
    eyebrow: 'Santé · Nouveaux clients',
    title: 'Votre santé mérite la meilleure protection',
    text: 'Souscrivez au Pack Santé Particuliers et bénéficiez de -50 % sur 2 mois de cotisations santé.',
    note: 'Offre réservée aux nouveaux clients santé individuelle.',
    primary: { label: "J'en profite", href: '/particuliers/mutuelle/' },
    secondary: { label: 'Découvrir le Pack Santé', href: '/particuliers/mutuelle/psp-famille/' },
  },
  {
    id: 'epargne',
    eyebrow: 'Épargne · Offre de bienvenue',
    title: "Préparez l'avenir, jusqu'à 150 € offerts",
    text: "Pour votre première souscription à l'assurance vie Actépargne2 ou au PER LFM PER'FORM. Code BIENVENUE2026.",
    note: "La valeur des unités de compte n'est pas garantie et peut varier.",
    primary: { label: "Je découvre l'offre", href: '/particuliers/epargne/' },
    secondary: { label: 'Assurance vie', href: '/particuliers/epargne/actepargne/' },
  },
];

const AUTOPLAY_MS = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [autoplaySuspended, setAutoplaySuspended] = useState(false);
  const regionRef = useRef(null);
  const count = slides.length;
  const autoplayActive = autoplayEnabled && !autoplaySuspended;

  const go = (i) => setIndex((i + count) % count);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplayActive || reduced) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplayActive, count]);

  const slide = slides[index];

  return (
    <section
      ref={regionRef}
      className={styles.hero}
      aria-roledescription="carrousel"
      aria-label="Nos offres du moment"
      onMouseEnter={() => setAutoplaySuspended(true)}
      onMouseLeave={() => setAutoplaySuspended(false)}
      onFocusCapture={() => setAutoplaySuspended(true)}
      onBlurCapture={(e) => {
        if (!regionRef.current?.contains(e.relatedTarget)) setAutoplaySuspended(false);
      }}
    >
      <div className={styles.blob} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div
          id="hero-carousel-slide"
          className={styles.slide}
          role="group"
          aria-roledescription="diapositive"
          aria-label={`Diapositive ${index + 1} sur ${count} : ${slide.title}`}
          aria-live={autoplayActive ? 'off' : 'polite'}
          aria-atomic="true"
          key={slide.id}
        >
          <p className={styles.eyebrow}>{slide.eyebrow}</p>
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={styles.text}>{slide.text}</p>
          <div className={styles.ctas}>
            <a className="btn btn--lg" href={slide.primary.href}>
              {slide.primary.label}
              <IconArrowRight width={18} height={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href={slide.secondary.href}>
              {slide.secondary.label}
            </a>
          </div>
          <p className={styles.note}>{slide.note}</p>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => go(index - 1)}
          >
            <span aria-hidden="true">‹</span>
            <span className="visually-hidden">Diapositive précédente</span>
          </button>

          <div className={styles.dots} role="group" aria-label="Choisir une diapositive">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-current={i === index ? 'true' : undefined}
                aria-controls="hero-carousel-slide"
                aria-label={`Aller à la diapositive ${i + 1} sur ${count} : ${s.eyebrow}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={() => go(index + 1)}
          >
            <span aria-hidden="true">›</span>
            <span className="visually-hidden">Diapositive suivante</span>
          </button>

          <button
            type="button"
            className={styles.playPause}
            onClick={() => setAutoplayEnabled((enabled) => !enabled)}
            aria-pressed={autoplayEnabled}
            aria-label={
              autoplayEnabled
                ? 'Désactiver la lecture automatique du carrousel'
                : 'Activer la lecture automatique du carrousel'
            }
          >
            <span aria-hidden="true">{autoplayEnabled ? '❚❚' : '►'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
