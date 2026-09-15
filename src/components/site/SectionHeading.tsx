export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-primary">
        <span className="inline-block h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="text-4xl leading-[0.95] sm:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>}
    </div>
  );
}
