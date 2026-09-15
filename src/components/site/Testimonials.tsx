import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-md border border-border/70 bg-card p-7 transition-colors duration-300 hover:border-primary/50"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border/60 pt-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-sm text-primary">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
