import { SKILLS, TOOLS } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function SkillsTools() {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="What I Bring To The Timeline"
          copy="Craft over presets. These are the areas I keep sharpening, and the software I finish in."
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            {SKILLS.map((s) => (
              <div key={s.name}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                  <h3 className="min-w-0 truncate text-2xl leading-none">{s.name}</h3>
                  <span className="shrink-0 font-mono text-xs text-primary">{s.level}%</span>
                </div>
                <div className="mt-3 h-px w-full bg-border">
                  <div
                    className="h-px bg-primary shadow-[0_0_12px_var(--primary)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-foreground">Toolkit</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {TOOLS.map((t) => (
                <div
                  key={t.name}
                  className="rounded-sm border border-border/70 bg-card p-5 transition-all duration-300 hover:border-primary/60 hover:bg-charcoal"
                >
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
