import pm1 from "@/assets/gomb/pm1.png";
import pm2 from "@/assets/gomb/pm2.png";
import pm3 from "@/assets/gomb/pm3.png";
import pm4 from "@/assets/gomb/pm4.png";
import pm5 from "@/assets/gomb/pm5.png";

const items = [pm1, pm2, pm3, pm4, pm5];

export function Paramaconico() {
  return (
    <section id="paramaconico" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-navy" />
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--gold) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Movimento Paramaçônico</div>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
            Construindo um <span className="text-gradient-gold italic">mundo melhor</span><br />
            através da Maçonaria.
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {items.map((src, i) => (
            <div
              key={i}
              className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/30 bg-background/30 p-4 backdrop-blur transition hover:scale-110 hover:border-gold sm:h-32 sm:w-32"
            >
              <img src={src} alt="Ordem paramaçônica" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
