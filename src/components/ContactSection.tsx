import { Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section bg-black dark:bg-white text-white dark:text-black"
    >
      <div className="container mx-auto max-w-xl text-center">
        <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Un projet data ?
        </h2>
        <p className="opacity-70 mb-8">Premier appel de découverte offert.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black text-black dark:text-white font-medium hover:opacity-80 transition-opacity"
          >
            <Mail size={16} />
            {SITE_CONFIG.email}
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-5 py-2.5 border border-white/30 dark:border-black/30 font-medium hover:opacity-80 transition-opacity"
          >
            <Phone size={16} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
