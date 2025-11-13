import { Code2, PenTool, Cpu, Globe, Server, Workflow } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Responsive, accessible UI with modern stacks like React and TailwindCSS.",
  },
  {
    icon: PenTool,
    title: "UI/UX Integration",
    desc: "Turn clean designs into pixel-perfect frontends with great UX.",
  },
  {
    icon: Workflow,
    title: "API Integrations",
    desc: "Supabase, Firebase, and custom Express APIs for secure, realtime data.",
  },
  { icon: Cpu, title: "AI & Automation", desc: "Bring AI tools and automations to boost productivity and UX." },
  { icon: Globe, title: "React & Next.js", desc: "Production-ready apps with clean components and smooth routing." },
  { icon: Server, title: "Deployment & Cloud", desc: "Ship on Netlify/Vercel with fast pipelines and monitoring." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      {/* decorative background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)",
          backgroundSize: "40px 40px, 40px 40px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brand-to md:text-4xl">
            What I Build
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Clean, performant experiences with a focus on clarity, speed, and polish.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative rounded-[1.75rem] bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-[1px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="rounded-[1.7rem] h-full bg-[#121213]/90 p-6 ring-1 ring-inset ring-white/10">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-grid size-10 place-items-center rounded-xl bg-brandAccent/10 text-brandAccent ring-1 ring-brandAccent/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                  </div>
                  <span className="mt-1 inline-flex rounded-full bg-brandAccent/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brandAccent ring-1 ring-brandAccent/25">
                    Pro
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{desc}</p>

                {/* accent bottom bar */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-brandAccent/60 to-transparent opacity-60" />

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/70">
                  {[
                    "Performance",
                    "Accessibility",
                    "SEO",
                    "Responsive",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 group-hover:ring-brandAccent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
