export default function Testimonials() {
  const items = [
    {
      initials: "SK",
      name: "Sarah Khan",
      role: "Product Manager",
      quote:
        "Awais delivered a clean, fast site and handled feedback quickly. Great attention to detail and UX.",
    },
    {
      initials: "UF",
      name: "Usman Farooq",
      role: "Founder, Startup",
      quote:
        "Super smooth process from start to finish. The final result was beyond expectations.",
    },
    {
      initials: "AM",
      name: "Amina Malik",
      role: "Marketing Lead",
      quote:
        "Reliable, communicative, and pixel-perfect. Everything shipped on time and worked flawlessly.",
    },
    {
      initials: "JR",
      name: "John R.",
      role: "CTO",
      quote:
        "Modern stack, strong engineering judgment, and a great eye for design.",
    },
    {
      initials: "NZ",
      name: "N. Zafar",
      role: "Creative Director",
      quote:
        "He brought our vision to life with a thoughtful and elegant implementation.",
    },
  ];

  return (
    <section id="reviews" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">What Clients Say</h2>

        <div className="mt-8 overflow-hidden no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee will-change-transform">
            <ul className="flex gap-6">
              {items.map((t) => (
                <li
                  key={t.name}
                  className="w-80 shrink-0 rounded-[2rem] border border-white/10 bg-[#1E1E1F] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-white/60">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="mt-3 line-clamp-4 text-sm text-white/80">{t.quote}</p>
                </li>
              ))}
            </ul>
            <ul className="flex gap-6" aria-hidden="true">
              {items.map((t, i) => (
                <li
                  key={`${t.name}-${i}`}
                  className="w-80 shrink-0 rounded-[2rem] border border-white/10 bg-[#1E1E1F] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-white/60">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="mt-3 line-clamp-4 text-sm text-white/80">{t.quote}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second row moving opposite */}
        <div className="mt-6 overflow-hidden no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee-reverse will-change-transform">
            <ul className="flex gap-6">
              {items.map((t) => (
                <li
                  key={`rev-${t.name}`}
                  className="w-80 shrink-0 rounded-[2rem] border border-white/10 bg-[#1E1E1F] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-white/60">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="mt-3 line-clamp-4 text-sm text-white/80">{t.quote}</p>
                </li>
              ))}
            </ul>
            <ul className="flex gap-6" aria-hidden="true">
              {items.map((t, i) => (
                <li
                  key={`rev-${t.name}-${i}`}
                  className="w-80 shrink-0 rounded-[2rem] border border-white/10 bg-[#1E1E1F] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-white/60">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="mt-3 line-clamp-4 text-sm text-white/80">{t.quote}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
