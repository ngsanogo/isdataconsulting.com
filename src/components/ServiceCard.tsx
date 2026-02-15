import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: readonly string[] | string[];
  variant?: "default" | "compact";
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  variant = "default",
}: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <article className="p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
        {Icon && <Icon className="w-8 h-8 mb-4 opacity-80" strokeWidth={1.5} />}
        <h3 className="font-semibold text-base mb-2">{title}</h3>
        <p className="text-sm opacity-60 mb-4">{description}</p>
        {features && (
          <ul className="space-y-1.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm opacity-70">
                <span className="text-green-600 dark:text-green-400 shrink-0">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  }

  return (
    <article className="group p-8 bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors flex flex-col">
      {Icon && <Icon className="w-10 h-10 mb-4 opacity-70" strokeWidth={1.5} />}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-70 mb-6 text-base leading-relaxed flex-grow">{description}</p>
      {features && (
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <span className="text-green-600 dark:text-green-400 shrink-0">✓</span>
              <span className="opacity-80">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
