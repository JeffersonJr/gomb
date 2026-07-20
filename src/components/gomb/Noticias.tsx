import convencaoImg from "@/assets/gomb/convencao.jpg";
import tratadoImg from "@/assets/gomb/tratado-hd.jpg";
import soberanoImg from "@/assets/gomb/soberano-hd.jpg";

const items = [
  {
    img: convencaoImg,
    tag: "Evento",
    title: "Convenção da Família GOMB 26",
    text: "Venha participar da Convenção Nacional do GOMB no Oriente de Itapevi/SP, dia 19 de setembro de 2026 — uma celebração à maçonaria da vertente francesa no Brasil.",
  },
  {
    img: tratadoImg,
    tag: "Tratado",
    title: "Amizade com o Grande Oriente da França",
    text: "Tratado de mútuo reconhecimento, onde recebemos as Cartas Patentes para praticar os ritos com regularidade de origem — sem apropriações indevidas de rituais maçônicos.",
  },
  {
    img: soberanoImg,
    tag: "Reflexão",
    title: "Soberano Past Grão Mestre",
    text: "Uma bela explicação sobre a Família GOMB e a maçonaria como prática vivida em sua totalidade — não apenas explicada, mas experimentada.",
  },
];

export function Noticias() {
  return (
    <section id="noticias" className="relative bg-gradient-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Notícias GOMB</div>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Fique ligado em tudo que <span className="text-gradient-gold italic">acontece</span>.
            </h2>
          </div>
          <div className="gold-divider hidden flex-1 lg:block" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition hover:border-gold/60 hover:shadow-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                  {it.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
