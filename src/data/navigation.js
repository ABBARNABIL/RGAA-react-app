/**
 * Navigation model for the Malakoff Humanis homepage replica.
 * Mirrors the structure scraped from malakoffhumanis.com (Drupal "smile" theme).
 * Links are kept as the real site paths for fidelity.
 */

export const audiences = [
  { id: 'particuliers', label: 'Particuliers', href: '/particuliers/' },
  { id: 'entreprises', label: 'Entreprises', href: '/entreprises/' },
  { id: 'independants', label: 'Indépendants', href: '/independants/' },
];

export const utilityLinks = [
  { id: 'agir', label: 'Agir ensemble', href: '/agir-ensemble/' },
  { id: 'connaitre', label: 'Nous connaître', href: '/groupe/' },
  { id: 'aide', label: 'Aide & contact', href: '/nous-contacter/' },
];

/** Main mega menu, shown for the "Particuliers" audience by default. */
export const mainMenu = [
  {
    id: 'sante',
    label: 'Santé',
    href: '/particuliers/mutuelle/',
    columns: [
      {
        title: 'Nos mutuelles',
        items: [
          { label: 'Mutuelle seniors', href: '/particuliers/mutuelle/offres-seniors/' },
          { label: 'Mutuelle familles', href: '/particuliers/mutuelle/psp-famille/' },
          { label: 'Mutuelle jeunes', href: '/particuliers/mutuelle/psp-jeunes/' },
          { label: 'Accompagnement', href: '/particuliers/services/' },
        ],
      },
    ],
    featured: {
      title: 'Pack Santé Particuliers',
      text: 'Nouveau client ? Profitez de -50 % sur 2 mois de cotisations.',
      cta: { label: "J'en profite", href: '/particuliers/mutuelle/' },
    },
  },
  {
    id: 'prevoyance',
    label: 'Prévoyance',
    href: '/particuliers/prevoyance/',
    columns: [
      {
        title: 'Se protéger',
        items: [
          { label: 'Assurance accident de la vie', href: '/particuliers/prevoyance/assurance-blessures/offre-protection-blessures/' },
          { label: 'Assurance décès', href: '/particuliers/prevoyance/assurance-deces/' },
          { label: 'Assurance obsèques', href: '/particuliers/prevoyance/assurance-obseques/' },
          { label: 'Assurance rapatriement de corps', href: '/particuliers/prevoyance/retraites/rapatriement-de-corps/' },
          { label: 'Accompagnement', href: '/particuliers/services/' },
        ],
      },
    ],
  },
  {
    id: 'epargne',
    label: 'Épargne',
    href: '/particuliers/epargne/',
    columns: [
      {
        title: 'Faire fructifier',
        items: [
          { label: 'Assurance vie', href: '/particuliers/epargne/actepargne/' },
          { label: "Plan d'Épargne Retraite Individuel", href: '/particuliers/epargne/peri-lfm/' },
        ],
      },
    ],
    featured: {
      title: 'Offre de bienvenue',
      text: "Jusqu'à 150 € offerts pour votre 1re souscription. Code BIENVENUE2026.",
      cta: { label: 'Je découvre', href: '/particuliers/epargne/' },
    },
  },
  {
    id: 'retraite',
    label: 'Retraite complémentaire',
    href: '/particuliers/retraite-complementaire-salaries/',
    columns: [
      {
        title: 'Ma retraite',
        items: [
          { label: 'Préparer sa retraite', href: '/particuliers/retraite-complementaire-salaries/' },
          { label: 'Retraités', href: '/particuliers/retraite-complementaire-retraites/' },
          { label: 'Prendre & vivre sa retraite', href: '/tag/prendre-et-vivre-sa-retraite/' },
        ],
      },
    ],
  },
  {
    id: 'emprunteur',
    label: 'Assurance emprunteur',
    href: '/particuliers/assurance-emprunteur/',
    columns: [
      {
        title: 'Emprunter sereinement',
        items: [
          { label: 'Assurance emprunteur', href: '/particuliers/assurance-emprunteur/assurance-pret-immobilier/' },
          { label: 'Simulation de prêt immobilier', href: '/particuliers/assurance-emprunteur/simulation-assurance-pret-immobilier/' },
        ],
      },
    ],
  },
  {
    id: 'international',
    label: 'International',
    href: '/particuliers/assurance-internationale/',
    columns: [
      {
        title: 'Expatriation',
        items: [
          { label: 'Offre en complément CFE', href: '/particuliers/international/pack-expat-cfe-particulier/' },
          { label: 'Offre au 1er euro', href: '/particuliers/international/pack-expat-individuel-premier-euro/' },
          { label: 'Offre senior', href: '/particuliers/international/pack-expat-cfe-seniors/' },
          { label: 'Offre Suisse', href: '/particuliers/international/pack-expat-individuel-suisse/' },
          { label: 'Retraite complémentaire expatrié', href: '/particuliers/international/retraite-complementaire-expatrie/' },
        ],
      },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Particuliers',
    links: [
      { label: 'Mutuelle santé', href: '/particuliers/mutuelle/' },
      { label: 'Prévoyance', href: '/particuliers/prevoyance/' },
      { label: 'Épargne', href: '/particuliers/epargne/' },
      { label: 'Retraite complémentaire', href: '/particuliers/retraite-complementaire-salaries/' },
      { label: 'Assurance emprunteur', href: '/particuliers/assurance-emprunteur/' },
    ],
  },
  {
    title: 'Entreprises',
    links: [
      { label: "Mutuelle d'entreprise", href: '/entreprises/mutuelle-entreprise/' },
      { label: 'Prévoyance collective', href: '/entreprises/prevoyance/' },
      { label: 'Épargne salariale', href: '/entreprises/epargne/' },
      { label: 'PER Collectif', href: '/entreprises/epargne/per-collectif-perco/' },
      { label: 'International', href: '/entreprises/mutuelle-expatrie/' },
    ],
  },
  {
    title: 'Le groupe',
    links: [
      { label: 'Nous connaître', href: '/groupe/' },
      { label: 'Agir ensemble', href: '/agir-ensemble/' },
      { label: 'Nos engagements', href: '/groupe/engagements/' },
      { label: 'Recrutement', href: '/groupe/recrutement/' },
      { label: 'Espace presse', href: '/groupe/presse/' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Nous contacter', href: '/nous-contacter/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Trouver une agence', href: '/agences/' },
      { label: 'Espace client', href: 'https://client.malakoffhumanis.com/' },
      { label: 'Déclarer un sinistre', href: '/sinistre/' },
    ],
  },
];

export const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales/' },
  { label: 'Données personnelles', href: '/donnees-personnelles/' },
  { label: 'Cookies', href: '/cookies/' },
  { label: 'Accessibilité : partiellement conforme', href: '/accessibilite/' },
  { label: 'Plan du site', href: '/plan-du-site/' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/malakoffhumanis', icon: 'facebook' },
  { label: 'X (Twitter)', href: 'https://twitter.com/malakoffhumanis', icon: 'x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/malakoff-humanis', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/malakoffhumanis', icon: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/malakoffhumanis', icon: 'instagram' },
];
