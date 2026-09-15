import { useState } from "react";
import profile from "@/assets/profile.jpg";
import { TIMELINE } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function About() {
  const [active, setActive] = useState(TIMELINE.length - 1);

  return (
    <section id="about" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="relative">
            <img
              src={profile}
              alt="Sujal Sarraf in his editing studio"
              width={912}
              height={1104}
              loading="lazy"
              className="w-full rounded-md border border-border/70 object-cover"
            />
            <div className="absolute -bottom-5 -right-3 rounded-sm border border-primary/40 bg-background/90 px-5 py-4 backdrop-blur sm:right-6">
              <p className="font-display text-3xl text-primary">6 yrs</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Cutting stories
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Story First, Effects Later."
              copy="I'm Sujal — a freelance editor who believes an edit lives or dies on rhythm. Before I touch a
                LUT or a transition, I find the moment the story turns, then cut everything that gets in its way."
            />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I work in Premiere Pro and Resolve, treat sound as half the picture, and deliver on the day I
              promised. Whether it's a 20-minute documentary or a 15-second reel, the question is the same:
              why should anyone keep watching?
            </p>

            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-[0.3em] text-foreground">Milestones</h3>
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                {TIMELINE.map((t, i) => (
                  <button
                    key={t.year}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "shrink-0 rounded-sm border px-4 py-2 font-mono text-xs tracking-widest transition-all",
                      active === i
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {t.year}
                  </button>
                ))}
              </div>
              <div className="hairline mt-6 pt-6">
                <h4 className="text-2xl leading-none">{TIMELINE[active]?.title}</h4>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {TIMELINE[active]?.copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
