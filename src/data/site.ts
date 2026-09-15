import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

/**
 * All site content lives here. Edit these arrays to update the portfolio —
 * no component changes needed.
 */

export const CATEGORIES = [
  "All",
  "Short-Form",
  "YouTube",
  "Reels",
  "Social Ads",
  "Cinematic Edits",
  "Motion Graphics",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  thumbnail: string;
  runtime: string;
  /** Any public MP4 or embed URL. Swap for the real cut when ready. */
  videoUrl: string;
  summary: string;
  techniques: string[];
  outcomes: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "kinetic-sneaker",
    title: "Kinetic Sneaker Drop",
    client: "Volt Athletics",
    category: "Short-Form",
    thumbnail: work1,
    runtime: "0:28",
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-pair-of-sneakers-5751/1080p.mp4",
    summary:
      "A 28-second launch teaser cut to a beat-mapped sound design bed, built to stop the scroll in the first frame.",
    techniques: ["Beat-mapped cuts", "Speed ramps", "Product relight in grade", "Sub-bass whoosh design"],
    outcomes: [
      { label: "Views", value: "1.4M" },
      { label: "Retention", value: "72%" },
      { label: "Sell-out", value: "36 hrs" },
    ],
  },
  {
    id: "studio-desk-doc",
    title: "The Home Studio Doc",
    client: "Wiredframe (480K subs)",
    category: "YouTube",
    thumbnail: work2,
    runtime: "12:40",
    videoUrl: "https://cdn.coverr.co/videos/coverr-man-talking-to-camera-1568/1080p.mp4",
    summary:
      "Long-form documentary edit with a three-act narrative spine, chapter beats and a restrained warm grade.",
    techniques: ["Narrative story spine", "J/L-cut dialogue polish", "Dialogue EQ + de-noise", "Chapter title cards"],
    outcomes: [
      { label: "Watch time", value: "+41%" },
      { label: "Avg. view", value: "8:05" },
      { label: "CTR", value: "9.2%" },
    ],
  },
  {
    id: "iron-hour",
    title: "Iron Hour",
    client: "Forge Gym",
    category: "Reels",
    thumbnail: work3,
    runtime: "0:19",
    videoUrl: "https://cdn.coverr.co/videos/coverr-working-out-in-the-gym-4574/1080p.mp4",
    summary: "Vertical reel series built on hard-light contrast, impact frames and breath-timed pacing.",
    techniques: ["Impact frames", "Contrast-led grade", "Foley layering", "9:16 reframe from 4K"],
    outcomes: [
      { label: "Reach", value: "860K" },
      { label: "Saves", value: "24K" },
      { label: "Sign-ups", value: "+180" },
    ],
  },
  {
    id: "slow-pour",
    title: "Slow Pour",
    client: "Meridian Coffee Co.",
    category: "Social Ads",
    thumbnail: work4,
    runtime: "0:30",
    videoUrl: "https://cdn.coverr.co/videos/coverr-pouring-coffee-8462/1080p.mp4",
    summary:
      "A premium 30-second spot cut in three aspect ratios, with steam and highlight roll-off shaped in the grade.",
    techniques: ["Macro rhythm cutting", "Highlight roll-off grade", "Texture sound design", "Multi-ratio delivery"],
    outcomes: [
      { label: "ROAS", value: "4.8x" },
      { label: "CPC", value: "-32%" },
      { label: "Ratios", value: "3 cuts" },
    ],
  },
  {
    id: "above-the-clouds",
    title: "Above The Clouds",
    client: "Northline Travel",
    category: "Cinematic Edits",
    thumbnail: work5,
    runtime: "3:12",
    videoUrl: "https://cdn.coverr.co/videos/coverr-mountain-sunrise-3106/1080p.mp4",
    summary:
      "A short travel film graded from Log footage, paced to score, with a full atmospheric sound design pass.",
    techniques: ["Log to film-look grade", "Power-window skies", "Score-led pacing", "Ambience + wind design"],
    outcomes: [
      { label: "Festival", value: "2 selections" },
      { label: "Bookings", value: "+27%" },
      { label: "Shares", value: "18K" },
    ],
  },
  {
    id: "signal-titles",
    title: "Signal Title Package",
    client: "Signal Podcast",
    category: "Motion Graphics",
    thumbnail: work6,
    runtime: "0:45",
    videoUrl: "https://cdn.coverr.co/videos/coverr-abstract-light-lines-2711/1080p.mp4",
    summary:
      "A reusable After Effects title and lower-third system, rigged with controls so the team can update it themselves.",
    techniques: ["Expression-rigged controls", "3D camera moves", "Shape-layer transitions", "Brand kit templates"],
    outcomes: [
      { label: "Templates", value: "14" },
      { label: "Edit time", value: "-6 hrs/ep" },
      { label: "Episodes", value: "60+" },
    ],
  },
];

export const SKILLS = [
  { name: "Color Grading", level: 95, note: "DaVinci node trees, film emulation, shot matching" },
  { name: "Sound Design", level: 90, note: "Foley, ambience beds, dialogue cleanup, mix to -14 LUFS" },
  { name: "Motion Graphics", level: 85, note: "Title systems, kinetic type, expression rigs" },
  { name: "Pacing & Story", level: 97, note: "Story spine, tension curves, retention-first structure" },
];

export const TOOLS = [
  { name: "Adobe Premiere Pro", role: "Primary edit bay" },
  { name: "After Effects", role: "Motion & compositing" },
  { name: "DaVinci Resolve", role: "Color & finishing" },
  { name: "CapCut", role: "Fast vertical turnarounds" },
  { name: "Photoshop", role: "Thumbnails & graphics" },
];

export const SERVICES = [
  {
    title: "YouTube Editing",
    description: "Long-form edits built around retention: story spine first, polish second.",
    deliverables: ["Full edit up to 20 min", "Chapters & titles", "Thumbnail concepts", "2 revision rounds"],
    from: "From $320 / video",
  },
  {
    title: "Short-Form & Reels",
    description: "Vertical packs cut for the scroll, with captions and punchy sound design.",
    deliverables: ["4–12 clips per pack", "Burned-in captions", "9:16 + 1:1 exports", "48-hour turnaround"],
    from: "From $65 / clip",
  },
  {
    title: "Commercials & Ads",
    description: "Performance-minded spots with hook variants ready for paid testing.",
    deliverables: ["30s hero cut", "3 hook variants", "Licensed music", "Multi-ratio delivery"],
    from: "From $850 / spot",
  },
  {
    title: "Cinematic Edits",
    description: "Story-led films with full color grade and layered atmospheric sound.",
    deliverables: ["Narrative assembly", "Full Resolve grade", "Sound design + mix", "Master + web exports"],
    from: "From $1,200 / film",
  },
];

export const TIMELINE = [
  { year: "2019", title: "First paid cut", copy: "Started editing wedding films and local event recaps on a borrowed laptop." },
  { year: "2021", title: "Went full-time freelance", copy: "Moved to retainer work with three creators and learned to edit on a deadline." },
  { year: "2023", title: "Brand campaigns", copy: "Delivered ad campaigns for DTC brands, adding grading and sound design in-house." },
  { year: "2025", title: "200+ projects shipped", copy: "Now cutting long-form, short-form and commercial work for clients in six countries." },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "Creator, Wiredframe",
    rating: 5,
    quote:
      "Sujal found the story in 40 hours of footage I'd given up on. Watch time went up the week the first edit went live.",
  },
  {
    name: "Lena Okafor",
    role: "Brand Lead, Meridian Coffee",
    rating: 5,
    quote: "Three ratios, three hook variants, delivered early. The grade made our product look twice its price.",
  },
  {
    name: "Marco Ruiz",
    role: "Founder, Forge Gym",
    rating: 5,
    quote: "Our reels finally feel like the gym does at 6am. Members quote the edits back to us.",
  },
  {
    name: "Priya Raman",
    role: "Producer, Northline Travel",
    rating: 5,
    quote: "Calm, fast and genuinely great with sound. The film carried our whole spring campaign.",
  },
];

export const PROJECT_TYPES = [
  "YouTube video",
  "Short-form / Reels pack",
  "Commercial or ad",
  "Cinematic / brand film",
  "Motion graphics",
  "Something else",
];

export const BUDGETS = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"];

export const SOCIALS = {
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
  email: "hello@sujalsarraf.com",
};
