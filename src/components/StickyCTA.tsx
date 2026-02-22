import { useState, useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";

const SCROLL_THROTTLE_MS = 100;
const SCROLL_THRESHOLD = 600;
const BOTTOM_THRESHOLD = 800;

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const throttleRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current !== null) return;

      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - BOTTOM_THRESHOLD;

      setIsVisible(scrolled && !nearBottom && !isDismissed);

      throttleRef.current = window.setTimeout(() => {
        throttleRef.current = null;
      }, SCROLL_THROTTLE_MS);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleRef.current !== null) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-black dark:bg-white text-white dark:text-black shadow-2xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:inline opacity-80">
              Un problème de données ?
            </span>
            <span className="font-medium text-sm sm:text-base">
              Réserver une visio découverte (1h)
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-black dark:text-white text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={() => setIsVisible(false)}
            >
              Réserver une visio découverte (1h)
              <ArrowRight size={14} />
            </a>
            
            <button
              type="button"
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
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
