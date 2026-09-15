import { Check } from "lucide-react";
import { SERVICES } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Ways We Can Work"
          copy="Fixed scopes, clear deliverables and dates I actually keep. Retainers available for weekly output."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex h-full flex-col rounded-md border border-border/70 bg-card p-7 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_30px_80px_-50px_var(--primary)]"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <h3 className="min-w-0 text-3xl leading-none">{s.title}</h3>
                <span className="shrink-0 font-mono text-[11px] text-primary">{s.from}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-block text-[11px] uppercase tracking-[0.25em] text-primary transition-opacity hover:opacity-70"
              >
                Start a project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
