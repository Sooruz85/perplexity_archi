/**
 * COMPOSANT REACTBITS - Profile Card (adapté pour les projets)
 * Source: ReactBits (https://reactbits.dev)
 *
 * Ce composant provient de ReactBits et a été adapté pour présenter les projets
 * dans la section "Réalisations". Il a été modifié pour intégrer le style scandinave
 * avec border-radius doux, bordures légères et espacements aérés.
 *
 * Pour modifier ce composant ou le remplacer :
 * - Consultez la documentation ReactBits pour les variantes de Profile Card
 * - Modifiez les classes Tailwind ci-dessous pour ajuster le style
 */
const ProfileCard = ({ image, title, surface, year, type, description }) => {
  return (
    <article className="bg-warm-white rounded-2xl overflow-hidden border border-sand/50 hover:border-sand transition-all duration-500 fade-in">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-8">
        <h3 className="text-xl font-light text-text-soft mb-3 tracking-tight">
          {title}
        </h3>
        <div className="text-sm text-text-soft/60 mb-4 font-light">
          <span className="mr-4">{surface}</span>
          <span className="mr-4">{year}</span>
          <span>{type}</span>
        </div>
        <p className="text-text-soft/80 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProfileCard;
