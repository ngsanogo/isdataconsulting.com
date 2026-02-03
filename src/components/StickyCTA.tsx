import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

/**
 * Sticky CTA qui apparaît après un certain scroll
 * Objectif : Maximiser les conversions en gardant le CTA visible
 */
export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apparaît après 600px de scroll (après le Hero)
      const scrolled = window.scrollY > 600;
      
      // Disparaît si on est proche du footer/contact
      const nearBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
      
      setIsVisible(scrolled && !nearBottom && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-black dark:bg-white text-white dark:text-black shadow-2xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:inline opacity-80">
              Besoin d'un expert data ?
            </span>
            <span className="font-medium text-sm sm:text-base">
              Réservez votre appel découverte gratuit
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-black dark:text-white text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={() => setIsVisible(false)}
            >
              Prendre RDV
              <ArrowRight size={14} />
            </a>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
