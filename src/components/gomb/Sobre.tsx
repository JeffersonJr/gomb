import graoImg from "@/assets/gomb/graomestre-hd.jpg";
import rumoImg from "@/assets/gomb/rumo.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-deep">
              <img
                src={graoImg}
                alt="Grão Mestre Geral Reinaldo Alvares e Grão Mestre Adjunto Vladimir Halajko"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border border-gold/60 bg-card p-4 shadow-gold sm:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Desde</div>
              <div className="font-display text-4xl font-semibold text-gradient-gold">2009</div>
              <div className="mt-1 text-[10px] text-muted-foreground">Oriente de SP</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Grão Mestrado</div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Uma família maçônica <span className="text-gradient-gold italic">pura, justa e perfeita.</span>
            </h2>
            <div className="gold-divider my-8 max-w-[120px]" />
            <p className="text-base leading-relaxed text-foreground/80">
              <strong className="text-foreground">Reinaldo Alvares</strong> — Grão Mestre Geral.<br />
              <strong className="text-foreground">Vladimir Halajko</strong> — Sapientíssimo Grão Mestre Adjunto.
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/75">
              Agradecemos a todos os irmãos da Família GOMB por estarem juntos nessa caminhada.
              Se você deseja fazer parte da nossa família, junte-se a nós e construa conosco uma
              maçonaria alicerçada nos mais antigos e imutáveis rituais.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur">
                <div className="font-display text-2xl font-semibold text-gradient-gold">Rumo aos 20 anos</div>
                <p className="mt-2 text-sm text-foreground/70">
                  Em 2029 celebramos duas décadas de vida maçônica reunidos com nossos irmãos.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <img src={rumoImg} alt="Família GOMB" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
