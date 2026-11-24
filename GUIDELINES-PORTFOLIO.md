# Guideline de réalisation : portfolio sobre (style page Notion)

Ce fichier pilote l'agent qui construit le portfolio. Lis-le en entier avant d'écrire la moindre ligne de code. La capture `portfolio.png` fournie avec ce fichier est la référence visuelle.

## 0. Ordre de priorité en cas de conflit

1. La capture `portfolio.png` (mise en page, densité, sobriété).
2. Ce fichier (tokens, contenu, règles).
3. Les skills (ils servent à bien exécuter, pas à changer la direction).

Le skill `frontend-design` pousse vers des choix audacieux et distinctifs. Ici, la distinction vient de la précision et de la retenue : espacements justes, typographie soignée, détails d'interaction nets. Pas de décor.

## 1. Skills à installer et à charger avant de commencer

```bash
npx skills add https://github.com/remotion-dev/skills --skill remotion-best-practices
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

- `frontend-design` : à lire avant de créer l'interface. Sert à la qualité d'exécution (hiérarchie typographique, rythme vertical, états hover/focus, responsive).
- `remotion-best-practices` : à lire avant de toucher au dossier `video/`. Sert uniquement à produire les courts clips des projets (voir section 7).

## 2. Objectif

Un portfolio personnel d'une seule page, calme et lisible, qui présente un développeur full-stack basé à Abidjan et ses projets. Il doit donner l'impression d'une page Notion bien tenue : beaucoup de blanc, texte net, petites cartes bordurées, onglets discrets.

Hors périmètre : animations décoratives, effets de survol spectaculaires, mascotte, confettis, préloader, dégradés, ombres marquées.

## 3. Analyse de la capture (à reproduire fidèlement)

**Cadre**

- Fond blanc, une seule colonne centrée, largeur maximale 720 px, marges latérales 24 px sur mobile.
- Aucun header de navigation visible : la page s'ouvre directement sur le titre.

**Blocs, de haut en bas**

1. Titre de page "Portfolio" : grand, gras, aligné à gauche.
2. Hero en deux colonnes : à gauche une salutation ("Hello, I'm ...") puis un court paragraphe avec quelques groupes de mots en gras, puis un petit bouton outline avec icône ; à droite une illustration au trait, monochrome.
3. Section "Skills" : onglets avec petites icônes (l'onglet actif est souligné), puis une grille de 3 colonnes sur 2 lignes de petites cartes bordurées, chacune avec une icône et un libellé.
4. Section "Projects" : onglets (actif : "Featured"), puis une grille de 2 cartes. Chaque carte : icône + titre, description sur 2 lignes, pastille de tag.

**Ton visuel**

- Texte secondaire en gris moyen, bordures grises très claires, rayon d'angle faible, aucune couleur d'accent.
- Tout est petit et dense : les cartes ont un texte de 13 à 14 px.

## 4. Design tokens

| Token | Valeur |
|---|---|
| Fond | `#FFFFFF` |
| Texte principal | `#37352F` |
| Texte secondaire | `#787774` |
| Bordure | `#E9E9E7` |
| Fond au survol | `#F7F7F5` |
| Pastille de tag | fond `#F1F1EF`, texte `#37352F` |
| Focus visible | contour 2 px `#37352F`, décalage 2 px |
| Rayon | 6 px (cartes, boutons), 4 px (pastilles) |
| Espacement | échelle de 4 px : 4, 8, 12, 16, 24, 32, 48, 64 |

**Typographie**

- Une seule famille sans-serif neutre : Inter, avec Geist en alternative. Exception assumée à la consigne anti-polices-par-défaut de `frontend-design`, car la référence demande de la neutralité.
- Titre de page : 32 à 36 px, graisse 700, interligne serré, léger crénage négatif.
- Titres de section : 20 à 22 px, graisse 600.
- Paragraphe : 15 à 16 px, interligne 1,6, maximum 60 caractères par ligne.
- Cartes : titre 14 px graisse 600, description 13 px en texte secondaire.
- Jamais de majuscules forcées ni de texte en lettres espacées.

**Icônes**

- Jeu unique en trait fin (style Lucide), 16 px, épaisseur 1,5, couleur du texte principal. Pas d'emojis dans l'interface.

## 5. Contenu (repris du portfolio actuel, en français)

Tout le texte du site est en français. Ne rien inventer : pas de chiffres, pas de témoignages, pas de logos de clients.

**Identité**

- Titre de page : "Portfolio"
- Salutation : "Bonjour, je suis Emmanuel Kacou." (alias public : satoshi0xe, à confirmer, voir section 10)
- Paragraphe, à partir du texte existant, avec ces groupes en gras : **développeur full-stack à Abidjan**, **vraies frustrations**, **produits numériques concrets**. Base : "Je transforme de vraies frustrations en produits numériques concrets : web, mobile et systèmes. Des standards internationaux, un impact local."
- Bouton outline avec icône : "Me contacter" (lien `mailto:`, voir contacts).

**Onglets "Compétences"**

- Onglet *Stack* : Laravel, React Native, React, Vue.js, Nuxt, NextJS, TailwindCSS, PostgreSQL, MySQL, Docker, Git (une carte chacun, 6 visibles puis le reste dans la grille).
- Onglet *Expertise* : APIs REST, Applications mobiles, Web en production, Systèmes avec Rust, Blockchain.
- Onglet *Langages* : PHP, JavaScript, Python (débutant). N'ajouter des langues parlées que si elles sont confirmées.

**Onglets "Projets"**

- Onglet *À la une* (2 colonnes) :
  - **Abiaty Ma News** : plateforme d'actualités et de mémoire pour le village d'Abiaty, avec temps réel et notifications push. Tags : Laravel, React Native. Statut : en cours.
  - **Genius Network Technology** : application web livrée en mission freelance, du brief à la mise en ligne. Tags : Laravel, React. Statut : en production.
  - **Coopewo** : plateforme pour une organisation coopérative, gestion des membres et présence numérique. Tags : Laravel, Vue.js. Statut : en production.
  - **Attron Cab** : plateforme numérique pour une entreprise de transport à Abidjan. Tags : Laravel, TailwindCSS. Statut : en production.
- Onglet *En cours et idées* :
  - **SANWI CONNECT** : réseau social de la communauté Sanwi. Statut : en cours.
  - **X-Connect** : réseautage pair à pair pour faible connectivité, échange de profils par QR code. Statut : concept.
  - **Rustavel** : framework web Rust inspiré de Laravel. Statut : début de projet, open source.

**Section "En ce moment"** (liste courte, texte simple) : Abiaty Ma News avec API Laravel et React Native ; Rust pour la blockchain et Rustavel.

**Contacts** (pied de page, texte simple) : email `kacouemmanuel225@yahoo.com`, WhatsApp `https://wa.me/2250757567142`, LinkedIn `https://www.linkedin.com/in/emmanuel-kacou-74397b247`, GitHub `https://github.com/satoshi0xE`.

**Règles d'écriture**

- Phrases concrètes, verbes d'action, aucun vocabulaire générique ("passionné", "solutions innovantes", "à la pointe").
- Pas de tiret long ni de tiret demi-cadratin dans les textes. Utiliser deux-points, virgules ou points.
- Copier les formulations existantes avant d'en inventer de nouvelles.

## 6. Stack technique et structure

- Framework : **Astro**, en sortie statique, sans rendu serveur.
- Déploiement : GitHub Pages à la racine (`satoshi0xe.github.io`) avec l'action officielle `withastro/action`. Définir `site: 'https://satoshi0xe.github.io'` dans `astro.config.mjs`, pas de `base`.
- Style : TailwindCSS via le plugin Vite `@tailwindcss/vite`, avec les tokens de la section 4 déclarés dans le CSS du thème.
- Composants : fichiers `.astro` pour tout ce qui est statique (hero, cartes, sections). Les onglets utilisent un petit script JavaScript sans framework, dans le composant `Tabs.astro`. Pas d'îlot React, sauf si l'agent justifie le besoin en deux lignes.
- Polices : Inter auto-hébergée avec `@fontsource-variable/inter`, pas de Google Fonts.
- Images : `astro:assets` pour l'optimisation. Les clips vidéo restent dans `public/media/`.
- Contenu : un fichier de données unique et typé (`src/content.ts`), pas de texte écrit en dur dans les composants.
- Une seule page (`src/pages/index.astro`), ancres pour les sections, aucun routeur.
- Remotion vit dans `video/` avec son propre `package.json`. Astro ne l'importe pas, et il n'est pas inclus dans le déploiement.

```
portfolio/
  src/
    content.ts           # tous les textes et projets
    components/          # Hero.astro, Tabs.astro, SkillCard.astro, ProjectCard.astro
    layouts/Base.astro
    pages/index.astro
    styles/global.css    # tokens et Tailwind
  public/media/          # clips Remotion (mp4, webm) et affiches (png)
  video/                 # projet Remotion indépendant
  astro.config.mjs
  GUIDELINES-PORTFOLIO.md
```

## 7. Usage de Remotion (limité et optionnel)

Remotion ne sert pas à animer le site. Il sert à produire de courts clips de démonstration pour les cartes de projets, exportés en fichiers vidéo légers.

**Quand l'utiliser** : seulement si de vraies captures d'écran des projets sont fournies. Sinon, ne rien produire en vidéo et garder des cartes statiques.

**Règles**

- Un clip par projet vedette, 4 à 6 secondes, 30 fps, boucle sans coupure visible.
- Rapport 16:10, 1280 x 800, sortie mp4 (H.264) et webm, moins de 1,5 Mo chacun, plus une affiche png.
- Mouvements sobres : léger zoom, défilement doux de l'écran, ressort discret. Utiliser `spring` et `interpolate` comme dans le skill, jamais de transitions CSS.
- Mêmes tokens de couleur que le site : fond blanc, cadre d'appareil gris très clair, aucune couleur vive ajoutée.
- Images référencées avec `staticFile()`, composition déclarée dans `Root.tsx`, rendu par `npx remotion render`.
- Intégration : `<video autoplay muted loop playsinline preload="none" poster="...">`, chargement différé, arrêt si le visiteur préfère moins d'animations.

## 8. Comportement et interactions

- Onglets accessibles : `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, flèches gauche et droite pour naviguer, Entrée ou Espace pour activer.
- Changement d'onglet : fondu de 150 ms, aucun déplacement.
- Survol des cartes : fond `#F7F7F5` en 120 ms, rien d'autre.
- Bouton : fond `#F7F7F5` au survol, contour renforcé au focus.
- Respecter `prefers-reduced-motion` : couper fondus et vidéos.

## 9. Qualité et critères d'acceptation

- Rendu comparé à la capture à 1280 px et à 390 px de large : mêmes blocs, même ordre, même densité.
- Lighthouse : 95 ou plus en performance, accessibilité, bonnes pratiques et SEO.
- Contraste AA minimum partout, y compris le texte secondaire.
- Aucun décalage de mise en page au chargement, polices avec repli système, `lang="fr"`, balises Open Graph.
- Aucune dépendance inutile, aucun script tiers de suivi.
- Cartes cliquables seulement si un lien réel existe.

## 10. À confirmer ou fournir (ne pas deviner)

- Nom affiché : Emmanuel Kacou, Satoshi0xE, ou un autre.
- Illustration : ne pas reproduire celle de la capture. Utiliser un emplacement avec un dessin au trait original et neutre, ou une photo si elle est fournie, marqué `TODO` dans le code.
- Captures d'écran réelles des projets (nécessaires pour les clips Remotion).
- Liens publics des projets en ligne.
- Un outil de prise de rendez-vous existe-t-il ? Sinon, le bouton reste un lien de contact.
- Langues parlées à afficher, si besoin.

## 11. Plan de travail

1. Installer les deux skills et les lire.
2. Initialiser le projet avec `npm create astro@latest`, ajouter Tailwind, poser les tokens et la typographie.
3. Construire le hero et la hiérarchie générale à partir de la capture.
4. Construire les onglets, puis la grille de compétences, puis les cartes de projets.
5. Brancher le contenu depuis `src/content.ts`.
6. Passe d'accessibilité et de responsive.
7. Si des captures sont fournies, produire les clips Remotion et les intégrer.
8. Comparer à la capture, corriger les écarts, lancer Lighthouse, livrer avec une courte liste des choix faits et des `TODO` restants.