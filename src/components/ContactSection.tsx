import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-muted-foreground mb-2">
            ## Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-semibold tracking-tighter mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Un besoin en conseil IT, data ou développement ? 
            Écrivez-nous, nous répondons sous 24h.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-3xl">
          {/* Email */}
          <a
            href="mailto:contact@isdataconsulting.com"
            className="group bg-background p-8 hover:bg-secondary/50 transition-colors"
          >
            <Mail className="w-5 h-5 text-muted-foreground mb-4" strokeWidth={1.5} />
            <p className="font-mono text-xs text-muted-foreground mb-2">Email</p>
            <p className="font-mono text-foreground flex items-center gap-2">
              contact@isdataconsulting.com
              <ArrowUpRight 
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                strokeWidth={1.5} 
              />
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+33651985279"
            className="group bg-background p-8 hover:bg-secondary/50 transition-colors"
          >
            <Phone className="w-5 h-5 text-muted-foreground mb-4" strokeWidth={1.5} />
            <p className="font-mono text-xs text-muted-foreground mb-2">Téléphone</p>
            <p className="font-mono text-foreground flex items-center gap-2">
              +33 6 51 98 52 79
              <ArrowUpRight 
                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                strokeWidth={1.5} 
              />
            </p>
          </a>

          {/* Location */}
          <div className="bg-background p-8">
            <MapPin className="w-5 h-5 text-muted-foreground mb-4" strokeWidth={1.5} />
            <p className="font-mono text-xs text-muted-foreground mb-2">Localisation</p>
            <p className="text-foreground">
              152 Avenue Gabriel Péri
              <br />
              95870 Bezons, France
            </p>
          </div>
        </div>

        {/* Legal info */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            ISDATA CONSULTING · SAS au capital variable · SIREN 940 718 075
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
