# RGAA – Malakoff Humanis (réplique React)

Réplique **accessible** de la page d'accueil de [malakoffhumanis.com](https://www.malakoffhumanis.com/),
construite avec **React + Vite**. Le projet met l'accent sur la conformité
**RGAA / WCAG 2.1 AA** (le référentiel français d'accessibilité).

> ⚠️ Projet à but pédagogique. Marque, contenus et liens appartiennent à
> Malakoff Humanis ; aucun asset propriétaire n'est copié (logo et visuels
> recréés en SVG/CSS).

## Démarrage

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Stack

- **React 18** + **Vite 5**
- **CSS Modules** + variables CSS (design tokens) — pas de librairie UI, pour
  garder la maîtrise du markup et de l'accessibilité.

## Structure

```
src/
  main.jsx                 Point d'entrée
  App.jsx                  Assemblage de la page
  index.css                Reset, tokens de marque, styles a11y, boutons
  data/navigation.js       Modèle de navigation (méga-menu, footer) issu du site
  components/
    SkipLink.jsx           Lien d'évitement (RGAA 12.7)
    Logo.jsx               Logo recréé en SVG
    Icons.jsx              Jeu d'icônes SVG décoratives
    Header.jsx             En-tête + méga-menu accessible (+ .module.css)
    Hero.jsx               Carrousel d'offres accessible (+ .module.css)
    HomeSections.jsx       Profils, solutions, chiffres, actualités,
                           engagements, espace client (+ .module.css)
    Footer.jsx             Pied de page + mentions légales (+ .module.css)
```

## Contenu répliqué

- **En-tête** : barre de profils (Particuliers, Entreprises, Agir ensemble,
  Nous connaître), méga-menu (Santé, Prévoyance, Épargne, Retraite, Assurance
  emprunteur, International), recherche, Espace client.
- **Carrousel** : offres du moment (−50 % santé, 150 € offerts épargne, devis
  mutuelle entreprise).
- **Sections** : sélecteur de profil, grille de solutions, chiffres clés,
  actualités, engagements du groupe, promotion de l'Espace client.
- **Pied de page** : bandeau contact, colonnes de liens, réseaux sociaux,
  mentions légales.

## Accessibilité (RGAA)

- `lang="fr"`, structure sémantique avec points de repère (`header`, `main`,
  `nav`, `footer`).
- Lien d'évitement vers le contenu principal.
- Méga-menu en pattern *disclosure* : `aria-expanded` / `aria-controls`,
  fermeture avec `Échap`, clic extérieur ; le contenu masqué n'est pas
  focusable (`hidden`).
- Carrousel : `aria-roledescription`, boutons précédent/suivant, pause/lecture,
  pastilles avec `aria-current`, arrêt au survol/focus, respect de
  `prefers-reduced-motion`.
- Modules tiers (TrustCommander, contact, chat, modales, panneaux, onglets,
  sélecteurs Oui/Non) : exiger des libellés accessibles, rôles/états ARIA,
  gestion du focus et masquage des contenus inactifs équivalents aux composants
  internes avant intégration en production.
- Focus visible renforcé (`:focus-visible`), contrastes AA, cibles ≥ 40 px,
  textes alternatifs et libellés explicites.
