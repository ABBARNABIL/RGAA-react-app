import styles from './HomeSections.module.css';
import {
  IconHeart,
  IconShield,
  IconPiggy,
  IconClock,
  IconHome,
  IconGlobe,
  IconArrowRight,
  IconUser,
  IconBuilding,
} from './Icons.jsx';

/* ---------- Audience selector ---------- */
const audienceCards = [
  { icon: IconUser, label: 'Je suis un particulier', href: '/particuliers/' },
  { icon: IconBuilding, label: 'Je suis une entreprise', href: '/entreprises/' },
  { icon: IconShield, label: 'Je suis travailleur non salarié', href: '/particuliers/travailleur-non-salarie/' },
  { icon: IconGlobe, label: 'Je suis expatrié', href: '/particuliers/assurance-internationale/' },
];

export function Audience() {
  return (
    <section className="section" aria-labelledby="audience-title">
      <div className="container">
        <div className={styles.audienceHead}>
          <h2 id="audience-title" className="section__title">
            Que recherchez-vous&nbsp;?
          </h2>
          <p className="section__subtitle">
            Choisissez votre profil pour découvrir les solutions faites pour vous.
          </p>
        </div>
        <ul className={styles.audienceGrid}>
          {audienceCards.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a className={styles.audienceCard} href={href}>
                <span className={styles.audienceIcon}>
                  <Icon width={26} height={26} />
                </span>
                <span className={styles.audienceLabel}>{label}</span>
                <IconArrowRight width={20} height={20} className={styles.audienceArrow} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Product grid ---------- */
const products = [
  {
    icon: IconHeart,
    title: 'Mutuelle santé',
    text: 'Remboursez vos frais de santé et ceux de votre famille avec une couverture adaptée à vos besoins.',
    href: '/particuliers/mutuelle/',
  },
  {
    icon: IconShield,
    title: 'Prévoyance',
    text: 'Protégez vos proches et vos revenus en cas de coup dur : décès, accident, obsèques.',
    href: '/particuliers/prevoyance/',
  },
  {
    icon: IconPiggy,
    title: 'Épargne',
    text: 'Faites fructifier votre argent et donnez vie à vos projets avec notre assurance vie.',
    href: '/particuliers/epargne/',
  },
  {
    icon: IconClock,
    title: 'Retraite',
    text: 'Préparez, prenez et vivez votre retraite avec un accompagnement à chaque étape.',
    href: '/particuliers/retraite-complementaire-salaries/',
  },
  {
    icon: IconHome,
    title: 'Assurance emprunteur',
    text: 'Assurez votre prêt immobilier au meilleur prix et sécurisez votre achat.',
    href: '/particuliers/assurance-emprunteur/',
  },
  {
    icon: IconGlobe,
    title: 'International',
    text: 'Partez à l’étranger l’esprit tranquille avec une protection santé sur mesure.',
    href: '/particuliers/assurance-internationale/',
  },
];

export function ProductGrid() {
  return (
    <section className="section section--alt" aria-labelledby="products-title">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Nos solutions</span>
          <h2 id="products-title" className="section__title">
            Une protection pour chaque moment de votre vie
          </h2>
        </div>
        <ul className={styles.productGrid}>
          {products.map(({ icon: Icon, title, text, href }) => (
            <li key={title}>
              <article className={styles.productCard}>
                <span className={styles.productIcon}>
                  <Icon width={28} height={28} />
                </span>
                <h3 className={styles.productTitle}>{title}</h3>
                <p className={styles.productText}>{text}</p>
                <a className="link-arrow" href={href}>
                  En savoir plus
                  <span className="visually-hidden"> sur {title}</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Key figures ---------- */
const stats = [
  { value: '10 M', label: 'de personnes protégées en santé et prévoyance' },
  { value: '400 000', label: "entreprises clientes nous font confiance" },
  { value: '10 000', label: 'collaborateurs engagés à vos côtés' },
  { value: '1er', label: 'groupe de protection sociale paritaire et mutualiste' },
];

export function Stats() {
  return (
    <section className={`section ${styles.statsSection}`} aria-labelledby="stats-title">
      <div className="container">
        <h2 id="stats-title" className={styles.statsTitle}>
          Un acteur majeur de la protection sociale
        </h2>
        <dl className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- News ---------- */
const news = [
  {
    tag: 'Santé',
    date: '12 juin 2026',
    dateTime: '2026-06-12',
    title: 'Bien utiliser votre mutuelle : nos conseils pour 2026',
    href: '/actualites/bien-utiliser-sa-mutuelle/',
  },
  {
    tag: 'Retraite',
    date: '3 juin 2026',
    dateTime: '2026-06-03',
    title: 'PER : comment fonctionne le Plan d’Épargne Retraite\u00A0?',
    href: '/actualites/plan-epargne-retraite/',
  },
  {
    tag: 'Prévention',
    date: '28 mai 2026',
    dateTime: '2026-05-28',
    title: 'Bien-être au travail : 5 gestes pour préserver votre santé',
    href: '/actualites/bien-etre-au-travail/',
  },
];

export function News() {
  return (
    <section className="section section--alt" aria-labelledby="news-title">
      <div className="container">
        <div className={styles.newsHead}>
          <div>
            <span className="section__eyebrow">Actualités & conseils</span>
            <h2 id="news-title" className="section__title">
              Nos derniers articles
            </h2>
          </div>
          <a className="btn btn--ghost" href="/actualites/">
            Toutes les actualités
          </a>
        </div>
        <ul className={styles.newsGrid}>
          {news.map((n) => (
            <li key={n.title}>
              <article className={styles.newsCard}>
                <div className={styles.newsThumb} aria-hidden="true">
                  <span>{n.tag}</span>
                </div>
                <div className={styles.newsBody}>
                  <p className={styles.newsMeta}>
                    <span className={styles.newsTag}>{n.tag}</span>
                    <time dateTime={n.dateTime}>{n.date}</time>
                  </p>
                  <h3 className={styles.newsTitle}>
                    <a href={n.href}>{n.title}</a>
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Engagements ---------- */
const engagements = [
  {
    title: 'Action sociale',
    text: 'Plus de 150 M€ dédiés chaque année pour accompagner nos bénéficiaires fragilisés.',
  },
  {
    title: 'Prévention santé',
    text: 'Des programmes de prévention pour préserver votre capital santé tout au long de la vie.',
  },
  {
    title: 'Handicap & inclusion',
    text: 'Un engagement fort pour l’emploi, l’accessibilité et l’inclusion de tous.',
  },
];

export function Engagements() {
  return (
    <section className={`section ${styles.engagements}`} aria-labelledby="engagements-title">
      <div className="container">
        <div className={styles.engagementsInner}>
          <div className={styles.engagementsIntro}>
            <span className="section__eyebrow" style={{ color: 'var(--mh-coral)' }}>
              Agir ensemble
            </span>
            <h2 id="engagements-title" className={styles.engagementsTitle}>
              Un groupe à vocation sociale
            </h2>
            <p>
              Groupe de protection sociale paritaire et mutualiste à but non lucratif,
              nous réinvestissons pour protéger et accompagner celles et ceux qui en ont
              le plus besoin.
            </p>
            <a className="btn btn--light" href="/agir-ensemble/">
              Découvrir nos engagements
            </a>
          </div>
          <ul className={styles.engagementsList}>
            {engagements.map((e) => (
              <li key={e.title} className={styles.engagementItem}>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- App / client area promo ---------- */
export function AppPromo() {
  return (
    <section className="section" aria-labelledby="app-title">
      <div className="container">
        <div className={styles.appPromo}>
          <div className={styles.appContent}>
            <span className="section__eyebrow">Espace client</span>
            <h2 id="app-title" className="section__title">
              Gérez vos contrats où que vous soyez
            </h2>
            <p>
              Suivez vos remboursements, téléchargez votre carte de tiers payant et
              contactez un conseiller depuis votre Espace client ou l’application mobile.
            </p>
            <div className={styles.appCtas}>
              <a className="btn btn--lg" href="https://client.malakoffhumanis.com/">
                Accéder à mon espace
                <IconArrowRight width={18} height={18} />
              </a>
              <a className="btn btn--ghost btn--lg" href="/application-mobile/">
                Télécharger l’application
              </a>
            </div>
          </div>
          <div className={styles.appVisual} aria-hidden="true">
            <div className={styles.appPhone}>
              <div className={styles.appPhoneRow} />
              <div className={styles.appPhoneRow} />
              <div className={styles.appPhoneRowShort} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
