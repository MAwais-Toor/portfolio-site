import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  title: string;
  to: string;
  className?: string;
}

export function GlassCard({ title, to, className }: GlassCardProps) {
  return (
    <Link
      to={to}
      className={cn("group relative inline-block", className)}
    >
      {/* Soft outer glow on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />

      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-from))] to-[hsl(var(--brand-to))] p-[1px]">
        {/* Frosted surface */}
        <div className="rounded-[calc(1rem-1px)] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-[20px] transition-transform duration-300 will-change-transform group-hover:scale-[1.03] group-hover:shadow-[0_10px_30px_rgba(3,123,252,0.25)]">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-white/80 ring-2 ring-white/30" />
            <h3 className="text-base font-semibold tracking-wide">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
