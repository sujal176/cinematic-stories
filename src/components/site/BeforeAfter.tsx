import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import before from "@/assets/ba-before.jpg";
import after from "@/assets/ba-after.jpg";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box) return;
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Color Grading"
          title="Before & After"
          copy="Drag the handle to compare the flat camera original with the finished graded frame."
        />

        <div
          ref={frame}
          className="relative mt-10 aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-md border border-border/70"
          onPointerDown={(e) => {
            dragging.current = true;
            move(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && move(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerLeave={() => (dragging.current = false)}
        >
          <img
            src={after}
            alt="Final color graded shot of a neon street at night"
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <img
            src={before}
            alt="Flat ungraded raw footage of the same neon street"
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />

          <span className="absolute left-4 top-4 rounded-sm bg-background/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            Raw
          </span>
          <span className="absolute right-4 top-4 rounded-sm bg-background/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur">
            Graded
          </span>

          <div className="absolute inset-y-0 w-px bg-primary" style={{ left: `${pos}%` }}>
            <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary bg-background/85 text-primary backdrop-blur">
              <MoveHorizontal className="size-4" />
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label="Compare raw and graded footage"
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute bottom-4 left-1/2 w-2/3 -translate-x-1/2 accent-[var(--primary)] sm:sr-only"
          />
        </div>
      </div>
    </section>
  );
}
