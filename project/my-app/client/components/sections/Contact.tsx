import { Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1b1b1c] via-[#151515] to-[#0f0f0f] p-10 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
          <p className="mt-3 max-w-2xl text-white/80">Have a project in mind? Let’s collaborate and build something exceptional together.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="mailto:tebeva8849@fandoe.com" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brandAccent text-white shadow-[0_10px_40px_hsl(var(--brand-accent)/0.35)] transition hover:brightness-110" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/90 text-white transition hover:brightness-110" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/90 text-white transition hover:brightness-110" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
