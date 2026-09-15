const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-8">
        <p className="min-w-0 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sujal Sarraf — Freelance Video Editor.
        </p>
        <nav className="flex flex-wrap gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
