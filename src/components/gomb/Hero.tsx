import heroImg from "@/assets/gomb/hero-hd.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Grão Mestres do Grande Oriente Maçônico do Brasil"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-20 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs uppercase tracking-[0.22em] text-primary">
              Fundado em 18 · 09 · 2009
            </span>
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.02] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Grande Oriente <br />
            <span className="text-gradient-gold italic">Maçônico do Brasil</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            Liberdade, Igualdade e Fraternidade — uma potência simbólica regular soberana,
            reconhecida pelo Grande Oriente da França. Em D'us, nós confiamos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5515998320196"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold transition hover:scale-[1.03]"
            >
              Quero ser Maçom
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/10"
            >
              Conheça o GOMB
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
          {[
            ["+1500", "Membros"],
            ["+148", "Lojas"],
            ["+100", "Tratados"],
            ["+75", "Países"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-semibold text-gradient-gold sm:text-4xl">
                {num}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
