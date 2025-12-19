import { useEffect, useRef } from 'react';

// ============================================================================
// IMPORT DES COMPOSANTS REACTBITS
// ============================================================================
// Tous les composants ci-dessous proviennent de ReactBits (https://reactbits.dev)
// et ont été adaptés au style scandinave minimaliste.
// Pour remplacer un composant, importez un autre depuis ReactBits et adaptez les classes Tailwind.
import HeroTextAnimation from './components/HeroTextAnimation';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';
import ReactBitsButton from './components/ReactBitsButton';

function App() {
  // Intersection Observer pour les animations fade-in
  const fadeElementsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      });
    }, observerOptions);

    fadeElementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      fadeElementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Gestion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.classList.remove('hidden');
      e.target.reset();
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 10000);
    }
  };

  // Scroll fluide vers les sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-warm-white text-text-soft">
      {/* Header minimaliste */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm transition-all duration-500">
        <nav className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <a
              href="#accueil"
              onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}
              className="text-xl font-light text-text-soft tracking-wide"
            >
              Atelier 33
            </a>
            {/* COMPOSANT REACTBITS - Button utilisé pour le bouton Contact */}
            <ReactBitsButton
              variant="secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </ReactBitsButton>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section avec COMPOSANTS REACTBITS */}
        <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-warm-white pt-24">
          {/* COMPOSANT REACTBITS - AnimatedBackground pour fond animé subtil */}
          <AnimatedBackground className="absolute inset-0 w-full h-full">
            <div className="container mx-auto px-6 lg:px-12 text-center py-32 max-w-4xl relative z-10">
              {/* COMPOSANT REACTBITS - HeroTextAnimation pour titre avec animation douce */}
              <HeroTextAnimation delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text-soft mb-8 leading-tight tracking-tight">
                  Agence d'architecture & design d'espace à Bordeaux
                </h1>
              </HeroTextAnimation>

              {/* COMPOSANT REACTBITS - HeroTextAnimation pour sous-titre */}
              <HeroTextAnimation delay={400}>
                <p className="text-lg sm:text-xl text-text-soft/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Nous concevons des bureaux, espaces de travail et lieux de vie lumineux, fonctionnels et durables.
                </p>
              </HeroTextAnimation>

              {/* COMPOSANT REACTBITS - Button pour CTA principal */}
              <HeroTextAnimation delay={600}>
                <ReactBitsButton
                  variant="primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Demander un devis
                </ReactBitsButton>
              </HeroTextAnimation>
            </div>
          </AnimatedBackground>
        </section>

        {/* Section À propos */}
        <section id="a-propos" className="py-24 sm:py-32 bg-warm-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div
                ref={el => fadeElementsRef.current.push(el)}
                className="opacity-0 transition-opacity duration-1000 space-y-8"
              >
                <h2 className="text-3xl sm:text-4xl font-light text-text-soft tracking-tight">
                  Une agence d'architecture basée à Bordeaux
                </h2>
                <p className="text-lg text-text-soft/80 leading-relaxed font-light">
                  Atelier 33 est une agence d'architecture spécialisée dans la conception d'espaces professionnels et de vie. Notre approche s'appuie sur l'écoute attentive des besoins, la compréhension fine des usages, et une attention particulière portée à la lumière naturelle et aux matériaux durables.
                </p>
                <ul className="space-y-5 text-text-soft/80 font-light leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-soft-beige mr-4 mt-1 text-lg">—</span>
                    <span><strong className="font-normal">Études et conception d'espaces professionnels</strong> : bureaux, coworking, espaces commerciaux.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-beige mr-4 mt-1 text-lg">—</span>
                    <span><strong className="font-normal">Rénovation et réaménagement d'espaces existants</strong> : valorisation du patrimoine bâti avec une approche contemporaine.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-soft-beige mr-4 mt-1 text-lg">—</span>
                    <span><strong className="font-normal">Accompagnement de A à Z</strong> : de l'esquisse aux plans détaillés, en passant par le suivi de chantier avec nos entreprises partenaires.</span>
                  </li>
                </ul>
              </div>

              <div
                ref={el => fadeElementsRef.current.push(el)}
                className="opacity-0 transition-opacity duration-1000"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Espace de travail moderne conçu par une agence d'architecture à Bordeaux"
                  className="w-full h-auto rounded-2xl object-cover shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Réalisations avec COMPOSANTS REACTBITS - ProfileCard */}
        <section id="realisations" className="py-24 sm:py-32 bg-pale-gray">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <h2
              ref={el => fadeElementsRef.current.push(el)}
              className="opacity-0 transition-opacity duration-1000 text-3xl sm:text-4xl font-light text-text-soft mb-20 text-center tracking-tight"
            >
              Quelques réalisations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* COMPOSANT REACTBITS - ProfileCard pour chaque projet */}
              <div ref={el => fadeElementsRef.current.push(el)} className="opacity-0 transition-opacity duration-1000">
                <ProfileCard
                  image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  title="Bureaux Lumière – Bordeaux"
                  surface="450 m²"
                  year="2024"
                  type="Bureaux"
                  description="Rénovation complète d'un espace de bureaux avec optimisation de la lumière naturelle et création d'espaces collaboratifs modulaires."
                />
              </div>

              <div ref={el => fadeElementsRef.current.push(el)} className="opacity-0 transition-opacity duration-1000">
                <ProfileCard
                  image="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  title="Hub Créatif – Mérignac"
                  surface="680 m²"
                  year="2023"
                  type="Coworking"
                  description="Conception d'un espace de coworking avec zones de travail flexibles, salles de réunion modulaires et espaces de détente intégrés."
                />
              </div>

              <div ref={el => fadeElementsRef.current.push(el)} className="opacity-0 transition-opacity duration-1000">
                <ProfileCard
                  image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  title="Boutique Moderne – Chartrons"
                  surface="120 m²"
                  year="2024"
                  type="Commerce"
                  description="Transformation d'un local commercial en espace de vente épuré mettant en valeur les produits tout en créant une expérience client agréable."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Méthode */}
        <section id="methode" className="py-24 sm:py-32 bg-warm-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <h2
              ref={el => fadeElementsRef.current.push(el)}
              className="opacity-0 transition-opacity duration-1000 text-3xl sm:text-4xl font-light text-text-soft mb-20 text-center tracking-tight"
            >
              Une méthode claire, du premier croquis à la livraison
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[1, 2, 3, 4].map((num, idx) => (
                <div
                  key={num}
                  ref={el => fadeElementsRef.current.push(el)}
                  className="opacity-0 transition-opacity duration-1000 text-center"
                >
                  <div className="w-20 h-20 bg-pale-gray border border-sand/50 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-light text-text-soft">
                    {num}
                  </div>
                  <h3 className="text-lg font-light text-text-soft mb-4 tracking-tight">
                    {num === 1 && "Analyse & échange"}
                    {num === 2 && "Conception sur-mesure"}
                    {num === 3 && "Coordination & suivi"}
                    {num === 4 && "Livraison & accompagnement"}
                  </h3>
                  <p className="text-text-soft/80 font-light leading-relaxed">
                    {num === 1 && "Compréhension approfondie du lieu, de vos besoins spécifiques, de votre budget et de vos contraintes techniques."}
                    {num === 2 && "Élaboration des plans détaillés, création de moodboards, sélection rigoureuse des matériaux et finitions adaptés à votre projet."}
                    {num === 3 && "Suivi régulier du chantier en coordination avec les entreprises partenaires pour garantir la qualité et le respect des délais."}
                    {num === 4 && "Remise des clés, ajustements si nécessaire, et suivi post-livraison pour assurer votre satisfaction sur le long terme."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="py-24 sm:py-32 bg-pale-gray">
          <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
            <div
              ref={el => fadeElementsRef.current.push(el)}
              className="opacity-0 transition-opacity duration-1000 text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-light text-text-soft mb-6 tracking-tight">
                Contactez notre agence à Bordeaux
              </h2>
              <p className="text-lg text-text-soft/80 leading-relaxed font-light">
                Notre équipe s'engage à vous répondre sous 24 à 48h. Chaque projet est unique et nécessite un échange personnalisé pour répondre précisément à vos attentes. Toutes vos données sont traitées de manière confidentielle.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              ref={el => fadeElementsRef.current.push(el)}
              className="opacity-0 transition-opacity duration-1000 bg-warm-white p-10 sm:p-12 rounded-2xl border border-sand/50"
            >
              <div className="space-y-8">
                <div>
                  <label htmlFor="nom" className="block text-sm font-light text-text-soft mb-3">
                    Nom complet <span className="text-text-soft/50">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    className="w-full px-5 py-4 border border-sand rounded-xl bg-warm-white text-text-soft font-light focus:outline-none focus:border-soft-beige transition-all duration-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-text-soft mb-3">
                    Adresse e-mail <span className="text-text-soft/50">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 border border-sand rounded-xl bg-warm-white text-text-soft font-light focus:outline-none focus:border-soft-beige transition-all duration-500"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-light text-text-soft mb-3">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    className="w-full px-5 py-4 border border-sand rounded-xl bg-warm-white text-text-soft font-light focus:outline-none focus:border-soft-beige transition-all duration-500"
                  />
                </div>

                <div>
                  <label htmlFor="type-projet" className="block text-sm font-light text-text-soft mb-3">
                    Type de projet
                  </label>
                  <select
                    id="type-projet"
                    name="type-projet"
                    className="w-full px-5 py-4 border border-sand rounded-xl bg-warm-white text-text-soft font-light focus:outline-none focus:border-soft-beige transition-all duration-500"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="bureaux">Bureaux</option>
                    <option value="commerce">Commerce</option>
                    <option value="residentiel">Résidentiel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-text-soft mb-3">
                    Message / Description du projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-5 py-4 border border-sand rounded-xl bg-warm-white text-text-soft font-light focus:outline-none focus:border-soft-beige transition-all duration-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="rgpd"
                    name="rgpd"
                    required
                    className="mt-1 mr-3 h-4 w-4 text-text-soft focus:ring-soft-beige border-sand rounded"
                  />
                  <label htmlFor="rgpd" className="text-sm text-text-soft/80 font-light leading-relaxed">
                    J'accepte que mes données soient utilisées pour être recontacté(e). <span className="text-text-soft/50">*</span>
                  </label>
                </div>

                <div id="success-message" className="hidden p-5 bg-pale-gray border border-sand rounded-xl text-text-soft font-light">
                  Merci, votre demande a bien été envoyée. Nous vous répondrons sous 24 à 48h.
                </div>

                {/* COMPOSANT REACTBITS - Button pour le bouton d'envoi du formulaire */}
                <ReactBitsButton variant="primary">
                  Envoyer ma demande
                </ReactBitsButton>
              </div>
            </form>

            {/* Commentaire pour intégration backend */}
            {/*
              POUR CONNECTER LE FORMULAIRE À UN SERVICE RÉEL :
              1. Formspree : ajoutez action="https://formspree.io/f/votre-id" et method="POST" au <form>
              2. Backend personnalisé : modifiez la fonction handleSubmit ci-dessus
              3. Email JS : utilisez EmailJS ou un service similaire
            */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-warm-white border-t border-sand/50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-text-soft text-lg font-light mb-4 tracking-tight">Atelier 33</h3>
              <p className="mb-3 text-text-soft/80 font-light">Architecture & design d'espace</p>
              <p className="text-sm text-text-soft/70 font-light leading-relaxed">
                10, Quai des Chartrons<br />
                33000 Bordeaux, France
              </p>
            </div>

            <div>
              <h3 className="text-text-soft text-lg font-light mb-4 tracking-tight">Contact</h3>
              <p className="mb-3 text-text-soft/80 font-light">
                <a href="mailto:contact@atelier33.fr" className="hover:text-soft-beige transition-colors duration-500">contact@atelier33.fr</a>
              </p>
              <p className="text-text-soft/80 font-light">
                <a href="tel:+33512345678" className="hover:text-soft-beige transition-colors duration-500">+33 (0)5 12 34 56 78</a>
              </p>
            </div>

            <div>
              <h3 className="text-text-soft text-lg font-light mb-4 tracking-tight">Liens utiles</h3>
              <ul className="space-y-2 text-text-soft/80 font-light">
                <li>
                  <a
                    href="#accueil"
                    onClick={(e) => { e.preventDefault(); scrollToSection('accueil'); }}
                    className="hover:text-soft-beige transition-colors duration-500"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#realisations"
                    onClick={(e) => { e.preventDefault(); scrollToSection('realisations'); }}
                    className="hover:text-soft-beige transition-colors duration-500"
                  >
                    Réalisations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    className="hover:text-soft-beige transition-colors duration-500"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#mentions-legales"
                    onClick={(e) => { e.preventDefault(); scrollToSection('mentions-legales'); }}
                    className="hover:text-soft-beige transition-colors duration-500"
                  >
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="mentions-legales" className="border-t border-sand/50 pt-12 mt-12">
            <h3 className="text-text-soft text-lg font-light mb-6 tracking-tight">Mentions légales</h3>
            <div className="text-sm space-y-3 mb-8 text-text-soft/70 font-light leading-relaxed">
              <p><strong className="font-normal">Directeur de la publication :</strong> [Nom du directeur]</p>
              <p><strong className="font-normal">SIRET :</strong> 000 000 000 00000</p>
              <p><strong className="font-normal">Hébergeur :</strong> [Nom de l'hébergeur] – [Adresse de l'hébergeur]</p>
              <p className="mt-6">
                Les informations recueillies via ce site sont utilisées uniquement pour répondre à vos demandes.
                Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                Pour exercer ce droit, contactez-nous à <a href="mailto:contact@atelier33.fr" className="text-soft-beige hover:underline transition-colors duration-500">contact@atelier33.fr</a>.
              </p>
            </div>

            <p className="text-sm text-text-soft/60 text-center pt-6 border-t border-sand/50 font-light">
              © 2025 Atelier 33 – Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
