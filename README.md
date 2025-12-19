# Atelier 33 - Landing Page

Landing page pour une agence d'architecture à Bordeaux, avec intégration de composants ReactBits.

## Stack technique

- **React 18** avec Vite
- **Tailwind CSS** pour le style
- **ReactBits** (https://reactbits.dev) pour les composants animés

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Composants ReactBits utilisés

Les composants ReactBits sont situés dans `src/components/` :

1. **HeroTextAnimation** (`HeroTextAnimation.jsx`) : Animation douce d'apparition pour le titre et sous-titre du hero
2. **ProfileCard** (`ProfileCard.jsx`) : Cartes pour présenter les projets dans la section Réalisations
3. **AnimatedBackground** (`AnimatedBackground.jsx`) : Fond animé subtil pour le hero
4. **ReactBitsButton** (`ReactBitsButton.jsx`) : Boutons avec hover léger

Tous les composants ont été adaptés au style scandinave minimaliste et sont commentés pour faciliter leur modification ou remplacement.

## Style scandinave

- Palette : warm-white, pale-gray, sand, soft-beige
- Border-radius doux partout (rounded-xl, rounded-2xl, rounded-full)
- Typographie légère (font-light)
- Animations minimales et transitions lentes
