import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function MainLayout() {
  const location = useLocation();

  const nav = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
        <div className="mx-auto flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-2xl shadow-lg pointer-events-auto">
          <Link to="/" className="select-none text-white/90 hover:text-white text-base font-semibold">
            Portfolio.
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className={cn("text-sm font-medium text-white/80 hover:text-white transition-colors")}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={(e) => onNavClick(e, "#contact")} className="hidden md:inline-flex items-center rounded-full bg-brandAccent px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_30px_hsl(var(--brand-accent)/0.35)] hover:brightness-110">Hire Me</a>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
