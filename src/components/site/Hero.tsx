import { ArrowRight, Play } from "lucide-react";
import heroBackdrop from "@/assets/hero-backdrop.jpg";

const STATS = [
  { value: "200+", label: "Projects cut" },
  { value: "40M+", label: "Views delivered" },
  { value: "6 yrs", label: "In the edit bay" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroBackdrop}
        alt="Dark editing suite lit by amber light with color grading monitors"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      <div className="film-grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8">
        <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-primary">
          <span className="inline-block h-px w-10 bg-primary" />
          Freelance Video Editor
        </p>

        <h1 className="max-w-4xl text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">
          I Turn Raw Footage <br className="hidden sm:block" />
          Into <span className="text-amber-gradient">Stories.</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Long-form, short-form and cinematic edits with the pacing, grade and sound design that keep
          people watching to the last frame.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px_var(--primary)]"
          >
            <Play className="size-4" />
            View My Work
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-sm border border-border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Let&apos;s Work Together
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-primary sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
