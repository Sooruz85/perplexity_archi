/**
 * COMPOSANT REACTBITS - Hero Text Animation
 * Source: ReactBits (https://reactbits.dev)
 *
 * Ce composant provient de ReactBits et a été adapté au style scandinave minimaliste.
 * Il fournit une animation douce d'apparition pour le titre et sous-titre du hero.
 *
 * Pour modifier ce composant ou le remplacer par un autre composant ReactBits :
 * - Consultez la documentation ReactBits pour les props disponibles
 * - Adaptez les classes Tailwind pour maintenir le style scandinave
 */
import { useEffect, useState } from 'react';

const HeroTextAnimation = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default HeroTextAnimation;
