/**
 * COMPOSANT REACTBITS - Button
 * Source: ReactBits (https://reactbits.dev)
 *
 * Ce composant provient de ReactBits et a été adapté pour les boutons principaux
 * ("Demander un devis", "Envoyer ma demande"). Il inclut un hover très léger
 * adapté au style scandinave minimaliste.
 *
 * Pour modifier ce composant ou le remplacer :
 * - Consultez ReactBits pour d'autres variantes de Button
 * - Ajustez les classes hover et transition pour modifier l'effet
 * - Modifiez le border-radius (rounded-full) pour changer la forme
 */
const ReactBitsButton = ({ children, onClick, href, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-block px-10 py-3 rounded-full font-light transition-all duration-500";

  const variantClasses = {
    primary: "bg-text-soft text-warm-white hover:bg-text-soft/90",
    secondary: "border border-sand text-text-soft hover:bg-sand/30",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="submit">
      {children}
    </button>
  );
};

export default ReactBitsButton;
