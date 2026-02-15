interface SectionHeaderProps {
  tag?: string;
  title: string;
  description: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl mb-12">
      {tag && (
        <p className="text-sm opacity-50 mb-2 uppercase tracking-wide">{tag}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <p className="opacity-60 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
