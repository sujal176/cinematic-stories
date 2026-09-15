import { useState } from "react";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { BUDGETS, PROJECT_TYPES, SOCIALS } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("That email doesn't look right").max(255),
  projectType: z.string().trim().min(1, "Pick a project type"),
  budget: z.string().trim().min(1, "Pick a budget range"),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const FIELD =
  "w-full rounded-sm border border-input bg-charcoal px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message sent — I'll reply within 24 hours.");
    }, 700);
  }

  return (
    <section id="contact" className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="film-grain relative overflow-hidden rounded-lg border border-primary/30 bg-charcoal px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
            Have footage? Let&apos;s turn it into{" "}
            <span className="text-amber-gradient">something worth watching.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
            Booking new projects now — send the brief and I&apos;ll come back with a plan and a delivery date.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input name="name" maxLength={100} placeholder="Your name" className={FIELD} />
              </Field>
              <Field label="Email" error={errors.email}>
                <input name="email" type="email" maxLength={255} placeholder="you@email.com" className={FIELD} />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Project type" error={errors.projectType}>
                <select name="projectType" defaultValue="" className={FIELD}>
                  <option value="">Select one</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Budget range" error={errors.budget}>
                <select name="budget" defaultValue="" className={FIELD}>
                  <option value="">Select one</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Footage length, deadline, references, platform…"
                className={FIELD}
              />
            </Field>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-sm bg-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px_var(--primary)] disabled:opacity-60 sm:w-auto"
            >
              {sending ? "Sending…" : "Send the brief"}
            </button>
          </form>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-foreground">Elsewhere</h3>
            <div className="mt-6 space-y-3">
              <SocialRow href={SOCIALS.instagram} icon={<Instagram className="size-4" />} label="Instagram" handle="@sujal.edits" />
              <SocialRow href={SOCIALS.youtube} icon={<Youtube className="size-4" />} label="YouTube" handle="Sujal Sarraf" />
              <SocialRow href={SOCIALS.linkedin} icon={<Linkedin className="size-4" />} label="LinkedIn" handle="in/sujalsarraf" />
              <SocialRow
                href={`mailto:${SOCIALS.email}`}
                icon={<Mail className="size-4" />}
                label="Email"
                handle={SOCIALS.email}
              />
            </div>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Typical reply time: under 24 hours. Rush jobs welcome — mention the deadline in your message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SocialRow({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-sm border border-border/70 bg-card px-5 py-4 transition-colors hover:border-primary/60"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-primary/12 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <span className="block truncate text-sm">{handle}</span>
      </span>
    </a>
  );
}
