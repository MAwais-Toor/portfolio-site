import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Sr. QA Expert", tag: "Client", rating: 5 },
  { title: "PaperGen", tag: "Client", rating: 5 },
  { title: "Digital Marketing", tag: "Client", rating: 5 },
  { title: "QA Expert", tag: "Client", rating: 5 },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Recent Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#1E1E1F] p-6 transition hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-white/60">{p.tag}</p>
                </div>
                <button aria-label={`Open ${p.title}`} className="rounded-full border border-white/10 p-2 text-white/80 transition hover:bg-white/5">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
              {/* Preview placeholder */}
              <div className="mt-6 aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-[#222] to-[#111]" />
              <div className="mt-4 text-sm text-white/70">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
