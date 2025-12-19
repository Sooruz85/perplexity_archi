# Notes sur l'intégration ReactBits

## Composants ReactBits intégrés

Les composants dans `src/components/` ont été créés pour s'inspirer de ReactBits tout en étant adaptés au style scandinave minimaliste. Ils sont fonctionnels et prêts à l'emploi.

## Utiliser la vraie bibliothèque ReactBits

Si vous souhaitez utiliser la bibliothèque officielle ReactBits (https://reactbits.dev), voici comment procéder :

### Installation

```bash
npm install @appletosolutions/reactbits
```

### Remplacement des composants

1. **HeroTextAnimation** : Remplacez par un composant ReactBits comme `Bounce`, `FadeIn`, ou `SlideIn`
   ```jsx
   import { Bounce } from '@appletosolutions/reactbits';

   <Bounce>
     <h1>Agence d'architecture...</h1>
   </Bounce>
   ```

2. **ProfileCard** : Utilisez un composant Card ou ProfileCard de ReactBits
   ```jsx
   import { Card } from '@appletosolutions/reactbits';
   ```

3. **AnimatedBackground** : Utilisez un composant Background animé de ReactBits
   ```jsx
   import { AnimatedBackground } from '@appletosolutions/reactbits';
   ```

4. **ReactBitsButton** : Utilisez le composant Button de ReactBits
   ```jsx
   import { Button } from '@appletosolutions/reactbits';
   ```

### Adaptation au style scandinave

Lorsque vous remplacez les composants, n'oubliez pas d'adapter les classes Tailwind pour maintenir :
- Les couleurs de la palette scandinave (warm-white, sand, text-soft, etc.)
- Les border-radius doux (rounded-xl, rounded-2xl, rounded-full)
- Les transitions lentes (duration-500)
- La typographie légère (font-light)

## Documentation ReactBits

Consultez https://reactbits.dev pour :
- La liste complète des composants disponibles
- Les props et options de personnalisation
- Des exemples d'utilisation
