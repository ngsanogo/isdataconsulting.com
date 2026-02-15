import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
}

export default function ProblemCard({
  icon: Icon,
  title,
  description,
  impact,
}: ProblemCardProps) {
  return (
    <article className="p-6 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors">
      <Icon className="w-8 h-8 mb-4 opacity-80" strokeWidth={1.5} />
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      <p className="text-sm opacity-70 mb-4">{description}</p>
      <p className="text-xs opacity-60 italic">
        <span className="font-semibold">Conséquence:</span> {impact}
      </p>
    </article>
  );
}
