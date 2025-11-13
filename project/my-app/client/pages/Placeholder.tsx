import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <section className="relative isolate min-h-[70vh] grid place-items-center">
      <div className="absolute inset-0 -z-10 bg-lockscreen opacity-60" />
      <div className="mx-auto w-full px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 text-white backdrop-blur-xl">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description ? (
            <p className="mt-3 text-white/90">{description}</p>
          ) : null}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 transition hover:scale-[1.02] hover:bg-white/15"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
