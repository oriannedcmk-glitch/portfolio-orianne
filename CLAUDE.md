# Projet : Portfolio statique (remplacement du site Wix)

## Contexte

Recréer le portfolio actuellement hébergé sur Wix (https://oriannedcmk.wixsite.com/portfolio)
sous forme de site statique, afin de l'héberger gratuitement, sans publicité, avec possibilité
de domaine personnalisé.

## Objectif

- Reproduire l'esprit du site Wix actuel (mêmes sections, même ton général) — **pas** une copie
  pixel-perfect du positionnement/design.
- Site 100% statique : HTML/CSS/JS, sans backend, sans base de données, sans CMS.
- Déploiement gratuit sur GitHub Pages, Netlify ou Vercel.

## Pages à recréer

- **Accueil / Profil** — photo(s) + biographie. Contenu connu (à reformuler, pas à copier
  verbatim du site Wix) : parcours scolaire et professionnel — bac pro boulangerie-pâtisserie,
  puis bac STMG, puis BUT GEA avec une spécialisation en comptabilité (parcours GC2F), intérêt
  marqué pour la protection animale. Photos disponibles sur le site actuel.
- **Loisirs** — page dédiée. **Contenu non encore récupéré** — à extraire du site Wix actuel ou
  à fournir directement.
- **Travaux** — page portfolio/réalisations. **Contenu non encore récupéré** — idem, à extraire
  ou à fournir.
- **Contact** — email affiché en clair (visible sur le site actuel), pas besoin de vrai
  formulaire.
- **CV** — lien de téléchargement vers un fichier PDF (CV existant à récupérer et réintégrer).
- Pages légères en bas de page sur le site Wix actuel (mentions légales, politique de
  confidentialité, politique de cookies) — à recréer seulement si pertinent pour un site
  statique sans tracking.

## Contraintes techniques

- HTML/CSS/JS vanilla recommandé (site simple, peu de pages) ; pas de framework lourd
  nécessaire. Un générateur de site statique léger (Eleventy, Astro) reste envisageable si la
  structure grandit, mais pas indispensable au départ.
- Responsive obligatoire (mobile + desktop).
- Images optimisées (poids, formats modernes type WebP/AVIF) pour un chargement rapide.
- Aucune dépendance à une API externe ou à un service payant.

## Style

- S'inspirer du ton et de la structure du site Wix actuel (portfolio étudiant/professionnel,
  sobre), sans obligation de correspondance exacte des couleurs, polices ou positionnements
  précis des éléments.
- Priorité à la lisibilité et à un rendu propre sur mobile.

## Déploiement

- Cible : GitHub Pages, Netlify ou Vercel — gratuit, fiable, sans publicité, domaine personnalisé
  possible en option (achat séparé du nom de domaine).
- Pas de build complexe attendu si HTML/CSS/JS vanilla.

## À clarifier / décisions en attente

- Choix définitif de l'hébergeur (GitHub Pages vs Netlify vs Vercel).
- Contenu exact des pages "Loisirs" et "Travaux".
- Texte définitif de la biographie (reformulation, pas copie du site Wix).
- Récupération des visuels (photos, CV PDF) depuis le site Wix actuel.
- Nom de domaine personnalisé : à acheter séparément si souhaité, sinon sous-domaine gratuit
  du type `nom.github.io` / `nom.netlify.app` / `nom.vercel.app`.
