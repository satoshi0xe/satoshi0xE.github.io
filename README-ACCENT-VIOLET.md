# README : intégrer l'accent violet dans le design actuel

Ce document s'adresse à l'agent qui a construit le portfolio (Astro + Tailwind, style page Notion). Il décrit exactement où et comment ajouter la couleur violette, quelles micro-animations ajouter au survol, et comment vérifier le résultat.

Lis aussi `GUIDELINES-PORTFOLIO.md`, qui reste la référence pour la mise en page, le contenu et la typographie.

## 1. Périmètre

**Ce que tu fais** : ajouter une couleur d'accent, des états (survol, focus, actif) et de courtes transitions.

**Ce que tu ne changes pas** : la mise en page, les marges, les tailles et graisses de police, les textes, les icônes choisies, l'ordre des blocs, les images. La page doit rester identique au pixel près, hors couleurs et états. Si un changement de couleur décale quoi que ce soit, c'est un bug à corriger.

## 2. Principe directeur

Le design est blanc et gris. Le violet n'apparaît que pour dire "ceci est actif" ou "ceci réagit à toi". Il ne décore jamais.

Budget : **cinq emplacements éditoriaux** (onglet actif, focus clavier, bouton et liens, pastille "En production", icônes de cartes au survol). S'y ajoutent trois éléments transversaux : la sélection de texte, la couleur de la barre du navigateur mobile, et l'illustration de l'avatar (qui contient déjà `#5B3FD9`, ne pas la recolorer).

## 3. Tokens

À déclarer une seule fois dans `src/styles/global.css`. Aucune valeur hexadécimale ne doit apparaître ailleurs dans les composants.

```css
:root {
  --accent: #5B3FD9;
  --accent-hover: #4A31B8;
  --accent-soft: #F1EEFC;
  --accent-line: #9B8CDF;      /* bordure intermédiaire, survol des cartes seulement */
  --accent-select: #E1DCF8;    /* sélection de texte */

  --text: #37352F;
  --text-2: #6B6A66;           /* remplace #787774, voir correction ci-dessous */
  --border: #E9E9E7;
  --hover: #F7F7F5;
  --tag: #F1F1EF;

  --t-fast: 120ms;
  --t-base: 180ms;
  --t-tab: 200ms;
  --t-slow: 300ms;
  --ease: cubic-bezier(.2, 0, 0, 1);
}
```

Dans Tailwind, expose ces variables dans le thème (`--color-accent`, `--color-accent-soft`, etc.) pour utiliser des classes comme `text-accent` ou `border-accent-line`, sans jamais écrire d'hexadécimal dans un composant.

**Correction obligatoire du gris secondaire.** L'ancienne valeur `#787774` donne 4,48:1 sur blanc, soit sous le seuil AA de 4,5:1, et 4,17:1 sur `#F7F7F5`. Remplace-la partout par `#6B6A66` (5,41:1 sur blanc, 5,05:1 sur `#F7F7F5`, 4,79:1 sur `#F1F1EF`).

## 4. Carte des emplacements, élément par élément

Toutes les transitions portent sur `color`, `background-color`, `border-color`, `text-decoration-color`, `opacity` ou `transform`, jamais sur `all`.

### 4.1 Bouton "Me contacter"

| État | Rendu |
|---|---|
| Repos | Fond blanc, bordure `--border`, texte `--text`, icône enveloppe `--text` |
| Survol | Fond `--hover`, bordure `--accent`, icône `--accent`, texte inchangé |
| Focus clavier | Contour 2 px `--accent`, décalage 2 px |
| Pressé | Fond `--accent-soft`, bordure `--accent` |
| Transition | `--t-fast` sur fond, bordure, couleur |

Aucun déplacement ni changement d'échelle.

### 4.2 Liens texte (GitHub, LinkedIn, email)

| État | Rendu |
|---|---|
| Repos | Texte `--text-2`, soulignement transparent, `text-underline-offset: 3px` |
| Survol | Texte `--accent-hover`, soulignement 1 px visible en `currentColor` |
| Focus clavier | Contour 2 px `--accent`, décalage 2 px |
| Visité | Identique au repos |
| Transition | `--t-fast` sur couleur et `text-decoration-color` |

### 4.3 Onglets (Stack, Expertise, Langages, À la une, En cours et idées)

| État | Rendu |
|---|---|
| Inactif, repos | Texte et icône `--text-2` |
| Inactif, survol | Texte `--text`, icône `--text`. Pas de violet : il est réservé à l'onglet actif |
| Actif | Texte et icône `--accent`, souligné par l'indicateur de 2 px en `--accent` |
| Focus clavier | Contour 2 px `--accent`, décalage de -2 px (à l'intérieur) |
| Transition | `--t-fast` sur la couleur du texte |

Règles :
- La graisse de police ne change pas entre actif et inactif. Un changement de graisse décale les onglets voisins.
- L'indicateur est **un seul élément** qui glisse d'un onglet à l'autre. Il est positionné en absolu sous la barre, anime uniquement `transform` (translateX et scaleX, origine à gauche) en `--t-tab` avec `--ease`. Au premier affichage, il se place sans animation. Il se recalcule au redimensionnement.
- Le panneau de contenu change avec un fondu d'opacité de 150 ms, sans déplacement.
- Le survol des onglets inactifs ne montre pas de soulignement fantôme.
- `aria-selected="true"` doit toujours accompagner l'onglet actif : la couleur n'est pas le seul signal.

### 4.4 Cartes de compétences

| État | Rendu |
|---|---|
| Repos | Fond blanc, bordure `--border`, texte `--text`, icône `--text-2` |
| Survol | Fond `--hover`, bordure `--accent-line`, icône `--accent` |
| Transition | `--t-fast` |

Ces cartes ne sont pas des liens : pas de curseur main, pas de `tabindex`, pas de contour de focus.

### 4.5 Cartes de projets

| État | Carte sans lien | Carte avec lien |
|---|---|---|
| Repos | Fond blanc, bordure `--border`, icône du titre `--text-2` | Identique |
| Survol | Bordure `--accent-line`, icône du titre `--accent` | Idem, plus la flèche et le zoom ci-dessous |
| Image | Inchangée | Zoom `scale(1.02)` sur l'image, conteneur en `overflow: hidden`, `--t-slow` |
| Flèche ↗ | Absente | Icône flèche en haut à droite (16 px, `--accent`), opacité 0 puis 1 et déplacement de -2 px en x et +2 px en y vers sa place, `--t-base` |
| Curseur | Normal | Main |
| Focus clavier | Aucun | Contour 2 px `--accent`, décalage 2 px, flèche visible |

Une carte sans lien réel ne doit jamais ressembler à un lien. Ne branche la flèche et le zoom que sur les cartes qui ont une URL.

### 4.6 Pastilles

| Pastille | Rendu |
|---|---|
| Tags techniques (Laravel, React, React Native, etc.) | Fond `--tag`, texte `--text`. Aucun violet |
| "En production" | Fond `--accent-soft`, texte `--accent` |
| "En cours", "Concept", "Début de projet" | Fond `--tag`, texte `--text`. Aucun violet |

Pas de survol sur les pastilles.

### 4.7 Éléments transversaux

| Élément | Règle |
|---|---|
| Focus clavier global | `:focus-visible` en contour 2 px `--accent`, décalage 2 px, sur tout élément interactif. Aucun `outline: none` sans remplaçant |
| Sélection de texte | `::selection` fond `--accent-select`, texte `--text` (contraste 9,22:1) |
| Barre du navigateur mobile | `<meta name="theme-color" content="#5B3FD9">` dans `Base.astro` |
| Avatar | Ne pas modifier. Le SVG contient déjà l'accent |

## 5. Animations : règles communes

1. **Propriétés autorisées** : `color`, `background-color`, `border-color`, `text-decoration-color`, `opacity`, `transform`.
2. **Durées autorisées** : `--t-fast` pour les couleurs, `--t-base` pour la flèche, `--t-tab` pour l'indicateur, `--t-slow` pour le zoom d'image. Rien de plus long.
3. **Courbe** : `--ease` partout. Pas de rebond, pas d'élasticité.
4. **Interdits** : `transition: all`, animations en boucle, ombres animées, changement de taille ou de graisse de police, effet qui déplace les voisins, plus de trois changements simultanés sur un même élément.
5. **Survol tactile** : enveloppe tous les styles de survol dans `@media (hover: hover)` pour éviter un survol collé sur mobile. Garde les états `:active` en dehors.
6. **Moins d'animations** : sous `@media (prefers-reduced-motion: reduce)`, mets toutes les durées à `0.01ms`, supprime le zoom d'image et le fondu des panneaux, et fais sauter l'indicateur d'onglet directement à sa position.

```css
@media (hover: hover) {
  .card:hover { border-color: var(--accent-line); }
}
```

## 6. Où le violet est interdit

- Titres (Portfolio, Compétences, Projets) et texte courant, y compris les passages en gras
- Fonds de section, dégradés, grands aplats, ombres colorées
- Tags techniques, icônes au repos, bordures au repos
- Soulignements décoratifs, filets de séparation
- Un deuxième accent de couleur, quelle que soit la raison

## 7. Accessibilité et contrastes (calculés, WCAG)

| Combinaison | Ratio | Usage |
|---|---|---|
| `--accent` sur blanc | 6,65:1 | Texte, icônes, bordures, focus |
| `--accent` sur `--hover` | 6,20:1 | Icône au survol |
| `--accent` sur `--accent-soft` | 5,82:1 | Pastille "En production" |
| `--accent-hover` sur blanc | 8,67:1 | Liens au survol |
| `--accent-hover` sur `--accent-soft` | 7,58:1 | Réserve |
| `--text-2` sur blanc | 5,41:1 | Texte secondaire |
| `--text` sur `--accent-select` | 9,22:1 | Sélection |
| `--accent-line` sur blanc | 2,91:1 | Bordure de survol seulement |

`--accent-line` ne doit jamais être le seul signal d'un état : au survol, l'icône passe aussi en `--accent` (6,65:1). Les valeurs ci-dessus sont des calculs : revérifie-les avec un outil de contraste après intégration.

## 8. Fichiers concernés

Adapte les noms si ta structure diffère, et signale les écarts dans ton rapport.

| Fichier | Travail |
|---|---|
| `src/styles/global.css` | Tokens, focus global, `::selection`, garde `hover: hover`, règle `prefers-reduced-motion` |
| `src/layouts/Base.astro` | Balise `theme-color` |
| `src/components/Hero.astro` | Bouton "Me contacter", liens |
| `src/components/Tabs.astro` | États des onglets, indicateur glissant |
| `src/components/SkillCard.astro` | Survol des cartes de compétences |
| `src/components/ProjectCard.astro` | Survol, flèche, zoom d'image, pastilles |

## 9. Procédure

1. **Audit** : liste toutes les couleurs en dur dans le code et remplace-les par les tokens, sans changer le rendu.
2. **Tokens** : ajoute les variables et corrige le gris secondaire (`#6B6A66`).
3. **Focus global** et sélection de texte.
4. **Bouton et liens** du hero.
5. **Onglets** avec l'indicateur glissant, puis test au clavier (flèches gauche et droite).
6. **Cartes** de compétences, puis de projets.
7. **Pastilles** de statut.
8. **Garde-fous** : `hover: hover`, `prefers-reduced-motion`, `theme-color`.
9. **Recette** (section 10).

## 10. Recette

**Comparaison visuelle**
- [ ] Captures avant et après à 1280 px et 390 px de large : aucune différence de mise en page.
- [ ] CLS à 0, y compris au changement d'onglet.

**États**
- [ ] Bouton : repos, survol, focus, pressé conformes à 4.1.
- [ ] Liens : survol et focus conformes à 4.2.
- [ ] Onglets : l'indicateur glisse sans saut, fonctionne au clavier, ne bouge pas la mise en page.
- [ ] Cartes sans lien : aucune flèche, aucun zoom, curseur normal.
- [ ] Cartes avec lien : flèche, zoom et focus visibles.
- [ ] Seule la pastille "En production" est violette.

**Règles transversales**
- [ ] `#5B3FD9` apparaît uniquement dans `global.css`, la balise `theme-color` et le SVG de l'avatar.
- [ ] Aucune règle `transition: all`.
- [ ] Avec "réduire les animations" activé dans le système, plus aucun mouvement.
- [ ] Sur mobile, aucun survol ne reste collé après un toucher.
- [ ] Lighthouse accessibilité à 95 ou plus, contrastes vérifiés avec un outil.

## 11. Livrable attendu

Un court compte rendu en fin de travail : fichiers modifiés, écarts avec ce README et pourquoi, résultat de la recette, et toute zone du site où tu as hésité sur l'application du violet.
