/**
 * COMPOSANT REACTBITS - Animated Background
 * Source: ReactBits (https://reactbits.dev)
 *
 * Ce composant provient de ReactBits et ajoute un fond animé subtil.
 * Il a été adapté pour rester minimaliste et ne pas casser le style scandinave.
 * L'animation est très légère (mouvement de particules ou gradient subtil).
 *
 * Pour modifier ce composant ou le remplacer :
 * - Consultez ReactBits pour d'autres variantes de Background animé
 * - Ajustez les couleurs pour maintenir la palette scandinave (warm-white, sand, pale-gray)
 * - Modifiez la vitesse et l'intensité de l'animation si nécessaire
 */
import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    let particles = [];

    // Créer des particules très subtiles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 227, 219, 0.15)'; // sand avec très faible opacité
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
