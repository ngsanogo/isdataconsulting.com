import { Mail, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-navy text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: CTA */}
          <div>
            <p className="text-sm text-white/60 mb-3 uppercase tracking-wide">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Un projet data en tête ?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Échangeons sur vos enjeux. Premier appel de découverte offert pour
              comprendre votre contexte et identifier les opportunités.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
              >
                <Mail size={20} className="text-white/60" />
                <span className="font-medium">{SITE_CONFIG.email}</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
              >
                <Phone size={20} className="text-white/60" />
                <span className="font-medium">{SITE_CONFIG.phone}</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Right: Simple form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <form
              action={`https://formspree.io/f/your-form-id`}
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-white/80"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="vous@entreprise.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="Décrivez brièvement votre projet..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-navy font-medium py-3 rounded-md hover:bg-white/90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
