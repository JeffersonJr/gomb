export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-10 text-center shadow-deep lg:p-16">
          <div className="absolute inset-0 -z-10 opacity-20" style={{
            background: "radial-gradient(circle at 50% 0%, var(--gold) 0%, transparent 60%)",
          }} />

          <div className="text-xs uppercase tracking-[0.25em] text-primary">Junte-se a nós</div>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            Junte-se ao <span className="text-gradient-gold italic">Grande Oriente</span><br />
            Maçônico do Brasil.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
            Entre em contato pelo WhatsApp <strong className="text-foreground">15 99832-0196</strong> com
            sua manifestação de interesse. Encaminharemos para uma loja próxima a você.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/5515998320196"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              Quero ser Maçom
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:faleconosco@gomb.org.br"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/10"
            >
              faleconosco@gomb.org.br
            </a>
          </div>

          <div className="gold-divider mx-auto mt-12 max-w-[120px]" />
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Responsabilidade Social · Utilidade Pública Municipal — Lei 3286/2014
          </p>
        </div>
      </div>
    </section>
  );
}
