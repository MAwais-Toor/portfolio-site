import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function HeroAH() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-32">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-[hsl(var(--brand-accent)/0.20)] blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: intro */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brandAccent">Hi, I'm</p>
          <h1 className="mt-3 font-[Tangerine] text-[72px] leading-none text-white md:text-[120px] lg:text-[144px]">
            Muhammad Awais
          </h1>
          <p className="mt-6 max-w-2xl text-white/80">
            I build fast, great-looking websites that work perfectly on any phone or computer. I use the latest tools, including some AI magic, to build experiences that are clear, elegant, and super easy to use.
          </p>
          <div className="mt-8">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 rounded-[2.5rem] bg-brandAccent px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_hsl(var(--brand-accent)/0.35)] transition hover:brightness-110"
              aria-label="Resume"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: minimalism panel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#222] via-[#151515] to-[#0f0f0f] p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
            <h3 className="text-xl font-semibold">Minimalism with purpose.</h3>
            <p className="mt-2 text-sm text-white/70">Clean, focused design that highlights what matters.</p>

            {/* stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "7+", v: "Projects" },
                { k: "1 year", v: "Experience" },
                { k: "97%", v: "Excellence" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-[#1E1E1F] p-4 text-center">
                  <div className="text-lg font-bold">{s.k}</div>
                  <div className="text-xs text-white/70">{s.v}</div>
                </div>
              ))}
            </div>

            {/* CTA stripe */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#1E1E1F] p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">Currently booking collaborations</div>
                  <div className="text-xs text-white/70">Let's elevate your online presence together.</div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
