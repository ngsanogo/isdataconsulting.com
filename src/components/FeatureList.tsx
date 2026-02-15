import { CheckCircle2 } from "lucide-react";

interface FeatureListProps {
  items: readonly string[] | string[];
  variant?: "compact" | "detailed";
}

export default function FeatureList({ items, variant = "compact" }: FeatureListProps) {
  if (variant === "detailed") {
    return (
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <span className="opacity-80">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-green-600 dark:text-green-400 shrink-0" />
          <span className="opacity-80">{item}</span>
        </li>
      ))}
    </ul>
  );
}
