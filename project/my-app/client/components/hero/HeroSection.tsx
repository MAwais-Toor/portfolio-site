import { GlassCard } from "@/components/hero/GlassCard";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-lockscreen" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_35%,rgba(255,255,255,0.15),transparent)]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-36 md:pt-44">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-sm">
            Hi, I'm Muhammad Awais —
            <br className="hidden md:block" />
            <span className="text-white"> Web Developer & Designer</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            I build modern, responsive, and creative digital experiences.
          </p>
        </div>

        {/* Frosted cards row */}
        <div className="mt-10 md:mt-16 w-full">
          <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 md:flex md:flex-row md:justify-center md:gap-6">
            <GlassCard title="About Me" to="/about" className="w-full max-w-[260px]" />
            <GlassCard title="Projects" to="/projects" className="w-full max-w-[260px]" />
            <GlassCard title="Contact" to="/contact" className="w-full max-w-[260px]" />
            <GlassCard title="Resume" to="/resume" className="w-full max-w-[260px] hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Bottom widget bar hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
