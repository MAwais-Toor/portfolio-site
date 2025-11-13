import HeroAH from "@/components/sections/HeroAH";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Index() {
  return (
    <div className="relative isolate min-h-screen bg-neutral-950 text-white">
      {/* background radial glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(600px_300px_at_20%_0%,hsl(var(--brand-accent)/0.08),transparent),radial-gradient(600px_300px_at_80%_100%,hsl(var(--brand-accent)/0.06),transparent)]" />

      <HeroAH />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
