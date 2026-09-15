import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { SkillsTools } from "@/components/site/SkillsTools";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Sujal Sarraf — Freelance Video Editor & Colorist";
const DESCRIPTION =
  "Cinematic video editing for YouTube, reels and ads. Story-led cuts, color grading and sound design by freelance editor Sujal Sarraf.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <BeforeAfter />
        <About />
        <SkillsTools />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
