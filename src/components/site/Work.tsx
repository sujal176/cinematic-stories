import { useMemo, useState } from "react";
import { Play, X } from "lucide-react";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Work() {
  const [active, setActive] = useState<Category>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="relative border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Cuts"
          copy="A mix of long-form, vertical and commercial work. Open any project to see the techniques and what it delivered."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-sm border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all",
                active === c
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpen(p)}
              className="group relative overflow-hidden rounded-md border border-border/70 bg-card text-left transition-all duration-500 hover:border-primary/60 hover:shadow-[0_30px_80px_-40px_var(--primary)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={`${p.title} — ${p.category} edit for ${p.client}`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <span className="absolute right-3 top-3 rounded-sm bg-background/80 px-2 py-1 font-mono text-[10px] tracking-widest text-primary backdrop-blur">
                  {p.runtime}
                </span>
                <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="grid size-14 place-items-center rounded-full border border-primary/70 bg-background/60 text-primary backdrop-blur">
                    <Play className="size-5" />
                  </span>
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.category}</p>
                <h3 className="mt-2 text-2xl leading-none">{p.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{p.client}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <div
        className="animate-scale-in relative my-auto w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-sm bg-background/80 text-foreground backdrop-blur transition-colors hover:text-primary"
        >
          <X className="size-4" />
        </button>

        <div className="aspect-video bg-black">
          <video
            src={project.videoUrl}
            poster={project.thumbnail}
            controls
            playsInline
            className="size-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
            {project.category} · {project.client}
          </p>
          <h3 className="mt-2 text-3xl leading-none sm:text-4xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-foreground">Editing techniques</h4>
              <ul className="mt-4 space-y-2.5">
                {project.techniques.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-foreground">Outcome</h4>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {project.outcomes.map((o) => (
                  <div key={o.label} className="rounded-sm border border-border/70 bg-charcoal p-3">
                    <p className="font-display text-2xl text-primary">{o.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {o.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
