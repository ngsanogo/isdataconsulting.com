import { Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-navy text-white">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-sm text-white/60 mb-3 uppercase tracking-wide">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Un projet data en tête ?
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-10">
          Échangeons sur vos enjeux. Premier appel de découverte offert.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-white text-navy font-medium rounded-md hover:bg-white/90 transition-colors"
          >
            <Mail size={18} />
            {SITE_CONFIG.email}
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 px-6 py-3 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
